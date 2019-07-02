<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<#include "header.ftl">
<body>

<div class="top">
    <!-----top结束--------->
<#include "banner.ftl">
    <!-----banner结束--------->
<div class="width-1200" >
	<div class="bt-001"><Img src="${sys.webRoot}/resource/images/two/t2.png" /><a href="${sys.webRoot}">首页</a>
		<#list navigation as item>
		<#if item.name!="阳光活动" && item.name!="阳光课程" && item.name!="阳光成员" >
		&gt;&gt; <a href="${sys.webRoot}/${item.url}">${item.name}</a> 
		</#if>
		</#list></div>
	 

    <div class="ty-xxy">
   	  <h2>${picture.title}</h2>
      <div class="ty-xxy-div">发布时间：${picture.time}      </div>
      	<div class="ty-xxy-img"><Img src="${sys.webRoot}/${picture.pic}" style="width:600px;height:450px;align:center"/></div>
        <P> ${picture.content}</P>
  </div>
</div>





<div class="pagenation3"><b>上一篇： &nbsp;</b><#if pre??><a title="${pre.title}" href="${sys.webRoot}/picture/${pre.id}.html">${pre.title}</a><#else><span>抱歉暂无数据</span></#if></div>
<div class="pagenation3"><b>下一篇： &nbsp;</b><#if next??><a title="${next.title}" href="${sys.webRoot}/picture/${next.id}.html">${next.title}</a><#else><span>抱歉暂无数据</span></#if></div>
       

<#include "footer.ftl">
   
    </div>

</body>
</html>