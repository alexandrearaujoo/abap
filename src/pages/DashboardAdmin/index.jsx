import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { AiOutlineMenu } from "react-icons/ai";

const DashBoardADM = () => {
  return (
    <>
      <Header icon={<AiOutlineMenu />} />
      <Sidebar />
    </>
  );
};

export default DashBoardADM;
