# JSX + plastiq + browserify

```jsx
var plastiq = require('plastiq');
var h = plastiq.html;

function render() {
  return <div>
      <h1>this is your plastiq on jsx</h1>
      <button onclick={function () { alert('yo bobo'); }}>say hi</button>
    </div>;
}

plastiq.append(document.body, render);
```

# install

```bash
npm i plastiq-jsxify
```

# usage

```bash
browserify -t plastiq-jsxify index.jsx > bundle.js
```
