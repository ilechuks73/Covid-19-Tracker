import React from "react";
import styles from "./App.module.css";

import Cards from "./components/Card/Card";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";


import { fetch_Data } from "./api/";
class App extends React.Component {
  state = {};
  async componentDidMount() {
    fetch_Data().then((data) => {
      this.setState({ data: data, country: "global" });
    });
  }
  handleCountryChange = async (country) => {
    fetch_Data(country).then((data) => {
      this.setState({ data: data, country: country });
    });
  };
  render() {
    return (
      <div className={styles.container}>
        <h1>
          Covid-19 Tracker
        </h1>
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country}/>
        
      </div>
    );
  }
}

export default App;
