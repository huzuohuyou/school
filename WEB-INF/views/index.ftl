<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>阳光丽和</title>
<link href="resource/css/index.css" rel="stylesheet" type="text/css" />
<!--banner -->
<link type="text/css" href="resource/css/default.css" rel="stylesheet" />
<script src="resource/js/jquery.min.js" type="text/javascript"></script>
<script src="resource/js/jquery.jslider.js" type="text/javascript"></script>
<!--精彩活动 -->
<link rel="stylesheet" media="all" type="text/css" href="resource/css/photo-info.css" />
<script src="resource/js/photo-info.js" type="text/javascript"></script>
<script language="javascript" src="js/720.js"></script>
<!--选项卡 -->
<script src="resource/js/tab.js" type="text/javascript"></script>
<!--下拉菜单 -->
<script language='javascript' type='text/javascript'>
<!--
startList = function() {
   if (document.all && document.getElementById) {
       var navRoot = document.getElementById('Nav');
       for (var i = 0; i < navRoot.childNodes.length; i++) {
           var node = navRoot.childNodes[i];
           if (node.nodeName == 'LI') {
               node.onmouseover = function() {
                   this.className += ' over';
               }
               node.onmouseout = function() {
                   this.className = this.className.replace(' over', '');
               }
          }
       }
   }
}
window.onload = startList;
-->
</script>
</head>

<body>
<!--右侧漂浮 -->
<div class="right-piao">
	<ul>
    	<li><a href="#"><img src="resource/images/icon9.png" /><br/>预约试听<br/>010-62581722</a></li>
    	<li><a href="#"><img src="resource/images/icon10.png" /><br/>活动咨询<br/>010-62581722</a></li>
    	<li><a href="#"><img src="resource/images/icon11.png" /><br/>学前咨询<br/>010-62581722</a></li>
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
	<div class="logo"><img src="resource/images/logo.png" /></div>
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
        <li sindex="2" ></li>
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
<!--第一行 -->
<div class="width-1200">
	<!--阳光快讯 -->
	<div class="w810-left h320" >
    	<div class="bt-01"><Img src="${sys.webRoot}/resource/images/icon3.png" /> <span>阳光快讯</span><a href="${sys.webRoot}/categories_list/243.html">更多></a></div>
        <div class="ygkx-01">
        	<div class="ygkx-img"><img src="${sys.webRoot}/${firstNews.pic}" /></div>
            <div class="ygkx-text">
            	<h3><a href="<#if firstNews.outURL>${firstNews.outURL}<#else>${sys.webRoot}/picture/${firstNews.id}.html</#if>">${firstNews.title}</a></h3>
                <p><#if firstNews.content?length gt 80>${firstNews.content?substring(0,80)}...<#else>${firstNews.content}</#if>
                   <br/> <a href="<#if firstNews.outURL>${firstNews.outURL}<#else>${sys.webRoot}/picture/${firstNews.id}.html</#if>">详细介绍></a>
                </p>
            </div>
        </div>
        <!--阳光快讯列表 -->
        <div class="ygkx-list">
        	<ul>
<#list latestNews as list>
<li>
<#if list.outURL>
<a href="${list.outURL}" target="_blank" title="<#if list.title?length gt 18>${list.title?substring(0,15)}...<#else>${list.title}</#if>">

<#else>
<a href="${sys.webRoot}/picture/${list.id}.html" target="_blank" title="<#if list.title?length gt 18>${list.title?substring(0,15)}...<#else>${list.title}</#if>">

</#if>
<#if list.title?length gt 15>${list.title?substring(0,15)}...</br><#else>${list.title}</#if>
</a><span class="gray-3 fr">${list.time?substring(0,10)}</span> </li>
</#list>
              
            </ul>
        </div>
    </div>
    <!--三个活动 -->
	<div class="hd-3">
    	<table width="100%" border="0" cellspacing="0" cellpadding="0" height="320px">
          <tr>
            <td><a href="${sys.webRoot}/list/252/1.html"><img src="resource/images/p2.jpg" /></a></td>
          </tr>
          <tr>
            <td><a href="${sys.webRoot}/zongheshijianmore.html"><img src="resource/images/p3.jpg" /></a></td>
          </tr>
          <tr>
            <td><a href="${sys.webRoot}/list/254/1.html"><img src="resource/images/p4.jpg" /></a></td>
          </tr>
        </table>

    </div>
