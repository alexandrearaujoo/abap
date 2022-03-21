import { Form, DivInfos, DivLocal, Section } from "./style";
import Input from "../Input";
import Button from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonAdd from "../ButtonAdd";
import { AiOutlineCloseCircle } from "react-icons/ai";

const FormModalMedidor = ({ handleClick }) => {
  const schema = yup.object().shape({
    codigo: yup.string().required("Campo Obrigatorio"),
    id_associado: yup.string().required("Campo Obrigatorio"),
    endereco: yup.string().required("Campo Obrigadotiro"),
    numero: yup.string().required("Campo Obrigatorio"),
    bairro: yup.string().required("Campo Obrigatorio"),
    cidade: yup.string().required("Campo Obrigatorio"),
    estado: yup.string().required("Campo Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ButtonAdd onClick={handleClick} icon={AiOutlineCloseCircle} />
        <h2>Cadastro</h2>
        <Input
          label="Código"
          name="codigo"
          error={errors.codigo?.message}
          register={register}
        />

        <Input
          label="Id do associado"
          name="id_associado"
          error={errors.id_associado?.message}
          register={register}
        />

        <Input
          label="Endereço"
          name="endereco"
          error={errors.endereco?.message}
          register={register}
        />

        <DivInfos>
          <DivLocal>
            <Input
              label="Número"
              name="numero"
              error={errors.numero?.message}
              register={register}
            />
            <Input
              label="Bairro"
              name="bairro"
              error={errors.bairro?.message}
              register={register}
            />
          </DivLocal>
          <DivLocal>
            <Input
              label="Cidade"
              name="cidade"
              error={errors.cidade?.message}
              register={register}
            />
            <Input
              label="Estado"
              name="estado"
              error={errors.estado?.message}
              register={register}
            />
          </DivLocal>
        </DivInfos>
        <Button>Cadastrar</Button>
      </Form>
    </Section>
  );
};
export default FormModalMedidor;
