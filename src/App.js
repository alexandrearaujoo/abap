import { GlobalStyle } from './style/global';
import Header from './components/Header'
import Router from './routes';

function App() {
  return (
      <>
        <Header/>
        <GlobalStyle />
        <Router />  
      </>
  );
}

export default App;
