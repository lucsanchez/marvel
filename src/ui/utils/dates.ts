export function isValidDate(dateString: string) {
  const date = new Date(dateString);
  if (!isNaN(date.getTime())) {
    const regex = /^-?\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}([-+]\d{4})?$/;
    return regex.test(dateString);
  }
  return false;
}
