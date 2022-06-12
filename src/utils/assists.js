export function formatDate(date) {
    const newDate = new Date(date);
    return [
        newDate.getDate(),
        newDate.getMonth() < 9 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1,
        newDate.getFullYear(),
      ].join('.');
}