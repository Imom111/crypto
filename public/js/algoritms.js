
const inputSHA256 = document.getElementById('inputSHA256');
const inputAESGet = document.getElementById('inputAESGet');
const inputAESSend = document.getElementById('inputAESSend');
const inputClaveAESGet = document.getElementById('inputClaveAESGet');
const inputAESSecretKeySend = document.getElementById('inputAESSecretKeySend');
const inputRSA = document.getElementById('inputRSA');
const inputRSAPrivateKey = document.getElementById('inputRSAPrivateKey');
const inputRSAOriginal = document.getElementById('inputRSAOriginal');

const resultAES = document.getElementById('resultAES');
const resultAESOrigin = document.getElementById('resultAESOrigin');
const resultSHA256 = document.getElementById('resultSHA256');
const resultRSAPublicKey = document.getElementById('resultRSAPublicKey');
const resultRSAPrivateKey = document.getElementById('resultRSAPrivateKey');
const resultRSA = document.getElementById('resultRSA');
const resultRSAOrigin = document.getElementById('resultRSAOrigin');

async function calculateSHA256() {
    const response = await fetch('http://localhost:8080/api/crypto/sha256?' + new URLSearchParams({
        message: inputSHA256.value
    }), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

function showSHA256() {
    resultSHA256.innerHTML = '';
    calculateSHA256()
    .then((data) => {
        resultSHA256.innerHTML = data.stringSHA256;
    });
}


async function calculateOriginalAES() {
    const response = await fetch('http://localhost:8080/api/crypto/aesCheck?' + new URLSearchParams({
        message: inputAESSend.value,
        secretKey: inputAESSecretKeySend.value
    }), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

async function calculateAES() {
    const response = await fetch('http://localhost:8080/api/crypto/aesGet?' + new URLSearchParams({
        message: inputAESGet.value,
        secretKey: inputClaveAESGet.value
    }), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

function showAES() {
    resultAES.innerHTML = '';
    calculateAES()
    .then((data) => {
        resultAES.innerHTML = data.ciphertext;
    });
}

function showOriginalAES() {
    resultAESOrigin.innerHTML = '';
    calculateOriginalAES()
    .then((data) => {
        resultAESOrigin.innerHTML = data.originalText;
    });
}




async function calculateRSA() {
    const response = await fetch('http://localhost:8080/api/crypto/rsaGet?' + new URLSearchParams({
        message: inputRSA.value
    }), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

async function calculateOriginalRSA() {
    const response = await fetch('http://localhost:8080/api/crypto/rsaCheck', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            message: inputRSAOriginal.value,
            privateKey: inputRSAPrivateKey.value
        })
    });
    return response.json();
}

function showRSA() {
    resultRSA.innerHTML = '';
    resultRSAPublicKey.innerHTML = '';
    resultRSAPrivateKey.innerHTML = '';
    calculateRSA()
    .then((data) => {
        resultRSA.innerHTML = data.encryptedText;
        resultRSAPublicKey.innerHTML = data.publicKey;
        resultRSAPrivateKey.innerHTML = data.privateKey;
    });
}

function showOriginalRSA() {
    resultRSAOrigin.innerHTML = '';
    calculateOriginalRSA()
    .then((data) => {
        resultRSAOrigin.innerHTML = data.decryptedText;
    });
}

function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}
  

function load() {
    inputSHA256.addEventListener('keyup', showSHA256, false);
    inputAESGet.addEventListener('keyup', showAES, false);
    inputAESSend.addEventListener('keyup', showOriginalAES, false);
    inputRSA.addEventListener('keyup', showRSA, false);
    inputRSAOriginal.addEventListener('keyup', showOriginalRSA, false);
}

document.addEventListener('DOMContentLoaded', load, false);