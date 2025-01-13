const specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

const passwordStrength = (password: string) => {
  let strength = 0;

  // Pontuação com base em critérios
  if (password.length >= 6) strength += 1; // Tem ao menos 6 caracteres
  if (/[A-Z]/.test(password)) strength += 1; // Tem ao menos 1 letra maiúscula
  if (/[a-z]/.test(password)) strength += 1; // Tem ao menos 1 letra minúscula
  if (/\d/.test(password)) strength += 1; // Tem ao menos 1 número
  if (specialCharsRegex.test(password)) strength += 1; // Tem ao menos 1 caractere especial

  return strength;
};

const patterns: RegExpElements = {
  userName: /^[a-zA-Z\\s]*$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  // phone: '^\\d{' + phoneLength + '}$',
};

const regexPatterns = (pattern: string) => patterns[pattern];

export { regexPatterns, passwordStrength };
