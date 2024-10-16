import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IHomeIcon {
  color: string;
}

const HomeIcon = ({color}: IHomeIcon) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <Path
        d="M20.1585 10.2012L13.1585 4.07619C12.7815 3.74629 12.2185 3.74629 11.8415 4.07619L4.8415 10.2012C4.62448 10.3911 4.5 10.6654 4.5 10.9538V19.5C4.5 20.0523 4.94772 20.5 5.5 20.5H9.5C10.0523 20.5 10.5 20.0523 10.5 19.5V15.5C10.5 14.9477 10.9477 14.5 11.5 14.5H13.5C14.0523 14.5 14.5 14.9477 14.5 15.5V19.5C14.5 20.0523 14.9477 20.5 15.5 20.5H19.5C20.0523 20.5 20.5 20.0523 20.5 19.5V10.9538C20.5 10.6654 20.3755 10.3911 20.1585 10.2012Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HomeIcon;
