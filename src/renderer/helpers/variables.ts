const variablesDark: any = {
  baseColor: '#131415',
  secondColor: '#191a1b',
  greyColor: '#a5a5a5',
  darkGreyColor: '#262626',
  brandColor: '#fa5255',
  brandColorHover: '#c44649',
  errorColor: '#ff524a',
  firstBrandColor: '#06f',
  hoveredFirstBrandColor: '#005ce6',
  baseFont: 'Circe',
  boxShadow: '0 2px 1px -2px rgba(0,0,0,.2)'
};

const variablesLight: any = {
  baseColor: '#fff',
  secondColor: '#f7f7f8',
  greyColor: '#a5a5a5',
  darkGreyColor: '#7d7c83',
  brandColor: '#fa5255',
  brandColorHover: '#c44649',
  errorColor: '#ff524a',
  firstBrandColor: '#06f',
  skeletonBg: '#151515',
  hoveredFirstBrandColor: '#005ce6',
  baseFont: 'Circe',
  boxShadow: '0 2px 1px -2px rgba(0,0,0,.2)'
};

// eslint-disable-next-line no-constant-condition
const jssVariables = false ? variablesLight : variablesDark;

export default jssVariables;
