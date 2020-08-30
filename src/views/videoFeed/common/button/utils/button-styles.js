const outlined = (theme, color) => `
  border: 1px solid ${theme.colors[color]};
  color: ${theme.colors[color]};
  background-color: transparent;

  &:hover {
    box-shadow: 0 .2rem .1rem -.1rem ${theme.colors[color]}33,
    0 .1rem .1rem 0 ${theme.colors[color]}26,
    0 .1rem .3rem 0 ${theme.colors[color]}1A;
    background: ${theme.colors[color]};
    color: ${theme.colors.lighter};
    transition: 0.2s all;
    transform: translateY(-1px);
  }

  &:focus-within {
    box-shadow: 0 0 0 0.1rem ${theme.colors[color]}40;
  }

  &:active {
    box-shadow: none;
  }
`;

const soft = (theme, color) => `
  background: ${theme.softColors[color]};
  color: ${theme.colors[color]};

  &:hover {
    box-shadow: 0 .2rem .1rem -.1rem ${theme.colors[color]}33,
    0 .1rem .1rem 0 ${theme.colors[color]}26,
    0 .1rem .3rem 0 ${theme.colors[color]}1A;
    transform: translateY(-1px);
  }

  &:focus-within {
    box-shadow: 0 0 0 0.1rem ${theme.colors[color]}40;
  }

  &:active {
    box-shadow: none;
  }
`;

const link = (theme, color) => `
  background: transparent;
  color: ${theme.colors[color]};
`;

const normal = (theme, color) => `
  background: ${theme.colors[color]};
  color: ${theme.colors.lighter};

  &:hover {
    box-shadow: 0 .2rem .1rem -.1rem ${theme.colors[color]}33,
    0 .1rem .1rem 0 ${theme.colors[color]}26,
    0 .1rem .3rem 0 ${theme.colors[color]}1A;
    transform: translateY(-1px);
  }
  
  &:focus-within {
    box-shadow: 0 0 0 0.1rem ${theme.colors[color]}80;
  }

  &:active {
    box-shadow: none;
  }
`;

export { outlined, soft, link, normal };
