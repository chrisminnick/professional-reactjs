import { useTheme } from '../contexts/ThemeContext';

function Footer() {
  const { theme, toggleTheme } = useTheme();
  const footerStyle = {
    padding: '10px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    margin: '0',
    width: '100%',
  };
  return (
    <p style={footerStyle} className={theme}>
      This is the footer.
      <button onClick={toggleTheme}>Toggle Theme</button>
    </p>
  );
}

export default Footer;
