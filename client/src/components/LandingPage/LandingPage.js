import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./LandingPage.css";
import ohio from "./ohio.png";
import database from "./database.png";
import database_white from "./database-white.png";
import database_grey from "./database-grey.png";


class LandingPage extends Component {

  render() {
    return (
      <>
        <div className="landing-2">
          <h1 className="landing-header">Reliable relational databases. We make 'em intuitive. You use 'em intuitively.</h1>
          <h4 className="landing-header">Happily managing your database in Columbus, OH<img className="ohio" src={ohio} alt="ohio"/></h4>
        </div>
        <div className="landing-3">
            <div id="db-icons">
            <label className="db1">A</label><label className="db1">C</label><label className="db1">U</label>
            </div>
            <div id="db-icons">
            <label className="db2">A</label><label className="db1">C</label><label className="db1">U</label>
            </div>
            <img className="landing-database" src={database} alt="database"/>
            <img className="landing-database" src={database_white} alt="database white"/>
            <img className="landing-database" src={database_grey} alt="database grey"/>
        </div>
      </>
    )
  }
}

export default withRouter(LandingPage);
