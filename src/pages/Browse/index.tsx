import Logo from "./../../assets/netflix-red.svg";
import ProfilePicture from "./../../assets/images/profile.png";
import WhoKilledSaraTitle from "./../../assets/images/whokilled/name.webp";

import "./styles.scss";
import { List } from "../../components/List";
import { useEffect, useRef } from "react";

const BrowseScreen = () => {
  const nav = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (!nav.current) return;

      if (window.pageYOffset > 30) {
        nav.current.style.position = "fixed";
        return (nav.current.style.background = "rgba(0,0,0,0.8)");
      }

      nav.current.style.background = "transparent";
      return (nav.current.style.position = "inherit");
    });
  });
  return (
    <>
      <header>
        <nav ref={nav}>
          <div className="left">
            <img src={Logo} alt="Netflix" className="logo" />
            <ul>
              <li>Início</li>
              <li>Séries</li>
              <li>Filmes</li>
              <li>Bombando</li>
              <li>Minha lista</li>
            </ul>
          </div>
          <div className="right">
            <div className="search-area">
              <button>
                <span className="material-icons material-icons-outlined">
                  search
                </span>
              </button>
            </div>
            <button>
              <span className="material-icons material-icons-outlined">
                card_giftcard
              </span>
            </button>
            <button>
              <span className="material-icons material-icons-outlined">
                notifications
              </span>
            </button>
            <button>
              <img src={ProfilePicture} alt="Meu perfil" />
            </button>
            <button>
              <span className="material-icons material-icons-outlined">
                arrow_drop_down
              </span>
            </button>
          </div>
        </nav>
        <div className="call">
          <img src={WhoKilledSaraTitle} alt="Quem matou Sara?" />
          <span>Assista à temporada 2 agora</span>
          <p className="synopsis">
            Ele passou 18 anos na prisão planejando a vingança perfeita. Agora
            chegou a hora de acertar as contas.
          </p>
          <div className="actions">
            <button className="watch-now">
              <span className="material-icons material-icons-outlined">
                play_arrow
              </span>
              Assistir
            </button>
            <button className="more-info">
              <span className="material-icons material-icons-outlined">
                info
              </span>
              Mais informações
            </button>
          </div>
        </div>
      </header>
      <div className="content">
        <List title="Minha lista" />
        <List title="Populares na Netflix" />
        <List title="Em alta" />
        <List title="Campeões de Bilheteria" />
        <List title="Séries dramáticas" />
        <List title="Top 10 no Brasil hoje" />
        <List title="Filmes de ação" />
        <List title="Filmes baseado na vida real" />
        <List title="Ação e aventura" />
        <List title="Lançamentos" />
      </div>
    </>
  );
};

export default BrowseScreen;
