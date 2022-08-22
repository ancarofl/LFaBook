import React from "react";
import Svg, { Path } from "react-native-svg";

import { colors } from "../src/constants/colors";
import { sizes } from "../src/constants/sizes";

const WishListIcon = ({color, height, width}) => {
	return (
        <Svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 482.207 482.207"
			fill={color || colors.white}
			height={height || sizes.defaultIconSize}
            width={width || sizes.defaultIconSize}
		>
     		<Path d="M482.207 186.973L322.508 153.269 241.104 11.803 159.699 153.269 0 186.973 109.388 308.108 92.094 470.404 241.104 403.803 390.113 470.404 372.818 308.108z" />
      	</Svg>
	);
}

export default WishListIcon;
