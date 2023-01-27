// nueinam i ta direktorija, kurioje bus .js failas
// ir terminale parasom npm init -y
// isirasom jest biblioteka npm i --save-dev jest
// pasikoreguojam package.json

// turim exportuoti funkcijas, kurias norim testuoti

function sum(a, b) {
    return a + b;
}

function atimtis(a, b) {
    return a - b;
}

function apskritimoPlotas(r) {
    // const square = r * r;
    return Math.PI * (r ** 2);
}

module.exports = [sum, atimtis, apskritimoPlotas];