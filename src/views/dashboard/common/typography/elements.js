import styled from 'styled-components';
import { space, color, typography } from 'styled-system';
import { addSpacing, underline, uppercase, capitalize, fontSize } from './utils';

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  margin: 0;

  ${addSpacing};
  ${fontSize};
  ${space};
  ${color};
  ${typography};
  ${underline};
  ${uppercase};
  ${capitalize};
`;

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h2};
  margin: 0;

  ${addSpacing};
  ${fontSize};
  ${space};
  ${color};
  ${typography};
  ${underline};
  ${uppercase};
  ${capitalize};
`;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.h3};
  margin: 0;

  ${addSpacing};
  ${fontSize};
  ${space};
  ${color};
  ${typography};
  ${underline};
  ${uppercase};
  ${capitalize};
`;

const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.h4};
  margin: 0;

  ${addSpacing};
  ${fontSize};
  ${space};
  ${color};
  ${typography};
  ${underline};
  ${uppercase};
  ${capitalize};
`;

const H5 = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.h5};
  margin: 0;

  ${addSpacing};
  ${fontSize};
  ${space};
  ${color};
  ${typography};
  ${underline};
  ${uppercase};
  ${capitalize};
`;

const H6 = styled.h6`
  font-size: ${({ theme }) => theme.fontSize.h6};
  margin: 0;

  ${addSpacing};
  ${fontSize};
  ${space};
  ${color};
  ${typography};
  ${underline};
  ${uppercase};
  ${capitalize};
`;

const P = styled.p`
  font-size: ${({ variant, theme }) => theme.fontSize[variant || 'paragraph']};
  margin: 0;

  ${addSpacing};
  ${fontSize};
  ${space};
  ${color};
  ${typography};
  ${underline};
  ${uppercase};
  ${capitalize};

  ${({ variant, theme }) =>
    variant === 'muted' &&
    `
    color: ${theme.colors.lightGrey};
  `};

  ${({ variant, theme }) =>
    variant &&
    `
    font-size: ${theme.fontSize[variant]};
  `};
`;

export { H1, H2, H3, H4, H5, H6, P };
