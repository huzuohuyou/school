<div id="page">
<#assign p=pagination/>
<#if p.list>
	${p.list?size}/${p.totalCount}条 --
<#else>
	0/${p.totalCount}条 --
</#if>
${pageNo}/${p.totalPage}页
<#if p.firstPage>
	<span class="s1 s3">首页</span>
	<span class="s1 s3">&lt;&lt;</span>
	<span class="s1 s3">上一页</span>
<#else>
	<span class="s1"> <a href="${sys.webRoot}/${p.url}/1.html">首页</a></span>
	<#if (pageNo - 10) gte 1>
	<span class="s1"><a href="${sys.webRoot}/${p.url}/${pageNo-10}.html">&lt;&lt;</a></span>
	<#else>
	<span class="s1 s3">&lt;&lt;</span>
	</#if>
    <span class="s1"> <a href="${sys.webRoot}/${p.url}/${p.prePage}.html">上一页</a></span>
</#if>
<#if ((pageNo-5) gt 1)>
	<#if p.totalPage gt pageNo+4>
		<#list pageNo-5..pageNo+4 as i>
			<#if i = pageNo>
				<span class="s2">${i}</span>
			<#else>
			 	<a class="s1" href="${sys.webRoot}/${p.url}/${i}.html">${i}</a>
			</#if>
		</#list>
	<#else>
		<#list p.totalPage-9..p.totalPage as i>
			<#if i = pageNo>
				<span class="s2">${i}</span>
			<#else>
				<a class="s1" href="${sys.webRoot}/${p.url}/${i}.html">${i}</a>
			</#if>
		</#list>
	</#if>
<#else>
	<#if p.totalPage gt 10>
		<#list 1..10 as i>
			<#if i = pageNo>
				<span class="s2">${i}</span>
			<#else>
   				<a class="s1" href="${sys.webRoot}/${p.url}/${i}.html">${i}</a>
			</#if>
		</#list>
	<#else>
		<#list 1..p.totalPage as i>
			<#if i = pageNo>
				<span class="s2">${i}</span>
			<#else>
   				<a class="s1" href="${sys.webRoot}/${p.url}/${i}.html">${i}</a>
			</#if>
		</#list>
	</#if>
</#if>
<#if p.lastPage>
	<span class="s1 s3">下一页</span>
	<span class="s1 s3">&gt;&gt;</span>
	<span class="s1 s3">末页</span>
<#else>
	<span class="s1"> <a href="${sys.webRoot}/${p.url}/${p.nextPage}.html">下一页</a></span>
	<#if (p.totalPage-10) gte pageNo>
	<span class="s1 s3"><a href="${sys.webRoot}/${p.url}/${pageNo+10}.html">&gt;&gt;</a></span>
	<#else>
	<span class="s1 s3">&gt;&gt;</span>
	</#if>
	<span class="s1"><a href="${sys.webRoot}/${p.url}/${p.totalPage}.html">末页</a></span>
</#if>
</div>