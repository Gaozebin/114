'use strict';

function average_uneven(collection) {

  //在这里写入代码
   var sum = 0, count = 0;
    collection.forEach(function (value) {
        if(value % 2 != 0){
            count ++;
            sum += value;
        }
    });
    return sum / count;
}

module.exports = average_uneven;
