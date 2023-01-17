# json-encrypt-decrypt

# Install

$ npm install json-encrypt-decrypt

## Usage

### Import
```js
const customizeJson = require('json-encrypt-decrypt')
```
### Encrypt Json data
```js
const encryptedJson = customizeJson.encrypt(json, secretOrPrivateKey)
```
### Decrypt Json data
```js
const decryptedJson = customizeJson.decrypt(encryptedJson, secretOrPrivateKey)
```