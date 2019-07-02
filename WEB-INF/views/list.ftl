<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<#include "header.ftl">
<body>

<div class="top">
    <!-----top结束--------->
<#include "banner.ftl">
    <!-----banner结束--------->

<div class="width-1200" >
	<div class="bt-001"><Img src="${sys.webRoot}/resource/images/two/t2.png" /> <a href="${sys.webRoot}">首页</a>&gt;&gt; <a href="#">${categories.name}</a> </div>
    <div class="img-list">
    	
    	<ul>
    	<#list pagination.list as picture>
    	<li>
        	<div class="img-left">
	        	<a href="<#if picture.outURL>${picture.outURL}<#else>${sys.webRoot}/picture/${picture.id}.html</#if>">
	        		<img src="<#if picture.pic>${sys.webRoot}/${picture.pic}<#else>${sys.webRoot}/resource/images/two/t5.png</#if>" />
	        	</a>
        	</div>
            <div class="text-right">
               <#if picture.stickie == 1>
                <h2><a href="<#if picture.outURL>${picture.outURL}<#else>${sys.webRoot}/picture/${picture.id}.html</#if>">${picture.title}<font color="red">[置顶]</font></a></h2>
              <#else> 
                <h2><a href="<#if picture.outURL>${picture.outURL}<#else>${sys.webRoot}/picture/${picture.id}.html</#if>">${picture.title}</a></h2>
              </#if>
              <P> <#if picture.content?length gt 220>${picture.content?substring(0,220)}...</br><#else>${picture.content}</#if> </P>
              <a href="<#if picture.outURL>${picture.outURL}<#else>${sys.webRoot}/picture/${picture.id}.html</#if>" class="text-right-a">${picture.time} &nbsp;详细>></a>
            </div>
        </li>
    	</#list>

        <div class="sabrosus">
<#if pagination.totalCount==0>
暂无数据
<#else>

<#include "pagination.ftl">

</#if>        </div>
        </ul>
    </div>
</div>





 


   
<#include "footer.ftl">
</body>
</html>