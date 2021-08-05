import moment from 'moment';

const findStatus = (date) => {
  let todayDate = moment().format("YYYY-MM-DD");
  let todayMoment = moment(todayDate, "YYYY-MM-DD");
  let eventDateMoment = moment(date, "YYYY-MM-DD");
  let daysDifference = eventDateMoment.diff(todayMoment, 'days');
  if(daysDifference === 0) {
    return "TODAY";
  } else if (daysDifference === 1) {
    return "TOMMORROW";
  } else if (daysDifference < 0) {
    return "PAST";
  } else {
    return "UPCOMING";
  }
}

export default findStatus;
