import { useAssociados } from "../../providers/Associados";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import InputDefault from "../InputDefault";

const ModalInfoUser = ({ infos }) => {
  const [status, setStatus] = useState("");
  const { updateUser } = useAssociados();

  const schema = yup.object().shape({
    name: yup.string(),
    tipo_user: yup.string(),
    status: yup.string(),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdate = (data) => {
    data.status = status;
    updateUser(data, "62350c952104a4a99aed3247");
  };

  return (
    <section>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <p>ID: {infos._id}</p>
        <InputDefault value={infos.email} disabled={true}/>
        <InputDefault value={infos.endereco} disabled={true}/>
        <InputDefault value={infos.cpf} disabled={true}/>
        <p>Status: {infos.status}</p>
        <select onChange={(e) => setStatus(e.currentTarget.value)}>
          <option selected disabled>
            Status...
          </option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>
        <Input
          label="Tipo de usuario"
          name="tipo_user"
          error={errors.tipo_user?.message}
          register={register}
        />
       
        <button type="submit">Salvar</button>
      </form>
    </section>
  );
};

export default ModalInfoUser;
