// React Hook(s)
import { useState } from "react";

// React Router
import { useNavigate } from "react-router-dom";

// LocalStorage
import { insertProduct } from "../../hooks/LocalStorage";

const Carrinho = ({ preco, produtoObj, observation, adicionais }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  // Adiciona algumas propriedades no objeto antes de inseri-lo no carrinho
  const addProperties = () => {
    produtoObj.quantidade = Number(quantity);
    produtoObj.preco = produtoObj.preco * quantity;
    produtoObj.observacao = observation;
    produtoObj.adicionais = adicionais;
  };

  // Adiciona produto no carrinho
  const handleAddCarrinho = (e) => {
    e.preventDefault();
    addProperties();
    insertProduct(produtoObj);
    navigate("/");
  };

  const options = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  return (
    <div className="container-fluid bg-inverse p-3">
      <div className="flex-xs flex-xs-middle flex-xs-center mb-2">
        <div className="form-group m-0 mr-1">
          <select
            className="form-control"
            id="quantitySelect"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
        <h2 className="text-success">R$ {preco * quantity}</h2>
      </div>
      <button
        onClick={handleAddCarrinho}
        className="btn btn-success btn-lg btn-block font-light"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default Carrinho;
