/* eslint-disable */
// 获取对象类型
export function getObjType (obj) {
    let toString = Object.prototype.toString
    let map = {
        '[object Boolean]'  : 'boolean',
        '[object Number]'   : 'number',
        '[object String]'   : 'string',
        '[object Function]' : 'function',
        '[object Array]'    : 'array',
        '[object Date]'     : 'date',
        '[object RegExp]'   : 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]'     : 'null',
        '[object Object]'   : 'object'
    }
    return map[toString.call(obj)]
}

export function alert(data, callback) { //回调函数
    var alert_bg = document.createElement('div'),
        alert_box = document.createElement('div'),
        alert_text = document.createElement('div'),
        alert_btn = document.createElement('div'),
        textNode = document.createTextNode(data ? data : ''),
        btnText = document.createTextNode('确 定');

    // 控制样式
    css(alert_bg, {
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'right': '0',
        'bottom': '0',
        'background-color': 'rgba(0, 0, 0, 0.1)',
        'z-index': '999999999'
    });

    css(alert_box, {
        'width': '270px',
        'max-width': '90%',
        'font-size': '16px',
        'text-align': 'center',
        'background-color': '#fff',
        'border-radius': '15px',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        '-webkit-transform': 'translate(-50%, -50%)',
    });

    css(alert_text, {
        'padding': '30px 15px',
        'border-bottom': '1px solid #ddd'
    });

    css(alert_btn, {
        'padding': '12px 0',
        'color': '#007aff',
        'font-weight': '600',
        'cursor': 'pointer'
    });

    // 内部结构套入
    alert_text.appendChild(textNode);
    alert_btn.appendChild(btnText);
    alert_box.appendChild(alert_text);
    alert_box.appendChild(alert_btn);
    alert_bg.appendChild(alert_box);

    // 整体显示到页面内
    document.getElementsByTagName('body')[0].appendChild(alert_bg);

    // 确定绑定点击事件删除标签
    alert_btn.onclick = function () {
        alert_bg.parentNode.removeChild(alert_bg);
        if (typeof callback === 'function') {
            callback(); //回调
        }
    }
}

function css(targetObj, cssObj) {
    var str = targetObj.getAttribute("style") ? targetObj.getAttribute('style') : '';
    for (var i in cssObj) {
        str += i + ':' + cssObj[i] + ';';
    }
    targetObj.style.cssText = str;
}

// 过去链接头部键值对
export function getRequestr() {
    var str = location.search;        //  ?userName=zhanghao$userId=123

    // 假如这种情况 materialSelect.html#?id=12
    if (!str || str === "") {
        str = location.href.slice(location.href.indexOf('?'))
    }

    if (str) {
        var url = str.substr(1), arr = url.split('&'), len = arr.length, i = 0, request = {};        //        ["userName=zhanghao", "userId=123"]
        for (; i < len; i++) {
            request[arr[i].split('=')[0]] = arr[i].split('=')[1];             //     ["userName", "zhanghao"]  ["userId", "123"]
        }
        return request; //{userName: "zhanghao", userId: "123"}
    }

    return {}
}

const u = navigator.userAgent;
const ua = window.navigator.userAgent.toLowerCase();

// 判断是否是 debug 环境
export const isDebug = sessionStorage.getItem("debug");
// 是否本地
// export const isLocalhost = window.location.host == "127.0.0.1" || window.location.host.indexOf("localhost") > -1 || window.location.host == "182.61.57.220";
export const isLocalhost = window.location.host == "127.0.0.1" || window.location.host.indexOf("localhost") > -1;
// 判断是否是ios终端
export const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
// 判断是否是android终端
export const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
// 判断是否是微信
export const isWx = ua.match(/MicroMessenger/i) == 'micromessenger';

export function isWeixin() {                               //    判断是否在微信里面运行
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}
export function isQQ() {                                   //    判断是否在QQ里面运行
    if (ua.match(/QQ\/[0-9]/i)) {
        return true;
    } else {
        return false;
    }
}
export function weibo() {                                   //    判断是否在新浪微博客户端里面运行
    if (ua.match(/WeiBo/i) == "weibo") {
        return true;
    } else {
        return false;
    }
}

