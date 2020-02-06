import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./IconButton.css";

export default class IconButton extends React.PureComponent {

	constructor(props) {
		super(props);

		this.buttonClickCallbackHandler = (event) => this.buttonClickCallback(event);
	}

	buttonClickCallback(event) {
		if(this.props.onClick) {
			this.props.onClick(event, this.props.index)
		}
	}

	render() {

	    return (
			<button
				className={"icon-button " + (this.props.additionalClass ? this.props.additionalClass : '')}
				onClick={this.buttonClickCallbackHandler}>
				<FontAwesomeIcon icon={this.props.iconKey} size={this.props.size ? this.props.size : "1x"}/>
			</button>
		)
	}
}
