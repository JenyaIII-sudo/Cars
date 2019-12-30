import React from "react";
import classes from "./Style";
import "./styles.css";

const Home = () => {
  return (
    <>
      <header style={classes.homepageHeader}>
        <div style={classes.logo}>Exceed Team</div>
      </header>
      <main>
        <section style={classes.sectionCards}>
          <div className="row">
            <div className="col s12 l4" style={classes.cardBlock}>
              {/* <div className="center promo">
                <i className="material-icons" style={classes.icon}>
                  flash_on
                </i>
                <p style={classes.header}>Speeds up development</p>
                <p style={classes.content}>
                  We did most of the heavy lifting for you to provide a default
                  stylings that incorporate our custom components.
                </p>
              </div>
            </div>
            <div className="col s12 l4" style={classes.cardBlock}>
              <div className="center promo">
                <i className="material-icons" style={classes.icon}>
                  group
                </i>
                <p style={classes.header}>User Experience Focused</p>
                <p style={classes.content}>
                  By utilizing elements and principles of Material Design, we
                  were able to create a framework that focuses on User
                  Experience.
                </p>
              </div>
            </div>
            <div className="col s12 l4" style={classes.cardBlock}>
              <div className="center promo">
                <i className="material-icons" style={classes.icon}>
                  settings
                </i>
                <p style={classes.header}>Easy to work with</p>
                <p style={classes.content}>
                  We have provided detailed documentation as well as specific
                  code examples to help new users get started.
                </p>
              </div> */}
              <div className="faces">
                <div className="facecont">
                  <div className="face-avatar"></div>
                  <p className="center" style={classes.facestext}>
                    Joshua <br />
                    DESIGNER
                  </p>
                </div>
                <div className="facecont">
                  <div className="face-avatartwo"></div>
                  <p className="center" style={classes.facestext}>
                    Adam <br />
                    MERN DEVELOPER
                  </p>
                </div>
                <div className="facecont">
                  <div className="face-avatarthree"></div>
                  <p className="center" style={classes.facestext}>
                    Mariya <br />
                    HR MANAGER
                  </p>
                </div>
                <div className="facecont">
                  <div className="face-avatarfour"></div>
                  <p className="center" style={classes.facestext}>
                    Joseph <br />
                    TEAM LEADER
                  </p>
                </div>
              </div>
            </div>
            <div className="col s4" style={classes.faceabout}>
              <h5 style={classes.tagline}>
                Scalable software, mobile and web applications development
              </h5>
            </div>
          </div>
        </section>
      </main>
      <footer className="page-footer" style={classes.pageFooter}>
        <div className="footer-copyright" style={classes.footerCopyright}>
          <div className="col l6 s12">
            <h5 className="white-text">EXCEED</h5>
            <p className="grey-text text-lighten-4">
              COPYRIGHT EXCEED TEAM GROUP / COPYRIGHT 2019
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">
              <a className="grey-text text-lighten-3" href="#!">
                About
              </a>
            </h5>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
