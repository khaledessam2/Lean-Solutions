/**
 * lottie-web ships ESM builds without typings beside them, so point the ESM
 * "light" player (svg renderer only) at the package's own root types.
 */
declare module 'lottie-web/build/player/esm/lottie_light.min.js' {
  export { default } from 'lottie-web';
}
