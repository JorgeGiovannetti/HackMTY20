import styled from 'styled-components';
import { space } from 'styled-system';

const ProfilePictureContainer = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.light};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ borderWidth, borderColor, theme }) =>
    `border: ${borderWidth}px solid ${theme.colors[borderColor]}`}

  ${space};
`;

const ProfilePictureImage = styled.img`
  height: 100%;
  min-width: 100%;
`;

export { ProfilePictureContainer, ProfilePictureImage };
