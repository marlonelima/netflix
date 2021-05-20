import { useCallback } from "react";
import img1 from "./../../assets/images/thumbs/1.jpg";
import img2 from "./../../assets/images/thumbs/2.webp";
import img3 from "./../../assets/images/thumbs/3.jpg";
import img4 from "./../../assets/images/thumbs/4.jpg";
import img5 from "./../../assets/images/thumbs/5.webp";
import img6 from "./../../assets/images/thumbs/6.jpg";
import img7 from "./../../assets/images/thumbs/7.webp";
import img8 from "./../../assets/images/thumbs/8.webp";
import img9 from "./../../assets/images/thumbs/9.jpg";

import "./styles.scss";

interface IListProps {
  title: string;
}

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];
const total = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const List = ({ title }: IListProps) => {
  const sort = useCallback(() => {
    return images[Math.floor(Math.random() * 18)];
  }, []);

  return (
    <div className="container">
      <p className="title">{title}</p>
      <div className="list">
        {total.map((value) => (
          <div key={value} className="item">
            <img src={sort()} alt="" />
            <div className="details">
              <div className="options">
                <button>
                  <span className="material-icons material-icons-outlined">
                    play_arrow
                  </span>
                </button>
                <button>
                  <span className="material-icons material-icons-outlined">
                    done
                  </span>
                </button>
                <button>
                  <span className="material-icons material-icons-outlined">
                    thumb_up
                  </span>
                </button>
                <button>
                  <span className="material-icons material-icons-outlined">
                    thumb_down_off_alt
                  </span>
                </button>
                <button>
                  <span className="material-icons material-icons-outlined">
                    expand_more
                  </span>
                </button>
              </div>
              <p className="relevant">98% relevante para mim</p>
              <p className="tags">De roer as unhas, psicológico, medo</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
