import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import Button  from "react-bootstrap/Button";


export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-3 ">

        <div className="card">

          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => {value.handleDetail(id);
                }} 
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <Button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  <img
                    src="images/Product Card/Common.png"
                    alt="commoncartimg"
                    className="cart-img"
                  />
                </Button>
                {/* Card footer */}
                <div className="card-footer">
                  <p className="card-footer-title">{title}</p>
                  <p className="card-footer-price">
                    <span className="mr-1">$</span>
                    {price}
                  </p>
                </div>
              </div>
            )}
          </ProductConsumer>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
    box-shadow: 2px 2px 2px 2px rgba(1, 1, 1, 0.1);
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    font-family: "Raleway";
  }
  .cart-btn {
    position: absolute;
    border: none;
    display: none;
    background-color: transparent;
    right: 30px;
  }
  .card:hover {
    .cart-btn {
      display: block;
    }
    .card-footer {
      margin-top: 10px;
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
`;
