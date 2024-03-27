class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padStart(str) {
    this.#value.padStart(this.#value.length + str.length, str);
  }
  padEnd(str) {
    this.#value.padEnd(this.#value.length + str.length, str);
  }

  padBoth(str) {}
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
