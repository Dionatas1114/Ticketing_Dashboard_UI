export default function ConvertByTimeZone(dateTime: Date = new Date()): Date {
  const date = new Date(dateTime);

  const formattedDate = date.toLocaleDateString('en-CA'); // Formato YYYY-MM-DD
  const formattedTime = date.toLocaleTimeString('en-US', {
    timeZone: 'America/Sao_Paulo',
    hour12: false,
  }); // Formato HH:mm:ss

  // Combina data e hora no formato ISO e cria uma nova data
  const adjustedDateTime = new Date(`${formattedDate}T${formattedTime}`);

  return adjustedDateTime;
}
