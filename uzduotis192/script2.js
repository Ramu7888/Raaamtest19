// uzduotis 192
const palindromas = (word) => {

    word = word.toLowerCase();
    const revWord = word.split('').reverse().join('');

    if (word !== revWord || word === "") {
        return false;
    } else {
        return true;
    }

}

//uzduotis 193
const findMaxNumber = (numbers) => {

    let biggestNumber = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > biggestNumber) {
            biggestNumber = numbers[i];
        }
    }

    return biggestNumber;
}





module.exports = [palindromas, findMaxNumber];