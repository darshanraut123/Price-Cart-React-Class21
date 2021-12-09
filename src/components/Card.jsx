import React, { useState, useEffect } from "react";

export default function Card(props) {
  function handleAddToCart(id) {
    props.addToCart(id);
  }

  let stars  = props.object.stars;


  return (
    <div className="col mb-5">

      <div className="card h-100">
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          {props.object.offer}
        </div>
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.object.title}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
            {
               props.object.stars.map(star=><div className="bi-star-fill"></div>)
            }
            </div>
            <span className="text-muted text-decoration-line-through">
              {props.object.originalPrice!=null?`$${props.object.originalPrice}`:''} 
            </span>
            &nbsp;&nbsp;${props.object.discountedPrice}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              disabled={props.object.btnStatus}
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                handleAddToCart(props.object.id);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


