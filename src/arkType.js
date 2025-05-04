import { type } from "arktype"

const data = {
  id: 'abc123',
  user: {
    name: 'Alice',
    age: 30,
    preferences: {
      darkMode: true,
      language: 'en'
    }
  }
}

const dataSchema = type({
  id: 'string',
  user: {
    name: 'string',
    age: 'number',
    preferences: {
      darkMode: 'boolean',
      language: 'string'
    }
  }
})

const iterations = 1000000;
const start = performance.now();
for (let i = 0; i < iterations; i++) {
  dataSchema(data);
}
const end = performance.now();

export default console.log(`[arkType] cost time：${end - start} ms`);