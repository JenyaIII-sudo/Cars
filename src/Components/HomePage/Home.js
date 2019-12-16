import React from "react";
import classes from "./Style";

const Home = () => (
  <>
    <header style={classes.homepageHeader}>
      <div style={classes.logo}>
        Exceed Team 
      </div>
    </header>
    <main>
      <section style={classes.sectionQuote}>PROJECT</section>
      <section style={classes.sectionCards}>Cards</section>
    </main>
    <footer style={classes.footer}>About</footer>
  </>
);

export default Home;
