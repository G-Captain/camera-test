import React from 'react';
import Webcam from 'react-webcam';

import './WebcamImage.css';

export default class WebcamImage extends React.PureComponent {

	constructor(props) {
		super(props);

		this.videoConstraints = {
			facingMode: 'environment',
        	width: {
        		ideal: 1280
        	}
		};
		this.webcamReference = React.createRef();
	}

	getScreenshot() {
		return this.webcamReference.current.getScreenshot();
	}

	render() {

		return (
			<Webcam
				ref={this.webcamReference}
				className='webcam-image-camera'
				screenshotFormat='image/jpeg'
				minScreenshotWidth={1280}
				audio={false}
				videoConstraints={this.videoConstraints}>
			</Webcam>
		)
	}
}
