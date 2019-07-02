<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<#include "header.ftl">
<script type="text/javascript">
function setHW() {
		var h = 0;
		var w = 0;
		h = $(window).height();
		w = $(window).width();
		var hh = h - 151 - 32;
		if(hh>750)
		document.getElementById("ifm").style.height = hh+"px";
	}
</script>
<body onload="setHW()">
<#include "banner.ftl">

<div class="wrap wrap960">

<div class="clear"></div>
<div class="content">
<iframe src ="manage.jspx" frameborder="0" marginheight="0" marginwidth="0" frameborder="0" scrolling="auto" id="ifm" name="ifm" min-height="750px" height="600px" width="100%">
</iframe> 
</div>
<div class="clear"></div>
<#include "footer.ftl">

</div>

</body></html>