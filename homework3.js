const mult= function(num1,num2,num3) {
return num1*num2*num3;
};

const RainDrop=function(){
return "DropTop";
};

const username= function (name, birthDate) {
 name + birthDate
};

const fullName= function(fName,lName){	
return fName + ' ' + lName;
};

const longest= function(str1, str2, str3) {
if(str1.length >=str2.length && str1.length >=str3.length){
        return str1;
    }else if(str2.length >=str1.length && str2.length >=str3.length){
        return str2;}
		else if(str3.length >=str2.length && str3.length >=str1.length){
	return str3;} 
};

const compare = function(num1, num2) {
    if (num1 === num2) return 0;

    else if (num1 > num2) return 1;

    else return -1;

};

const firstTruethy = function(value1, value2, value3) {
    return value1 || value2 || value3;
};