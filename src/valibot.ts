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

type Data = v.InferOutput<typeof dataSchema>;

function getData(data: unknown): Data {
  return v.parse(dataSchema, data);
}

const iterations = 1000000;
const start = performance.now();
for (let i = 0; i < iterations; i++) {
  getData(data)

}
const end = performance.now();

export default console.log(`[valibot] cost time：${end - start} ms`);




