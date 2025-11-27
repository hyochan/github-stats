import {vi} from 'vitest';

vi.mock('lru-cache', () => {
  class LRUCache {
    // Minimal no-op cache for tests
    get() {
      return undefined;
    }
    set() {
      return this;
    }
    has() {
      return false;
    }
    clear() {}
  }

  return {LRUCache};
});

// Prevent transitive deps from loading lru-cache
vi.mock('@asamuzakjp/css-color', () => ({}));
vi.mock('cssstyle', () => ({}));
