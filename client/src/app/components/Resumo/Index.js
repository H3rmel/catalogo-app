// React Hook(s)
import { useEffect, useState } from "react";

// LocalStorage
import { removeProduct, alterQuantity } from "../../hooks/LocalStorage";

// Exibe valor total do pedido
const Valor = ({ valor, mutedText }) => {
  return (
    <div className="container mt-2">
      <div className="card card-block mb-2">
        <h1 className="text-primary-dark">Resumo do meu pedido</h1>
        <p className="font-bold text-primary">
          Valor total do pedido: R$ {valor}
        </p>
        <small className="text-muted">{mutedText}</small>
      </div>
    </div>
  );
};

// Produto separado
const Produto = ({
  arrayId,
  titulo,
  descricao,
  preco,
  quantidade,
  fotos,
  adicionais,
  reload,
  setReload,
}) => {
  const [quantity, setQuantity] = useState(quantidade);

  // Altera quantidade de um produto específico
  const handleAlterProduct = () => {
    alterQuantity(arrayId, quantity);
    setReload(!reload);
  };

  useEffect(() => {
    handleAlterProduct();
  }, [quantity]);

  // Remove produto do carrinho
  const handleRemoveProduct = (e) => {
    e.preventDefault();
    removeProduct(arrayId);
    setReload(!reload);
  };

  const options = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  // console.log(adicionais);
  return (
    <div className="card card-hover px-3 py-2 mb-2 flex-xs flex-xs-middle">
      <img
        src={fotos[0]}
        className="item-img img-fluid rounded mr-2"
        alt="Logo do produto"
      />
      <div>
        <h1 className="text text-2 text-primary">{titulo}</h1>
        <h6 className="m-0 text-success">R$ {preco}</h6>
        <p className="text-p text-primary-light">{descricao}</p>
        {adicionais.length !== 0 ? (
          <>
            {adicionais
              .filter((adicional) => {
                if (adicional.quantidade > 0) {
                  return adicional;
                }
              })
              .map((adicional) => {
                return(
                  <div className="form-check disabled m-0">
                  <input
                    id={adicional.id}
                    class="form-check-input"
                    type="radio"
                    name="radios"
                    disabled
                  />
                  <label
                    className="form-check-label flex-xs flex-xs-between"
                    for={adicional.id}
                  >
                    <span>
                      {adicional.quantidade}x Adicional {adicional.id}
                    </span>
                    <span className="text-success font-bold">
                      R$ {adicional.quantidade * 2}
                    </span>
                  </label>
                </div>
                )
              })}
          </>
        ) : (
          <p className="text-p text-muted">Sem adicionais.</p>
        )}
        <div className="pos-absolute top right mr-1 mt-1 flex-xs flex-xs-middle">
          <div className="form-group mt-1">
            <select
              className="form-control"
              id="quantitySelect"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleRemoveProduct}
            className="bg-white b-0 rounded-circle"
            data-toggle="tooltip"
            title="Remover item"
            data-placement="left"
          >
            <span className="icon icon-close icon-2x"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Exibe lista de todos os produtos
const ListaProdutos = ({ itens, reload, setReload }) => {
  const produtos = itens;
  return (
    <>
      {!produtos.hasOwnProperty("carrinho") && produtos.length !== 0 ? (
        <div
          className={`container py-2 mb-2 ${
            produtos.length > 3 ? "scroll-overflow" : ""
          }`}
          style={{height: '60vh'}}
        >
          {produtos.map((produto, index) => (
            <Produto
              key={index}
              arrayId={index}
              {...produto}
              reload={reload}
              setReload={setReload}
            />
          ))}
        </div>
      ) : (
        <div className="container text-xs-center">
          <h4 className="text-danger">Não há produtos no carrinho!</h4>
        </div>
      )}
    </>
  );
};

export { Valor, ListaProdutos };
