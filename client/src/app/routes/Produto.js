// React Hook(s)
import { useState, useEffect } from "react";

// React Router
import { useParams } from "react-router-dom";

// Componentes
import Navbar from "../components/Navbar/Index";
import Loading from "../components/Loading/Index";
import Banner from "../components/Banner/Index";
import Info from "../components/Info/Index";
import { Form } from "../components/Form/Index";
import Adicional from "../components/Adicionais/Index";
import Carrinho from "../components/Carrinho/Index";

// Axios
import { getInfo } from "../hooks/Axios";

const Produto = () => {
  // ID do produto
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    getInfo(`produto/${id}`, setProduto, setIsLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Infos para serem adicionadas ao objeto do produto.
  const [observation, setObservation] = useState("");
  let adicionais = [
    { id: 1, quantidade: 0 },
    { id: 2, quantidade: 0 },
    { id: 3, quantidade: 0 },
  ];

  return (
    <div className="app bg-faded">
      <Navbar />
      {!isLoading ? (
        <Loading />
      ) : (
        <>
          <Banner titulo={null} image={produto.fotos[0]} />
          <Info
            titulo={produto.titulo}
            descricao={produto.descricao}
            preco={produto.preco}
          />
          <div className="container">
            <h1 className="text-primary mb-2">Adicionais</h1>
            <Adicional id={1} adicional={adicionais} />
            <Adicional id={2} adicional={adicionais} />
            <Adicional id={3} adicional={adicionais} />
          </div>
          <Form
            titulo={"Alguma observação?"}
            placeholder={"Ex: Usar produtos sem lactose..."}
            setData={setObservation}
          />
          <Carrinho
            preco={produto.preco}
            produtoObj={produto}
            observation={observation}
            adicionais={adicionais}
          />
        </>
      )}
    </div>
  );
};

export default Produto;
