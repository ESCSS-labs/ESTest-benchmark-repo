import * as v from 'valibot';

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

const dataSchema = v.object({
  id: v.string(),
  user: v.object({
    name: v.string(),
    age: v.number(),
    preferences: v.object({
      darkMode: v.boolean(),
      language: v.string(),
    })
  })
});

const iterations = 1000000;
const start = performance.now();
for (let i = 0; i < iterations; i++) {
  v.parse(dataSchema, data)
}
const end = performance.now();

export default console.log(`[valibot] cost time：${end - start} ms`);




