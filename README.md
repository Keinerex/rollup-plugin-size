<p align="center">
  <h1 align="center">
    rollup-plugin-bundle-filesize
    <a href="https://www.npmjs.org/package/rollup-plugin-bundle-filesize"><img src="https://img.shields.io/npm/v/rollup-plugin-bundle-filesize.svg?style=flat&v1" alt="npm"></a>
  </h1>
</p>

<p align="center">
  Prints the gzipped sizes of your rollup assets and the changes since the last build.
</p>

<p align="center">
  <img src="https://i.imgur.com/SE1mlK2.png" width="602" alt="rollup-plugin-bundle-filesize">
</p>

> 🙋 Using Webpack? Check out the original [size-plugin](https://github.com/GoogleChromeLabs/size-plugin).

## Installation

Install `rollup-plugin-bundle-filesize` as a development dependency using npm:

```sh
npm i -D rollup-plugin-bundle-filesize
```

---

## Usage

Add the plugin to your rollup configuration:

```diff
// rollup.config.js
+ import size from 'rollup-plugin-bundle-filesize';

plugins: [
+   size()
]
```

---

## Credits

This is a fork of port of [size-plugin](https://github.com/GoogleChromeLabs/size-plugin) by [Jason Miller](https://github.com/developit).
