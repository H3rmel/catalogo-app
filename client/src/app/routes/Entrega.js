// React Hook(s)
import { useEffect, useState } from "react";

// Componentes
import Navbar from "../components/Navbar/Index";
import { Valor } from "../components/Resumo/Index";
import {
  FormaEntrega,
  InfosUsuario,
  FormaPagamento,
} from "../components/Entrega/Index";
import Button from "../components/Button/Index";
import Modal from "../components/Modal/Index";

// LocalStorage
import { returnTotal, returnCarrinho } from "../hooks/LocalStorage";

// Axios
import { postInfo } from "../hooks/Axios";

const Entrega = () => {
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState(false);
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [pedido, setPedido] = useState(false);

  useEffect(() => {
    setTotal(returnTotal);
  }, []);

  const [formaEntrega, setFormaEntrega] = useState("");
  const [infos, setInfos] = useState({ nome: "", telefone: "" });
  const [formaPagamento, setFormaPagamento] = useState("Dinheiro");

  const handleSubmit = async () => {
    let submit = {
      pedido: returnCarrinho(),
      entrega: formaEntrega,
      formaDePagamento: formaPagamento,
      contato: infos,
    };
    
    try {
      const response = await postInfo("novo-pedido/", submit)

      if(response.status === 200) {
        setModal(true);
        setHeading("Pedido feito com sucesso!");
        setText("Seu pedido já fora solicitado e será entregue em até 24 horas.");
        setPedido(true);
      }
    } catch(e) {
      console.log(e.message);
      setModal(true);
      setHeading("Ocorreu um erro em seu pedido! :(");
      setText("Verifique se você inseriu todas as informações necessárias.");
      setPedido(false);
    }
  };

  return (
    <div className="app bg-faded">
      <Navbar />
      <Valor valor={total} mutedText={"Taxa de entrega: R$ 5,00"} />
      <FormaEntrega setFormaEntrega={setFormaEntrega} />
      <InfosUsuario setInfos={setInfos} />
      <FormaPagamento setFormaPagamento={setFormaPagamento} />
      <Button text={"Finalizar Pedido"} argument={handleSubmit} />
      <Modal heading={heading} text={text} pedido={pedido} modalVisible={modal} setModalVisible={setModal}  />
    </div>
  );
};

export default Entrega;
