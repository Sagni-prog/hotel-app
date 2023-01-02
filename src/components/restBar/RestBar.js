import { React, useState } from "react";
import "./restBar.css";
import images from "../../constants/images";
import Header from "./resHeader";

const { blackLable, burger, restBar, cake } = images;

const foods = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const RestCard = (props) => {
  return (
    <div
      className={`card restBar__card rest__card ${
        props.choosed ? "slide--right" : "slide--up"
      }`}>
      <p className="card__image">
        <img
          src={cake}
          alt=""
        />
      </p>
      <p className="card__content">
        {props.index < 5 ? " grilled beef with potatoes" : " grilled beef "}
      </p>
      <p className="card__price">$ 20.00</p>
    </div>
  );
};
const BarCard = (props) => {
  return (
    <div
      className={`card restBar__card  bar_card
        slide--left 
      `}>
      <p className="card__image">
        <img
          src={blackLable}
          alt=""
        />
      </p>
      <p className="card__content">
        {props.index < 5 ? " black label  " : " vokda "}
      </p>
      <p className="card__price">$ 20.00</p>
    </div>
  );
};
const Content = (props) => {
  return (
    <div className="restBar__main">
      <div className="main__left">
        <img
          src={restBar}
          alt=""
        />
      </div>
      <div className="main__right">
        <div className="restBar__menus">
          <button
            className={`link restBar__link  ${
              props.slide == 1 ? "current__link" : ""
            }`}
            onClick={() => {
              props.buttonClicked(1);
            }}>
            restuarant
          </button>
          <button
            className={`link restBar__link  ${
              props.slide == 2 ? "current__link" : ""
            }`}
            onClick={() => {
              props.buttonClicked(2);
            }}>
            bars
          </button>
        </div>
        <div className="main__right__content">
          {props.slide == 1
            ? foods.map((num, index) => (
                <RestCard
                  index={index}
                  key={index}
                  choosed={props.choosed}
                />
              ))
            : foods.map((num, index) => (
                <BarCard
                  key={index}
                  index={index}
                  choosed={props.choosed}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default () => {
  const [slide, setSlide] = useState(1);
  const [choosed, setChoosed] = useState(false);

  const buttonClicked = (slide) => {
    setSlide(slide);
    setChoosed(true);
  };
  return (
    <div className="restBar">
      <Header
        headerMain="rest & bars "
        headerSub="Restuarant & Bars"
      />
      <Content
        slide={slide}
        buttonClicked={buttonClicked}
        choosed={choosed}
      />
    </div>
  );
};
