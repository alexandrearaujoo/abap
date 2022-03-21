import { Section, Form, Div } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSolicitacoes } from "../../providers/Solicitacoes";
import { AiOutlineMenu } from "react-icons/ai";
import Main from "../../components/Main";

const SolicitacaoAssociado = () => {
  const { sendRequest } = useSolicitacoes();

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio"),
    description: yup.string().required("Campo Obrigatorio"),
    tel: yup.string().required("Campo obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    sendRequest(data, "62350c952104a4a99aed3247");
  };

  return (
    <>
      <Header icon={<AiOutlineMenu />} user="associado" />
      <Main>
        <Section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Informações do usuario</h2>
            <Input
              label="Titulo"
              name="title"
              error={errors.title?.message}
              register={register}
            />
            <Input
              label="Descrição"
              name="description"
              error={errors.description?.message}
              register={register}
            />
            <Input
              label="Telefone"
              name="tel"
              error={errors.tel?.message}
              register={register}
            />
            <Button type="submit" margin="0px" padding="0px 5px">
              Salvar
            </Button>
          </Form>
        </Section>
      </Main>
    </>
  );
};

export default SolicitacaoAssociado;
