//2011년 09월 11일 오후 03시 45분 42초
//console.log(new Date().format("yyyy년 MM월 dd일 a/p hh시 mm분 ss초")); 
//2011-09-11
//console.log(new Date().format("yyyy-MM-dd"));
//'11 09.11
//console.log(new Date().format("'yy MM.dd")); 
//2011-09-11 일요일
//console.log(new Date().format("yyyy-MM-dd E"); 
//현재년도 : 2011
//console.log("현재년도 : " + new Date().format("yyyy"));
Date.prototype.format = function(f) {
  if (!this.valueOf()) return " ";

  var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  var d = this;
   
  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
      switch ($1) {
          case "yyyy": return d.getFullYear();
          case "yy": return (d.getFullYear() % 1000).zf(2);
          case "MM": return (d.getMonth() + 1).zf(2);
          case "dd": return d.getDate().zf(2);
          case "E": return weekName[d.getDay()];
          case "HH": return d.getHours().zf(2);
          case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
          case "mm": return d.getMinutes().zf(2);
          case "ss": return d.getSeconds().zf(2);
          case "a/p": return d.getHours() < 12 ? "오전" : "오후";
          default: return $1;
      }
  });
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

var StringBuilder = function() {
	this.buffer = new Array();
};
StringBuilder.prototype.Append = function(strValue) {
	this.buffer[this.buffer.length] = strValue;
};
StringBuilder.prototype.ToString = function() {
	return this.buffer.join("");
};

//콤마찍기
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

// 콤마풀기
function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}
// input 박스 입력시 콤마찍기
function inputNumberFormat(obj) {
    obj.value = comma(uncomma(obj.value));
}

/*
 * str : 변환 처리할 원본 문자열
 * targetStr : 변환하기 원하는 문자열 - 바꿀문자
 * replaceStr : 대체될 문자(열) - 바뀌어질 문자
 */ 
function replaceAll(str, targetStr, replaceStr){
	return str.split(targetStr).join(replaceStr);
}
//숫자만 입력
function onlyNumber(obj) {
	$(obj).keyup(function() {
		$(this).val($(this).val().replace(/[^0-9.]/g, ""));
	});
}
//IP 체크 (IP 문자열에 점 포함해야함.)
function _ipValidation(strIp) {
	var pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	return pattern.test(strIp);
}

//isNumeric( "-10" ) // true
//isNumeric( "+10" ) // true
//isNumeric( "-10", 2 ) // false
//isNumeric( "+10", 2 ) // false
//isNumeric( "0" ) // true
//isNumeric( "0xFF" ) // false
//isNumeric( "8e5" ) // false
//isNumeric( "3.1415" ) // true
//isNumeric( "3.1415", 4 ) // false
//isNumeric( "0144" ) // true
//isNumeric( ".423" ) // false
//isNumeric( "" ) // false
//isNumeric( "432,000" ) // true
//isNumeric( "432,000", 3 ) // false
//isNumeric( "23,223.002" ) // true
//isNumeric( "3,23,423" ) // false
//isNumeric( "-0x42" ) // false
//isNumeric( "7.2acdgs" ) // false
//isNumeric( {} ) // false
//isNumeric( NaN ) // false
//isNumeric( null ) // false
//isNumeric( true ) // false
//isNumeric( false ) // false
//isNumeric( Infinity ) // false
//isNumeric( undefined ) // false

// 양수/음수기호(+,-), 자릿수구분기호(12,000), 소수점(1.14159) 사용 여부를 선택해야합니다.
function isNumeric(num, opt){
	// 좌우 trim(공백제거)을 해준다.
	num = String(num).replace(/^\s+|\s+$/g, "");
	 
	if(typeof opt == "undefined" || opt == "1"){
		// 모든 10진수 (부호 선택, 자릿수구분기호 선택, 소수점 선택)
		var regex = /^[+\-]?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
	}else if(opt == "2"){
		// 부호 미사용, 자릿수구분기호 선택, 소수점 선택
		var regex = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
	}else if(opt == "3"){
		// 부호 미사용, 자릿수구분기호 미사용, 소수점 선택
		var regex = /^[0-9]+(\.[0-9]+)?$/g;
	}else{
		// only 숫자만(부호 미사용, 자릿수구분기호 미사용, 소수점 미사용)
		var regex = /^[0-9]$/g;
	}
	 
	if( regex.test(num) ){
		num = num.replace(/,/g, "");
		return isNaN(num) ? false : true;
	}else{ 
		return false;  
	}
}

function fn_strCombine(str, delimiter){
	
	if(str == null || str == "") return;
	if(delimiter == null || delimiter == "") return;
	
	var input = str.split(delimiter);
	var strTmp = "";
	for(var i = 0; i < input.length; i++){
		strTmp = strTmp + input[i];
	}
	return strTmp;
}

function getCurrentDate(){
	
	return new Date().toISOString().substr(0, 10).replace('T', ' ');
}

function byteMaxLength(obj, maxLength) {
    var inputString = obj.value;

    var byteLength = (function(s,b,i,c){
        for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
        return b;
    })(inputString);

    if(byteLength > maxLength){
        obj.value = (function(str, maxLen){
            for(b=i=0;c=str.charCodeAt(i);i++) { b+=c>>11?3:c>>7?2:1; if (b > maxLen) break; }
            return str.substring(0,i);
		})(inputString, maxLength)
    }
}

//hex to rgba
function hex2rgba(hex, opacity) {
	console.log(opacity);
	if(opacity == null || opacity == "" || opacity == 'undefined') {
		opacity = 100;
	}
	
	hex = hex.replace('#', '');
	r = parseInt(hex.substring(0, hex.length / 3), 16);
	g = parseInt(hex.substring(hex.length / 3, 2 * hex.length / 3), 16);
	b = parseInt(hex.substring(2 * hex.length / 3, 3 * hex.length / 3), 16);

	result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
	return result;
}

//Auto on/off 메시지 박스
var _messageBox = {
	on : function(themeType, msg){
		$(".ax5-ui-toast-container > div").attr('class', 'ax5-ui-toast ' + themeType) ;
		$(".ax5-ui-toast-container > div > div:eq(1)").text(msg);
		$(".ax5-ui-toast-container").fadeIn(500);
		$(".ax5-ui-toast-container").delay(1700).fadeOut(500);
	}
}