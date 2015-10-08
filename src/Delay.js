import React from 'react';

let Delay = React.createClass({

  displayName: 'Delay',

  propTypes: {
    wait: React.PropTypes.number
  },

  getDefaultProps()
  {
    return {
      wait: 250
    };
  },

  getInitialState()
  {
    return {
      waiting: true
    };
  },

  componentDidMount()
  {
    setTimeout(() => {
      this.setState({
        waiting: false
      });
    }, this.props.wait);
  },

  render()
  {
    if (! this.state.waiting) {
      return this.props.children;
    }

    return null;
  }
});

export default Delay;
