import {RFValue}  from 'react-native-responsive-fontsize';

const colors = {
    primary: "#9DA3B4",
    title:"#9d9da7",
    secondary: "#8f3ca6",
    black: "#323643",
    white: "#FFFFFF",
    gray: "#9DA3B4",
    gray2: "#676767",
  };
  
  const sizes = {
    // global sizes
    padding: RFValue(14),
  
    // font sizes
    title: RFValue(25),
    header: RFValue(20),
    body: RFValue(18),
    caption: RFValue(14),
    thumbnail: RFValue(40),
    iconSize:RFValue(18),
    dotSize: RFValue(12)
  };
  

  
  export { colors, sizes };