import React from "react";
import ReactDOM from "react-dom/client";
import HfLogo from "./Images/HF_logo.png";
import ElectricianImg from "./Images/electrician.png";
import "bootstrap/dist/css/bootstrap.css";

const RenderNavContainer = ({ navVal }) => {
  return (
    <li>
      <button type="button" class="btn btn-dark" value={navVal}>
        {navVal}
      </button>
    </li>
  );
};

const Header = () => {
  return (
    <div className="header-container border border-2 border-black rounded">
      <div className="header-logo-container">
        <img className="logo-image" src={HfLogo} />
      </div>
      <div className="header-search-container">
        <form className="header-search-bar-container">
          <div className="header-search-bar-input">
            <input type="search" placeholder="search"></input>
          </div>
          <div className="header-search-bar-button">
            <button class="btn btn-dark" type="submit">
              search
            </button>
          </div>
        </form>
      </div>
      <div className="header-navigation-container">
        <ul>
          <RenderNavContainer navVal="home" />
          <RenderNavContainer navVal="about" />
          <RenderNavContainer navVal="contact" />
          <RenderNavContainer navVal="cart" />
        </ul>
      </div>
    </div>
  );
};

const BodyCardComponent = ({ cardComponentName, cardComponentImg }) => {
  return (
    <div className="body-card-container border border-2 border-black rounded">
      <div className="body-card-container-image">
        <img
          className="body-card-image"
          src={cardComponentImg}
          alt={cardComponentName}
        />
      </div>
      <div className="body-card-container-title">
        <p>{cardComponentName}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-continer border border-2 border-black rounded ">
      <BodyCardComponent
        cardComponentName="Eletrcian"
        cardComponentImg={ElectricianImg}
      />
      <BodyCardComponent
        cardComponentName="Plumber"
        cardComponentImg={ElectricianImg}
      />
      <BodyCardComponent
        cardComponentName="Machanicx"
        cardComponentImg={ElectricianImg}
      />
      <BodyCardComponent
        cardComponentName="Carpenter"
        cardComponentImg={ElectricianImg}
      />
    </div>
  );
};

const Layout = () => {
  return (
    <div className="main-container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Layout />);
