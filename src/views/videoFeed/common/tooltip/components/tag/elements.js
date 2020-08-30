import styled, { keyframes, css } from "styled-components";

const show = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const animationShow = css`
  animation: ${show} 0.2s linear;
`;

const Text = styled.pre`
  position: absolute;
  background: rgba(0, 0, 0, 0.85);
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.colors.lighter};
  font-size: 0.8rem;
  z-index: 4000;
  padding: 10px;
  transform: translate3d(${({ x }) => x}px, ${({ y }) => y}px, 0px);
  margin: 0;
  white-space: normal;
  width: max-content;
  max-width: 200px;
  text-align: ${({ align }) => align};

  ${({ showTag }) => showTag && animationShow};

  &:after {
    content: "";
    position: absolute;
    left: calc(50% - 5px);
    width: 0;
    height: 0;
    border-top: solid 5px rgba(0, 0, 0, 0.85);
    border-left: solid 5px transparent;
    border-right: solid 5px transparent;

    ${({ position }) => {
      switch (position) {
        case "top":
          return "top: 100%;";
        case "bottom":
          return `bottom: 100%;
            transform: rotate(180deg);`;
        default:
          return "top: 100%;";
      }
    }}
  }
`;

export default Text;
