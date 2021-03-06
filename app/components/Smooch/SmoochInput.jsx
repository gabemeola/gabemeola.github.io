import React, { Component, PropTypes } from "react";

class SmoochInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: "",
			isSubmitted: false
		}
	}
	animateSubmit() {
		this.setState({
			isSubmitted: true
		});
		setTimeout(() => this.setState({inputText: ""}), 200);
		setTimeout(() => this.setState({isSubmitted: false}), 400);
	}
	handleTextSubmit(e) {
		e.preventDefault();
		this.animateSubmit();
		this.props.onTextSubmit(this.state.inputText);
	}
	render() {
		const { isSubmitted, inputText } = this.state;
		return (
			<div className={"smooch-form " + (isSubmitted ? "smooch-form--submitted" : "" )}>
				<form
					onSubmit={(event) => this.handleTextSubmit(event)}
				>
					<input
						value={inputText}
						onChange={(event) => this.setState({inputText: event.target.value})}
						type="text"
					  className="smooch-input"
					  autoFocus="autoFocus"
					  disabled={this.props.isDisabled}
					/>
				</form>
			</div>
		)
	}
}

SmoochInput.propTypes = {
	onTextSubmit: PropTypes.func.isRequired,
	isDisabled: PropTypes.bool
};

SmoochInput.defaultProps = {
	isDisabled: false
};

export default SmoochInput;