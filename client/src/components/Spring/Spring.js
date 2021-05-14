import { Spring } from 'react-spring';
import React, { useState } from 'react';

export default function SpringC() {
  const [showing, setShowing] = useState(false);
    return (
      <Spring
        style={{ opacity: showing ? 1 : 0 }}
        enter={{ opacity: 0 }}
        from={{ opacity:0 }}
        to={{ opacity: 1}}>
        { props => (
          <div style={props}>
          <h1 style={Sstyle}>hi</h1>
          <button onClick={() => setShowing(val => !val)}>a</button>
        </div>
        )}
      </Spring>
    )
  }
  const Sstyle = {
    background: 'steelblue',
    color: 'white',
    padding: '1.3rem'
  }
