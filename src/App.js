import Routes from './routes';
import { GlobalStyle } from './style/global';
import Router from './routes';
import  { Toaster }  from "react-hot-toast";
function App() {
  return (

    <>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
      <Router />
    </>
  );
}

export default App;
