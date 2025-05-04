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

globalThis.__ESCSS_ESTEST__.isESTestDisabled = true

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

// Reset to default to avoid affecting ESTest.js test case
globalThis.__ESCSS_ESTEST__.isESTestDisabled = false

export default console.log(`[ESTest(Disabled)]：${end - start} ms`);

