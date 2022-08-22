import React from "react";
import Svg, { Path } from "react-native-svg"

import { colors } from "../src/constants/colors";
import { sizes } from "../src/constants/sizes";

const BookIcon = ({color, height, width}) => {
  	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 374.105 374.105"
			fill={color || colors.black}
			height={height || sizes.defaultIconSize}
			width={width || sizes.defaultIconSize}
		>
			<Path d="M45.015 14.03C-19.452 10.629 4.26 64.847 4.26 64.847s55.987 175.809 61.835 242.369c5.849 66.549 66.795 51.569 66.795 51.569s221.213-31.475 227.01-32.668c5.809-1.188 4.95-2.442 5.309-6.04.359-3.6-4.785-2.941-4.785-2.941s-1.37.201-3.672.523c-9.907-13.822-7.648-32.924.791-46.941l16.562-3.695L238.476 21.61s-129.002-4.182-193.461-7.58zm302.633 304.932c-45.967 6.595-201.329 28.899-208.283 29.935-8.153 1.218-51.478 4.652-53.691-25.69-2.213-30.342 51.322-33.246 51.322-33.246l210.407-18.359c-7.092 15.008-7.878 32.837.245 47.36z" />
		</Svg>
	)
}

export default BookIcon;
