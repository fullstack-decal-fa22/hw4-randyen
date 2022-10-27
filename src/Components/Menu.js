import React from 'react';
/* Add any imports you think you might need here! */
import Color from './Color';

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color color='red' handleClick={props.update}/>
          <Color color='pink' handleClick={props.update}/>
          <Color color='blue' handleClick={props.update}/>
          <Color color='green' handleClick={props.update}/>

      </div>
    );
}

export default Menu;