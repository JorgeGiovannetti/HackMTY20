import React, { Component } from "react";
import Typography from "../common/typography";
import Box from "../common//box";
import { MdClear } from "react-icons/md";
import Avatar from "../common/avatar";
import Tooltip from "../common/tooltip";
import Message from "./components/message";
import {
	Container,
	WhiteBox,
	MessagesContainer,
	Scroll,
	CloseButton,
	// ActionButton,
} from "./elements";

class ChatContent extends Component {
	state = {
		message: "",
	};

	setRef = (ref) => {
		if (ref) {
			// eslint-disable-next-line no-param-reassign
			ref.scrollTop = ref.scrollHeight;
		}
	};

	handleMessageChange = ({ target: { value } }) =>
		this.setState({ message: value });

	render() {
		const { user, closeChat, profile, messages } = this.props;
		if (user !== null) {
			return (
				<Container>
					<WhiteBox height={70} top="0">
						<Box p={10} display="flex" alignItems="center">
							<Avatar
								mr={10}
								size={50}
								src={"/static/img/general/avatar.png"}
							/>
							<Typography mr="auto" variant="leadText">
								Feed
							</Typography>
							<Tooltip tag="Close chat">
								<CloseButton onClick={closeChat} variant="link" color="danger">
									<MdClear />
								</CloseButton>
							</Tooltip>
						</Box>
					</WhiteBox>
					<Scroll ref={this.setRef}>
						<MessagesContainer>
							{messages &&
								// eslint-disable-next-line no-shadow
								messages.map(({ id, message, timestamp, sender }) => (
									<Message
										otherProfileImg={user.profileImg}
										yourImage={profile.profileImg}
										key={id}
										message={message}
										sentAt={timestamp}
										seenAt={message}
										isYours={profile.userID === sender}
									/>
								))}
						</MessagesContainer>
					</Scroll>
					<WhiteBox height={60} bottom="0"></WhiteBox>
				</Container>
			);
		}
		return null;
	}
}

export default ChatContent;
