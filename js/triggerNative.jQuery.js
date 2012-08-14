(function($){

    $.fn.triggerNative = function(eventType) {
		return this.each(function(){
			var evt = document.createEvent("HTMLEvents");
	        evt.initEvent(eventType, true, true); // event type, bubbling, cancelable
	        this.dispatchEvent(evt);
	  });
};
 
}(jQuery));