export const getHoursPerDay = (dateArray: any) => {
  const initialHour = dateArray[0] ? parseInt(dateArray[0].split(':')[0]) : 0;
  const finalHour = dateArray[1] ? parseInt(dateArray[1].split(':')[0]) : 0;
  if (initialHour === 0 && finalHour === 0) {
    return 0;
  }
  const hours = finalHour - initialHour;
  return hours;
};

export const getPayPerDay = (day: string, dateArray: any) => {
  const initialHour = dateArray[0] ? parseInt(dateArray[0].split(':')[0]) : 0;
  const finalHour = dateArray[1] ? parseInt(dateArray[1].split(':')[0]) : 0;
  if (initialHour === 1 && finalHour === 1) {
    return 0;
  }
  let hours = [];
  for (let i = initialHour; i < finalHour; i++) {
    hours.push(i);
  }
  var totalPay = 0;
  if (
    day === 'MO' ||
    day === 'TU' ||
    day === 'WE' ||
    day === 'TH' ||
    day === 'FR'
  ) {
    hours.map((item) => {
      if (item > 0 && item < 9) {
        totalPay = totalPay + 25;
      } else if (item > 9 && item < 18) {
        totalPay = totalPay + 15;
      } else if (item > 18 && item < 24) {
        totalPay = totalPay + 20;
      } else {
        totalPay = 0;
      }
    });
    return totalPay;
  } else if (day === 'SA' || day === 'SU') {
    hours.map((item) => {
      if (item > 0 && item < 9) {
        totalPay = totalPay + 30;
      } else if (item > 9 && item < 18) {
        totalPay = totalPay + 20;
      } else if (item > 18 && item < 24) {
        totalPay = totalPay + 25;
      } else {
        totalPay = 0;
      }
    });
    return totalPay;
  } else {
    return 0;
  }
};
