// In a module, variables, functions, classes, interfaces, etc., executes on its own scope, not the global scope.
// Use `import` statement to access exports from other modules.
import { EmailValidator } from './EmailValidator';
import { alphanumeric } from './Type';
import ZipCodeValidator from './ZipCodeValidator';

let email = 'john.doe@typescripttutorial.net';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(result);

let zipCodeValidator = new ZipCodeValidator();
let zipResult = validator.isValid('91925');
console.log(zipResult);