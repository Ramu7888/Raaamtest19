
const [sum, atimtis, apskritimoPlotas] = require("./script");


test("tikrinu ar funkcija sum gera rezultata", () => {
    expect(sum(5, 5)).toBe(10);
});
test("tikrinu ar funkcija sum gera rezultata", () => {
    expect(sum(5, 5)).toBeGreaterThan(9);
    expect(sum(5, 5)).toBeGreaterThanOrEqual(10);
    expect(sum(5, 5)).toBeCloseTo(9.999);

});

test("tikrinu atimti 10, -11", () => {
    expect(atimtis(10, -11)).toBe(21);
});

test("tikrinu atimti 10, -11", () => {
    // const result = atimtis(10, 10);
    // const expected = 0;
    expect(atimtis(10, -11)).not.toBe(-1);
});

test("tikrinu apskritimo plota", () => {
    expect(apskritimoPlotas(3)).toBe(9 * Math.PI);
});

test("tikrinsime null reiksmes", () => {
    const n = null;
    expect(n).toBeNull();
    //Tikimes reiksmes True
    expect(true).toBeTruthy();
    //Tikimes reiksmes False
    expect(false).toBeFalsy();
});