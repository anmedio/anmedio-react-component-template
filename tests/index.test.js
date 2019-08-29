const printer = name => `First Jest test by ${name} is passed!`;

describe('Testing the printer function', () =>
  it('Should return right string', () =>
    expect(printer('Anmedio')).toBe('First Jest test by Anmedio is passed!')));
