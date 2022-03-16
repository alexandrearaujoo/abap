import { Form } from './components/FormModal/style';
import Header from './components/Header';
import Input  from './components/Input';
import Lista from './components/Listas';
import { GlobalStyle } from './style/global';

function App() {
  return (
      <>
        <GlobalStyle />
        <Header/>
        <Form>
         <Input/>
         <Input/>
         <Lista/>
       

        </Form>
      </>
  );
}

export default App;
