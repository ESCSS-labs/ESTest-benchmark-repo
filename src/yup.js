import * as Yup from 'yup';

const data = {
  id: 'abc123',
  user: {
    name: 'Alice',
    age: 30,
    preferences: {
      darkMode: true,
      language: 'en',
    },
  },
};

const dataSchema = Yup.object().shape({
  id: Yup.string().required(),
  user: Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.number().required(),
    preferences: Yup.object().shape({
      darkMode: Yup.boolean().required(),
      language: Yup.string().required()
    }),
  }),
});

const iterations = 1000000;
const start = performance.now();
for (let i = 0; i < iterations; i++) {
  dataSchema.validate(data)
}
const end = performance.now();

export default console.log(`[yup] cost time：${end - start} ms`);

