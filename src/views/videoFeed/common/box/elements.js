import styled from 'styled-components';
import { space, layout, color, typography, flexbox, grid } from 'styled-system';

const Box = styled.div`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
  ${grid}

  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'initial')}
`;

export default Box;
