import { ESTest } from "escss-estest";

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

const iterations = 1000000;
const start = performance.now();
for (let i = 0; i < iterations; i++) {
  ESTest(data?.id, 'string')
  ESTest(data?.user?.name, 'string')
  ESTest(data?.user?.age, 'number')
  ESTest(data?.user?.preferences?.darkMode, 'boolean')
  ESTest(data?.user?.preferences?.language, 'string')
}
const end = performance.now();
export default console.log(`[ESTest]：${end - start} ms`);

