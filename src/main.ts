/**                       Result 
 *         ESTest(Disabled)    valibot    ESTest       Zod      Joi
 * object      23 ms           125 ms     167 ms     585 ms    2052 ms
*/

// iterations: 1,000,000

// All tests are based on object
// const data = {
//   id: 'abc123',
//   user: {
//     name: 'Alice',
//     age: 30,
//     preferences: {
//       darkMode: true,
//       language: 'en'
//     }
//   }
// }

import * as resultESTestDisabled from './ESTestDisabled';
import * as resultValibot from './valibot';
import * as resultESTest from './ESTest';
import * as resultZod from './zod';
import * as resultJoi from './joi';

// run: pnpm dev
// check Devtool (F12): console.log cost time 
resultESTestDisabled
resultValibot
resultESTest
resultZod
resultJoi


