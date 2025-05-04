import { z } from 'zod';

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

const dataSchema = z.object({
  id: z.string(),
  user: z.object({
    name: z.string(),
    age: z.number(),
    preferences: z.object({
      darkMode: z.boolean(),
      language: z.string(),
    })
  })
});

type Data = z.infer<typeof dataSchema>;

function getData(data: unknown): Data {
  return dataSchema.parse(data);
}

const iterations = 1000000;
const start = performance.now();
for (let i = 0; i < iterations; i++) {
  getData(data)
}
const end = performance.now();
export default console.log(`[zod] cost time：${end - start} ms`);
