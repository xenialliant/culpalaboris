let obj = {};
Object.defineProperty(obj, 'name', {
  value: 'John',
  writable: true,
  configurable: true
});
console.log(obj.name); // Output: John
