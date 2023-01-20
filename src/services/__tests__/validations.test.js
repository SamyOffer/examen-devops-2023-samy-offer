const { isEmpty } = require("../validations");
const { checkGamerTag } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe("check gamerTag tests", () => {
    test("should return true if the tag have at least 8 caracters", () => {
        const result = checkGamerTag("12345678");
        expect(result).toEqual(true);
    });
    test("should return true if the tag have at least 1 specail caracters", () => {
        const result = checkGamerTag("12345678");
        expect(result).toEqual(false);
    });
    test("should return true if the tag have at least 1 specail caracters", () => {
        const result = checkGamerTag("12345678!");
        expect(result).toEqual(true);
    });
});
