import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
  };

  // este objeto styles son estilos de css en camel

  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  render() {
    return (
      // ponemos React.Fragment en lugar de div
      <React.Fragment>
        {/* en className usamos clases de bootstrap */}
        {/* tambien podemos asignar style estilos de css*/}
        {/* en style podemos pasar un objeto tambien */}
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          onMouseEnter={this.handleHove}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* Tomamos una lista y la mapeamos a un tag li cada una */}
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  // en este metodo preguntamos si hay tags
  // es decir vamos a render un tag condicionalmente

  handleIncrement() {
    console.log("Increment Clicked");
  }
  handleHove() {
    console.log("Hoot hoot 2");
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // en este metodo podemos elegir la clase del tag dinamicamente
  // esto podria estar dentro de render pero lo sacamos mejor
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
