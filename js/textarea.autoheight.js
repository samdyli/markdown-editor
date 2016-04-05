/**
 *Make textarea controller adjust height with content
 *from : http://runjs.cn/detail/gbs1yqd8 
 *time : 2016/3/30
 * just add the js file and set textarea `s autoHeight attribute to true. Just like this 
 * <textarea autoHeight="true"></textarea>
 */
$.fn.autoHeight = function(){
	
	function autoHeight(elem){
		elem.style.height = 'auto';
		elem.scrollTop = 0; //·À¶¶¶¯
		elem.style.height = elem.scrollHeight + 'px';
	}
	
	this.each(function(){
		autoHeight(this);
		$(this).on('keyup', function(){
			autoHeight(this);
		});
	});

}
	
	
$('textarea[autoHeight]').autoHeight();