import Spinner from "../../assets/loading.gif";

import "./styles.scss";

export const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <img src={Spinner} alt="Carregando...." title="Carregando...." />
    </div>
  );
};
