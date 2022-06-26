import "./style.css";
import "../../pages/geral-styles/fonts.css";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="container-header">
      <img src={Logo} alt="logo" />
      <div className="container-profile">
        <div className="profile"></div>
        <h1 className="roboto size-16 weight-70 color-white">
          Bem vindo, Lucas.
        </h1>
      </div>
    </div>
  );
};

export default Header;
