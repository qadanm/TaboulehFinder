import React, { useEffect } from "react";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";
import "./style.tabouleh.css";
import Phone from "../assets/call.png";
import Map from "../assets/location.png";
import error from "../components/form.compnent";

const Tabouleh = props => {
  return (
    <div className="container">
      <div className="flex-col-1" id="taboulehNearContainerIdBannerHeader">
        <div className="taboulehNearContainer">
          <div className="taboulehNear" id="topOfTaboulehSelection">
            {props.businesses.length > 0 ? (
              <ScrollIntoViewIfNeeded>
                <h2>
                  Tabouleh near&nbsp;
                  {props.businesses[0].location.city}
                </h2>
              </ScrollIntoViewIfNeeded>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex-col-1">
        <div className="cards">
          {props.businesses.map(business => (
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <img
                    border="0px"
                    style={{
                      backgroundImage: `url(${business.image_url})`,
                      outline: "none",
                      textDecoration: "none",
                      overflow: "auto",
                      outline: "none",
                      boxShadow: "none",
                      border: "0"
                    }}
                  />
                </div>
              </div>
              <div className="title-container">
                <div className="businessTitle">
                  <p>{business.name}</p>
                </div>
              </div>
              <div className="navContainer">
                <div className="address-container">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${business.coordinates.latitude},${business.coordinates.longitude}&query_place_id=CwdUUYKWbIWGJEYiE401tQ`}
                  >
                    <div className="address">
                      <img src={Map} alt="" />
                    </div>
                  </a>
                </div>
                <div className="phone-number-container">
                  <div className="phone-number">
                    <a href={`tel:${business.display_phone}`}>
                      <img src={Phone} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabouleh;
