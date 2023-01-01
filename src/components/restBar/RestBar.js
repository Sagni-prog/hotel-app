import React from "react";
import "./restBar.css";
import images from "../../constants/images";

const { blackLable, burger, restBar, cake } = images;

const foods = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Header = (props) => {
  return (
    <div className="header restBar__header">
      <h4 className="header__small">resto & bar </h4>
      <h2 className="header__large">restuarant & bars </h2>
    </div>
  );
};
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
              props.select(1);
            }}>
            restuarant
          </button>
          <button
            className={`link restBar__link  ${
              props.slide == 2 ? "current__link" : ""
            }`}
            onClick={() => {
              props.select(2);
            }}>
            bars
          </button>
        </div>
        <div className="main__right__content">
          {props.slide == 1
            ? foods.map((num, index) => (
                <RestCard
                  index={index}
                  choosed={props.choosed}
                />
              ))
            : foods.map((num, index) => (
                <BarCard
                  index={index}
                  choosed={props.choosed}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default class RestBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slide: 1, choosed: false };
    this.select = this.select.bind(this);
  }
  select(slide) {
    if (slide == this.state.slide) return;
    this.setState((prevState) => ({ slide: slide, choosed: true }));
  }

  render() {
    return (
      <div className="restBar">
        <Header />
        <Content
          select={this.select}
          slide={this.state.slide}
          choosed={this.state.choosed}
        />
      </div>
    );
  }
}
