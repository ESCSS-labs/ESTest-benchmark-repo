console.warn(`
==== Test Environment ====
- Device: Apple M4 (MacBook Pro), 16GB RAM
- OS: macOS 15.2 (Sequoia)
- Browser: Chrome 136.0.7103.49
- Node.js: v22.14.0
- Vite: v6.3.4

======== Based on ========
performance.now()
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

import * as ESTestDisabledResult from './ESTestDisabled';
import * as arkTypeResult from './arkType';
import * as ESTestResult from './ESTest';
import * as unSafeESTestResult from './unSafeESTest';
import * as valibotResult from './valibot';
import * as zodResult from './zod';
import * as joiResult from './joi';
import * as typeBoxResult from './typeBox';
import * as yupResult from './yup';

ESTestDisabledResult
arkTypeResult
ESTestResult
unSafeESTestResult
valibotResult
zodResult
joiResult
typeBoxResult
yupResult