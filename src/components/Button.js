import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';


class Button extends React.Component {

  static contextType = LanguageContext;

  renderButton(color){
    return (
        <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {(value) => value === 'english' ? "Submit" : "Voorleggen" }
          </LanguageContext.Consumer>
       </button>
    );
  }

  render(){
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;