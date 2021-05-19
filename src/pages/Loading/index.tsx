import Logo from "../../assets/netflix-red.svg";

import "./styles.scss";

export const LoadingScreen = () => {
  return (
    <div className="container">
      <img src={Logo} alt="Carregando...." title="Carregando...." />
    </div>
  );
};
