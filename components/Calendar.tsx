const convertDate = require('ethiopian-date');

// Returns current date in the format [gregorian, ethiopian]
// where each of gregorian and ethiopian have forms [YYYY, MM, DD].
export function getCurrentDate() {
    const date = new Date();
    const gregorian = [date.getFullYear(), date.getMonth()+1, date.getDate()];
    const ethiopian = convertDate.toEthiopian(gregorian[0], gregorian[1], gregorian[2]);
    return [gregorian, ethiopian];
}

export function getFasts(year?: number) {
    return year || new Date().getFullYear();
}

export function getHolidays(year?: number) {
    return year || new Date().getFullYear();
}