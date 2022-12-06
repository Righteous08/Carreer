import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="header">
      <Nav defaultActiveKey="/home" as="ul" className="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home" className="Link">
            Women
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1" className="Link">
            Men
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2" className="Link">
            Kids
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <img
        src="images/Group.png"
        className="text-center mt-4 mb-4"
        alt="shareicon"
      ></img>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item as="li">
          <img src="images/Group 1.svg" alt="CashSign"></img>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/CartOpen" className="ml-auto">
            <button className="cart-button">
              <img
                src="images/icon.svg"
                alt="cartimg"
                className="Cart-icon"
              ></img>
            </button>
          </Link>
        </Nav.Item>
      </Nav>
      
    </div>
  );
}
export default NavBar;
