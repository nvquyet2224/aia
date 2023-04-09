
function createDateFromString(strDate, symbol) {
    var arrDate = strDate.replace(/\s/g, "").split(symbol);
    return new Date(arrDate[2], arrDate[1] - 1, arrDate[0]);
}
var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

if (document.querySelector('#peron_birthday')) {

    var pickerPer = datepicker('#peron_birthday', {
        formatter: function formatter(input, date, instance) {
            var d = date.getDate();
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            input.value = d + '/' + m + '/' + y;
        },
        respectDisabledReadOnly: false,
        onSelect: function onSelect(instance, date) {
            console.log('select date: ', date);
        },
        customMonths: month
    });

    if (document.querySelector('#peron_birthday').getAttribute('data-date')) {
        var dataDate = document.querySelector('#peron_birthday').getAttribute('data-date');
        var dateDefault = createDateFromString(dataDate, '/');
        pickerPer.setDate(dateDefault, true);
    } else {
        pickerPer.setDate(new Date(), true);
    }

}

if (document.querySelector('#rg_date')) {
    var pickerReg = datepicker('#rg_date', {
        formatter: function formatter(input, date, instance) {
            var d = date.getDate();
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            input.value = d + '/' + m + '/' + y;
        },
        respectDisabledReadOnly: false,
        onSelect: function onSelect(instance, date) {
            console.log('select date: ', date);
        },
        customMonths: month
    });
    pickerReg.setDate(new Date(), true);
}

