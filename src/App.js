import './App.css';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Nav } from './components/Nav';
import { store } from './Redux';
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Nav />
        <Main />
        <Footer />
      </Provider>

    </div>
  );
}

export default App;
