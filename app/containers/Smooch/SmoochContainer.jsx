import React from "react";
import { initSmooch, postSmooch, getSmooch } from "../../utils/smoochUtils";


class SmoochContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			inputText: "",
			smoochConversation: [],
			conversationText: []
		}
	}
	componentWillMount() {
		initSmooch("bob@example.com")
			.then(() => {
				getSmooch().then((res) => {
					let newConversationText = [];
					res.conversation.messages.forEach((item) => {
						newConversationText.push(item.text);
					});
					this.setState({
						smoochConversation: res.conversation.messages,
						conversationText: newConversationText
					})
				})
			});
	}
	handleTextSubmit(e) {
		e.preventDefault();
		postSmooch(this.state.inputText)
			.then(() => {
				getSmooch().then((res) => {
					let newConversationText = [];
					res.conversation.messages.forEach((item) => {
						newConversationText.push(item.text);
					});
					this.setState({
						smoochConversation: res.conversation.messages,
						conversationText: newConversationText
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
				{this.state.conversationText.map((text, key) => <p key={key}>{text}</p>)}
				{/*{this.state.smoochConversation.forEach((item) => console.warn(item))}*/}
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