import { outlined, soft, link, normal } from './button-styles';

const getStyle = ({ variant, theme, color }) => {
  switch (variant) {
    case 'outlined':
      return outlined(theme, color);
    case 'soft':
      return soft(theme, color);
    case 'link':
      return link(theme, color);
    default:
      return normal(theme, color);
  }
};

const getSize = ({ size }) => {
  switch (size) {
    case 'small':
      return 'padding: .425rem .5rem; font-size: 10px;';
    case 'large':
      return 'padding: .875rem 1.5rem';
    default:
      return 'padding: .625rem 1.25rem';
  }
};

export { getStyle, getSize };
