<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<#include "header.ftl">
<body>
<#include "banner.ftl">

<div class="wrap wrap960">

<div class="container topbanner"></div>
<div class="clear"></div>

<div class="container common_mtop">

<#include "left.ftl">
<div class="contain_right">
<div class="show_box_2">
<!--layout article content-->
<div class="sb2_head">
<div class="layout_txtcontent_position">
您所在位置 &gt;<a href="${sys.webRoot}">首页</a>
&gt;&gt;公告 
</div>
</div>
<div class="sb2_main layout_txtcontent common_mbottom">

<div class="layout_txtcontent_title">
${announcement.head}
</div>
<div class="layout_txtcontent_info">
日期：${announcement.time}&nbsp;  
</div>

<div class="layout_txtcontent_content" style="min-height:400px">
${announcement.text}

<div class="layout_txtcontent_list">

</div>

</div>
<div class="change">
</div>
<div class="closepage"><span><a href="${sys.webRoot}">返回首页</a></span><span><a href="javascript:self.close()">关闭页面</a></span></div>
<!--layout comment-->

</div></div></div>


<div class="clear"></div>
<#include "footer.ftl">

</div>

</body></html>