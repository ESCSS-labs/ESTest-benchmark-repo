import { unSafeESTest } from "escss-estest";

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
  unSafeESTest(data?.id, 'string')
  unSafeESTest(data?.user?.name, 'string')
  unSafeESTest(data?.user?.age, 'number')
  unSafeESTest(data?.user?.preferences?.darkMode, 'boolean')
  unSafeESTest(data?.user?.preferences?.language, 'string')
}
const end = performance.now();
export default console.log(`[unSafeESTest]：${end - start} ms`);

