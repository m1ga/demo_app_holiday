var pw = Ti.Platform.displayCaps.platformWidth;
var ph = Ti.Platform.displayCaps.platformHeight;
var ldi = Ti.Platform.displayCaps.logicalDensityFactor;
Alloy.Globals.WIDTH = (OS_ANDROID) ? pw / ldi : pw;
Alloy.Globals.HEIGHT = (OS_ANDROID) ? ph / ldi : ph;
Alloy.Globals.WIDTH_HALF =  Alloy.Globals.WIDTH * 0.5;
Alloy.Globals.WIDTH_ITEM =  Alloy.Globals.WIDTH_HALF - 22;