/** 判断 全面屏 */
export function judgeBigScreen() {
    let result = false;
    const rate = window.screen.height / window.screen.width;
    let limit = window.screen.height == window.screen.availHeight ? 1.8 : 1.65; // 临界判断值

    // window.screen.height为屏幕高度
    //  window.screen.availHeight 为浏览器 可用高度

    // 是全面屏
    if (rate > limit) {
        result = true;
    }
    return result;
}

/**
 * Created by ajun on 2019/02/23
 */

// alert(new Date().format("yyyy年MM月dd日"));
// alert(new Date().format("MM/dd/yyyy"));
// alert(new Date().format("yyyyMMdd"));
// alert(new Date().format("yyyy-MM-dd hh:mm:ss"));
//    fmt ->  'yyyy-MM-dd'
export function dateFtt(time, fmt) {
    let otime = String(time).replace(/-/g, "/");
    let date = new Date(otime);
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
            );
    return fmt;
}

/* 手机号*/
export function isvalidPhone(str) {
    const reg = /^1[23456789]\d{9}$/;
    return reg.test(str);
}

/* 手机号*/
export function idCardNumber(str) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(str);
}

/* 判断是否为中文*/
export function unified(str) {
    const reg = /[\u4e00-\u9fa5]/;
    return reg.test(str);
}

/* 判断是否为空*/
export function isEmpty(val) {
    if (val === '' || val === undefined || val === null || val === 'null') {
        return true
    } else {
        return false
    }
}

/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 *
 * return URL参数字符串
 */
export function parseParam(param, key, encode) {
    if (param == null) return '';
    var paramStr = '';
    var t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
            paramStr += parseParam(param[i], k, encode);
        }
    }
    return paramStr;
};

/* 判断按钮 */
export function has(value) {
    // 按钮权限
    let operator = JSON.parse(sessionStorage.getItem("operator")) || [];
    if (operator) {
        if (operator.indexOf(value) > -1) {
            return true
        }
        return false
    }
    return false
}

/* 判断特殊字符转义按钮 */
export function filter(str) {
    str += ''; // 隐式转换
    str = str.replace(/%/g, '%25');
    str = str.replace(/\+/g, '%2B');
    str = str.replace(/ /g, '%20');
    str = str.replace(/\//g, '%2F');
    str = str.replace(/\?/g, '%3F');
    str = str.replace(/&/g, '%26');
    str = str.replace(/\=/g, '%3D');
    str = str.replace(/#/g, '%23');
    return str;
}

/* 对象转换为url参数 */
export function formateObjToParamStr(paramObj) {
    const sdata = [];
    for (let attr in paramObj) {
        if (!isEmpty(paramObj[attr])) {
            sdata.push(`${attr}=${filter(paramObj[attr])}`);
        }
    }
    return sdata.join('&');
};

/* 测试环境初始化登录信息 */
export function devLogin(value) {
    if (process.env.NODE_ENV === 'development') {
        sessionStorage.setItem("token", "dev_token");
        sessionStorage.setItem("userInfo", JSON.stringify({
            phone: '15871912754',
            password: '123456',
        }));
    }
}

/* 测试环境初始化责任人信息 */
export function devInitResponsible(value) {
    if (process.env.NODE_ENV === 'development') {
        sessionStorage.setItem("checker", JSON.stringify({
            "id": 424,  // 用户ID
            "avatar": "",  // 头像
            "realName": "小z",  // 姓名
            "phone": "13900001111",  //手机号
            "email": "", //邮箱
            "createTime": "2020-05-18 22:55:03",
            "lastLoginTime": "2020-05-18 23:30:29",
            "userType": 1, // 用户类型
            "userStatus": 0, // 启用，停用
            "groupList": [{
                id: "c1342434", //组织id
                name: "杭州阿里巴巴集团", //组织名称
            }]
        }));
    }
}
