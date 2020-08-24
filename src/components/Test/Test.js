import React, { Component } from 'react';
import config from '../../config/config.global';
class Test extends Component {
  render() {
    return (
      <div>
        
        { process.env.NODE_ENV }

      </div>
    );
  }
}

export default Test;