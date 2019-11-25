import React, { Component } from "react";

class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        <h1>Dog</h1>
        <img
          alt="Dog"
          src="https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    );
  }
}

export default Dog;
