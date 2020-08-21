import React, { Component } from 'react';
import config from '../../config/config.global';
class Test extends Component {
  render() {
    return (
      <div>
        
        { config.authUser }

      </div>
    );
  }
}

export default Test;