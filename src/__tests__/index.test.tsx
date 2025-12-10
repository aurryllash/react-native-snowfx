import { SnowFX } from '../index';

describe('SnowFX', () => {
  it('exports SnowFX component', () => {
    expect(SnowFX).toBeDefined();
  });

  it('exports correct component type', () => {
    expect(typeof SnowFX).toBe('function');
  });
});
