import React from "react";
import Button from "../elements/Button";
import '../assets/scss/style.scss';

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <h4 className="mb-3">Paling Popular</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return(
            <div
              key={`most-picked-${index}`}
              className={`item column-4 row-${index === 0 ? "row-2" : "row-1"}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  Rp.{item.price}
                  <span className="font-weight-ligth">/{item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    className="img-cover"
                    alt={item.name}
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="stretched-link d-block text-white"
                    href={`/properties/${item._id}`}
                  >
                    <h6>{item.name}</h6>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}