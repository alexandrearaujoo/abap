import {Form, DivInfos, DivLocal, Section} from './style'
import Button from '../Button'
import Input from '../Input'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const FormModalAssociados = () => {


    const schema = yup.object().shape({
        nome_completo: yup.string().required("Nome Obrigatorio"),
        email: yup.string().email('Email invalido').required('Email Obrigatorio'),
        cpf: yup.string().required('CPF Obrigatorio'),
        endereco: yup.string().required('Endereço Obrigadotiro'),
        password: yup.string().required('Password Obrigatorio'),
        numero: yup.string().required('Numero Obrigatorio'),
        bairro: yup.string().required('Bairro Obrigatorio'),
        cidade: yup.string().required('Cidade Obrigatorio'),
        estado: yup.string().required('Estado Obrigatorio')
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Section>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Cadastro</h2>
                <Input label='Nome Completo'
                name='nome_completo'
                error={errors.nome_completo?.message}
                register={register}
                />
                <Input label='Email'
                name='email'
                error={errors.email?.message}
                register={register}
                />
                <Input label='CPF'
                name='cpf'
                error={errors.cpf?.message}
                register={register}
                />
                <Input label='Endereço'
                name='endereco'
                error={errors.endereco?.message}
                register={register}
                />
                <Input label='Senha'
                name='password'
                error={errors.password?.message}
                register={register}
                />
                <DivInfos>
                    <DivLocal>
                    <Input label='Número'
                        name='numero'
                        error={errors.numero?.message}
                        register={register}
                        />
                    <Input label='Bairro'
                        name='bairro'
                        error={errors.bairro?.message}
                        register={register}
                    />
                    </DivLocal>
                    <DivLocal>
                    <Input label='Cidade'
                        name='cidade'
                        error={errors.cidade?.message}
                        register={register}
                        />
                    <Input label='Estado'
                        name='estado'
                        error={errors.estado?.message}
                        register={register}
                        />
                    </DivLocal>
                </DivInfos>
                <Button>Cadastrar</Button>
            </Form>
        </Section>
    )
}
export default FormModalAssociados;