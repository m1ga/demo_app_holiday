var args = $.args;

$.img1.image = args.img

for (var i = 0; i < args.stars; ++i) {
	var star = Ti.UI.createLabel({
		color: "#fff",
		right: 4,
		text: "\uF186",
		font: {
			fontSize: 14,
			fontFamily: "remixicon"
		}
	})
	$.view_stars.add(star);
}

function onClick(e) {
	$.trigger("click", {
		image: args.img
	});
}
