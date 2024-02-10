import { useState } from "react";

import { hexToRGB, getContrastColor, isHexColor } from './utilits';


function ColorForm() {
  const [formState, setColor] = useState('#FFFFFF');
  const [state, setState] = useState(true);
  

  const onChange = (event) => {
    
    const value = event.target.value;
  
    
      if (value.length < 2) {
        setColor('#');
      } else if (value.length > 7) {
        setColor(value.slice(0, 7));
      } else {
        setColor(value);
      }
  
      if (value.length !== 7) {
        return;
      }
       
      const newState = isHexColor(value);
    setState(newState);
    if (newState) {
      setColor(value);
    }
  };

  const background = getContrastColor(formState);
  const rezult = hexToRGB(formState)
  

  return (
    <form className="ColorForm" style={{ backgroundColor: rezult }}>
      <div className="ColorForm_field">
        <input
          className="ColorInput"
          name="color"
          value={formState}
          state={state}
          onChange={onChange}
        />
        <label className="ColorForm-rgb" style={{ backgroundColor: background }}>
        {state ? rezult : 'Ошибка'}
        </label>
      </div>
    </form>
  );
}

export default ColorForm;