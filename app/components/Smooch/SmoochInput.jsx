import React, { PropTypes } from "react";

class SmoochInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: ""
		}
	}
	forTextSubmit(e) {
		e.preventDefault();
		this.props.onTextSubmit(this.state.inputText);
		this.setState({
			inputText: ""
		})
	}
	render() {
		return (
			<div className="smooch-form">
				<form
					onSubmit={(event) => this.forTextSubmit(event)}
				>
					<input
						value={this.state.inputText}
						onChange={(event) => this.setState({inputText: event.target.value})}
						type="text"
					  className="smooch-input"
					/>
				</form>
			</div>
		)
	}
};

SmoochInput.propTypes = {
	onTextSubmit: PropTypes.func
};

export default SmoochInput;