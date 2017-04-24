import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Delay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waiting: true
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        waiting: false
      });
    }, this.props.wait);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    if (!this.state.waiting) {
      return this.props.children;
    }

    return null;
  }
}

Delay.propTypes = {
  wait: PropTypes.number
};

Delay.defaultProps = {
  wait: 250
};

export default Delay;