</div>
<!--精彩活动 阳光基地 -->
<div class="width-1200">
	<!--精彩活动 -->
	<div class="w810-left h360">
    	<div class="bt-01"><Img src="resource/images/icon4.png" /> <span>精彩活动</span><a href="${sys.webRoot}/categories_list/267.html">更多></a></div>
    	    <div style="float:left; width:339px;">
                <div class="wrap">
                    <div>
                        <span>
                        <h1>
                        	<#if fuckyou[0].outURL>
                            	<a href="${fuckyou[0].outURL}" target="_blank" title="${fuckyou[0].title}">${fuckyou[0].title}</a>
								
								<#else>
                            <a href="${sys.webRoot}/picture/${fuckyou[0].id}.html" target="_blank" title="${fuckyou[0].title}">${fuckyou[0].title}</a>
								
							</#if>
                        </h1>
                        <p>${fuckyou[0].content}</p>
                        <#if fuckyou[0].outURL>
                            	<a href="${fuckyou[0].outURL}" target="_blank" title="${fuckyou[0].title}">详细>></a>
								
								<#else>
                            <a href="${sys.webRoot}/picture/${fuckyou[0].id}.html" target="_blank" title="${fuckyou[0].title}">详细>></a>
								
							</#if>
                        
                        </span>
                        <b></b>
                    </div>
                    
                    <IMG src="${sys.webRoot}/${fuckyou[0].pic}" alt=''></a>
						
                </div> 
           </div>
           <div style="float:right; width:450px;">
           <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td height="155" valign="top">
                <div class="wrap2">
                    <IMG src="${sys.webRoot}/${fuckyou[1].pic}" alt=''></a>
                    <div >
                        <span >
                        
                        	<#if fuckyou[1].outURL>
                            	<a href="${fuckyou[1].outURL}" target="_blank" title="${fuckyou[1].title}">${fuckyou[1].title}</a>
								
							<#else>
                            	<a href="${sys.webRoot}/picture/${fuckyou[1].id}.html" target="_blank" title="${fuckyou[1].title}">${fuckyou[1].title}</a>
								
							</#if>
                        </span>
                        <b ></b>
                    </div>
                </div> 
              </td>
                <td height="155" valign="top">
                
                <div class="wrap2">
                    <IMG src="${sys.webRoot}/${fuckyou[2].pic}" alt=''></a>
                    <div >
                        <b ></b>
                        <span >
                        	<#if fuckyou[2].outURL>
                            	<a href="${fuckyou[2].outURL}" target="_blank" title="${fuckyou[2].title}">${fuckyou[2].title}</a>
								
							<#else>
                            	<a href="${sys.webRoot}/picture/${fuckyou[2].id}.html" target="_blank" title="${fuckyou[2].title}">${fuckyou[2].title}</a>
								
							</#if>
                        
                        </span>
                    </div>
                </div> 
                </td>
              </tr>
              <tr>
                <td>
                
                <div class="wrap2">
                    <IMG src="${sys.webRoot}/${fuckyou[3].pic}" alt=''></a>
                    <div >
                        <b ></b>
                        <span >
                            <#if fuckyou[3].outURL>
                            	<a href="${fuckyou[3].outURL}" target="_blank" title="${fuckyou[3].title}">${fuckyou[3].title}</a>
								
							<#else>
                            	<a href="${sys.webRoot}/picture/${fuckyou[3].id}.html" target="_blank" title="${fuckyou[3].title}">${fuckyou[3].title}</a>
								
							</#if>
                        
                        
                        </span>
                    </div>
                </div> 
                </td>
                <td>
                
                <div class="wrap2">
                    <IMG src="${sys.webRoot}/${fuckyou[4].pic}" alt=''></a>
                    <div >
                        <b ></b>
                        <span >
                            <#if fuckyou[4].outURL>
                            	<a href="${fuckyou[4].outURL}" target="_blank" title="${fuckyou[4].title}">${fuckyou[4].title}</a>
								
							<#else>
                            	<a href="${sys.webRoot}/picture/${fuckyou[4].id}.html" target="_blank" title="${fuckyou[4].title}">${fuckyou[4].title}</a>
								
							</#if>
                        
                        </span>
                    </div>
                </div> 
                </td>
              </tr>
            </table>

           </div>
    </div>
    <!--阳光基地 -->
    <div class="hd-3">
    	<div class="bt-01"><Img src="resource/images/icon5.png" /> <span>阳光基地</span><a href="${sys.webRoot}/list/263/1.html">更多></a></div>
        
    	<table width="100%" border="0" cellspacing="0" cellpadding="0" height="300px">
          <tr>
            <td align="center">
            	 <#if sunshinejidi[0].outURL>
	                <a href="${sunshinejidi[0].outURL}"><IMG src="${sys.webRoot}/${sunshinejidi[0].pic}" height="140" width="155"></a>
	                
	                <#else>
	                <a href="${sys.webRoot}/picture/${sunshinejidi[0].id}.html"><IMG src="${sys.webRoot}/${sunshinejidi[0].pic}" height="140" width="155"></a>
                </#if>

			</td>
          
            <td align="center">
            	<#if sunshinejidi[1].outURL>
	                <a href="${sunshinejidi[1].outURL}"><IMG src="${sys.webRoot}/${sunshinejidi[1].pic}" height="140" width="155"></a>
	                
	                <#else>
	                <a href="${sys.webRoot}/picture/${sunshinejidi[1].id}.html"><IMG src="${sys.webRoot}/${sunshinejidi[1].pic}" height="140" width="155"></a>
                </#if>
			</td>
          </tr>
          <tr>
            <td align="center">
				<#if sunshinejidi[2].outURL>
	                <a href="${sunshinejidi[2].outURL}"><IMG src="${sys.webRoot}/${sunshinejidi[2].pic}" height="140" width="155"></a>
	                
	                <#else>
	                <a href="${sys.webRoot}/picture/${sunshinejidi[2].id}.html"><IMG src="${sys.webRoot}/${sunshinejidi[2].pic}" height="140" width="155"></a>
                </#if>
			</td>
			
			<td align="center">
            	 <#if sunshinejidi[3].outURL>
	                <a href="${sunshinejidi[3].outURL}"><IMG src="${sys.webRoot}/${sunshinejidi[3].pic}" height="140" width="155"></a>
	                
	                <#else>
	                <a href="${sys.webRoot}/picture/${sunshinejidi[3].id}.html"><IMG src="${sys.webRoot}/${sunshinejidi[3].pic}" height="140" width="155" ></a>
                </#if>

			</td>
          </tr>
          <!--
           <tr>
            <td><a href="#"><img src="resource/images/p7.jpg" /></a></td>
          </tr>
          -->
        </table>

    </div>
    <div class="clear"></div>
