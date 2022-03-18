import Header from './components/Header';
import { GlobalStyle } from './style/global';
import Router from './routes';
import Input from './components/Input';

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
