/**
 * Dependencies
 */
const React = require('react');

/**
 * Component
 */
const Main = React.createClass({
  propTypes: {},

  render() {
    const {
      data = {}
    } = this.props;

    return (
      <div style={{ height: '50vh', border: '1px solid red', margin: '10px' }}>
        {JSON.stringify(data)}
      </div>
    );
  }
});

module.exports = Main;
