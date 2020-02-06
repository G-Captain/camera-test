import React from 'react';
import WindowService from './WindowService.js';

import './ImageCanvas.css';

export default class ImageCanvas extends React.PureComponent {

	constructor(props) {
		super(props);

		this.x = 0;
		this.y = 0;

		this.width = 0;
		this.height = 0;

		this.angle = 0;

		this.invertMode = false;

		this.imageElement = null;

		this.lineWidth = 5;
		this.strokeStyle = '#ff0000';
		this.shadowColor =  '#ff0000';
		this.mousedown = false;

		this.modifiedImage = false;

		this.canvasElementReference = React.createRef();
	}

	componentDidMount() {
		this.reloadImage();
	}

	componentDidUpdate(prevProps) {
		if(prevProps.src !== this.props) {
			this.reloadImage();
		}
	}

	reloadImage() {
		const image = new Image();
		image.src = this.props.src;
		this.imageElement = image;

		image.onload = () => {
			
			this.canvasElementReference.current.width = this.props.boundWidth;
            console.log("TCL: ImageCanvas -> image.onload -> this.props.boundWidth", this.props.boundWidth);
			this.canvasElementReference.current.height = this.props.boundHeight;
            console.log("TCL: ImageCanvas -> image.onload -> this.props.boundHeight", this.props.boundHeight);

			this.width = image.width;
			this.height = image.height;

			console.log(image.width, image.height);

			this.modifiedImage = false;

			this.canvasContext = this.canvasElementReference.current.getContext("2d");
			this.canvasContext.imageSmoothingEnabled = false;
			if(this.props.onRender) {
				this.props.onRender();
			}
		};
	}

	setX(x) {
		this.x = x;
	}

