import { useTheme } from '../contexts/ThemeContext.jsx';
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme}>
      <h1>Welcome to React Bookstore!</h1>
      <p>
        We have several books. Feel free to browse for as long as you like.
        Click on a cover image to see details, or click the Add to Cart button
        to add a book to your shopping cart.
      </p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Header;
