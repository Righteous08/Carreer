import React, { Component } from "react";
import { ProductConsumer } from "../context";
import "./Details.css";
import Button from "react-bootstrap/Button";

export class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, info, inCart } = value.detailProduct;
          return (
            <div className="container py-2">
              {/* First small pics */}
              <div className="row">
                <div className="col-9 mx-left col-md-4 my-3 gy-2">
                  <img src={img} className="img-fluid" alt="products" />
                  <img src={img} className="img-fluid" alt="products" />
                  <img src={img} className="img-fluid" alt="products" />
                </div>
                {/* End of First small pics */}

                {/* Middle large pics */}
                <div className="col-9 mx-auto col-md-4 my-3 gy-2">
                  <img src={img} className="img-fluid mid" alt="products" />
                </div>
                {/* End of Middle large pics */}

                {/* Side info */}
                <div className="col-9 mx-right col-md-4 my-2 gy-2">
                  <div>
                    <h1>
                      <strong>Apollo</strong>
                    </h1>
                    <h3>Running Short</h3>
                    <h6 className="size text-uppercase">
                      <strong>size</strong>
                    </h6>
                    <Button
                      variant="outline-primary"
                      className="button Xtra-large"
                    >
                      XS
                    </Button>{" "}
                    <Button variant="outline-primary" className="button normal">
                      S
                    </Button>{" "}
                    <Button variant="outline-primary" className="button medium">
                      M
                    </Button>{" "}
                    <Button variant="outline-primary" className="button large">
                      L
                    </Button>
                    <h6 className="price text-uppercase">
                      <strong>price:</strong> <br />
                    </h6>
                    <h6>
                      <strong>$50.00</strong>
                    </h6>
                    <Button
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                      className=" btn add-to-cart text-uppercase"
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </Button>
                    {/* <Button className=" btn add-to-cart text-uppercase">
                      add to cart
                    </Button> */}
                    <p className="footer-info">{info}</p>
                  </div>
                </div>
                {/* End of Side info */}
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
