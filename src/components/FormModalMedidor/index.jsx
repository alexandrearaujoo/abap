import { Form, DivInfos, DivLocal, Section } from "./style";
import Input from "../Input";
import Button from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonAdd from "../ButtonAdd";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useMedidores } from "../../providers/Medidores";

const FormModalMedidor = ({ handleClick, setShowForm}) => {
  const { addMedidores } = useMedidores();

  const schema = yup.object().shape({
    codigo: yup.string().required("Código Obrigatório"),
    id_associado: yup.string().required("Id Obrigatório"),
    endereco: yup.string().required("End. Obrigatório"),
    numero: yup.string().required("Número Obrigatório"),
    bairro: yup.string().required("Bairro Obrigatório"),
    cidade: yup.string().required("Cidade Obrigatório"),
    estado: yup.string().required("Estado Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    addMedidores(data);
    setShowForm(false)
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
