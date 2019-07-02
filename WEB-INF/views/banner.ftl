<!--右侧漂浮 -->
<div class="right-piao">
	<ul>
    	<li><a href="#"><img src="${sys.webRoot}/resource/images/icon9.png" /><br/>预约试听<br/>010-62581722</a></li>
    	<li><a href="#"><img src="${sys.webRoot}/resource/images/icon10.png" /><br/>在线咨询<br/>010-62581722</a></li>
    	<li><a href="#"><img src="${sys.webRoot}/resource/images/icon11.png" /><br/>学前教育<br/>010-62581722</a></li>
    </ul>
</div>
<div class="top-title">
	<div class="width-1200">
    	<div class="title-left"><span class="f-d32a2a">您好</span>，欢迎来到阳光丽和!　　<a href="${sys.webRoot}/student_admin.jspx" class="f_006cbf">学生登录</a> | <a href="${sys.webRoot}/admin.jspx" class="f_006cbf">工作人员登录</a></div>
        <div class="title-right">
       
        </div>
    </div>
</div>
<!--logo and menu -->
<div class="width-1200" style="height:105px;">
	<div class="logo"><img src="${sys.webRoot}/resource/images/logo.png" /></div>
    <div class="menu">
    	<ul>
    	    <li><a href="${sys.webRoot}" target="">首页</a></li>
        	<#list cache.categoriesList as categories>
<li class="drop-menu-effect">

<#if categories.subList?? && (categories.subList?size>0)>
	<#if categories.name=='阳光课程'>
<a href="${sys.webRoot}/yangguangkechengmore.html" target="${categories.target}">${categories.name}</a>
<#else>
<a href="#" target="${categories.target}">${categories.name}</a>
</#if>

<#elseif categories.url?? && categories.url!=''>
	<a href="${categories.url}" target="${categories.target}">${categories.name}</a>
<#else>
	<a href="${sys.webRoot}/categories_list/${categories.id}.html" target="${categories.target}">${categories.name}</a>
</#if>

<#if categories.subList?? && (categories.subList?size>0)>
<ul>
<#list categories.subList as sub>

<#if sub.t_id=='title'>
<li>
 <#if sub.name =='综合实践'>
 <a href="${sys.webRoot}/zongheshijianmore.html" target="${categories.target}"><span class="span-menu">${sub.name}</span></a>
 <#else>
 <span class="span-menu">${sub.name}</span>
 </#if>
</li>
<#else>
<li>
<#if sub.url?? && sub.url!=''>
<a href="${sub.url}" target="${sub.target}">${sub.name}</a>
<#else>
<#if sub.t_id == 'page'>
<a href="${sys.webRoot}/page/${sub.id}.html" target="${sub.target}">${sub.name}</a>
<#else>
<a href="${sys.webRoot}/list/${sub.id}/1.html" target="${sub.target}">${sub.name}</a>
</#if>
</#if>
</li>
</#if>
</#list>
</ul>
</#if>

</#list>
</li>
        </ul>
    </div>
</div>
<!--banner -->
<div class="swap">
	<ul id="slider">
		<#list banner as list>
			<li style="background:url(${sys.webRoot}/files/${list.f_id}${list.f_name?substring(list.f_name?index_of("."))}) center center no-repeat #2b85ce; height:396px;" id="myicloud">
		</#list>
	</ul>
    <ul id="naviSlider">
        <li sindex="1" class="on"></li>
        <li sindex="2"></li>
        <li sindex="3"></li>
        <li sindex="4"></li>
    </ul>

</div> 
<script type="text/javascript">
$(document).ready(function(){
	$("#slider").jSlider({
			pause:5000,
			naviSlider:'naviSlider'
		}
	);
				
})
</script>