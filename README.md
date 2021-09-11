<h1 align="center">Welcome to Next Api Router 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/shahidcodes" target="_blank">
    <img alt="Twitter: shahidcodes" src="https://img.shields.io/twitter/follow/shahidcodes.svg?style=social" />
  </a>
</p>

> A tiny api router for your next.js project. It turns your api routes to express route like syntax

### 🏠 [Homepage](github.com/shahidcodes/nxr)

## Install

```sh
npm install nxr
```

## Usage

In your `pages/api` folder create a file called `[...all].js` or `[...all].ts` if using typescript and copy below to the file.

```javascript
import router from "nxr";

router.get("/", (req, res) => {
  res.send({ ok: 1 });
});

export default router.handler;
```

## How it works?

It takes advantage of next.js catch all routes and parse and bind function to the route.

## Author

👤 **Shahid Kamal**

- Website: https://shahid.codes
- Twitter: [@shahidcodes](https://twitter.com/shahidcodes)
- Github: [@shahidcodes](https://github.com/shahidcodes)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](/issues).
