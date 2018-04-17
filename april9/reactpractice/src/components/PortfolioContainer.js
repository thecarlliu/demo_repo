import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  carlRender(pageName) {
      if (pageName === "Blog") {
          return <Blog/>;
      }
      else if (pageName === "About") {
          return <About/>;
      }
      else if (pageName === "Contact") {
          return <Contact/>;
      }
      else if (pageName === "Home") {
          return <Home/>;
      }
  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
          {this.carlRender(this.state.currentPage)}
      </div>
    );
  }
}

export default PortfolioContainer;
