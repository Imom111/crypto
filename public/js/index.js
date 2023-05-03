
const inputClave1 = document.getElementById('inputClave1');
const inputClave2 = document.getElementById('inputClave2');
const buttonGenerateCrypto = document.getElementById('buttonGenerateCrypto');

async function calculateClave() {
    
}

function showClave() {
    calculateClave()
    .then((data) => {
      console.log(data);
    });
}

function load() {
    buttonGenerateCrypto.addEventListener('click', showClave, false);
}

document.addEventListener('DOMContentLoaded', load, false);
