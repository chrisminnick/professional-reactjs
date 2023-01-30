function Footer() {
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    bottom: '0',
    position: 'fixed',
    width: '100%',
  };
  return <p style={footerStyle}>This is the footer.</p>;
}

export default Footer;
