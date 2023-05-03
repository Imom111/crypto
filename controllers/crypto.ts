import CryptoJS from "crypto-js";
import { Request, Response } from "express";
import EncryptRsa from 'encrypt-rsa';

export const makeAES = (req: Request, res: Response) => {
    const { message, secretKey } = req.query;

    const ciphertext = CryptoJS.AES.encrypt(String(message), String(secretKey)).toString();

    res.json({
        ciphertext
    });
}


export const getAES = (req: Request, res: Response) => {
    const { message, secretKey } = req.query;
    
    const bytes  = CryptoJS.AES.decrypt( String(message), String(secretKey));
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    
    res.json({
        originalText
    });
}


export const getSHA256 = (req: Request, res: Response) => {
    const { message } = req.query;
    console.log(message);
    
    const SHA256 = CryptoJS.SHA256( String(message) );
    const stringSHA256 =  SHA256.toString(CryptoJS.enc.Base64);
    res.json({
        stringSHA256
    });
}


export const makeRSA = (req: Request, res: Response) => {
    const { message } = req.query;
    const encryptRsa = new EncryptRsa();
    const { privateKey, publicKey } = encryptRsa.createPrivateAndPublicKeys();

    const encryptedText = encryptRsa.encryptStringWithRsaPublicKey({
        text: String(message),
        publicKey,
    });

    res.json({
        privateKey, publicKey, encryptedText
    });
}

export const getRSA = (req: Request, res: Response) => {
    const { message, privateKey } = req.body;
    
    const encryptRsa = new EncryptRsa();

    const decryptedText = encryptRsa.decryptStringWithRsaPrivateKey({
        text: String(message),
        privateKey: String(privateKey)
    });

    res.json({
        decryptedText
    });
}