# json-encrypt-decrypt

# Install

$ npm install json-encrypt-decrypt

## Usage

### Import

Just import json-encrypt-decrypt package in the top of your file for encrypt and decrypt your json data.

```js
const customizeJson = require('json-encrypt-decrypt');
```
### Encrypt

Call encrypt function to encrypt your json data, it will return as string.

```js
const encryptedJson = customizeJson.encrypt(json, secretOrPrivateKey);
```
### Decrypt

Call decrypt function to decrypt your encrypted json data, it will return the original json.

```js
const decryptedJson = customizeJson.decrypt(encryptedJson, secretOrPrivateKey);
```

## Author

### Partha Mandal
