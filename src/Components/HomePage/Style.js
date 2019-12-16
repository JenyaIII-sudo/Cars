import Background from "./img/proxyclick-visitor-management-system-3h7j04-6y3Q-unsplash.jpg";

const classes = {
  homepageHeader: {
    height: "50vh",
    background: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "60px"
  },

  logo: {
    fontFamily: "'Indie Flower', cursive",
    backgroundColor: "rgba(163, 83, 83, 0.6)",
    color: "white"
  },

  sectionQuote: {
    height: "20vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  sectionCards: {
    height: "30vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  footer: {
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ee6e73",
    fontFamily: "'Indie Flower', cursive",
    color: "white",
    fontSize: "20px"
  }
};

export default classes;
