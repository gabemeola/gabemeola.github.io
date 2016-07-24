import React, { PropTypes } from "react";

class SmoochInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: "",
			isSubmitted: false
		}
	}
	handleIsSubmitted() {
		this.setState({
			isSubmitted: true
		});
		setTimeout(() => this.setState({inputText: ""}), 200);
		setTimeout(() => this.setState({isSubmitted: false}), 400);
	}
	forTextSubmit(e) {
		e.preventDefault();
		this.handleIsSubmitted();
		this.props.onTextSubmit(this.state.inputText);
	}
	render() {
		const { isSubmitted, inputText } = this.state;
		return (
			<div className={"smooch-form " + (isSubmitted ? "smooch-form--submitted" : "" )}>
				<form
					onSubmit={(event) => this.forTextSubmit(event)}
				>
					<input
						value={inputText}
						onChange={(event) => this.setState({inputText: event.target.value})}
						type="text"
					  className="smooch-input"
					  disabled={this.props.isDisabled}
					/>
				</form>
			</div>
		)
	}
}

SmoochInput.propTypes = {
	onTextSubmit: PropTypes.func,
	isDisabled: PropTypes.bool
};

SmoochInput.defaultProps = {
	isDisabled: false
};

export default SmoochInput;