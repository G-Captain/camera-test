import React from 'react';
import ImageCanvas from './../ImageCanvas/ImageCanvas';

import './TicketPhotoPreview.css';

export default class TicketPhotoPreview extends React.PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			windowHeight : window.innerHeight,
			windowWidth: window.innerWidth,
			image: require('./nikaragua2.jpg')
		}
		console.log("TCL: TicketPhotoPreview -> constructor -> this.props.image", this.props.image);



		this.imageCanvasRenderCallback = this.imageCanvasRenderCallback.bind(this);

		this.imageCanvasReference = React.createRef();
	}

	componentDidMount() {
		this.windowTouchStartCallback = this.windowTouchStartCallback.bind(this)
		window.addEventListener('touchstart', this.windowTouchStartCallback);
		this.windowTouchMoveCallback = this.windowTouchMoveCallback.bind(this)
		window.addEventListener('touchmove', this.windowTouchMoveCallback);
		this.windowTouchEndCallback = this.windowTouchEndCallback.bind(this)
		window.addEventListener('touchend', this.windowTouchEndCallback);
		this.orientationChangedCallback = this.orientationChangedCallback.bind(this);
		window.addEventListener("resize", this.orientationChangedCallback);
	}

	componentWillUnmount() {
		window.removeEventListener('touchstart', this.windowTouchStartCallback);
		window.removeEventListener('touchmove', this.windowTouchMoveCallback);
		window.removeEventListener('touchend', this.windowTouchEndCallback);
		window.removeEventListener("resize", this.orientationChangedCallback);
	}

	orientationChangedCallback() {
		this.setState({
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth
		})
	}

	imageCanvasRenderCallback() {
		this.imageCanvasReference.current.fitToBounds();
		this.imageCanvasReference.current.center();
		this.imageCanvasReference.current.redraw();
	}

	windowTouchStartCallback(event) {
		if(this.props.paintMode !== true) {
			return false;
		}
		this.imageCanvasReference.current.handleDrawingStart(event);
	}

	windowTouchMoveCallback(event) {
		if(this.props.paintMode !== true) {
			return false;
		}
		this.imageCanvasReference.current.handleDrawingInProgress(event);
	}

	windowTouchEndCallback(event) {
		if(this.props.paintMode !== true) {
			return false;
		}
		this.imageCanvasReference.current.handleDrawingEnd();
		this.props.modifiedImage(this.imageCanvasReference.current.getModifiedImage())
	}

	render() {
		return(
			<div className='ticket-photo-preview-image-canvas-container'>
				<ImageCanvas
					ref={this.imageCanvasReference}
					src={this.props.image}
					boundWidth={this.state.windowWidth}
					boundHeight={this.state.windowHeight}
					onRender={this.imageCanvasRenderCallback}>
				</ImageCanvas>
			</div>
		);
	}
}

