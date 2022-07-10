function isRightSelected(day, value) {
    return value.isSame(day, "day");
  }

  export function isBeforeToday(day) {
    return day.isBefore(new Date(), "day");
  }

  function isToday(day) {
    return day.isSame(new Date(), "day");
  }

export default  function dayStyles(day, value) {
    if (isBeforeToday(day)) {
      return "before";
    }

    if (isToday(day)) {
      return "today";
    }

    if (isRightSelected(day, value)) {
      return "selected";
    }

    return "";
  }