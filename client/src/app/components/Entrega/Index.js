// React Hook(s)
import { useEffect, useState } from "react";

// Forma de entrega do pedido
const FormaEntrega = ({ setFormaEntrega }) => {
  return (
    <div className="container flex-xs flex-xs-between mb-3">
      <div className="form-check-inline check-btn-outline flex-basis">
        <input
          type="radio"
          className="form-check-input"
          name="metodoEntrega"
          id="casa"
          onClick={() => setFormaEntrega("Receber em casa")}
        />
        <label
          className="form-check-label flex-xs flex-xs-start p-0 pl-1"
          htmlFor="casa"
        >
          Receber em casa
        </label>
      </div>
      <div className="form-check-inline check-btn-outline flex-basis">
        <input
          type="radio"
          className="form-check-input"
          name="metodoEntrega"
          id="local"
          onClick={() => setFormaEntrega("Retirar no local")}
        />
        <label
          className="form-check-label flex-xs flex-xs-start p-0 pl-1"
          htmlFor="local"
        >
          Retirar no local
        </label>
      </div>
    </div>
  );
};

// Informações do usuário para entrega
const InfosUsuario = ({ setInfos }) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    setInfos({ "nome": nome, "telefone": telefone});
  }, [nome, telefone])

  return (
    <div className="container">
      <div className="card card-block">
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            placeholder="Insira seu nome aqui..."
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            className="form-control"
            id="telefone"
            placeholder="51 9 9898-9898"
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

// Forma de pagamento do pedido
const FormaPagamento = ({ setFormaPagamento }) => {
  const options = [
    { value: "Dinheiro" },
    { value: "Crédito" },
    { value: "Débito" },
    { value: "PIX" },
  ];

  return (
    <div className="container">
      <div className="card card-block">
        <div className="form-group">
          <label className="text-primary-dark" htmlFor="formaPagamento">
            Forma de pagamento
          </label>
          <select className="form-control" id="formaPagamento" onChange={(e) => setFormaPagamento(e.target.value)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export { FormaEntrega, InfosUsuario, FormaPagamento };
