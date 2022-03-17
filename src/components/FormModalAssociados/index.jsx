import {Form, DivInfos, DivLocal} from './style'
import Button from '../Button'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers'

const FormModalAssociados = () => {


    const schema = yup.object.schema({
        nome_completo: yup.string().required("Campo Obrigatorio"),
        email: yup.string.email('Email invalido').required('Campo Obrigatorio'),
        endereco: yup.string().required('Campo Obrigadotiro'),
        password: yup.string().required('Campo Obrigatorio'),
        numero: yup.string().required('Campo Obrigatorio'),
        bairro: yup.string().required('Campo Obrigatorio'),
        cidade: yup.string().required('Campo Obrigatorio'),
        estado: yup.string().required('Campo Obrigatorio')
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <section>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Cadastro</h2>
                <label>Nome completo</label>
                <input />
                <label>Email</label>
                <input />
                <label>Senha</label>
                <input />
                <label>Endereço</label>
                <input />
                <DivInfos>
                    <DivLocal>
                        <label>Numero</label>
                        <input />
                        <label>Bairro</label>
                        <input />
                    </DivLocal>
                    <DivLocal>
                        <label>Cidade</label>
                        <input />
                        <label>Estado</label>
                        <input />
                    </DivLocal>
                </DivInfos>
                <Button span='Cadastrar'/>
            </Form>
        </section>
    )
}
export default FormModalAssociados;