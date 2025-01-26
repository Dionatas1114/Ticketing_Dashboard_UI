export const getDateNow = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dateNow = new Date();

  const hours = dateNow.getHours();
  const day = days[dateNow.getDay()];
  const date = dateNow.getDate();
  const month = months[dateNow.getMonth()];

  return { dateNow: `${day} ${date} ${month}`, hours };
};
