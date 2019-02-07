import React, { Component } from "react";
import axios from "axios";

class ResourceList extends Component {
  state = { resources: [] };

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
      .then(res => {
        this.setState({ resources: res.data });
      })
      .catch(err => {
        console.log("Error of it all " + err);
      });
  }

  async componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.resource !== this.props.resource) {
      axios
        .get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
        .then(res => {
          this.setState({ resources: res.data });
        })
        .catch(err => {
          console.log("Error of it all " + err);
        });
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
