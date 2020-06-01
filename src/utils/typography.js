import Typography from 'typography';

import './global.css';
import './tricks.css';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'serif'],
  // See below for the full list of options.
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
