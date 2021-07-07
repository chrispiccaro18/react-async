import { normalizeCharacter } from './futuramaApi';

describe('futurama api tests', () => {
  it('normalizes character names', () => {
    const result = normalizeCharacter('Professor-farnsworth');
    expect(result).toBe('Professor Farnsworth');
  });
  it('spits back the name if it is not split by a -', () => {
    const result = normalizeCharacter('Bender');
    expect(result).toBe('Bender');
  });
});
