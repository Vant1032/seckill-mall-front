function getTimeOfLastHour() {
    let date = new Date();
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

function getTimeOfNextHour() {
    let date = new Date();
    date.setHours(date.getHours() + 1);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

export default {
    getTimeOfLastHour,
    getTimeOfNextHour,
}
