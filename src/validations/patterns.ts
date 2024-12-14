import rules from './rules';

const { userNameMinLength, userNameMaxLength, passwMinLength, passwMaxLength, phoneLength } = rules;

const patterns: StringElements | RegExpElements = {
  userName:
    "(?i)(^[a-z])((?![? .,'-]$)[ .]?[a-z]){" + userNameMinLength + ',' + userNameMaxLength + '}$',
  email:
    "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$",
  // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  password:
    "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{" +
    passwMinLength +
    ',' +
    passwMaxLength +
    '}$',
  phone: '^\\d{' + phoneLength + '}$',
};

// const patternTest = (pattern: string, data: string) => new RegExp(patterns[pattern]).test(data);
const regexPatterns = (pattern: string) => new RegExp(patterns[pattern]);

export { patterns, regexPatterns };
