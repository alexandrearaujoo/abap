import {Form, DivInfos, DivLocal} from './style'
import Button from '../Button'

const FormModal = () => {
    return (
        <section>
            <Form>
                <h2>Cadastro</h2>
                <label>Nome completo</label>
                <input />
                <label>Email</label>
                <input />
                <label>Endereço</label>
                <input />
                <DivInfos>
                    <DivLocal>
                        <label>CEP</label>
                        <input />
                        <label>Ponto de Ref</label>
                        <input />
                    </DivLocal>
                    <DivLocal>
                        <label>CPF</label>
                        <input />
                        <label>Telefone</label>
                        <input />
                    </DivLocal>
                </DivInfos>
                <Button span='Cadastrar'/>
            </Form>
        </section>
    )
}
export default FormModal