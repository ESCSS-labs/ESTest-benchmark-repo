import Joi from 'joi';

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

const dataSchema = Joi.object({
  id: Joi.string().required(),
  user: Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    preferences: Joi.object({
      darkMode: Joi.boolean().required(),
      language: Joi.string().required(),
    })
  })
})


const iterations = 1000000;
const start = performance.now();
for (let i = 0; i < iterations; i++) {
  dataSchema.validateAsync(data)
}
const end = performance.now();
export default console.log(`[joi] cost time：${end - start} ms`);