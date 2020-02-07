import React, { Fragment } from 'react';
import WebcamImage from './../WebcamImage/WebcamImage.js';
import TicketPhotoPreview from './../TicketPhotoPreview/TicketPhotoPreview.js';
import IconButton from './../IconButton/IconButton.js';

import './TicketPhotoPicker.css';


export default class TicketPhotoPicker extends React.PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			isProcessing: false,
			image: null,
			isPaintModeEnabled: false,
			ticketAttachmentTypes: [],
			selectedTicketAttachmentType: null,
			info: ''
		}

		this.cancelButtonClickCallback = this.cancelButtonClickCallback.bind(this);
		this.captureButtonClickCallback = this.captureButtonClickCallback.bind(this);

		this.sendButtonClickCallback = this.sendButtonClickCallback.bind(this);
		this.togglePaintModeButtonClickCallback = this.togglePaintModeButtonClickCallback.bind(this);
		this.dismissButtonClickCallback = this.dismissButtonClickCallback.bind(this);

		this.ticketPhotoPreviewGetModifiedImageCallback = this.ticketPhotoPreviewGetModifiedImageCallback.bind(this);
		this.ticketPhotoTypeDialogTriggerSelectCallback = this.ticketPhotoTypeDialogTriggerSelectCallback.bind(this);
		this.infoCallback = this.infoCallback.bind(this);

		this.webcamImageReference = React.createRef();
	}

	componentDidMount() {
		this.loadTicketAttachmentTypes();
	}

	componentWillUnmount() {
		if(this.createTicketCarImageCancelable) {
			this.createTicketCarImageCancelable.cancel();
		}
		if(this.getImageTicketAttachmentTypesCancelable) {
			this.getImageTicketAttachmentTypesCancelable.cancel();
		}
	}

	infoCallback(info,x, y) {
		this.setState({
			info: info + ' ' + x + ' ' + y
		});
	}

	loadTicketAttachmentTypes() {
		// this.getImageTicketAttachmentTypesCancelable.promise.then(ticketAttachmentTypes => {

		// 	const savedTicketAttachmentTypeId = localStorage.getItem('ticketPhotoPickerTicketAttachmentTypeId');

		// 	let selectedTicketAttachmentType = null;
		// 	if(savedTicketAttachmentTypeId) {
		// 		selectedTicketAttachmentType = ticketAttachmentTypes.find(ticketAttachmentType => ticketAttachmentType.id === parseInt(savedTicketAttachmentTypeId));
		// 	}
		// 	if(!selectedTicketAttachmentType) {
		// 		selectedTicketAttachmentType = ticketAttachmentTypes[0];
		// 	}

		// 	this.setState({
		// 		isLoading: false,
		// 		ticketAttachmentTypes: ticketAttachmentTypes,
		// 		selectedTicketAttachmentType: selectedTicketAttachmentType
		// 	});
		// }).catch(error => {
		// 	if(error.isCanceled) {
		// 		return false;
		// 	}
		// });
	}

	ticketPhotoTypeDialogTriggerSelectCallback(ticketAttachmentType) {
		this.setState({
			selectedTicketAttachmentType: ticketAttachmentType
		});
		localStorage.setItem('ticketPhotoPickerTicketAttachmentTypeId', ticketAttachmentType.id);
	}

	ticketPhotoPreviewGetModifiedImageCallback(modifiedImage) {
		this.setState({
			image: modifiedImage
		});
	}

	cancelButtonClickCallback(valueKey) {
		this.props.onCancel();
	}

	captureButtonClickCallback() {
		this.setState({
			image: this.webcamImageReference.current.getScreenshot()
		});
	}

	dismissButtonClickCallback() {
		this.setState({
			image: null
		});
	}

	togglePaintModeButtonClickCallback() {
		this.setState({
			isPaintModeEnabled: !this.state.isPaintModeEnabled
		});
	}

	sendButtonClickCallback() {
		this.setState({
			isProcessing: true,
			isPaintModeEnabled: false
		})

		// const ticketAttachmentTypeId = this.state.selectedTicketAttachmentType.id;
		// this.createTicketCarImageCancelable = TicketService.createTicketCarImage(parseInt(this.props.ticketId), ticketAttachmentTypeId, this.state.image);
		// this.createTicketCarImageCancelable.promise.then(ticket => {
		// 	NotificationService.setSuccessNotification(t.createTicketCarImageSuccessNotification);
		// 	this.setState({
		// 		isProcessing: false,
		// 		image: null
		// 	});
		// 	return false;
		// }).catch(error => {
		// 	if(error.isCanceled) {
		// 		return false;
		// 	}
		// 	NotificationService.setErrorNotification(t.internalErrorNotification, error);
		// 	this.setState({
		// 		isProcessing: false
		// 	});
		// });
	}

	render() {

		return (

			<Fragment>

				{(this.state.isLoading === false && this.state.isProcessing === false) &&
					<Fragment>

						<div className='ticket-photo-picker-header-container'>
							<div className='ticket-photo-picker-header'>
								VER 24 DPI: {window.devicePixelRatio} {this.state.info}
							</div>							
						</div>



						{/* {this.state.image !== null && */}
							<Fragment>
								<TicketPhotoPreview
									image={this.state.image}
									paintMode={this.state.isPaintModeEnabled}
									modifiedImage={this.ticketPhotoPreviewGetModifiedImageCallback}
									setInfo={this.infoCallback}>
								</TicketPhotoPreview>
								
								{/* <IconButton
									iconKey={'arrow-left'}
									additionalClass='fixed-button left-bottom-element'
									onClick={this.dismissButtonClickCallback}>
								</IconButton> */}
							</Fragment>

						{/* <div className={this.state.image !== null ? 'hidden' : ''}>
							<WebcamImage
								ref={this.webcamImageReference}>
							</WebcamImage>

							<IconButton
								iconKey={'times'}
								additionalClass='fixed-button left-bottom-element'
								onClick={this.cancelButtonClickCallback}>
							</IconButton>

							<IconButton
								iconKey={'camera'}
								additionalClass='fixed-button center-bottom-element'
								onClick={this.captureButtonClickCallback}>
							</IconButton>
						</div> */}
					</Fragment>
				}

			</Fragment>
		)
	}
}
