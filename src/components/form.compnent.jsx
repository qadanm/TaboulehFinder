import React, { useEffect } from "react";
import "./style.form.css";
import TaboulehPic from "../assets/tabouleh.png";
import TaboulehFlower from "../assets/flower.png";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";
import LogoParsley from "../assets/Tabouleh.Ingredients/parsley.png";

import Tabouleh from "../components/tabouleh.component";

const Form = props => {
  return (
    // <div className="submitScreen">
    //   <div className="alertAnimationContainer">
    //     <div
    //       className="alertAnimation"
    //       style={{
    //         height: "500px",
    //         width: "290px"
    //       }}
    //     ></div>
    //   </div>
    <>
      <div className="headerContainer" id="header">
        <div className="logoContainer">
          <div className="logo">
            <img src={TaboulehFlower} alt="" className="logoImg" />
          </div>
          <div className="title">
            <h3 className="text">
              <span className="green">Tabouleh </span>
              <span className="red">Finder</span>
              <span className="dot">.</span>
            </h3>
          </div>
        </div>
        {/* <div className="titleContainer">
          <div className="title">
            <h3 className="titleText">
              <span className="green">Tabouleh </span>
              <span className="red">Finder</span>
            </h3>
          </div>
        </div> */}
        {/* <div>{props.error ? error() : null}</div> */}
        <form
          onSubmit={props.loadTabouleh}
          onClick={useEffect(() => {
            window.scrollTo(5, 0);
          }, [])}
        >
          <div className="form-container" style={{}}>
            <div className="form">
              <input
                type="text"
                className="form-field"
                name="zip"
                autoComplete="off"
                placeholder="Enter a zipcode"
              />
            </div>
            <div className="button-container">
              <div className="button">
                <button
                  className="button-submit"
                  href="#topOfTaboulehSelection"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="errorContainer">
        <div>{props.error ? Error() : null}</div>
      </div>
    </>
  );
};

export var Error = function() {
  return (
    <div className="alert">
      <ScrollIntoViewIfNeeded
        options={{
          scrollMode: "always",
          block: "nearest"
        }}
      >
        <div className="expressionContainer">
          <h1>ooopsy daisy!</h1>
        </div>

        <div className="laughingTaboulehContainer">
          <iframe
            src="https://giphy.com/embed/7Xyhhl496aWel4811p"
            width="350vmin"
            height="auto"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>

        <div className="alertText">
          <div className="instructionsContainer">
            <h3>
              Looks like there is either no tabouleh around the specified
              location or you entered an invalid location. Please ensure to
              either use a valid North American Zip Code or a city name such as
              <span className="eg">
                {" "}
                (eg. &nbsp;Denver, &nbsp;97219, &nbsp;Münich).
              </span>
            </h3>
          </div>
        </div>
      </ScrollIntoViewIfNeeded>
    </div>
  );
};
// function error() {
//   return (
//     <div className="alert">
//       <ScrollIntoViewIfNeeded>
//         <div className="expressionContainer">
//           <h1>ooopsy daisy!</h1>
//         </div>
//         <div className="laughingTaboulehContainer">
//           <iframe
//             src="https://giphy.com/embed/7Xyhhl496aWel4811p"
//             width="160em"
//             height="auto"
//             frameBorder="0"
//             class="giphy-embed"
//             allowFullScreen
//           ></iframe>
//         </div>
//         <div className="alertText">
//           <div className="instructionsContainer">
//             <h3>
//               Looks like there is either no tabouleh around the specified
//               location or you entered an invalid location. Please ensure to
//               either use a valid North American Zip Code or a city name such as
//               <span className="eg"> (eg. Denver, 97219, Münich).</span>
//             </h3>
//           </div>
//         </div>
//       </ScrollIntoViewIfNeeded>
//     </div>
//   );
// }

export default Form;
