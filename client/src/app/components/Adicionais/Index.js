// Componentes dos adicionais
import { Adicional, AdicionalCheck } from "./Adicional/Adicionais";

const Adicionais = () => {
  return (
    <div className="container">
      <h1 className="text-primary mb-2">Acompanhamentos</h1>
      <Adicional titulo={"Adicional 1"} preco={2} />
      <Adicional titulo={"Adicional 2"} preco={2} />
      <Adicional titulo={"Adicional 3"} preco={2} />
      <h1 className="text-primary mb-2">Adicionais de soma</h1>
      <AdicionalCheck titulo={"Adicional 1"} preco={2} id={1} />
      <AdicionalCheck titulo={"Adicional 2"} preco={2} id={2} />
      <AdicionalCheck titulo={"Adicional 3"} preco={2} id={3} />
      <h1 className="text-primary mb-2">Alguma observação?</h1>
    </div>
  );
};

export default Adicionais;
