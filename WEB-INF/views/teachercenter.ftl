
	<link rel="stylesheet" href="resources/css/person.css" type="text/css">
	<div id="contents">
		<div id="adbox">
			 <div class="clearfix">
				<img src="resources/images/28ad847b152a389a.jpg" alt="Img" height="200" width="594">
				<div class="detail">
				   <h2>${user.getName()} 老师您好： </h2>
					<h3>欢迎使用本系统<br> Welcome to use this system.</h3>
					
				</div>
			</div>
		</div>
		
		<div class="featured">
		 
			<ul class="clearfix">
				<li>
					<p>
						<b>班级公告</b> 
					</p>

					<#list announcement as item>
					
				    	<p >
				    		[${item.time?substring(0,10)}]·<a href="javascript:getAnnouncement('${item.head}','${item.time?substring(0,19 )}','${item.text}')">${item.head}</a> 
					    </p>	
				    </#list>	
			   
					
					
				</li>
				<li>
					
					<p>
						<b>未读邮件</b> 
					</p>
					<#list message as item>
				    	<p >
							[${item.date}]·<a href="javascript:getMessage('${item.title}','${item.sendername}','${item.date}','${item.content}')">${item.title}</a>
						</p>
				    </#list>	
					
				</li>
				<li>
					<p>
						<b><a target="_blank" href="${sys.webRoot}/categories_list/2.html">学校新闻</a></b> 
					</p>
					<#list article as item>
				    	<p >
				    		[${item.time?substring(0,10)}]·<a title="${item.title}" target="_blank" href="${sys.webRoot}/article/${item.id}.html">${item.title}</a>
					    </p>	
				    </#list>	
				</li>
				<li>
					<p>
						<b><a target="_blank" href="${sys.webRoot}/bbs.html">学校论坛</a></b> 
					</p>
					<#list topic as item>
				    	<p >
				    		[${item.time?substring(0,10)}]·<a title="${item.title}" target="_blank" href="${sys.webRoot}/topic.html?t_id=${item.id}">${item.title}</a>
					    </p>	
				    </#list>	
				</li>
			</ul>
		</div>
	</div>
	