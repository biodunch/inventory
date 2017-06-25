var _ =require('lodash');
var arr = require('./customer_data.js')



arry = arr.split('\n');
var jsonObj = [];
var headers = arry[0].split(',');
// console.log(headers)
for(var i = 1; i < arry.length; i++) {
  var data = arry[i].split(',');
  var obj = {};
  for(var j = 0; j < data.length; j++) {
    // console.log(headers[j])
    if(headers[j]){
      obj[headers[j].trim()] = data[j].trim();
    }

  }
  jsonObj.push(obj);
}
JSON.stringify(jsonObj);

module.exports =  jsonObj;
// console.log(jsonObj)
