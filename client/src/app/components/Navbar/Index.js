/* eslint-disable jsx-a11y/anchor-is-valid */
// React
import { useState } from "react";

// React Router
import { Link } from "react-router-dom";

// Drawer
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css"; // Drawer main CSS

// CSS
import "./Index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="nav flex-xs flex-xs-between flex-xs-middle p-2 bg-primary">
        <Link to="/" className="flex-xs flex-xs-bottom">
          <img
            src="https://cdn-assets-cloud.frontify.com/s3/frontify-cloud-files-us/eyJwYXRoIjoiZnJvbnRpZnlcL2FjY291bnRzXC9mOFwvMTEyMTUzXC9wcm9qZWN0c1wvMjYzNDQzXC9hc3NldHNcLzMwXC81MzYyOTYyXC8zZmJiMzE3NWUzMTc4MDY3MDkyODVmMzYwZjI3MmFjYi0xNjE4MDE3NTIyLnN2ZyJ9:frontify:fNGfMgNDvhbf7zIQQhbYxDmlNCIq2sYFU3kNFVtvjv0?width=2400"
            alt="Umbler Logo"
            className="img-fluid mr-1"
            width="32"
          />
          <h6 className="text-white m-0">CátalogoApp</h6>
        </Link>
        <div>
          <button className="btn btn-success tag-badge-block">
            <span
              className="tag-badge tag-badge-danger"
              data-tag-badge="2"
            ></span>
            <span className="icon icon-banking-ledger icon-2x"></span>
          </button>
          <button className="btn btn-primary" onClick={toggleDrawer}>
            <span className="icon icon-nav-drawer icon-2x"></span>
          </button>
        </div>
      </nav>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="pt-4 bg-inverse"
      >
        <ul className="px-3">
          <li>
            <button className="btn btn-success btn-block">
              Abrir carrinho
            </button>
          </li>
          <li className="my-2">
            <a href="#" className="text-muted font-bold">
              Informações e Endereço
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="text-muted font-bold">
              Horário de atendimento
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="text-muted font-bold">
              Ligar para a empresa
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="text-muted font-bold">
              Enviar mensagem
            </a>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default Navbar;
