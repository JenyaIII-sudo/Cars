import React from "react";
import classes from "./Style";

const Home = () => (
  <>
    <header style={classes.homepageHeader}>HOME</header>
    <main>
      <section className="section-quote">QUote</section>
      <section className="section-cards">Cards</section>
    </main>
    <footer className="footer">footer</footer>
  </>
);

export default Home;
