import Logo from "../../assets/netflix-red.svg";
import prof1 from "../../assets/images/profile/1.png";
import prof2 from "../../assets/images/profile/2.png";
import prof3 from "../../assets/images/profile/3.png";

import "./styles.scss";
import { Link } from "react-router-dom";

const ProfileChooseScreen = () => {
  return (
    <>
      <nav>
        <img className="prof" src={Logo} alt="Netflix" title="Netflix" />
      </nav>
      <Link to="/browse">
        <div className="whoIs">
          <span className="text">Quem está assistindo?</span>
          <div className="profiles">
            <div className="profile">
              <img src={prof1} alt="" />
              <p className="name">Marlone</p>
            </div>
            <div className="profile">
              <img src={prof2} alt="" />
              <p className="name">Melannie</p>
            </div>
            <div className="profile">
              <img src={prof3} alt="" />
              <p className="name">Hamilly</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProfileChooseScreen;
