export const phoneNumberFormat = (phone: string, isGroup = false) => {
  if (isGroup) return null;

  const digits = phone.replace(/\D/g, ''); // só números

  if (!digits.startsWith('55')) return phone; // não começa com 55, retorna original

  const ddi = '+55';
  const ddd = digits.slice(2, 4);
  let number = digits.slice(4);

  // Adiciona o 9 se não começar com 9
  if (!number.startsWith('9')) {
    number = '9' + number;
  }

  // Formata como 99999-9999
  return `${ddi} (${ddd}) ${number.slice(0, 5)}-${number.slice(5)}`;
};

export const filterBrazilNumber = (number: string): string | null =>
  number.startsWith('55') ? null : number;
