import * as CryptoJS from 'crypto-js';

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY || 'sua-senha-secreta';

const IV = CryptoJS.lib.WordArray.random(16); // 128 bits

const config = {
  iv: IV,
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7,
};

const encrypt = (data: string): string => CryptoJS.AES.encrypt(data, SECRET_KEY, config).toString();

const decrypt = (encryptedData: string): string => {
  if (!encryptedData) return '{}';
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY, config);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export { encrypt, decrypt };
