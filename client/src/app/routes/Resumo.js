// React Hook(s)
import { useEffect, useState } from "react";

// Componentes
import Navbar from "../components/Navbar/Index";
import Loading from "../components/Loading/Index";
import { Valor, ListaProdutos } from "../components/Resumo/Index";
import Button from "../components/Button/Index";

// LocalStorage
import { returnCarrinho, returnTotal } from "../hooks/LocalStorage";

const Resumo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [carrinho, setCarrinho] = useState();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setTotal(returnTotal);
    (setCarrinho(returnCarrinho) ? setIsLoading(false) : setIsLoading(true));
  }, [reload]);

  return (
    <div className="app bg-faded">
      <Navbar />
      {!isLoading ? (
        <Loading />
      ) : (
        <>
          <Valor valor={total} mutedText={"Valor mínimo: R$ 50,00"} />
          <ListaProdutos itens={carrinho} reload={reload} setReload={setReload} />
          <Button text={"Concluir pedido"} />
        </>
      )}
    </div>
  );
};

export default Resumo;
