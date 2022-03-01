import React from "react";

const Loading = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 flex-xs flex-col flex-xs-center flex-xs-middle mt-4">
          <span className="loader-umbler loader-3x"></span>
          <h2 className="subheading sub-section sub-center mt-2">Carregando...</h2>
        </div>
      </div>
    </div>
  );
};

export default Loading;
