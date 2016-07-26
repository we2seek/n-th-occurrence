var finder = require('find');

describe("Find character position from the tail:\n", function() {
    it("Should find 1-nd occurrence", function() {
        var result = finder('aaa-)-', '-', 1);
        expect(result).toBe(5);
    });

    it("Should find 2-nd occurrence", function() {
        var result = finder('aaa-)-', '-', 2);
        expect(result).toBe(3);
    });

    it("Should not find: count must be > 0", function() {
        var result = finder('aaa-)-', '-', -1);
        expect(result).toBe(-1);
    });


    it("Should not find: count must be > 0", function() {
        var result = finder('aaa-)-', '-', 0);
        expect(result).toBe(-1);
    });

    it("Should not find: expected 3-rd occurrence, actual max 2", function() {
        var result = finder('aaa-)-', '-', 3);
        expect(result).toBe(-1);
    });

    it("Should not find: count equals to source length", function() {
        var result = finder('aaa-)-', '-', 6);
        expect(result).toBe(-1);
    });

    it("Should not find: count greater than source length", function() {
        var result = finder('aaa-)-', '-', 7);
        expect(result).toBe(-1);
    });

    it("Should not find: pattern not match", function() {
        var result = finder('aaa-)-', 'b', 1);
        expect(result).toBe(-1);
    });

    it("Should not find: count is not integer", function() {
        var result = finder('aaa-)-', '-', '10a');
        expect(result).toBe(-1);
    });

    it("Should not find: count is not integer", function() {
        var result = finder('aaa-)-', '-', 'a');
        expect(result).toBe(-1);
    });
});