'use strict';

function TimeHandler() {
    
    this.checkFormat = function(time) {
        if(time.indexOf("%") > - 1) {
            return "natural";
        }
        else if (+time > 0) {
            return "unix";
        }
        else {
            return "null";
        }
    };
    
    this.parseInput = function(time, type) {
        var dateStr = cleanDateStr(time);
        if(type === "natural") {
            return {"unixtime": parseNaturalDateToUnixTime(time, dateStr), "natural": dateStr};
        }
        else if (type === "unix") {
            return {"unixtime": time, "natural": parseUnixTimeToNatual(time)};
        }
        else if (type == "null") {
            return {"unixtime": null, "natural": null};
        }
    };
    
        var cleanDateStr = function (str) {
        return str.split("%20").join(" ");
    };
    
    var parseUnixTimeToNatual = function(time) {
        var date = new Date();
        date.setTime(+time * 1000);
        var month = date.getMonth();
        var day = date.getDate();
        var year = date.getFullYear();
        
        var monthStr = parseNumToMonth(month);
        
        return monthStr + " " + day + ", " + year;
        
    };
    
    var parseNaturalDateToUnixTime = function (time, cleanStr) {
        var dateArr = cleanStr.replace(",", "").split(" ");
        var month = parseMonthStrToNum(dateArr[0]);
        var day = dateArr[1];
        var year = dateArr[2];
        
        var date = new Date();
        date.setMonth(month);
        date.setDate(day);
        date.setFullYear(year);
        
        return Math.floor(date.getTime() / 1000);
    };
    
    var parseNumToMonth = function(month) {
        switch(month) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
            default:
                return "Not a month";
                
        }
    };
    
     var parseMonthStrToNum = function(month) {
        switch(month.toLowerCase()) {
            case "january":
                return 0;
            case "february":
                return 1;
            case "march":
                return 2;
            case "april":
                return 3;
            case "may":
                return 4;
            case "june":
                return 5;
            case "july":
                return 6;
            case "august":
                return 7;
            case "september":
                return 8;
            case "october":
                return 9;
            case "november":
                return 10;
            case "december":
                return 11;
            default:
                return NaN;
                
        }
    };
}

module.exports = TimeHandler;