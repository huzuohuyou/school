<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<#include "header.ftl">
<body>

<#include "banner.ftl">

<div class="wrap wrap960">
<#include "navigation.ftl">
<div class="clear"></div>
<div class="container">
<#include "left.ftl">
<div class="contain_right">



<#list list as item>
<#if item.t_id == 'page'>
 <div class="show_box_2">
  <div class="sb2_head">
   <a href="${sys.webRoot}/page/${item.id}.html" class="title" target="_blank">${item.name}</a> 
   <span class="more"><a href="${sys.webRoot}/page/${item.id}.html" target="_blank">More</a></span>
  </div>
  <div class="sb2_main">
   <div style="height:145px;overflow:hidden">
   <#list item.itemList as page>
   	${page.content}
   </#list>
   </div>
   <div class="clear"></div>
  </div>
 </div>
</#if>
<#if item.t_id == 'article'>
 <div class="show_box_2">
  <div class="sb2_head">
   <a href="${sys.webRoot}/list/${item.id}/1.html" class="title">${item.name}</a> <span class="more"> 
   <a href="${sys.webRoot}/list/${item.id}/1.html">More</a></span>
  </div>
  <div class="sb2_main">
   <ul class="label_ul_b">
    <#list item.itemList as article>
    	<li style=";">
			<span class="label_datatime">[${article.time?substring(0,10)}]</span>·<a title="${article.title}" target="_blank" href="${sys.webRoot}/article/${article.id}.html">${article.title}</a>
		</li>	
    </#list>	
   </ul>
   <div class="clear"></div>
  </div>
 </div>
</#if>
<#if item.t_id == 'picture'>
 <div class="show_box_2">
  <div class="sb2_head">
   <a href="${sys.webRoot}/list/${item.id}/1.html" class="title">${item.name}</a> <span class="more"> 
   <a href="${sys.webRoot}/list/${item.id}/1.html">More</a></span>
  </div>
  <div class="sb2_main">
   <ul class="label_pic_ul label_pic_border">
   <#list item.itemList as picture>
   <li>
<a title="${picture.title}" target="_blank" href="${sys.webRoot}/picture/${picture.id}.html"><img width="150" height="100" src="${sys.webRoot}/${picture.pic}" onerror="this.src='${sys.webRoot}/resources/images/nopic.jpg'" alt="${picture.title}"></a>
<p style="width:151px" class="label_pic_title"><a title="${picture.title}" target="_blank" href="${sys.webRoot}/picture/${picture.id}.html">${picture.title}</a></p>
</li>
	</#list>	
   </ul>
   <div class="clear"></div>
  </div>
 </div>
</#if>
</#list>


</div>
</div>


<div class="clear"></div>
<#include "footer.ftl">

</div>

</body></html>