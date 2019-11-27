'use strict';

const constants = {
  format: new Set(['eot', 'woff2', 'woff', 'ttf', 'otf', 'svg', 'svgz']),
  weight: new Set([
    '100',
    'thin',
    '200',
    'light',
    '300',
    '400',
    '500',
    'medium',
    '600',
    'semi-bold',
    '700',
    'bold',
    '800',
    'extra-bold',
    '900',
    'bolder',
  ]),
  style: new Set(['italic', 'oblique']),
  other: new Set(['normal', 'regular']),
};

const isValidVariant = str => {
  const splitVariant = str.split(' ');
  return (
    constants.weight.has(splitVariant[0]) ||
    constants.style.has(splitVariant[0]) ||
    constants.other.has(splitVariant[0])
  );
};

const isValidFormat = str => constants.format.has(str);

module.exports = {
  constants,
  isValidVariant,
  isValidFormat,
};
