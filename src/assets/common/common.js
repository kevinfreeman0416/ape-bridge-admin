import Web3 from "web3";
let web3 = require('web3')
web3 = new Web3(window.ethereum)
//初始化ethereum对象
const getEthereum = function() {
  let ethereum = window.ethereum;
  if (ethereum == null) {
    // Toast(i18n.t('pleaseInstallWallet'))
    return;
  }
  if (!ethereum) {
    return -1
  }
  return ethereum;
};
const formatSecond = function (value, s = true, m = true, h = true) {
    var theTime = parseInt(value); // 秒
    var theTime1 = 0; // 分
    var theTime2 = 0; // 小时
    if (theTime > 60) {
      theTime1 = parseInt(theTime / 60);
      theTime = parseInt(theTime % 60);
      if (theTime1 > 60) {
        theTime2 = parseInt(theTime1 / 60);
        theTime1 = parseInt(theTime1 % 60);
      }
    }
    var result = ""
    if (s) result = "" + parseInt(theTime) + (isEnglish()?'s':"秒");
    if (theTime1 > 0 && m) {
      result = "" + parseInt(theTime1) + (isEnglish()?'m':"分") + result;
    }
    if (theTime2 > 0 && h) {
      result = "" + parseInt(theTime2) + (isEnglish()?'h':"小时") + result;
    }
    return result;
  }

 /**
 * 复制文本到剪切板
 * @param stringCopy
 */
const copyString = function (stringCopy) {
    let aux = document.createElement("input");
    aux.setAttribute("value", stringCopy);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

  /**
 * 显示缩略地址
 * 0X7Y....HDGA
*/
const getUserShowAddress = function(e) {
    
    if (!e) return "";
  
    return `${e.substring(0, 4)}...${e.substring(
      e.length - 4,
      e.length
    )}`;
  };

  //生成从minNum到maxNum的随机数
 const randomNum = function (minNum, maxNum){
  switch(arguments.length){
    case 1:
      return parseInt(Math.random()*minNum+1,10);
    case 2:
      return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
    default:
      return 0;
  }
}
// 获取url指定参数
const getQueryString = function getQueryString(name) {
	var query_string = window.location.search;
  if (!query_string) return null; // 如果无参，返回null
  var re = /[?&]?([^=]+)=([^&]*)/g;
  var tokens;
  while (tokens = re.exec(query_string)) {
    if (decodeURIComponent(tokens[1]) === name) {
      return decodeURIComponent(tokens[2]);
    }
  }
  return null;
}
// 移除空字符串，null, undefined
const dealObjectValue = function dealObjectValue(obj){
  var param = {};
  if ( obj === null || obj === undefined || obj === "" ) return param;
  for ( var key in obj ){
      if ( typeof(obj[key]) === "Object" ){
          param[key] = dealObjectValue(obj[key]);
      }else if(  obj[key] !== null && obj[key] !== undefined && obj[key] !== ""  ){
          param[key] = obj[key];
      }
  }
  return param;
};
//生成随机数 默认6位
const randomString = function randomString(e) {    
  e = e || 6;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789",
  a = t.length,
  n = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}

const weiToDecimal = function (amount, decimal = 18 ) {
  return web3.utils.fromWei(amount.toString(), 'ether')
}

const decimalToWei = function (amount, decimal = 18 ) {
  return web3.utils.toWei(amount.toString(), 'ether')
}

const toolNumber = function(num_str) {
  num_str = num_str.toString();
  if (num_str.indexOf("+") != -1) {
    num_str = num_str.replace("+", "");
  }
  if (num_str.indexOf("E") != -1 || num_str.indexOf("e") != -1) {
    var resValue = "",
      power = "",
      result = null,
      dotIndex = 0,
      resArr = [],
      sym = "";
    var numStr = num_str.toString();
    if (numStr[0] == "-") {
      // 如果为负数，转成正数处理，先去掉‘-’号，并保存‘-’.
      numStr = numStr.substr(1);
      sym = "-";
    }
    if (numStr.indexOf("E") != -1 || numStr.indexOf("e") != -1) {
      var regExp = new RegExp(
        "^(((\\d+.?\\d+)|(\\d+))[Ee]{1}((-(\\d+))|(\\d+)))$",
        "ig"
      );
      result = regExp.exec(numStr);
      if (result != null) {
        resValue = result[2];
        power = result[5];
        result = null;
      }
      if (!resValue && !power) {
        return false;
      }
      dotIndex = resValue.indexOf(".") == -1 ? 0 : resValue.indexOf(".");
      resValue = resValue.replace(".", "");
      resArr = resValue.split("");
      if (Number(power) >= 0) {
        var subres = resValue.substr(dotIndex);
        power = Number(power);
        //幂数大于小数点后面的数字位数时，后面加0
        for (var i = 0; i <= power - subres.length; i++) {
          resArr.push("0");
        }
        if (power - subres.length < 0) {
          resArr.splice(dotIndex + power, 0, ".");
        }
      } else {
        power = power.replace("-", "");
        power = Number(power);
        //幂数大于等于 小数点的index位置, 前面加0
        for (var i = 0; i < power - dotIndex; i++) {
          resArr.unshift("0");
        }
        var n = power - dotIndex >= 0 ? 1 : -(power - dotIndex);
        resArr.splice(n, 0, ".");
      }
    }
    resValue = resArr.join("");

    return sym + resValue;
  } else {
    return num_str;
  }
}



  export default{
    formatSecond,
    copyString,
    getUserShowAddress,
    randomNum,
    getQueryString,
    dealObjectValue,
    randomString,
    getEthereum,
    weiToDecimal,
    decimalToWei,
    toolNumber,
  }