import GlobalStyle from './global'
export { GlobalStyle }

const screens = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const colors = {
  black: '#000000',
  grayDark: '#2f2f2f',
  gray: '#c4c4c4',
  grayLight: '#f9f9f9',
  white: '#ffffff',
  blueDark: '#20232a',
  blue: '#0366d6',
  blueLight: '#50c9ea',
  red: '#fd1015',
  green: '#31c452',
  yellow: '#f2e05a',
}

const theme = {
  primary: colors.grayDark,
  primaryText: colors.black,
  secondaryText: colors.grayDark,
  background: colors.white,
  light: colors.white,
  error: colors.red,
}

export default {
  screens,
  colors,
  ...theme,
}
