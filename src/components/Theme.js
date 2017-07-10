const gutterWidth = 1; // rem
const outerMargin = 2; // rem

const screenSizes = {
  sm: 600,
  md: 900,
  lg: 1200
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
  accent: '#CF0072',
  accentHover: '',
  success: '#45AD43',
  text: "rgba(0,0,0,0.8)",
  light: "rgba(0,0,0,0.55)",
  link: "#3077b6",
  transparent: "rgba(255,255,255,0)",
  white: "rgba(255, 255, 255, 1)",
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
  if (windowWidth < screenSizes.sm) {
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

  if ( windowWidth >= screenSizes.sm && windowWidth < screenSizes.md) {
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
      sm: "0.94rem",
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
  screenSizes,
  colors,
  margins,
  radius,
  weights,
  fontSizes: getFontSizes(windowWidth),
  header: {
    height: windowWidth <= screenSizes.sm ? "50px" : "80px",
  }
})
