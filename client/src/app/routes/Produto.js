// React Hooks
import { useState, useEffect } from "react";

// useParams do React Router
import { useParams } from "react-router-dom";

// Componentes
import Navbar from "../components/Navbar/Index";
import Loading from "../components/Loading/Index";
import Banner from "../components/Banner/Index";
import Info from "../components/Info/Index";
import Adicionais from "../components/Adicionais/Index";
import Carrinho from "../components/Carrinho/Index";

// Axios Hooks
import { getInfo } from "../hooks/Axios";

/*
  Pega ID do produto pelo parâmetro passado na rota e chama o endpoint
  do produto específico.
*/
const Produto = () => {
  // ID do produto em específico
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    getInfo(`produto/${id}`, setProduto, setIsLoading);
  }, []);

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
          <Adicionais/>
          <div className="container">
          <form className="mb-2">
              <input
                type="text"
                className="form-control"
                id="categoryInput"
                placeholder="Ex: Usar produtos sem lactose..."
              />
            </form>
          </div>
          <Carrinho preco={produto.preco} />
        </>
      )}
    </div>
  );
};

export default Produto;
