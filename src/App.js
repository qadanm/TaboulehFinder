import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tabouleh from "./components/tabouleh.component";
import Form from "./components/form.compnent";
import Info from "./components/info.component";
import FooterPage from "./components/footer.component";
// import NavBar from "./components/nav.component";
var cors = require("cors");

//api call https://api.yelp.com/v3/businesses/search?term=restaurants,halal,arabic,persian,mideastern,mediterranean&location=90292
const API_key =
  "3ab1jzIb3ZM2lLYGjPctosyfxxQGZaTz1iioASxjHOKntTesAwVMpQFWlSe8BnGcwUxu7-A3Il_xGPtGbIrhcvoucbvnXqPnOE2MvWfm2v16p8qzo6rMREgmY2_PXnYx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      businesses: [],
      name: undefined,
      address: undefined,
      number: "",
      image: "",
      error: false
    };
  }

  getTabouleh = async e => {
    e.preventDefault();

    const zip = e.target.elements.zip.value;
    console.log(zip);

    const zipcodeRegex = /^\d{5}$/;
    const cityNameRegex = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;

    if (zipcodeRegex.test(zip) == true || cityNameRegex.test(zip) == true) {
      // 'zip' is the user's input into the textfield; it does not ncsrly need to be a zipcode
      const api_call = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants,lebanese&location=${zip}`,
        {
          headers: {
            Authorization:
              "Bearer 3ab1jzIb3ZM2lLYGjPctosyfxxQGZaTz1iioASxjHOKntTesAwVMpQFWlSe8BnGcwUxu7-A3Il_xGPtGbIrhcvoucbvnXqPnOE2MvWfm2v16p8qzo6rMREgmY2_PXnYx",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );

      const response = await api_call.json();

      console.log(response);
      // if (!response.businesses.name) {
      //   this.setState({
      //     error: true,
      //     businesses: []
      //   });
      // }

      // if (
      //   typeof this.setState({
      //     businesses: response.businesses,
      //     name: response.businesses.name
      //   }) == "undefined"
      // ) {
      //   this.setState({
      //     error: true,
      //     businesses: []
      //   });
      // }
      try {
        this.setState({
          businesses: response.businesses,
          name: response.businesses.name,
          address: response.businesses.location,
          number: response.businesses.display_phone,
          image: response.businesses.image_url,
          error: false
        });
      } catch (error) {
        console.error(error);
        this.setState({
          error: true,
          businesses: []
        });
      }
      // this.setState({
      //   businesses: response.businesses,
      //   name: response.businesses.name,
      //   address: response.businesses.location,
      //   number: response.businesses.display_phone,
      //   image: response.businesses.image_url,
      //   error: false
      // });
    } else {
      this.setState({
        error: true,
        businesses: []
      });
    }
  };

  state = {};
  render() {
    return (
      <div className="App">
        {/* <NavBar /> */}
        <Form loadTabouleh={this.getTabouleh} error={this.state.error} />
        <Tabouleh
          businesses={this.state.businesses}
          name={this.state.name}
          address={this.state.address}
          number={this.state.number}
          image={this.state.image}
        />
        <Info />
        {/* <Tabouleh
          businesses={this.state.businesses}
          name={this.state.name}
          address={this.state.address}
          number={this.state.number}
          image={this.state.image}
        /> */}
        <FooterPage />
      </div>
    );
  }
}
// App.use(cors());

export default App;
