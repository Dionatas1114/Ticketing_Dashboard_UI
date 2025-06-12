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

const passwordIsValid = (value: string) => passwordStrength(value) >= 5; // Define o nível mínimo de força da senha (pontuação de 5 critérios)

const patterns: RegExpElements = {
  userName: /^\s*[\p{L}]+(?:\s[\p{L}]+)*\s*$/u, // Permite apenas letras com ou sem acentos e espaços entre, antes e depois dos nomes
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  // phone: '^\\d{' + phoneLength + '}$',
};

const regexPatterns = (pattern: string) => patterns[pattern];

export { regexPatterns, passwordIsValid, passwordStrength };
