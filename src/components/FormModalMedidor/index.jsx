import { Form } from "./style";
import Input from "../Input";
import Button from "../Button";

const FormModalMedidor = () => {
  return (
    <section>
      <Form>
        <h2>Cadastro do Medidor</h2>
        <Input label="Medidor"/>
        <Button span="Cadastrar" />
      </Form>
    </section>
  );
};
export default FormModalMedidor;
