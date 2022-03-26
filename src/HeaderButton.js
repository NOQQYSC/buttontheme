import React from 'react';
import ThemeContext from'./ThemeContext';
import Header from './Header';

function HeaderButton() {
  const themeContext = React.useContext(ThemeContext);
  return (
    <div>
      <button style={themeContext}>Press me</button>
    </div>
  );
}

export default HeaderButton;
