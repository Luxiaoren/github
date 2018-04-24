function setCookie(key, value, time) {
    var date = new Date();
    date.setSeconds(date.getSeconds() + time);
    document.cookie = key + "=" + value + ";expires=" + date + ";path=/";
}

function removeCookie(key) {
    setCookie(key, "null", -1);
}

function getCookie(key) {
    var cookie = document.cookie;
    cookie = cookie.split("; ");
    for (var i = 0; i < cookie.length; i++) {
        if (cookie[i].split("=")[0] === key) {
            return cookie[i].split("=")[1];
        }
    }
    return false;
}