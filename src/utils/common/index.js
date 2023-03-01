const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const timeZones = {
  "America/Los_Angeles": "PST",
  "US/Central": "CT",
  "US/Eastern": "EST",
}

export const getFormattedDate = (utcDate) => {
  const date = new Date(utcDate);
  return `${date.getDate()}
      ${monthNames[date.getMonth()]} 
      ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
};

export const getTimeZone = (timeZone) => {
  return timeZones[timeZone];
}