import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";

export const Layout = ({ children }) => {
  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div id="content">{children}</div>
        <Footer autor={"Lisandro Palavecino 2023"}/>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};