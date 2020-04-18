function getTimeOfLastHour(date) {
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

function getTimeOfNextHour(date) {
    date.setHours(date.getHours() + 1);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

function getNextDayStartTime(date) {
    date.setDate(date.getDate() + 1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

function imgUrl(imgName) {
    return '/static/' + imgName;
}

export default {
    getTimeOfLastHour,
    getTimeOfNextHour,
    getNextDayStartTime,
    imgUrl,
}
