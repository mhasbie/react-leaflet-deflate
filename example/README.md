# Browser debug example

The source-debug example loads `src/Deflate.jsx` directly and transpiles it in the browser. It uses CDN-hosted Babel and library dependencies, so an internet connection is required. Start the local server and open the page at `http://127.0.0.1:4173/debug.html`:

```bash
npm run debug:example
```

The page must be served over HTTP; opening `example/debug.html` directly as a file will not work.
