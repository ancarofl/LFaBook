import React from "react";
import Svg, { Path } from "react-native-svg"

import { colors } from "../src/constants/colors";
import { sizes } from "../src/constants/sizes";

const ArrowIcon = ({color, height, width}) => {
  	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 25.451 25.451"
			fill={color || colors.black}
			height={height || sizes.defaultIconSize}
            width={width || sizes.defaultIconSize}
		>
			<Path d="M20.982.521v2.006L8.57 12.315c-.121.101-.195.251-.195.41s.074.311.195.41l12.412 9.79v2.005a.52.52 0 01-.297.469.519.519 0 01-.549-.061L4.664 13.136a.531.531 0 010-.82L20.136.113a.523.523 0 01.846.408z" />
	  </Svg>
	)
}

export default ArrowIcon;
