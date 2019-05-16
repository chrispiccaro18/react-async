import { normalizeCharacter } from './futuramaApi';

describe('futurama api tests', () => {
  it('normalizes character names', () => {
    const result = normalizeCharacter('Professor-farnsworth');
    expect(result).toBe('Professor Farnsworth');
  });
});
