<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<#include "header.ftl">
<body style="background: #353c47">

<div class="top">
    <!-----top结束--------->
<#include "banner.ftl">
    <!-----banner结束--------->



    <div class="content" style="width: 860px;min-height: 400px; background: #fff;padding-bottom: 0px;padding-top: 30px;padding-left: 50px;padding-right: 50px">

        <div class="article_title" style="width: 860px;padding-bottom: 0px;font-family: 黑体; ;font-size: 40px;" align="center" >
           ${article.title}
           
            <br/><img src="${sys.webRoot}/resources/shouye_files/AD0I6ISlBRAEGAAgm8TYvgUouajSMDDCAzgy.png" alt="" />
        </div>
         <br/><br/>
        
        <div class="article_content" style="padding-bottom: 80px;">
          ${article.content}

        </div>

<div class="pagenation3"><b>上一篇： &nbsp;</b><#if pre??><a title="${pre.title}" href="${sys.webRoot}/article/${pre.id}.html">${pre.title}</a><#else><span>抱歉暂无数据</span></#if></div>
<div class="pagenation3"><b>下一篇： &nbsp;</b><#if next??><a title="${next.title}" href="${sys.webRoot}/article/${next.id}.html">${next.title}</a><#else><span>抱歉暂无数据</span></#if></div>
        <div class="clear"></div>
    </div>




    <div class="clear"></div>

<#include "footer.ftl">
   
    </div>

</body>
</html>