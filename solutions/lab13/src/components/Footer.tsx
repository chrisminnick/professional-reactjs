import { CSSProperties } from 'react';

function Footer() {
  const footerStyle: CSSProperties = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  };
  return <p style={footerStyle}>This is the footer.</p>;
}

export default Footer;
