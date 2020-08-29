import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  sendMessage,
  getMessages,
  watchTaskRemovedEvent,
  watchTaskAddedEvent
} from '@actions/jobOfferActions';
import Typography from '@common/typography';
import Box from '@common/box';
import { MdSend, MdClear } from 'react-icons/md';
// , MdCancel
import Avatar from '@common/avatar';
import Input from '@common/input';
import Tooltip from '@common/tooltip';
import Message from './components/message';
import {
  Container,
  WhiteBox,
  SendButton,
  MessagesContainer,
  Scroll,
  CloseButton,
  // ActionButton,
  Form
} from './elements';

class ChatContent extends Component {
  state = {
    message: ''
  };

  setRef = ref => {
    if (ref) {
      // eslint-disable-next-line no-param-reassign
      ref.scrollTop = ref.scrollHeight;
    }
  };

  handleMessageChange = ({ target: { value } }) => this.setState({ message: value });

  submitMessage = event => {
    event.preventDefault();
    const { chat } = this.props;
    this.props.sendMessage(this.state, chat.id);
    this.setState({ message: '' });
  };

  render() {
    const { user, closeChat, profile, messages } = this.props;
    const { message } = this.state;
    if (user !== null) {
      return (
        <Container>
          <WhiteBox height={70} top="0">
            <Box p={10} display="flex" alignItems="center">
              <Avatar mr={10} size={50} src={user.profileImg || '/static/img/general/avatar.png'} />
              <Typography mr="auto" variant="leadText">
                {user.companyName}
              </Typography>
              {/* <Box display="flex" alignItems="center">
                <ActionButton size="small" color="danger" variant="soft" mr={5}>
                  Reject <MdCancel />
                </ActionButton>
              </Box> */}
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
          <WhiteBox height={60} bottom="0">
            <Form onSubmit={this.submitMessage}>
              <Input value={message} onChange={this.handleMessageChange} mt={0} />
              <SendButton ml={5} variant="soft" color="primary">
                Send
                <MdSend />
              </SendButton>
            </Form>
          </WhiteBox>
        </Container>
      );
    }
    return null;
  }
}

ChatContent.defaultProps = {
  messages: undefined,
  user: undefined,
  profile: undefined
};

ChatContent.propTypes = {
  chat: PropTypes.shape({
    id: PropTypes.string
  }).isRequired,
  user: PropTypes.object,
  profile: PropTypes.object,
  messages: PropTypes.arrayOf(PropTypes.object),
  closeChat: PropTypes.func.isRequired,
  getMessages: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getMessages: convID => dispatch(getMessages(convID)),
    sendMessage: (activity, convID) => dispatch(sendMessage(activity, convID)),
    watchTaskAddedEvent: convID => dispatch(watchTaskAddedEvent(convID)),
    watchTaskRemovedEvent: convID => dispatch(watchTaskRemovedEvent(convID))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatContent);
