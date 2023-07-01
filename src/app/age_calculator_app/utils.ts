export const getTimeDiff = (pastDate: Date, futureDate: Date): ResultState => {
  const yearDiff = futureDate.getFullYear() - pastDate.getFullYear();
  const monthDiff = futureDate.getMonth() - pastDate.getMonth();
  const dayDiff = futureDate.getDate() - pastDate.getDate();

  let years = yearDiff;
  let months = monthDiff;
  let days = dayDiff;

  if (dayDiff < 0) {
    const daysInLastMonth = new Date(futureDate.getFullYear(), futureDate.getMonth(), 0).getDate();
    months -= 1;
    days += daysInLastMonth;
  }

  if (monthDiff < 0) {
    years -= 1;
    months += 12;
  }

  return {
    years: years.toString(),
    months: months.toString(),
    days: days.toString(),
  };
};

export const validateNumber = (value: number | undefined, msg: string, min = 0, max = 100): [boolean, string] => {
  if (value === undefined) {
    return [true, msg];
  }
  return [value >= min && value <= max, msg];
};

export const validateDate = (state: FormState): [boolean, string] => {
  const deafultValidationError: [boolean, string] = [false, "Must be a valid date"];
  const date = new Date(state.year!, state.month! - 1, state.day!);
  if (date.toString() === "Invalid Date") {
    return deafultValidationError;
  }
  if (date.getTime() > new Date().getTime()) {
    return [false, "Must be in the past"];
  }
  if (date.getFullYear() != state.year || date.getMonth() != state.month! - 1 || date.getDate() != state.day) {
    return deafultValidationError;
  }
  return [true, ""];
};
