import React, { Component } from "react";
import firebase from "firebase";
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
    messages: [],
  };

  componentDidMount() {
    this.getMessages();
  }

  setRef = (ref) => {
    if (ref) {
      // eslint-disable-next-line no-param-reassign
      ref.scrollTop = ref.scrollHeight;
    }
  };

  getMessages = (chat) => {
    this.setState((prevState) => ({
      messages: null,
    }));
    const messagesRef = firebase.database().ref(`/reports`).limitToLast(100);

    messagesRef.on("value", (snapshot) => {
      if (snapshot.empty) {
        this.setState((prevState) => ({
          messages: null,
        }));
      }
      let messagesObj = snapshot.val();
      let messages = [];
      if (messagesObj !== null) {
        Object.keys(messagesObj).forEach((key) =>
          messages.push(messagesObj[key])
        );
        messages = messages.map((message) => {
          return {
            error: message.error,
            horas: message.horas,
            timestamp: message.timestamp,
          };
        });
        this.setState((prevState) => ({
          messages: messages,
        }));
      }
    });
  };

  handleMessageChange = ({ target: { value } }) =>
    this.setState({ message: value });

  render() {
    const { closeChat } = this.props;
    const { messages } = this.state;

    return (
      <Container>
        <WhiteBox height={70} top="0">
          <Box p={10} display="flex" alignItems="center">
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
              messages.map(({ id, error, timestamp }) => (
                <Message
                  key={id}
                  message={error}
                  sentAt={timestamp}
                  isYours={true}
                />
              ))}
          </MessagesContainer>
        </Scroll>
        <WhiteBox height={60} bottom="0"></WhiteBox>
      </Container>
    );
  }
}

export default ChatContent;
