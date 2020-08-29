import styled from 'styled-components';

const Bubble = styled.div`
  color: ${props => props.theme.colors.lighter};
  background-color: ${props => props.theme.colors[props.color]};
  border-radius: ${props => props.theme.radius};
  padding: 15px;
  font-size: 0.8rem;
  margin-top: 5px;
  margin-bottom: 5px;
  max-width: 300px;
`;

export default Bubble;