</div>
<!--阳光课程 -->
<div class="width-1200" style="height:430px;">
	<div class="bt-01"><Img src="resource/images/icon6.png" /> <span>阳光课程</span><a href="${sys.webRoot}/yangguangkechengmore.html ">更多></a></div>
    <div>
        <!--校内课程 -->
    	<div id="Tab1">
            <div class="Menubox">
            <ul>  
               <li id="one1" onmouseover="setTab('one',1,4)" class="Menubox-li-hover"><a href="${sys.webRoot}/list/256/1.html" style="color:black">课后一小时</a></li>
               <li id="one2" onmouseover="setTab('one',2,4)"  ><a href="${sys.webRoot}/list/257/1.html" style="color:black">校本课</a></li>
               <li id="one3" onmouseover="setTab('one',3,4)"  ><a href="${sys.webRoot}/list/258/1.html" style="color:black">社团课</a></li>
               <li id="one4" onmouseover="setTab('one',4,4)"  ><a href="${sys.webRoot}/list/259/1.html" style="color:black">开放性科学课</a></li>
            </ul>
            <div class="more-right">校内课程</div>
            </div>
             <div class="Contentbox">  
               <div id="con_one_1" >
               		<div class="kc-list">
                         <ul>
                            <li>
                            	<#if initcourses[0].outURL>
                                	<a href="${initcourses[0].outURL}"><IMG src="${sys.webRoot}/${initcourses[0].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses[0].id}.html"><IMG src="${sys.webRoot}/${initcourses[0].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses[0].title}
								</span></a>
                            </li>
                            <li>
                            	<#if initcourses[1].outURL>
                                	<a href="${initcourses[1].outURL}"><IMG src="${sys.webRoot}/${initcourses[1].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses[1].id}.html"><IMG src="${sys.webRoot}/${initcourses[1].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses[1].title}
								</span></a>
							</li>
                            <li>
                            	<#if initcourses[2].outURL>
                                	<a href="${initcourses[2].outURL}"><IMG src="${sys.webRoot}/${initcourses[2].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses[2].id}.html"><IMG src="${sys.webRoot}/${initcourses[2].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses[2].title}
								</span></a>
                            
                            </li>
                             <li>
                            	<#if initcourses[3].outURL>
                                	<a href="${initcourses[3].outURL}"><IMG src="${sys.webRoot}/${initcourses[3].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses[3].id}.html"><IMG src="${sys.webRoot}/${initcourses[3].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses[3].title}
								</span></a>
                            
                            </li>
                           
                            <div class="clear"></div>
                        </ul>
                    </div>
               </div>
               <div id="con_one_2" style="display:none">   
               		<div class="kc-list">
                         <ul>
                          	<li>
                            	<#if initcourses1[0].outURL>
                                	<a href="${initcourses1[0].outURL}"><IMG src="${sys.webRoot}/${initcourses1[0].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses1[0].id}.html"><IMG src="${sys.webRoot}/${initcourses1[0].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses1[0].title}
								</span></a>
                            </li>
                            <li>
                            	<#if initcourses1[1].outURL>
                                	<a href="${initcourses1[1].outURL}"><IMG src="${sys.webRoot}/${initcourses1[1].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses1[1].id}.html"><IMG src="${sys.webRoot}/${initcourses1[1].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses1[1].title}
								</span></a>
							</li>
                            <li>
                            	<#if initcourses1[2].outURL>
                                	<a href="${initcourses1[2].outURL}"><IMG src="${sys.webRoot}/${initcourses1[2].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses1[2].id}.html"><IMG src="${sys.webRoot}/${initcourses1[2].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses1[2].title}
								</span></a>
                            
                            </li>
                             <li>
                            	<#if initcourses1[3].outURL>
                                	<a href="${initcourses1[3].outURL}"><IMG src="${sys.webRoot}/${initcourses1[3].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses1[3].id}.html"><IMG src="${sys.webRoot}/${initcourses1[3].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses1[3].title}
								</span></a>
                            
                            </li>
                            
                            <div class="clear"></div>
                        </ul>
                    </div>
               </div>
               <div id="con_one_3" style="display:none">  
               		<div class="kc-list">
                         <ul>
                         	<li>
                            	<#if initcourses2[0].outURL>
                                	<a href="${initcourses2[0].outURL}"><IMG src="${sys.webRoot}/${initcourses2[0].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses2[0].id}.html"><IMG src="${sys.webRoot}/${initcourses2[0].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses2[0].title}
								</span></a>
                            </li>
                            <li>
                            	<#if initcourses2[1].outURL>
                                	<a href="${initcourses2[1].outURL}"><IMG src="${sys.webRoot}/${initcourses2[1].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses2[1].id}.html"><IMG src="${sys.webRoot}/${initcourses2[1].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses2[1].title}
								</span></a>
							</li>
                            <li>
                            	<#if initcourses2[2].outURL>
                                	<a href="${initcourses2[2].outURL}"><IMG src="${sys.webRoot}/${initcourses2[2].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses2[2].id}.html"><IMG src="${sys.webRoot}/${initcourses2[2].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses2[2].title}
								</span></a>
                            
                            </li>
                             <li>
                            	<#if initcourses2[3].outURL>
                                	<a href="${initcourses2[3].outURL}"><IMG src="${sys.webRoot}/${initcourses2[3].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses2[3].id}.html"><IMG src="${sys.webRoot}/${initcourses2[3].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses2[3].title}
								</span></a>
                            
                            </li>
                            
                            <div class="clear"></div>
                        </ul>
                    </div>
               </div> 
               <div id="con_one_4" style="display:none">  
               		<div class="kc-list">
                         <ul>
                         <li>
                            	<#if initcourses3[0].outURL>
                                	<a href="${initcourses3[0].outURL}"><IMG src="${sys.webRoot}/${initcourses3[0].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses3[0].id}.html"><IMG src="${sys.webRoot}/${initcourses3[0].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses3[0].title}
								</span></a>
                            </li>
                            <li>
                            	<#if initcourses3[1].outURL>
                                	<a href="${initcourses3[1].outURL}"><IMG src="${sys.webRoot}/${initcourses3[1].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses3[1].id}.html"><IMG src="${sys.webRoot}/${initcourses3[1].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses3[1].title}
								</span></a>
							</li>
                            <li>
                            	<#if initcourses3[2].outURL>
                                	<a href="${initcourses3[2].outURL}"><IMG src="${sys.webRoot}/${initcourses3[2].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses3[2].id}.html"><IMG src="${sys.webRoot}/${initcourses3[2].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses3[2].title}
								</span></a>
                            
                            </li>
                             <li>
                            	<#if initcourses3[3].outURL>
                                	<a href="${initcourses3[3].outURL}"><IMG src="${sys.webRoot}/${initcourses3[3].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses3[3].id}.html"><IMG src="${sys.webRoot}/${initcourses3[3].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses3[3].title}
								</span></a>
                            
                            </li>
                            
                            
                            <div class="clear"></div>
                        </ul>
                    </div>
               </div> 
             </div>             
        </div>
        <!--校外课程 -->
        <div id="Tab2">
            <div class="Menubox">
            <ul> 
               <li id="two1" onmouseover="setTab('two',1,4)" class="Menubox-li-hover" ><a href="${sys.webRoot}/list/261/1.html" style="color:black">学前课程</a></li>
               <li id="two2" onmouseover="setTab('two',2,4)"  ><a href="${sys.webRoot}/list/262/1.html" style="color:black">艺考培训</a></li>
            </ul>
            <div class="more-right">校外课程</div>
            </div>
             <div class="Contentbox">  
               <div id="con_two_1" >
               		<div class="kc-list">
                         <ul>
                         <li>
                            	<#if initcourses4[0].outURL>
                                	<a href="${initcourses4[0].outURL}"><IMG src="${sys.webRoot}/${initcourses4[0].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses4[0].id}.html"><IMG src="${sys.webRoot}/${initcourses4[0].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses4[0].title}
								</span></a>
                            </li>
                            <li>
                            	<#if initcourses4[1].outURL>
                                	<a href="${initcourses4[1].outURL}"><IMG src="${sys.webRoot}/${initcourses4[1].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses4[1].id}.html"><IMG src="${sys.webRoot}/${initcourses4[1].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses4[1].title}
								</span></a>
							</li>
                            <li>
                            	<#if initcourses4[2].outURL>
                                	<a href="${initcourses4[2].outURL}"><IMG src="${sys.webRoot}/${initcourses4[2].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses4[2].id}.html"><IMG src="${sys.webRoot}/${initcourses4[2].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses4[2].title}
								</span></a>
                            
                            </li>
                             <li>
                            	<#if initcourses4[3].outURL>
                                	<a href="${initcourses4[3].outURL}"><IMG src="${sys.webRoot}/${initcourses4[3].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses4[3].id}.html"><IMG src="${sys.webRoot}/${initcourses4[3].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses4[3].title}
								</span></a>
                            
                            </li>
                            
                            
                            <div class="clear"></div>
                        </ul>
                    </div>
               </div>
               <div id="con_two_2" style="display:none">   
               		<div class="kc-list">
                         <ul>
                          <li>
                            	<#if initcourses5[0].outURL>
                                	<a href="${initcourses5[0].outURL}"><IMG src="${sys.webRoot}/${initcourses5[0].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses5[0].id}.html"><IMG src="${sys.webRoot}/${initcourses5[0].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses5[0].title}
								</span></a>
                            </li>
                            <li>
                            	<#if initcourses5[1].outURL>
                                	<a href="${initcourses5[1].outURL}"><IMG src="${sys.webRoot}/${initcourses5[1].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses5[1].id}.html"><IMG src="${sys.webRoot}/${initcourses5[1].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses5[1].title}
								</span></a>
							</li>
                            <li>
                            	<#if initcourses5[2].outURL>
                                	<a href="${initcourses5[2].outURL}"><IMG src="${sys.webRoot}/${initcourses5[2].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses5[2].id}.html"><IMG src="${sys.webRoot}/${initcourses5[2].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses5[2].title}
								</span></a>
                            
                            </li>
                             <li>
                            	<#if initcourses5[3].outURL>
                                	<a href="${initcourses5[3].outURL}"><IMG src="${sys.webRoot}/${initcourses5[3].pic}">
                            	
                            	<#else>
                                	<a href="${sys.webRoot}/picture/${initcourses5[3].id}.html"><IMG src="${sys.webRoot}/${initcourses5[3].pic}">
                            	
                            	</#if>
                            	<span>
									${initcourses5[3].title}
								</span></a>
                            
                            </li>
                           
                            <div class="clear"></div>
                        </ul>
                    </div>
               </div>
             </div>             
        </div>
    </div>
