/**                       Result 
 *           ESTest(Disabled)   arkType     valibot    ESTest      Zod      Joi
 * object         22 ms          22 ms       125 ms    167 ms     585 ms    2052 ms
*/

console.warn(`
==== Test Environment ====
- Device: Apple M4 (MacBook Pro), 16GB RAM
- OS: macOS 15.2 (Sequoia)
- Browser: Chrome 136.0.7103.49
- Node.js: v22.14.0
- Vite: v6.3.4

======== Based on ========
const iterations = 1000000;
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
`)

import * as resultESTestDisabled from './ESTestDisabled';
import * as resultArkType from './arkType';
import * as resultValibot from './valibot';
import * as resultESTest from './ESTest';
import * as resultZod from './zod';
import * as resultJoi from './joi';

resultESTestDisabled
resultArkType
resultValibot
resultESTest
resultZod
resultJoi