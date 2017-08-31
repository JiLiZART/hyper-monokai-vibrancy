'use strict';

const backgroundColor = 'rgba(20,20,20,0.2)';
const foregroundColor = '#F8F8F0';

const colors = [
    backgroundColor,
    '#F92672', // pink
    '#A6E22E', // green
    '#FD971F', // orange
    '#AE81FF', // purple
    '#66D9EF', // blue
    '#38CCD1', // cyan
    '#ffffff', // white
    '#49483E', // brown gray
    '#F92672', // pink
    '#A6E22E', // green
    '#FD971F', // orange
    '#AE81FF', // purple
    '#66D9EF', // blue
    '#38CCD1', // cyan
    '#ffffff', // white
    foregroundColor
];

exports.onWindow = browserWindow => browserWindow.setVibrancy('ultra-dark');
exports.decorateConfig = (config) => (
    Object.assign({}, {
        backgroundColor,
        foregroundColor,
        cursorColor: foregroundColor,
        borderColor: 'rgba(45,46,49,0.5)',
        colors,
        css: `
          ${config.css || ''}

          .tab_tab {
            color: ${foregroundColor} !important;
          }
          .tab_active:before {
            border-bottom-color: #E6DB74 !important;
          }
        `
    }, config)
);