import { CSSProperties } from 'react';
import { useTheme } from '../hooks/useTheme';

function Footer() {
  const { theme, toggleTheme } = useTheme();
  const footerStyle: CSSProperties = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  };

  return (
    <p style={footerStyle} className={theme === 'light' ? 'dark' : 'light'}>
      This is the footer.
      <button onClick={toggleTheme}>Toggle Theme</button>
    </p>
  );
}

export default Footer;
