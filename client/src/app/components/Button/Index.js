// React Hook(s)
import { useState } from "react";

// React Router
import { Link } from "react-router-dom";

// LocalStorage
import { returnTotal } from "../../hooks/LocalStorage";

const Button = ({ text, argument = null }) => {
  return (
    <div className="pos-absolute bottom w-100 mb-3 container text-xs-center">
      <Link
        to="/entrega"
        className={`btn btn-success btn-lg ${returnTotal() >= 50 ? "" : "disabled"} px-4 font-light letterspacing`}
        onClick={argument}
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
