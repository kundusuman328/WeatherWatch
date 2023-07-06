import {svg1,svg10,svg11,svg2,svg3,svg4,svg9} from "../svg";

const getIcon = (iconString) => {
    const iconCode = iconString.substring(0, 2);
    let icon = null;
    switch (iconCode) {
      case "01":
        icon = svg1;
        break;
      case "02":
        icon = svg2;
        break;
      case "03":
        icon = svg3;
        break;
      case "04":
        icon = svg4;
        break;
      case "09":
        icon = svg9;
        break;
      case "10":
        icon = svg10;
        break;
      case "11":
        icon = svg11;
        break;
      default:
        icon = null;
    }
    return icon;
  };
  
  export default getIcon