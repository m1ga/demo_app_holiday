// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

$.img_header.image = args.image;

function onClickBack(e){
  $.detailView.close();
}
