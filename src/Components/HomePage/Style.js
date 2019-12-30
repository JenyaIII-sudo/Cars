import Background from "./img/proxyclick-visitor-management-system-3h7j04-6y3Q-unsplash.jpg";
import { relative } from "path";

const classes = {
  homepageHeader: {
    height: "50vh",
    background: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "60px",
    boxShadow: "15px 15px 15px"
  },

  logo: {
    fontFamily: "'Indie Flower', cursive",
    backgroundColor: "rgba(163, 83, 83, 0.6)",
    color: "white"
  },

  sectionQuote: {
    height: "6vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  footerblock: {
    padding: "0"
  },

  sectionCards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "75px"
  },

  sectionContainer: {
    alignSelf: "flex-end"
  },

  footerCopyright: {
    display: "flex",
    justifyContent: "space-around",
    height: "8vh"
  },

  pageFooter: {
    paddingTop: "0px",
    position: "relative",
    top: "35px"
  },

  icon: {
    margin: "20px 0",
    color: "#ee6e73",
    fontSize: "7rem",
    display: "block"
  },

  header: {
    fontSize: "1.7rem",
    fontWeight: "500",
    marginTop: "5px",
    marginBottom: "0"
  },

  content: {
    textAlign: "center",
    verticalAlign: "middle",
    maxWidth: "28rem",
    margin: "0 auto"
  },

  cardBlock: {
    padding: "0px 3.75rem",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "0px",
    width: "26.333333%"
  },
  faceabout: {
    width: "44%",
    fontSize: "45px"
  },
  tagline: {
    fontSize: "50px",
    color: "linear-gradient(0deg,#ff8a00,#e52e71)",
    background: "-webkit-linear-gradient(#fdbb2d,#22c1c3)",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent"
  },
  facestext: {
    color: "white",
    color: "linear-gradient(0deg,#ff8a00,#e52e71)",
    background: "-webkit-linear-gradient(#fdbb2d,#22c1c3)",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent"
  }
};

export default classes;
