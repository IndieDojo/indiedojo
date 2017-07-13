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
  primary: "#00BDEB",
  primaryHover: "",
  accent: '#b7014e',
  accentHover: '#c01755',
  success: '#45AD43',
  text: "rgba(0,0,0,0.8)",
  light: "rgba(0,0,0,0.55)",

  link: "#3077b6",
  transparent: "rgba(255,255,255,0)",
  transparentWhite: "rgba(255,255,255, 0.9)",
  transparentWhite75: "rgba(255,255,255, 0.75)",
  white: "rgba(255, 255, 255, 1)",
  black: "rgba(0,0,0,1)",
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

const getFontSizes = (windowWidth) => {
  if (windowWidth < breakPoints.sm*16) {
    // multiplier 1.2
    return {
      xxxl: '2.5rem',
      xxl: '2.1rem',
      xl: '1.75rem',
      lg: '1.45rem',
      md: "1.2rem",
      nm: '1rem',
      sm: "0.94rem",
      xs: "0.71rem"
    }
  }

  if ( windowWidth >= breakPoints.sm*16 && windowWidth < breakPoints.md*16) {
    // multiplier 1.25
    return {
      xxxl: '3.5rem',
      xxl: '2.8rem',
      xl: '2.25rem',
      lg: '1.8rem',
      md: "1.45rem",
      nm: '1.15rem',
      sm: "0.94rem",
      xs: "0.71rem"
    }
  } else {
    // 1.33 multiplier
    return {
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
};

const radius = {
  sm: "3px",
  nm: "5px",
  md: "8px",
  lg: "13px",
  xl: "21px",
  round: "50%"
};

export const getTheme = (windowWidth) => ({
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
  fontSizes: getFontSizes(windowWidth),
  header: {
    height: windowWidth <= screenSizes.sm ? "50px" : "80px",
  }
})
