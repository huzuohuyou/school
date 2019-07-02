<#-- 面包屑导航开始 -->
<div class="position common_mtop">
<a href="${sys.webRoot}">首页</a>
<#list navigation as item>
&gt;&gt; <a href="${sys.webRoot}/${item.url}">${item.name}</a> 
</#list>
</div>
<#-- 面包屑导航结束 -->