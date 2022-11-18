// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var currentMenu = 1;

function onClickMenu(e) {
	var id = e.source.id.substr(4);
	if (currentMenu != id) {
		$["lbl_menu" + currentMenu].font = {
			fontWeight: "normal"
		}

		$["lbl_menu" + id].font = {
			fontWeight: "bold"
		}

		currentMenu = id;
	}
}

function onClickItem(e) {
	var win = Alloy.createController("/detailView", {
		image: e.image
	}).getView();
	win.open();
}
