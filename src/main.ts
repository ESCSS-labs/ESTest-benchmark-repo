const iterations = 10000000;
/**                       Result 
 *         ESTest(disabled)    ESTest    valibot       Zod         Joi
 * all        100 ms           950 ms     520 ms     2400 ms    21500 ms
 * object      70 ms           632 ms     375 ms     1900 ms    11500 ms
 * string      40 ms           225 ms      82 ms      387 ms     7500 ms
*/




/** test case - ESTest 
 * ESTest(disabled)
 * all - 100 ms
 * object - 70 ms
 * string - 40 ms
 * 
 * ESTest
 * all - 950 ms
 * object - 632 ms
 * string - 225 ms
 */
// import { ESTest } from "escss-estest";

// // globalThis.__ESCSS_ESTEST__.isESTestDisabled = true


// const start = performance.now();

// for (let i = 0; i < iterations; i++) {
//   ESTest('lee', 'string')
//   ESTest(10, 'number')
  
//   ESTest('123', 'string')
// }

// const end = performance.now();

// console.log(`time：${end - start} ms`);



/** test case - valibot 
 * all - 520 ms
 * object - 375 ms
 * string - 82 ms
 */
// import * as v from 'valibot';

// const LoginSchema = v.object({
//   name: v.string(),
//   age: v.number()
// });

// type LoginData = v.InferOutput<typeof LoginSchema>;

// function getLoginData(data: unknown): LoginData {
//   return v.parse(LoginSchema, data);
// }

// const StringSchema = v.string();

// type StringData = v.InferOutput<typeof StringSchema>;

// function getStringData(data: string): StringData {
//   return v.parse(StringSchema, data);
// }

// const start = performance.now();
// for (let i = 0; i < iterations; i++) {
//   getLoginData({name: 'lee', age: 10})
//   getStringData('123')
// }
// const end = performance.now();

// console.log(`time：${end - start} ms`);



/** test case - Zod 
 * all - 2400 ms
 * object - 1900 ms
 * string - 387 ms
 */
// import { z } from 'zod';

// const LoginSchema = z.object({
//   name: z.string(),
//   age: z.number()
// });

// type LoginData = z.infer<typeof LoginSchema>;

// function getLoginData(data: unknown): LoginData {
//   return LoginSchema.parse(data);
// }

// const StringSchema = z.string();

// type StringData = z.infer<typeof StringSchema>;

// function getStringData(data: string): StringData {
//   return StringSchema.parse(data);
// }


// const start = performance.now();

// for (let i = 0; i < iterations; i++) {
//   getLoginData({name: 'lee', age: 10})
//   getStringData('123')
// }

// const end = performance.now();

// console.log(`time：${end - start} ms`);



/** test case - Joi 
 * all - 21500 ms
 * object - 11500 ms
 * string - 7500 ms
 * 
*/
// import Joi from 'joi';

// const LoginSchema = Joi.object({
//   name: Joi.string().required(),
//   age: Joi.number().required()
// })

// const StringSchema = Joi.string();


// const start = performance.now();

// for (let i = 0; i < iterations; i++) {
// LoginSchema.validateAsync({name: 'lee', age: 30})
// StringSchema.validateAsync('123')
// }

// const end = performance.now();

// console.log(`time：${end - start} ms`);
