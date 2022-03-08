import React from "react";

const Banner = ({ titulo, image = "https://localhost:3000/static/media/bg1.d8191d2ea913accd47c5.jpg" }) => {
  return (
    <div className="container-fluid w-100 mb-3 p-0">
      <div className="row w-100 m-0">
        <div className="banner col-md-12 flex-xs flex-xs-center flex-xs-middle img-fluid p-0"
        style={{backgroundImage: `url(${image})`}}>
          <h1 className="display-4 text-white">{titulo}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
