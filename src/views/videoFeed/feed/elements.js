import styled from "styled-components";
import { Card } from "../common/card";
import Button from "../common/button";

const WhiteBox = styled(Card)`
  border-radius: 0;
  position: absolute;

  ${(props) =>
    props.top &&
    `
    top: ${props.top};
  `}

  ${(props) =>
    props.bottom &&
    `
    bottom: ${props.bottom};
  `}
  
  ${(props) =>
    props.height &&
    `
    height: ${props.height};
    max-height: ${props.height};
  `}
`;

const Container = styled.div`
  height: calc(100vh - 66px);
  position: relative;
`;

const SendButton = styled(Button)`
  svg {
    margin-left: 5px;
  }
`;

const Scroll = styled.div`
  overflow-y: scroll;
  height: 90%;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-right: 10px;
  padding-left: 40px;
  padding-top: 70px;
  padding-bottom: 20px;
`;

const CloseButton = styled(Button)`
  svg {
    font-size: 22px;
  }
`;

const ActionButton = styled(Button)`
  svg {
    margin-left: 5px;
  }
`;

const Form = styled.form`
  display: flex;
  padding: 10px;
`;

export {
  Container,
  WhiteBox,
  SendButton,
  MessagesContainer,
  Scroll,
  CloseButton,
  ActionButton,
  Form,
};
