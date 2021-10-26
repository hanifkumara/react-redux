import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Classcomponent extends Component {
  render() {
    console.log("props profile", this.props.profile)
    return (
      <div>
        <h1>Hello World! Class Component</h1>
        <Link to="/function-component">
          <Button variant="primary">To Function Component</Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps) (Classcomponent);
