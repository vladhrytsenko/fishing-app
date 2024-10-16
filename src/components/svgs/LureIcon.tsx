import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface ILureIcon {
  color: string;
}

const LureIcon = ({color}: ILureIcon) => {
  return (
    <Svg width="37" height="36" viewBox="0 0 37 36" fill="none">
      <Path
        d="M30.4089 0.000911579C29.1711 -0.0244434 27.8624 0.484961 27.0268 0.800746L22.5409 3.17259L26.806 4.12071L26.4276 2.58174C28.9977 1.12729 30.9213 1.22948 31.8516 1.73197C32.3246 1.98782 32.5454 2.31897 32.6005 2.64551C32.6478 2.97282 32.5454 3.35161 32.1118 3.77496L24.1413 11.5428L4.9894 22.7451C2.73781 24.9579 1.28247 28.0543 0.561114 30.7281C0.196886 32.0727 0.0187141 33.3174 0.00136994 34.247C-0.00730215 34.7157 0.0258095 35.1076 0.0833607 35.3842C0.13697 35.6377 0.229209 35.776 0.226844 35.776C0.218961 35.7683 0.360079 35.8605 0.633644 35.9143C0.915093 35.9758 1.31716 36.0065 1.79649 35.9988C2.75594 35.9835 4.0268 35.8068 5.40802 35.4533C8.08218 34.7695 11.1647 33.4019 13.4116 31.312L13.4037 31.289C16.4941 30.2671 18.7252 27.9083 21.248 25.78C18.1024 25.78 14.9095 25.8338 11.622 25.2268C14.5626 25.1346 16.7858 24.8119 17.7634 24.374L24.9454 12.7184L33.1209 4.75536C33.5545 4.332 33.9408 4.23596 34.2798 4.28514C34.6109 4.33508 34.9499 4.54944 35.2179 5.01121C35.7304 5.91861 35.8329 7.78566 34.3428 10.2981L32.7661 9.92162L33.7358 14.086L36.4636 9.18402C37.0785 7.83944 37.2756 5.78031 36.4557 4.33969C36.0221 3.57366 35.3047 3.0389 34.4926 2.9175C34.3901 2.90214 34.2798 2.89445 34.1773 2.89292H34.0196C34.0275 2.74079 34.0196 2.58866 33.996 2.43883C33.8777 1.64053 33.3258 0.948266 32.5375 0.52261C31.9541 0.203751 31.2288 0.0178149 30.4089 0.000911579ZM9.04399 12.5109C6.83655 15.2001 5.7825 17.8892 5.35126 20.9088L11.346 17.4052C9.95062 16.0683 9.99004 14.7314 9.04399 12.5109ZM5.58304 26.5868C6.0269 26.5944 6.45104 26.7635 6.7656 27.0708C7.42783 27.7162 7.42783 28.7688 6.7656 29.4142C6.10021 30.0673 5.02014 30.0673 4.35476 29.4142C3.69174 28.7688 3.69174 27.7162 4.35476 27.0708C4.68036 26.7558 5.12342 26.5791 5.58304 26.5868Z"
        fill={color}
      />
    </Svg>
  );
};

export default LureIcon;
