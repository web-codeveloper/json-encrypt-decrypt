const jwt = require("jsonwebtoken");
const saltCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const generateSalt = (length) => {
  let result = "";
  const saltCharactersLength = saltCharacters.length;
  for (let i = 0; i < length; i++) {
    result += saltCharacters.charAt(
      Math.floor(Math.random() * saltCharactersLength)
    );
  }
  return result;
};

const encrypt = (json, secret) => {
  if (json && secret && secret.trim()) {
    if (Array.isArray(json)) {
      json = JSON.stringify(json);
    }

    const JWT = jwt.sign(json, secret);

    const encryptedJson =
      JWT.slice(0, 37 + 6) +
      generateSalt(6) +
      JWT.slice(37 + 6, 37 + 15) +
      generateSalt(6) +
      JWT.slice(37 + 15, 37 + 24) +
      generateSalt(6) +
      JWT.slice(37 + 24);

    return encryptedJson;
  } else {
    return json;
  }
};

const decrypt = (encryptJson, secret) => {
  if (encryptJson && secret && secret.trim()) {
    encryptJson =
      encryptJson.slice(0, 37 + 6) +
      encryptJson.slice(37 + 12, 37 + 21) +
      encryptJson.slice(37 + 27, 37 + 36) +
      encryptJson.slice(37 + 42);

    const decryptedJson = jwt.verify(encryptJson, secret);

    if (decryptedJson.iat && typeof decryptedJson.iat == "number") {
      delete decryptedJson.iat;
    }
    return decryptedJson;
  } else {
    return encryptJson;
  }
};

module.exports = { encrypt, decrypt };
