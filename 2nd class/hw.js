let input = +prompt ("Enter days: ");

const Years = Math.floor(input / 365);

const Months = Math.floor(input % 365 / 30);

const Weeks = Math.floor(input % 365 / 7);

const Days = Math.floor(input % 365 % 7);

console.log({Years, Months, Weeks, Days});