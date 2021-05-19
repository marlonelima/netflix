import { Link } from "react-router-dom";
import Logo from "../../assets/netflix-red.svg";

import "./styles.scss";

const WelcomeScreen = () => {
  return (
    <>
      <div className="header-welcome">
        <nav>
          <img className="logo" src={Logo} title="Netflix" alt="Netflix" />
          <div className="actions">
            <button className="change-language">
              <span className="language-icon material-icons material-icons-outlined">
                language
              </span>
              Portugues
              <span className="material-icons material-icons-outlined">
                arrow_drop_down
              </span>
            </button>
            <Link to="/login">
              <button className="login">Entrar</button>
            </Link>
          </div>
        </nav>
        <div className="welcome-text">
          <h2 className="main-text">
            Filmes, séries e muito mais. Sem limites.
          </h2>
          <h3 className="secondary-text">
            Assista onde quiser. Cancele quando quiser.
          </h3>
          <p className="info-text">
            Pronto para assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </p>
          <form className="subscribe">
            <input type="email" name="email" id="email" placeholder="Email" />
            <button>Vamos lá {">"}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
