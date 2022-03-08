// React Hook(s)
import { useState, useEffect } from "react";

// Componentes
import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Index";
import Loading from "./components/Loading/Index";
import Banner from "./components/Banner/Index";
import Cards from "./components/Cards/Index";
import { FormCategory } from "./components/Form/Index";

// Axios
import { getInfo } from "./hooks/Axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getInfo("produtos/", setProdutos, setIsLoading);
  }, []);

  let categorias = [];
  categorias = produtos.produtos;
  return (
    <div className="app bg-faded">
      <Navbar />
      {!isLoading ? (
        <Loading />
      ) : (
        <>
          <Banner titulo={produtos.dadosDaLoja.titulo} />
          <FormCategory setSearchTerm={setSearchTerm} categorias={categorias} />
          {categorias
            .filter((categoria) => {
              if (searchTerm === "") {
                return categoria;
              } else if (
                categoria.titulo
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return categoria;
              }
            })
            .map((categoria) => (
              <Cards
                key={categoria.id}
                titulo={categoria.titulo}
                itens={categoria.produtos}
              />
            ))}
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
