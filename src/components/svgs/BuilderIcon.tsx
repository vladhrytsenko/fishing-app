import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IBuilderIcon {
  color: string;
}

const BuilderIcon = ({color}: IBuilderIcon) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <Path
        d="M16 10L8.7 5.7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.5 16.1007V8.89926C20.4997 8.58354 20.4174 8.27346 20.2614 8.00012C20.1054 7.72678 19.8811 7.4998 19.6111 7.34194L13.3889 3.7412C13.1186 3.58319 12.8121 3.5 12.5 3.5C12.1879 3.5 11.8814 3.58319 11.6111 3.7412L5.38889 7.34194C5.1189 7.4998 4.89465 7.72678 4.73863 8.00012C4.58262 8.27346 4.50032 8.58354 4.5 8.89926V16.1007C4.50032 16.4165 4.58262 16.7265 4.73863 16.9999C4.89465 17.2732 5.1189 17.5002 5.38889 17.6581L11.6111 21.2588C11.8814 21.4168 12.1879 21.5 12.5 21.5C12.8121 21.5 13.1186 21.4168 13.3889 21.2588L19.6111 17.6581C19.8811 17.5002 20.1054 17.2732 20.2614 16.9999C20.4174 16.7265 20.4997 16.4165 20.5 16.1007Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 8.5L12.5 12.5L19.5 8.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 21.5V12.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BuilderIcon;