	setY(y) {
		this.y = y;
	}

	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}

	setWidth(width) {
		this.width = width;
	}

	setHeight(height) {
		this.height = height;
	}

	getWidth() {
		return this.width;
	}

	getHeight() {
		return this.height;
	}

	center() {
		this.centerX();
		this.centerY();
	}

	centerX() {
		const newX = (this.props.boundWidth - this.getWidth()) / 2;
		this.setX(newX);
	}

	centerY() {
		const newY = (this.props.boundHeight - this.getHeight()) / 2;
		this.setY(newY);
	}

	scale(ratio) {
		const currentWidth = this.getWidth();
		const currentHeight = this.getHeight();
		this.setWidth(currentWidth * ratio);
		this.setHeight(currentHeight * ratio);
	}

	setXWithBounds(x) {
		x = Math.min(x, 0);
		x = Math.max(x, this.props.boundWidth - this.getWidth());
		this.setX(x);
	}

	setYWithBounds(y) {
		y = Math.min(y, 0);
		y = Math.max(y, this.props.boundHeight - this.getHeight());
		this.setY(y);
	}

	redraw() {
		this.canvasContext.clearRect(0, 0, this.canvasContext.canvas.width, this.canvasContext.canvas.height);
		this.canvasContext.save();

		const radianAngle = this.angle * Math.PI / 180;
		const nextRadianAngle = (this.angle + 90) * Math.PI / 180;

		var relativeWidth = Math.abs((Math.cos(radianAngle) * this.width)) + Math.abs((Math.sin(radianAngle) * this.height));
		var relativeHeight = Math.abs((Math.cos(radianAngle) * this.height)) + Math.abs((Math.sin(radianAngle) * this.width));

		var relativeX = Math.cos(radianAngle) * this.x + Math.sin(radianAngle) * this.y;
		var relativeY = Math.cos(nextRadianAngle) * this.x + Math.sin(nextRadianAngle) * this.y;

		let translateX = 0;
		let translateY = 0;

		if(this.angle === 0) {
			translateX = relativeX;
			translateY = relativeY;
		}
		if(this.angle === 90) {
			translateX = relativeX;
			translateY = relativeY - relativeHeight;
		}
		if(this.angle === 180) {
			translateX = relativeX - relativeWidth;
			translateY = relativeY - relativeHeight;
		}
		if(this.angle === 270) {
			translateX = relativeX - relativeWidth;
			translateY = relativeY;
		}

		this.canvasContext.rotate(this.angle * Math.PI / 180);
		this.canvasContext.translate(translateX, translateY);
		const dpi = window.devicePixelRatio;
        console.log("TCL: ImageCanvas -> redraw -> dpi", dpi);
		const style_width = +getComputedStyle(this.canvasContext.canvas).getPropertyValue("width").slice(0, -2);
        console.log("TCL: ImageCanvas -> redraw -> this.canvasContext", this.canvasContext);
		const style_height = +getComputedStyle(this.canvasContext.canvas).getPropertyValue("height").slice(0, -2);
        console.log("TCL: ImageCanvas -> redraw -> style_height style_width", style_height, style_width);
		this.canvasContext.drawImage(this.imageElement, 0, 0, this.imageElement.width, this.imageElement.height, 0, 0, relativeWidth, relativeHeight);
		// this.ctx.imageSmoothingEnabled
        // console.log("TCL: ImageCanvas -> redraw -> this.ctx.imageSmoothingEnabled", this.ctx.imageSmoothingEnabled);
		if(this.invertMode === true) {
			this.canvasContext.globalCompositeOperation = 'difference';
			this.canvasContext.fillStyle = 'white';
			this.canvasContext.fillRect(0, 0, relativeWidth, relativeHeight);
        }

		this.canvasContext.restore();
	}

	fitToBounds() {
		const padding = this.props.padding || 0;
		const widthRatio = (this.props.boundWidth - padding) / this.imageElement.width;
		const heightRatio = (this.props.boundHeight - padding) / this.imageElement.height;
		const scaleRatio = Math.min(1, widthRatio, heightRatio);
		this.scale(scaleRatio);
	}

	isZoomOutAvailable() {
		return this.getWidth() > this.props.boundWidth || this.getHeight() > this.props.boundHeight;
	}

	rotate(rotateStep) {
		this.angle += rotateStep;

		if(this.angle > 270) {
			this.angle = 0;
		}
		if(this.angle < 0) {
			this.angle = 270;
		}

		const currentWidth = this.width;
		const currentHeight = this.height;

		this.width = currentHeight;
		this.height = currentWidth;

		this.center();
	}

	rotateRight() {
		this.rotate(90);
	}

	rotateLeft() {
		this.rotate(-90);
	}

	zoom(factor, mouseFocus) {
		if(factor < 1 && this.isZoomOutAvailable() === false) {
			return false;
		}

		this.scale(factor);

		const relativeFactor = factor - 1;
		if(this.getWidth() > this.props.boundWidth && mouseFocus === true) {
			const currentX = this.getX();
			const offsetX = (WindowService.getMouseX() - currentX) * relativeFactor;
			let newX = currentX - offsetX;
			this.setXWithBounds(newX);
		} else {
			this.centerX();
		}
		if(this.getHeight() > this.props.boundHeight && mouseFocus === true) {
			const currentY = this.getY();
			const offsetY = (WindowService.getMouseY() - currentY) * relativeFactor;
			let newY = currentY - offsetY;
			this.setYWithBounds(newY);
		} else {
			this.centerY();
		}
	}

	toggleInvertMode() {
		this.invertMode = !this.invertMode;
	}


	handleDrawingStart(event) {
		const mousePos = this.getMosuePositionOnCanvas(event);
		this.canvasContext.beginPath();
		this.canvasContext.moveTo(mousePos.x, mousePos.y);
		this.canvasContext.save();
		this.canvasContext.lineWidth = this.lineWidth;
		this.canvasContext.strokeStyle = this.strokeStyle;
		this.canvasContext.shadowColor = null;
		this.canvasContext.shadowBlur = null;
		this.canvasContext.fill();
		this.mousedown = true;
	}

	handleDrawingInProgress(event) {
		if (this.mousedown) {
			const mousePos = this.getMosuePositionOnCanvas(event);
			this.canvasContext.lineTo(mousePos.x, mousePos.y);
			this.canvasContext.stroke();
		}
	}

	handleDrawingEnd() {
		if (this.mousedown) {
			this.canvasContext.shadowColor = this.shadowColor;
			this.canvasContext.shadowBlur = this.lineWidth/4;
			this.canvasContext.stroke();
		}

		this.modifiedImage = true;
		this.mousedown = false;
	}

	getMosuePositionOnCanvas(event) {
		const clientX = event.clientX || event.touches[0].clientX;
		const clientY = event.clientY || event.touches[0].clientY;
		const { offsetLeft, offsetTop } = event.target;
		const canvasX = clientX - offsetLeft;
		const canvasY = clientY - offsetTop;
		return { x: canvasX, y: canvasY };
	}

	getModifiedImage() {
		if(this.modifiedImage === true) {
			return this.canvasElementReference.current.toDataURL('image/jpeg', 0.10);
		}
	}

	render() {
		return (
			<canvas
				draggable="false"
				className='image-canvas'
				ref={this.canvasElementReference}>
			</canvas>
		)
	}
}
