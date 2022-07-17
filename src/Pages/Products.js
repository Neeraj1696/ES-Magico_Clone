import React from "react";

function Products() {
  //   const data = [
  //     {
  //       Product: "Product",
  //       Info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam incidunt repudiandae, culpa adipisci laboriosam ea autem amet quasi aperiam temporibus cum, maxime aliquam neque!",
  //     },
  //     {
  //       Product: "Creative",
  //       Info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam incidunt repudiandae, culpa adipisci laboriosam ea autem amet quasi aperiam temporibus cum, maxime aliquam neque!",
  //     },
  //     {
  //       Product: "Strategy",
  //       Info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam incidunt repudiandae, culpa adipisci laboriosam ea autem amet quasi aperiam temporibus cum, maxime aliquam neque!",
  //     },
  //     {
  //       Product: "Escapades",
  //       Info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam incidunt repudiandae, culpa adipisci laboriosam ea autem amet quasi aperiam temporibus cum, maxime aliquam neque!",
  //     },
  //   ];
  return (
    <div className="product  grid grid-rows-2 grid-flow-col gap-0 p-5  ">
      <div className="products">
        <div className="col">
          <div className="row">
            <div className="w-60 h-40 mt-32 border-spacing-1">
              <h1 className="text-5xl mb-4">Product</h1>
              <span className="text-sm text-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                tempora rerum ex.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="col">
          <div className="row">
            <div className="w-60 h-40 mt-32 border-spacing-1">
              <h1 className="text-5xl mb-4">Creative</h1>
              <span className="text-sm text-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                tempora rerum ex.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="col">
          <div className="row">
            <div className="w-60 h-40 mt-32 border-spacing-1">
              <h1 className="text-5xl mb-4">Strategy</h1>
              <span className="text-sm text-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                tempora rerum ex.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="col">
          <div className="row">
            <div className="w-60 h-40 mt-32 border-spacing-1">
              <h1 className="text-5xl mb-4">Escapades</h1>
              <span className="text-sm text-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                tempora rerum ex.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
