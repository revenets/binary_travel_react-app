export function formatDate(date, separator=".") {
    const newDate = new Date(date);
    return [
        newDate.getDate(),
        newDate.getMonth() < 9 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1,
        newDate.getFullYear(),
      ].join(separator);
}

export function isPasswordValid (password) {
    if (password.length >= 3 && password.length <= 20) {
        return true;
    }
    return false;
}

export function getTomorrowDate () {
    let now = new Date();
    const tomorrow = new Date().setDate(now.getDate() + 1);
    return tomorrow;
}

export function formatDateForInput(date, separator="-") {
    const newDate = new Date(date);
    return [
        newDate.getFullYear(),
        newDate.getMonth() < 9 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1,
        newDate.getDate(),
      ].join(separator);
}