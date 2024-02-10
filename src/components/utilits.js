function hexEncode(rgb) {
    let r = rgb.r.toString(16);
    if (r.length < 2) {
      r = '0' + r;
    }
  
    let g = rgb.g.toString(16);
    if (g.length < 2) {
      g = '0' + g;
    }
    let b = rgb.b.toString(16);
    if (b.length < 2) {
      b = '0' + b;
    }
  
    return `#${r}${g}${b}`;
  }
  
  function hexDecode(color) {
   
    const result = {};
    result.r = parseInt(color.slice(1, 3), 16);
    result.g = parseInt(color.slice(3, 5), 16);
    result.b = parseInt(color.slice(5), 16);
  
    return result;
  
  }
  
  export function hexToRGB(color) {
    
    const rgb = hexDecode(color)
    let r = rgb.r ? rgb.r : 0
    let g = rgb.g ? rgb.r : 0
    let b = rgb.b ? rgb.r : 0
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  export function isHexColor(color) {
    return /^#[\dA-Fa-f]{6}$/.test(color);
  }
  
  export function getContrastColor(color) {
    const rgb = hexDecode(color);
  
    rgb.r = Math.trunc(rgb.r / 2);
    rgb.g = Math.trunc(rgb.g / 2);
    rgb.b = Math.trunc(rgb.b / 2);
  
    return hexEncode(rgb);
  }