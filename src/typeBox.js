import { Value } from '@sinclair/typebox/value'
import { Type } from '@sinclair/typebox'

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

const dataSchema = Type.Object({
  id: Type.String(),
  user: Type.Object({
    name: Type.String(),
    age: Type.Number(),
    preferences: Type.Object({
      darkMode: Type.Boolean(),
      language: Type.String(),
    })
  })
});

const iterations = 1000000;
const start = performance.now();
for (let i = 0; i < iterations; i++) {
  Value.Parse(dataSchema, data)
}
const end = performance.now();

export default console.log(`[typeBox]：${end - start} ms`);



