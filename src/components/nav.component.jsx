import React from "react";
import "./style.nav.css";

const NavBar = () => {
  return (
    <div className="navContainer">
      <links>
        <i class="fas fa-dice" id="logo"></i>
        <a class="drop-down" href="">
          About
          <span class="drop-down-text">
            War (also known as Battle in the United Kingdom) is a card game
            typically played by two players. It uses a standard playing card
            deck. Due to its simplicity, it is played most often by children.
            There are many variations, including the German 32-card variant Tod
            und Leben ("Life and Death").
          </span>
        </a>
        <a class="drop-down" href="">
          Objective
          <span class="drop-down-text">
            The goal is to avoid losing all of your cards
          </span>
        </a>
        <a class="drop-down" href="">
          The Deal
          <span class="drop-down-text">
            The deck is divided evenly, with each player receiving 26 cards,
            dealt one at a time, face down. Anyone may deal first. Each player
            places their stack of cards face down, in front of them.
          </span>
        </a>
        <a class="drop-down" href="">
          The Play
          <span class="drop-down-text">
            Each player turns up a card at the same time and the player with the
            higher card takes both cards and puts them, face down, on the bottom
            of his stack. If the players encounter the unfortonate situation of
            revealing two of the same cards, it is War... Both players must
            sacrifice 3 cards from their deck.
          </span>
        </a>
        <a class="drop-down" href="">
          The Score
          <span class="drop-down-text">
            The game ends when one player has 0 points.
          </span>
        </a>
      </links>
    </div>
  );
};

export default NavBar;
