function generateIcon(icon) {
	var size = (icon.size == undefined) ? 30 : icon.size;
	if (OS_IOS) {
		size /= Ti.Platform.DisplayCaps.logicalDensityFactor;
	}
	var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, icon.filename);
	var lbl = Ti.UI.createLabel({
		text: icon.icon,
		font: {
			fontSize: size - 2,
			fontFamily: "remixicon"
		},
		color: "#FFF"
	});
	var view = Ti.UI.createView({
		width: size,
		height: size,
	});
	view.add(lbl);
	var img = view.toImage();
	f.write(img);
}

generateIcon({
	filename: 'icon_home.png',
	icon: "\uEE19"
})
generateIcon({
	filename: 'icon_calendar.png',
	icon: "\uEB27"
})
generateIcon({
	filename: 'icon_search.png',
	icon: "\uF0D1"
})
generateIcon({
	filename: 'icon_user.png',
	icon: "\uF264"
})

$.tab1.icon = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "icon_home.png").read();
$.tab2.icon = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "icon_calendar.png").read();
$.tab3.icon = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "icon_search.png").read();
$.tab4.icon = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "icon_user.png").read();

$.index.open();
// var w = Alloy.createController("/detailView").getView();
// w.open();
