// Componente do Card
import Card from "./Card/Card";

/*
  Renderiza todos os produtos de uma categoria específica
*/
const Cards = ({ titulo, itens }) => {
  const produtos = itens;

  return (
    <>
      <h3 className="text-primary m-b-0">{titulo}</h3>
      <hr className="blue-divider" />
      <div className="list-group">
        {produtos.map((produto) => (
          <Card key={produto.id} {...produto} />
        ))}
      </div>
    </>
  );
};

export default Cards;
