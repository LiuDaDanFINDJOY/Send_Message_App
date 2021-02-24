export const compose = (...f) => (base) =>
  f.reverse().reduce((acc, cur) => cur(acc), base);
// to be continued
