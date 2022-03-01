// React Hooks
import { useState, useEffect } from "react";

// Componentes
import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Index";
import Loading from "./components/Loading/Index";
import Banner from "./components/Banner/Index";
import Cards from "./components/Cards/Index";

// Hook geral do Axios
import { getInfo } from "./hooks/Axios";

/*
  Chama a API e puxa todos os produtos e exibe eles na tela.
*/
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [produtos, setProdutos] = useState([]);
  let categorias = [];

  useEffect(() => {
    getInfo("produtos/", setProdutos, setIsLoading);
  }, []);

  categorias = produtos.produtos;
  return (
    <div className="app bg-faded">
      <Navbar />
      {!isLoading ? (
        <Loading />
      ) : (
        <>
          <Banner titulo={produtos.dadosDaLoja.titulo} />
          <div className="container">
            <form className="mb-2">
              <input
                type="text"
                className="form-control"
                id="categoryInput"
                placeholder="Categorias aqui..."
              />
            </form>
            {categorias.map((categoria) => (
              <Cards
                key={categoria.id}
                titulo={categoria.titulo}
                itens={categoria.produtos}
              />
            ))}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
