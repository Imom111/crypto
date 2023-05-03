"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRSA = exports.makeRSA = exports.getSHA256 = exports.getAES = exports.makeAES = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const encrypt_rsa_1 = __importDefault(require("encrypt-rsa"));
const makeAES = (req, res) => {
    const { message, secretKey } = req.query;
    const ciphertext = crypto_js_1.default.AES.encrypt(String(message), String(secretKey)).toString();
    res.json({
        ciphertext
    });
};
exports.makeAES = makeAES;
const getAES = (req, res) => {
    const { message, secretKey } = req.query;
    const bytes = crypto_js_1.default.AES.decrypt(String(message), String(secretKey));
    const originalText = bytes.toString(crypto_js_1.default.enc.Utf8);
    res.json({
        originalText
    });
};
exports.getAES = getAES;
const getSHA256 = (req, res) => {
    const { message } = req.query;
    console.log(message);
    const SHA256 = crypto_js_1.default.SHA256(String(message));
    const stringSHA256 = SHA256.toString(crypto_js_1.default.enc.Base64);
    res.json({
        stringSHA256
    });
};
exports.getSHA256 = getSHA256;
const makeRSA = (req, res) => {
    const { message } = req.query;
    const encryptRsa = new encrypt_rsa_1.default();
    const { privateKey, publicKey } = encryptRsa.createPrivateAndPublicKeys();
    const encryptedText = encryptRsa.encryptStringWithRsaPublicKey({
        text: String(message),
        publicKey,
    });
    res.json({
        privateKey, publicKey, encryptedText
    });
};
exports.makeRSA = makeRSA;
const getRSA = (req, res) => {
    const { message, privateKey } = req.body;
    const encryptRsa = new encrypt_rsa_1.default();
    const decryptedText = encryptRsa.decryptStringWithRsaPrivateKey({
        text: String(message),
        privateKey: String(privateKey)
    });
    res.json({
        decryptedText
    });
};
exports.getRSA = getRSA;
//# sourceMappingURL=crypto.js.map