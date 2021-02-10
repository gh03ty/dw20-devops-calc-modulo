const modulo = require('./modulo');

describe('check operator', () => {
    it('operator should be %', () => {
        expect(modulo.operator).toBe('%');
    });
});

describe('check function', () => {

    it('9 % 8 should be 1', () => {
        // Arrange
        const x = 9;
        const y = 8;

        // Act
        const result = modulo.fn(x, y);

        // Assert
        expect(result).toBe(1);
    });

    it('-9 % 8 should be -1', () => {
        // Arrange
        const x = -9;
        const y = 8;

        // Act
        const result = modulo.fn(x, y);

        // Assert
        expect(result).toBe(-1);
    });

});
