<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://ik.imagekit.io/hopsoft/turbo-boost-logo-dark-bg_o_f0bVskz.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671722004391">
    <img height="60" src="https://ik.imagekit.io/hopsoft/turbo-boost-logo_zHiiimlvT.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671722004342" />
  </picture>

  <h1 align="center">
    Welcome to TurboBoost Devtools 👋
  </h1>

  <p align="center">
    <a href="https://www.npmjs.com/package/@turbo-boost/devtools">
      <img alt="NPM Version" src="https://img.shields.io/npm/v/@turbo-boost/devtools?color=168AFE&logo=npm">
    </a>
    <a href="https://www.npmjs.com/package/@turbo-boost/devtools">
      <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@turbo-boost/devtools?color=168AFE&logo=npm">
    </a>
    <a href="https://bundlephobia.com/package/@turbo-boost/devtools@">
      <img alt="NPM Bundle Size" src="https://img.shields.io/bundlephobia/minzip/@turbo-boost/devtools?label=bundle%20size&logo=npm&color=47d299">
    </a>
    <a href="https://github.com/sheerun/prettier-standard">
      <img alt="JavaScript Style" src="https://img.shields.io/badge/style-prettier--standard-168AFE?logo=javascript&logoColor=f4e137" />
    </a>
  </p>
</p>

**Devtools for the Hotwire/Turbo ecosystem (TurboBoost, CableReady, StimulusReflex, etc.)**

## Releasing

1. Run `npm update`  to pick up the latest
1. Update the version number consistently in the following files:
   * `app/javascript/version.js` - pre-release versions use `-preN`
   * `package.json` - pre-release versions use `-preN`
1. Run `npm run standardize` to ensure standard formatting has been applied
1. Run `npm run build`
1. Commit and push any changes to GitHub
1. Run `npm publish --access public`
1. Commit and push changes to GitHub
1. Create a new release on GitHub ([here](https://github.com/hopsoft/turbo_boost-devtools/releases)) and generate the changelog for the stable release for it

## License

The library is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
