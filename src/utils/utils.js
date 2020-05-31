import _ from "lodash";

function getTimeOfLastHour(date) {
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

function getTimeOfNextHour(date) {
    date.setHours(date.getHours() + 1);
    date.setMinutes(0);
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

function imgPath(imgName) {
    return '/static/' + imgName;
}

/**
 * @param date 日期
 * @returns {string} yyyy-MM-dd HH:mm:ss 格式的字符串
 */
function dateToString(date) {
    let year = date.getFullYear();
    let month =(date.getMonth() + 1).toString();
    let day = (date.getDate()).toString();
    let hour = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let second = date.getSeconds().toString();
    if (month.length === 1) {
        month = "0" + month;
    }
    if (day.length === 1) {
        day = "0" + day;
    }
    if (hour.length === 1) {
        hour = '0' + hour;
    }
    if (minutes.length === 1) {
        minutes = '0' + minutes;
    }
    if (second.length === 1) {
        second = '0' + second;
    }
    return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + second;
}

/**
 * @param string yyyy-MM-dd HH:mm:ss格式的字符串
 * @returns {Date}
 */
function stringToDate(string) {
    return new Date(Date.parse(string.replace('-','/')));
}

function imgFullUrl(imgName) {
    return 'http://' + process.env.VUE_APP_BACKEND_URL + ':' + process.env.VUE_APP_BACKEND_PORT + imgPath(imgName);
}

function fullApiUrl(apiPath) {
    return 'http://' + process.env.VUE_APP_BACKEND_URL + ':' + process.env.VUE_APP_BACKEND_PORT + '/api' + apiPath;
}

function handleRsp(rsp, window, successCallback) {
    if (rsp.code === 0) {
        successCallback(rsp.data);
    } else if (!_.isEmpty(rsp.msg)) {
        window(rsp.msg);
    }
}

function defaultString(string, defaultVal) {
    if (_.isEmpty(string)) {
        return defaultVal;
    }
    return string;
}

let statusMap = new Map();
statusMap
    .set('CANCEL', '已取消')
    .set('WAIT_PAY', '待付款')
    .set('WAIT_SHIPPING', '待发货')
    .set('SHIPPED', '已发货')
    .set('WAIT_SIGN', '待签收');

function transferOrderStatus(status) {
    return statusMap.get(status);
}

export default {
    getTimeOfLastHour,
    getTimeOfNextHour,
    getNextDayStartTime,
    imgPath,
    imgFullUrl,
    fullApiUrl,
    handleRsp,
    stringToDate,
    dateToString,
    defaultString,
    transferOrderStatus,
}
