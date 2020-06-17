import React from "react";
import LebaneseFlag from "../assets/lebanon.png";
import Parsley from "../assets/tabouleh.png";
import Bulgur from "../assets/wheat.png";
import Lemon from "../assets/Tabouleh.Ingredients/lemon.png";
import OliveOil from "../assets/Tabouleh.Ingredients/olive-oil.png";
import ParsleyIngredient from "../assets/Tabouleh.Ingredients/parsley.png";
import SaltAndPepper from "../assets/Tabouleh.Ingredients/salt-and-pepper.png";
import Tomato from "../assets/Tabouleh.Ingredients/tomato.png";
import BulgurIngredient from "../assets/Tabouleh.Ingredients/wheat(1).png";

import "./style.info.css";

// Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const Info = () => {
  return (
    <div className="infoContainer">
      <div className="introContainer">
        <div className="intro">
          <h4 className="introText">
            Eaten by over 400 million Middle Easterners, tabouleh is a staple in
            almost every Arab household as it is part of the crucial foundation
            to lunch and dinner. Given that there are more Lebanese people
            outside of Lebanon than there are in Lebanon, they have gifted the
            entire world with such a magnificent culinary phenomenon.
          </h4>
          <hr className="hr" />
        </div>
      </div>

      <div className="infoCardContainers">
        <div className="infoCardContainer">
          <div className="pngContainer">
            <img src={LebaneseFlag} alt="" className="png" />
          </div>
          <div className="contentContainer">
            <div className="questionContainer">
              <h4 className="question">What is Tabouleh?</h4>
            </div>
            <div className="answerContainer">
              <h5 className="answer">
                Tabouleh is a Middle Eastern salad dish that can be served with
                any meal. While the salad’s roots are Lebanese, there are tasty
                variations across the Levant.
              </h5>
            </div>
          </div>
        </div>
        <div className="infoCardContainer" id="reverse">
          <div className="pngContainer">
            <img src={Parsley} alt="" className="png" />
          </div>
          <div className="contentContainer">
            <div className="questionContainer">
              <h4 className="question">Why Tabouleh?</h4>
            </div>
            <div className="answerContainer">
              <h5 className="answer">
                Tabouleh is unlike any other salad, the unique thing about
                tabouleh is that it will never become soggy. This is due to an
                ingredient in tabouleh called bulgur. This form of wheat absorbs
                the moisture in the salad and you end up with flavor packed
                little specs all throughout your salad. Its like flavor
                confetti!
              </h5>
            </div>
          </div>
        </div>
        <div className="infoCardContainer">
          <div className="pngContainer">
            <img src={Bulgur} alt="" className="png" />
          </div>
          <div className="contentContainer">
            <div className="questionContainer">
              <h4 className="question">Bulgur?</h4>
            </div>
            <div className="answerContainer">
              <h5 className="answer">
                Bulgur is a cereal food made from the cracked parboiled groats
                of several different wheat species, most often from durum wheat.
                It originates in Middle Eastern cuisine.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="taboulehIngredientsContainer">
        <h1 className="ingredietsTitle">Ingrediets</h1>
        <div className="ingredients">
          <ul className="list">
            <li className="ingredient">
              Parsley{" "}
              <span className="image">
                <img src={ParsleyIngredient} alt="" className="img" />
              </span>
            </li>
            <li className="ingredient">
              Tomato{" "}
              <span className="image">
                <img src={Tomato} alt="" className="img" />
              </span>
            </li>
            <li className="ingredient">
              Bulgur{" "}
              <span className="image">
                <img src={BulgurIngredient} alt="" className="img" />
              </span>
            </li>
            <li className="ingredient">
              Salt &#38; Pepper{" "}
              <span className="image">
                <img src={SaltAndPepper} alt="" className="img" />
              </span>
            </li>
            <li className="ingredient">
              Olive Oil{" "}
              <span className="image">
                <img src={OliveOil} alt="" className="img" />
              </span>
            </li>
            <li className="ingredient">
              Lemon{" "}
              <span className="image">
                <img src={Lemon} alt="" className="img" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
