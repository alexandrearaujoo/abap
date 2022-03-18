import Header from './components/Header';
import { GlobalStyle } from './style/global';
import Router from './routes';

function App() {
  return (
      <>
        <GlobalStyle/>
        <Header/>
        <Router/>
      </>
  );
}

export default App;
