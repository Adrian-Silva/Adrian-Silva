var diaAnterior = function(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    var date = yyyy + '-' + mm + '-' + dd;

    return new Date(date);
}

var workingDay = function (date) {
    while (date.getDay() == 5 || date.getDay() == 6) {
        date.setDate(date.getDate() - 1)
    }
    return date;
}

var date = new Date('2023-03-16');
date = diaAnterior(date);

var day = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom']


date = workingDay(date);

var date2 = diaAnterior(date);
date2 = workingDay(date2);


console.log(day[date.getDay()] + ': ' + (date.getDate() + 1))
console.log(day[date2.getDay()] + ': ' + (date2.getDate() + 1))


var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();

console.log(yyyy + '-' + mm + '-' + dd);