</div>
<!--最后一行 -->
<div class="width-1200">
	<div class="ygt">
    	<div class="bt-01"><Img src="resource/images/icon6.png" /> <span>阳光团</span><a href="${sys.webRoot}/list/264/1.html">更多></a></div>
        <div class="ygt-list">        	
        	<ul>
        		<#list sunshinetuan as ygtlist>
					<li>
					<#if ygtlist.outURL>
					<a href="${ygtlist.outURL}" target="_blank" title="<#if ygtlist.title?length gt 15>${ygtlist.title?substring(0,15)}...<#else>${ygtlist.title}</#if>">
                    
                    <#else>
					<a href="${sys.webRoot}/picture/${ygtlist.id}.html" target="_blank" title="<#if ygtlist.title?length gt 15>${ygtlist.title?substring(0,15)}...<#else>${ygtlist.title}</#if>">
                    
                    </#if>
					<#if ygtlist.stickie == 1>
							<font color="red">
							
							</font>
						</#if>
					<#if ygtlist.title?length gt 25>${ygtlist.title?substring(0,25)}...</br><#else>${ygtlist.title}</#if>
					</a> 
					<span>${ygtlist.time?substring(0,10)}</span></li>
				</#list>
               
            </ul>
        </div>
    </div>
	<div class="tyjlb">    	
    	<div class="bt-01"><Img src="resource/images/icon6.png" /> <span>体育俱乐部</span><a href="${sys.webRoot}/list/265/1.html">更多></a></div>
        <div class="ygt-list">        	
        	<ul>
    		 <#list sunshinetiyu as tylist>
					<li>
					<#if tylist.outURL>
					<a href="${tylist.outURL}" target="_blank" title="<#if tylist.title?length gt 15>${tylist.title?substring(0,15)}...<#else>${tylist.title}</#if>">
                    
                    <#else>
					<a href="${sys.webRoot}/picture/${tylist.id}.html" target="_blank" title="<#if tylist.title?length gt 15>${tylist.title?substring(0,15)}...<#else>${tylist.title}</#if>">
                    
                    </#if>
					
					<#if tylist.stickie == 1>
							<font color="red">
							
							</font>
						</#if>
					<#if tylist.title?length gt 15>${tylist.title?substring(0,15)}...</br><#else>${tylist.title}</#if>
					</a> <span>${tylist.time?substring(0,10)}</span>
					</li>
				</#list>
                
            </ul>
        </div>
    </div>
    <div class="clear"></div>
</div>
<!--foot -->
<div class="foot">
	<div class="width-1200">
    	<table width="600" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <#list bottom as list>
            <td width="19%" align="center"><img src="${sys.webRoot}/files/${list.img1_fid}${list.img1_fname?substring(list.img1_fname?index_of("."))}" /><br/>${list.img1_label}</td>
            <td width="32%" align="center"><img src="${sys.webRoot}/files/${list.img2_fid}${list.img2_fname?substring(list.img2_fname?index_of("."))}" /><br/>${list.img2_label}</td>
            <td width="49%" align="left">
            	地址：${list.address}<br/>   
                                                       联系人：${list.contact_user}  电话：${list.phone}  <br/>
                                                      备案号：${list.backup}
  			</td>
  			</#list>
          </tr>
        </table>

  </div>
</div>
</body>
</html>
