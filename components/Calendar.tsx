export function getCurrentDate() {
    const date = new Date();
    return [date.getDate(), date.getMonth()+1, date.getFullYear()];
}

export function getFasts(year?: number) {
    return year || new Date().getFullYear();
}

export function getHolidays(year?: number) {

    return year || new Date().getFullYear();
}