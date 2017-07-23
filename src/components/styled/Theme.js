const gutterWidth = 2; // rem
const outerMargin = 4; // rem

const breakPoints = {
  xs: '30',
  sm: '48',
  md: '64',
  lg: '75'
};

const screenSizes = {
  xs: `${breakPoints.xs}em`,
  sm: `${breakPoints.sm}em`,
  md: `${breakPoints.md}em`,
  lg: `${breakPoints.lg}em`
}

const containers = {
  sm: `${breakPoints.sm - 2 * gutterWidth}em`,
  md: `${breakPoints.md - 2 * gutterWidth}em`,
  lg: `${breakPoints.lg - 2 * gutterWidth}em`
}

const weights = {
  normal: "400",
  bold: "700",
  superbold: "800",
  black: "900"
};

const colors = {
  primary: "#F56911",
  primaryHover: "#bf2121",
  accent: '#F56911',
  accentHover: '#bf2121',
  success: '#45AD43',
  text: "rgb(76, 32, 9)",
  light: "rgba(0,0,0,0.55)",
  brown: "rgba(20,13,8,1)",

  link: "#F56911",
  linkHover: '#bf2121',
  transparent: "rgba(255,255,255,0)",
  transparentWhite: "rgba(255,255,255, 0.9)",
  transparentWhite75: "rgba(255,255,255, 0.75)",
  transparentWhite50: "rgba(255,255,255, 0.5)",
  white: "rgba(255, 255, 255, 1)",
  black: "rgb(37, 34, 32)",
  lightGrey: "rgba(0,0,0,0.5)",
  veryLightGrey: "rgba(0,0,0,0.2)",
  veryLight: "rgba(0,0,0, 0.05)",
  veryLightHover: "rgba(0,0,0,0.15)",
  inactive: "rgba(0,0,0,0.2)"
};

const margins = {
  xxxl: "89px",
  xxl: "55px",
  xl: "34px",
  lg: "21px",
  md: "13px",
  nm: "8px",
  sm: "5px",
  0: '0'
};

const fontSizes = {
  mobile: {
    xxxl: '2.5rem',
    xxl: '2.1rem',
    xl: '1.75rem',
    lg: '1.45rem',
    md: "1.2rem",
    nm: '1rem',
    sm: "0.94rem",
    xs: "0.71rem"
  },
  medium: {
    xxxl: '3.5rem',
    xxl: '2.8rem',
    xl: '2.25rem',
    lg: '1.8rem',
    md: "1.45rem",
    nm: '1.15rem',
    sm: "0.94rem",
    xs: "0.71rem"
  },
  regular: {
    xxxl: '5.2rem',
    xxl: '3.9rem',
    xl: '2.9rem',
    lg: '2.2rem',
    md: "1.66rem",
    nm: '1.25rem',
    sm: "1rem",
    xs: "0.71rem"
  }
}

// const getFontSizes = (windowWidth) => {
//
//   const onePointTwo = { // multiplier 1.2
//     xxxl: '2.5rem',
//     xxl: '2.1rem',
//     xl: '1.75rem',
//     lg: '1.45rem',
//     md: "1.2rem",
//     nm: '1rem',
//     sm: "0.94rem",
//     xs: "0.71rem"
//   }
//
//   const onePointTwentyFive = { // multiplier 1.25
//     xxxl: '3.5rem',
//     xxl: '2.8rem',
//     xl: '2.25rem',
//     lg: '1.8rem',
//     md: "1.45rem",
//     nm: '1.15rem',
//     sm: "0.94rem",
//     xs: "0.71rem"
//   }
//
//   const onePointThirtyThree = { // 1.33 multiplier
//     xxxl: '5.2rem',
//     xxl: '3.9rem',
//     xl: '2.9rem',
//     lg: '2.2rem',
//     md: "1.66rem",
//     nm: '1.25rem',
//     sm: "1rem",
//     xs: "0.71rem"
//   }
//
//   return onePointTwentyFive
//
//   if (windowWidth < breakPoints.sm*16) {
//     return onePointTwo
//   } else if ( windowWidth >= breakPoints.sm*16 && windowWidth < breakPoints.md*16) {
//     return onePointTwentyFive
//   } else {
//     return onePointThirtyThree
//   }
// };

const radius = {
  sm: "3px",
  nm: "5px",
  md: "8px",
  lg: "13px",
  xl: "21px",
  round: "50%"
};

const idTheme = {
  gutterWidth: `${gutterWidth}rem`,
  outerMargin: `${outerMargin}rem`,
  gutterCompensation: `${(gutterWidth) / 2 * -1}rem`,
  halfGutterWidth: `${gutterWidth / 2}rem`,
  breakPoints: breakPoints,
  screenSizes: screenSizes,
  containers: containers,
  colors,
  margins,
  radius,
  weights,
  fontSizes: fontSizes
}

export default idTheme;
