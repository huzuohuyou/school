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
              <h2><a href="<#if picture.outURL>${picture.outURL}<#else>${sys.webRoot}/picture/${picture.id}.html</#if>">${picture.title}</a></h2>
              <P> <#if picture.content?length gt 220>${picture.content?substring(0,220)}...</br><#else>${picture.content}</#if> </P>
              <a href="<#if picture.outURL>${picture.outURL}<#else>${sys.webRoot}/picture/${picture.id}.html</#if>" class="text-right-a">详细>></a>
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





 <div class="content" style="width: 860px;min-height: 400px; background: #fff;padding-bottom: 0px;padding-top: 30px;padding-left: 50px;padding-right: 50px" align="center">

        
<#if categories.t_id == 'article'>
 <div class="list_article" align="center">
 <ul>
<#list pagination.list as article>
	<li><a href="<#if article.outURL>${article.outURL}<#else>${sys.webRoot}/article/${article.id}.html</#if>" target="_blank" title="${article.title}">${article.title}</a><span class="gray-3 fr">[${article.time?substring(0,10)}]</span> </li>
   <#if article.content?length gt 100>${article.content?substring(0,100)}...</br><#else>${article.content}</#if>

</#list>
</ul>
</div>

</#if>

<#if categories.t_id == 'picture'>
<div style="width:860px; overflow:auto; overflow-x:hidden;background-color: whitesmoke ;">
    <table width="860"  cellspacing="0" align="center">
		<tbody>
		 	<#list pagination.list as picture>
                <tr align="center" height="83">
                    <th style="border-bottom: 1px inset white;">
                        <table border="0" bordercolor="black" width="320" cellspacing="0" cellpadding="5">
                            <tbody><tr>
                                <td height="100" width="200">
                                    <a href="<#if picture.outURL>${picture.outURL}<#else>${sys.webRoot}/picture/${picture.id}.html</#if>"><img src="${sys.webRoot}/${picture.pic}" width="100px" height="80px" style="padding: 10px"></a>
                                
                                </td>
                                <td>
                                    <table width="500">
                                        <tbody><tr>
                                            <td height="30" valign="bottom">
                                            <a style="color:black;" href="<#if article.outURL>${picture.outURL}<#else>${sys.webRoot}/picture/${picture.id}.html</#if>">
                                                <p>${picture.title}</p>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="50" valign="top" style="font-size: 12px;width: 280px; color: gray;line-height: 30px;padding-right: 10px">
                                                <#if picture.content?length gt 100>${picture.content?substring(0,100)}...</br><#else>${picture.content}</#if>
                                            </td>
                                        </tr>
                                    </tbody></table>

                                </td>

                            </tr>
                        </tbody></table>


                    </th>
                </tr>
</#list>

    </tbody></table>
</div>
 

</#if>
<#if pagination.totalCount==0>
暂无数据
<#else>

<#include "pagination.ftl">

</#if>
</div>




   <div class="clear"></div>





    <div class="clear"></div>


   
<#include "footer.ftl">
</body>
</html>