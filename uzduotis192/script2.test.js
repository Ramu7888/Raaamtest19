const [palindromas, findMaxNumber] = require("./script2");

// uzduotis 192
test("tikrinsime ar zodis yra palindromas", () => {
    expect(palindromas("ėdė")).toBeTruthy();
    expect(palindromas("Ėdė")).toBeTruthy();
    expect(palindromas("vajė")).toBeFalsy();
    expect(palindromas("")).toBeFalsy();

});

// uzduotis 193
const numbers = [215, 2, 365, -21, 124, 22, 14, -4587, 997199, null, "997199"];

test("Tikrinsime ar funkcija suranda didziausia skaiciu is masyvo", () => {
    expect(findMaxNumber(numbers)).toBe(997199);
    expect(findMaxNumber(numbers)).not.toBe("997199");
});


test("Tikrinsime ar funkcija suranda didziausia skaiciu is neigiamu skaiciu ir nulio", () => {
    expect(findMaxNumber([-21, -235, -145, -11])).toBe(-11);
    expect(findMaxNumber([-21, -235, -145, 0])).toBe(0);
    expect(findMaxNumber([5, 5, 5, 5])).toBe(5);
    expect(findMaxNumber([-5, -5, -5, -5])).toBe(-5);
    expect(findMaxNumber([0, 0, 0, 0, 0])).toBe(0);

});

