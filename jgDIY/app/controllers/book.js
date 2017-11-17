/********************************************************
 * Appcelerator Designer Generated Code
 *******************************************************/


/**
 * myaccount
 * @param {object} e - event object
 */
function myaccount(e) {
	   var bookview = Alloy.createController("book").getView();
    bookview.close();
    var receive = Alloy.createController("receiveaccept").getView();
    receive.open();
}

/**
 * showdate
 * @param {object} e - event object
 */
function showdate(e) {
	// Set picker data
Ti.UI.backgroundColor = 'grey';
var win = Ti.UI.createWindow({
	
});
 var dateValue = new Date();
 
var minDate = new Date();

minDate.setFullYear(2017);
 
minDate.setMonth(0);

minDate.setDate(1);
var maxDate = new Date(2017, 10, 21);
var picker = Ti.UI.createPicker({
	type : Ti.UI.PICKER_TYPE_DATE_AND_TIME,
minDate:minDate,
maxDate:maxDate,
value:new Date(2017, 10, 20),
selectionIndicator:true,
	top : 350,
	opacity: 0.8
});
 
win.add(picker);
win.open();
}
