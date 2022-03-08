// React Router
import { useNavigate } from "react-router-dom";

// LocalStorage
import { emptyCarrinho } from "../../hooks/LocalStorage";

const Modal = ({ heading, text, pedido, modalVisible, setModalVisible }) => {
  const navigate = useNavigate();

  const handlePedido = () => {
    emptyCarrinho();
    navigate("/");
  };

  return (
    <div
      id="modal"
      className={`modal ${modalVisible ? "fade in" : "fade"}`}
      style={{ display: modalVisible ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{heading}</h4>
          </div>
          <div className="modal-body">
            <p>{text}</p>
          </div>
          <div className="modal-footer">
            {pedido ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handlePedido}
              >
                Voltar para tela principal
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setModalVisible(!modalVisible)}
              >
                Fechar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
