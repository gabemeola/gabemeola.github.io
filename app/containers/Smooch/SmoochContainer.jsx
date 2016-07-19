import React from "react";
const socket = io(SERVER_ADDRESS);
import { initSmooch, postSmooch, getSmooch } from "../../utils/smoochUtils";
import SmoochChats from "../../components/Smooch/SmoochChats";
import SmoochInput from "../../components/Smooch/SmoochInput";


class SmoochContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			smoochConversation: []
		}
	}
	componentWillMount() {
		initSmooch("bob@example.com")
			.then(() => {
				getSmooch().then((res) => {
					this.setState({
						smoochConversation: res.conversation.messages
					})
				})
			});
	}
	handleTextSubmit(text) {
		console.warn("text Submit: ", text);
		postSmooch(text)
			.then(() => {
				getSmooch().then((res) => {
					this.setState({
						smoochConversation: res.conversation.messages
					})
				});
			});
	}
	render() {
		return (
			<div>
				<h2>Smooch Container</h2>
				<br/>
				<SmoochChats

				/>
				{/*{this.state.smoochConversation.forEach((item) => console.warn(item))}*/}
				<br/>
				<SmoochInput
					onTextSubmit={(text) => this.handleTextSubmit(text)}
				/>
			</div>
		)
	}
}

export default SmoochContainer;