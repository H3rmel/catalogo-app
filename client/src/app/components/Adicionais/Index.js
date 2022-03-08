// React Hooks
import { useEffect, useState } from "react";

const Adicional = ({ id, adicional }) => {
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    adicional.map((adicional) => {
      if (adicional.id === id) {
        adicional.quantidade = quantidade;
      }
    });
  }, [quantidade]);

  const handleAdd = (e) => {
    e.preventDefault();
    setQuantidade(quantidade + 1);
  };

  const handleSub = (e) => {
    e.preventDefault();
    setQuantidade(quantidade - 1);
  };

  return (
    <div className="flex-xs flex-xs-between flex-xs-middle card px-3 py-2 mb-2">
      <div>
        <h6 className="text-gray m-0">Adicional {id}</h6>
        <p className="text-success font-bold">R$ 2,00</p>
      </div>
      <div className="flex-xs flex-xs-around" style={{ width: "40%" }}>
        <button onClick={handleSub} className="btn btn-accent btn-fab btn-sm">
          <span className="icon icon-subtract" />
        </button>
        <input
          type="text"
          className="form-control text-xs-center"
          value={quantidade}
          style={{ width: "30%" }}
          readOnly
        />
        <button
          onClick={handleAdd}
          className="btn btn-secondary btn-fab btn-sm"
        >
          <span className="icon icon-add" />
        </button>
      </div>
    </div>
  );
};

const AdicionalCheck = ({ preco, id }) => {
  return (
    <div className="flex-xs flex-xs-between flex-xs-middle card px-3 py-2 mb-2">
      <div>
        <h6 className="text-gray m-0">Adicional{id}</h6>
        <p className="text-success font-bold">R$ {preco}</p>
      </div>
      <div className="form-check-inline">
        <input
          id={`checkboxAdd${id}`}
          className="form-check-input"
          type="checkbox"
        />
        <label className="form-check-label" htmlFor={`checkboxAdd${id}`}>
          &nbsp;
        </label>
      </div>
    </div>
  );
};

export { Adicional, AdicionalCheck };
