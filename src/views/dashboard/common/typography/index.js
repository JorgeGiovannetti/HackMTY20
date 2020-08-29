import setTag from './functions';

const Typography = ({
  color,
  variant,
  fontWeight,
  children,
  fontSize,
  className,
  underline,
  uppercase,
  capitalize,
  ...props
}) => {
  return setTag(
    color,
    variant,
    fontWeight,
    children,
    fontSize,
    className,
    underline,
    uppercase,
    capitalize,
    { ...props }
  );
};

export default Typography;
