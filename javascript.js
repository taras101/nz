$(document).ready(function(){
	var $page = $("h2").text();
 	$("li:contains('" + $page + "')").hide();
	function mailMe(sDom, sUser){
	    return("mail"+"to:"+sUser+"@"+sDom.replace(/%23/g,"."));
	}
  $("button").click(function(){$(".topnav").toggle(1000);
	});
	// Something happens
	$("body").on("click", function() {
  // State changes
  $("body").removeClass("dialogIsOpen");
	});

});