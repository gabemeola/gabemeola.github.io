import React from "react";
import { initSmooch, postSmooch, getSmooch } from "../../utils/smoochUtils";

function Conversation({data}) {
	return (
		<div>
			{/*{data[0].text}*/}
		</div>
	)
}

class SmoochContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			inputText: "",
			smoochConversation: []
		}
	}
	componentWillMount() {
		initSmooch("bob@example.com")
			.then((res) => {
				getSmooch().then((res) => {
					this.setState({
						smoochConversation: res.conversation.messages
					})
				})
			});
	}
	handleTextSubmit(e) {
		e.preventDefault();
		postSmooch(this.state.inputText)
			.then(() => {
				getSmooch().then((res) => {
					this.setState({
						smoochConversation: res.conversation.messages
					})
				});
			});
		this.setState({
			inputText: ""
		})
	}
	render() {
		return (
			<div>
				<h2>Smooch Container</h2>
				<br/>
				<Conversation
					data={this.state.smoochConversation}
				/>
				{this.state.smoochConversation.forEach((item) => console.warn(item))}
				<br/>
				<form onSubmit={(event) => this.handleTextSubmit(event)}>
					<input
						value={this.state.inputText}
						onChange={(event) => this.setState({inputText: event.target.value})}
					  type="text"
					/>
				</form>
			</div>
		)
	}
}

export default SmoochContainer;