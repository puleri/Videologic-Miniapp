import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./LandingPage.css";
import ohio from "./ohio.png";
import database from "./database.png";
import database_white from "./database-white.png";
import database_grey from "./database-grey.png";
import human from "./Human.png";
import human2 from "./Human-pt2.png";

class LandingPage extends Component {

  render() {
    return (
      <>
        <div className="landing-2">
          <h1 className="h1-landing-header">Reliable relational databases. We make 'em intuitive. You use 'em intuitively.</h1>
          <img className="human h1-landing-header" src={human} alt="minimalist art of a human in a circle surrounded by small shapes" />
        </div>
        <div className="h2-landing-header">
        <h4>Happily managing your database in Columbus, OH<img className="ohio" src={ohio} alt="ohio"/></h4>
        </div>
        <div className="landing-pt2">
        <div>
        <h4 className="pt2-copy">Hello world</h4>
        </div>
        <div className="landing-3">
            <div id="db-icons">
            <label className="db1">A</label><label className="db1">C</label><label className="db1">U</label>
            </div>
            <img className="landing-database" src={database} alt="database"/>
            <img className="landing-database" src={database_white} alt="database white"/>
            <img className="landing-database" src={database_grey} alt="database grey"/>
        </div>
        <img src={human2} alt="people in front of wireframe" />
        </div>
      </>
    )
  }
}

export default withRouter(LandingPage);
