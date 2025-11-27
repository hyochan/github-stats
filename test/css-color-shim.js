// No-op shim for problematic deps in tests
class LRUCache {
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

module.exports = LRUCache;
module.exports.LRUCache = LRUCache;
