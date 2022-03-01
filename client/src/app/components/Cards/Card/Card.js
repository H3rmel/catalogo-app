// React Router
import { Link } from "react-router-dom";

const Card = ({ id, titulo, descricao, preco, fotos }) => {
  return (
    <Link to={`/produto/${id}`} className="list-group-item-action card card-hover px-3 py-2 flex-xs flex-xs-middle">
      <img src={fotos[0]} className="item-img img-fluid rounded mr-2"  alt="Logo do produto" />
      <div>
        <h1 className="text text-primary">{titulo}</h1>
        <p className="text-p text-primary-light">{descricao}</p>
        <h6 className="m-0 text-success">R$ {preco}</h6>
      </div>
    </Link>
  );
};

export default Card;
