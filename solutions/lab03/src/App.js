import Footer from './Footer';
import BigOlHeader from './Header';
import Main from './Main';
import ListItems from './ListItems';

import './App.css';

function App() {
  return (
    <div className="App">
      <BigOlHeader />
      <ul>
        <ListItems />
      </ul>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
