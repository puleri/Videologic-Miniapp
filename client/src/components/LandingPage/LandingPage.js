import React, { Component } from 'react';
import Footer from "../Footer/Footer.js";
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

        <div className="landing-3">
          <div className="h2-landing-header">
            <h4>Happily managing your database in Columbus, OH<img className="ohio" src={ohio} alt="ohio"/></h4>
          </div>
          <h2 className="pt2-header">About us</h2>
            <div className="landing-pt2">
                <img className="pt2-img" src={human2} alt="people in front of wireframe" />
                <p className="pt2-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate libero nec erat viverra, sed ullamcorper sem fermentum. Suspendisse dapibus congue ipsum. Nullam bibendum nunc id metus elementum venenatis. Integer pharetra sagittis sem nec luctus. Sed volutpat dignissim justo vel aliquet. Morbi nec porta nisi. Sed ultrices luctus malesuada. Vivamus sit amet est porttitor ex placerat viverra vel id eros.</p>
            </div>
        </div>

          <div className="landing-4">
              <div id="db-icons">
                <div className="db-group">
                  <label className="db1">A</label>
                  <h3>Administrator</h3>
                  <p>Administrators are able to create, update, and delete users, as well as tailor unique roles to them with ease.</p>
                </div>

                <div className="db-group">
                  <label className="db1">U</label>
                  <h3>User</h3>
                  <p>Administrators are able to create, update, and delete users, as well as tailor unique roles to them with ease.</p>

                </div>

                <div className="db-group">
                  <label className="db1">C</label>
                  <h3>Customer</h3>
                  <p>Administrators are able to create, update, and delete users, as well as tailor unique roles to them with ease.</p>

                </div>
              </div>
              <img className="landing-database" src={database} alt="database"/>
              <img className="landing-database" src={database_white} alt="database white"/>
              <img className="landing-database" src={database_grey} alt="database grey"/>
          </div>
          <Footer className="Landing-Footer"/>
      </>
    )
  }
}

export default withRouter(LandingPage);
