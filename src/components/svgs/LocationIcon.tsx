import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

interface ILocationIcon {
  color: string;
}

const LocationIcon = ({color}: ILocationIcon) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Circle cx="12.5" cy="11" r="2" stroke={color} strokeWidth="1.5" />
      <Path
        d="M12.5 22L18 16.5C21.0376 13.4624 21.0376 8.53757 18 5.50001C14.9624 2.46244 10.0376 2.46244 7 5.50001C3.96243 8.53757 3.96243 13.4624 7 16.5L12.5 22Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LocationIcon;
