const addSpacing = ({ font }) =>
  font &&
  font !== 'light' &&
  font !== 'lightItalic' &&
  `
    letter-spacing: 0.5px;
  `;

const underline = ({ underline: underlineProp }) => underlineProp && 'text-decoration: underline';
const uppercase = ({ uppercase: uppercaseProp }) => uppercaseProp && 'text-transform: uppercase';
const capitalize = ({ capitalize: capitalizeProp }) =>
  capitalizeProp && 'text-transform: capitalize';
const fontSize = ({ fontSize: fontSizeProp }) => fontSizeProp && `font-size: ${fontSizeProp}`;

export { addSpacing, underline, uppercase, capitalize, fontSize };
