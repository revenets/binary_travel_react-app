export function formatDate(date) {
    const newDate = new Date(date);
    return [
        newDate.getDate(),
        newDate.getMonth() < 9 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1,
        newDate.getFullYear(),
      ].join('.');
}

export function isPasswordValid (password) {
    if (password.length >= 3 && password.length <= 20) {
        return true;
    }
    return false;
}