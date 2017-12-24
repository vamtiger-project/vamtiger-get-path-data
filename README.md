# VAMTIGER Get Path Data
[VAMTIGER Get Path Data](https://github.com/vamtiger-project/vamtiger-get-path-data) returns data associated with a defined path.

## Installation
[VAMTIGER Get Path Data](https://github.com/vamtiger-project/vamtiger-get-path-data) can be installed using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/):
```javascript
npm i vamtiger-get-path-data 
```
or
```javascript
yarn add vamtiger-get-path-data
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Get Path Data](https://github.com/vamtiger-project/vamtiger-get-path-data):
```javascript
import getPathData from 'vamtiger-get-path-data';
```
or
```javascript
const getPathData = require('vamtiger-get-path-data').default;
```

[VAMTIGER Get Path Data](https://github.com/vamtiger-project/vamtiger-get-path-data) will return data for deined path:
```javascript
getPathData('some/file/absolute/path')
    .then(handleResult)
    .catch(handleError);
```

Since [VAMTIGER Get Path Data](https://github.com/vamtiger-project/vamtiger-get-path-data) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), it can be more conveniently executed within an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function):
```javascript
async someAsyncFunction function() {
    const pathData = await getPathData('some/file/absolute/path');
}
``` 
