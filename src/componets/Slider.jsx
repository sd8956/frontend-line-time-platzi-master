import React, { useState } from "react";
import "../assets/styles/Slider.css";
import useInitialState from "../hooks/useInitialState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ImgComponent from "./ImgComponent";

const API = "http://localhost:8000/projects";

const Slider = (project) => {
  const initialState = useInitialState(API);

  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (initialState.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (initialState.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <>
      <div className="slider">
        {initialState.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              <ImgComponent item={item} />
              <button id="goLeft" onClick={goLeft}>
                <FontAwesomeIcon icon={faChevronLeft} /> 
              </button>
              <button id="goRight" onClick={goRight}>
                <FontAwesomeIcon icon={faChevronRight} /> 
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Slider;
