
window.onload = function() {
	alert( 1 )

	// 底部固定
	var oBottom = document.getElementById('bottom');
	var iWidth = document.documentElement.clientWidth;

	oBottom.style.left = (iWidth - oBottom.clientWidth)/2 + 'px';


	// 无缝滚动
	var scroll_msg = document.getElementById('scroll_msg');
	scroll_msg.innerHTML += scroll_msg.innerHTML;

	var iH = parseInt(getStyle(scroll_msg, 'height'));
	function fnScroll() {
		var iCur = parseInt(getStyle(scroll_msg, 'top'));
		var iSpeed = -1;
		if ( Math.abs(iCur) >= iH/2 ) {
			scroll_msg.style.top = iSpeed + 'px';
		} else {
			scroll_msg.style.top = iCur + iSpeed + 'px';
		}
	}

}


