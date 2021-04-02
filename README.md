# gatsby-plugin-splitbee

Easily add [Splitbee](https://splitbee.io/) to your Gatsby site.

## Install
`npm install --save gatsby-plugin-splitbee`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-splitbee`,
    options: {
      includeInDevelopment: false,
      delayTimeout: 0,
      disableCookie: true
    },
  },
]
```

## Configuration

- `includeInDevelopment` - Optional. Defaults to `false`
- `delayTimeout` - Optional. Number of milliseconds to wait before loading the Splitbee. Defaults to `0`
- `disableCookie` - Optional. Disables usage of cookies. Defaults to `false`. Currently in beta, see [here](https://splitbee.io/blog/javascript-library) for details.

