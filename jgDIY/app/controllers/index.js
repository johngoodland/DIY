$.index.open();/********************************************************
 * Appcelerator Designer Generated Code
 *******************************************************/


/**
 * changePage
 * @param {object} e - event object
 */
function changePage(e) {
	$.index.close();
  var bookview = Alloy.createController("book").getView();
    bookview.open();
}


function receiveaccept(e) {
   	$.index.close();
    var receive = Alloy.createController("receiveaccept").getView();
    receive.open();
}
/**
 * delay
 * @param {object} e - event object
 */
function delay(e) {
	   	$.index.close();
    var receive = Alloy.createController("delay").getView();
    receive.open();
}

