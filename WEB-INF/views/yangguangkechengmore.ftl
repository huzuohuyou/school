<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<#include "header.ftl">


<div class="top">
    <!-----top结束--------->
<#include "banner.ftl">
    <!-----banner结束--------->
<div class="width-1200" >
	<div class="bt-001"><Img src="${sys.webRoot}/resource/images/two/t2.png" /><a href="${sys.webRoot}">首页</a></div>
    <div id="Tab9">
            <div class="Menubox">
            <ul>  
               <li id="nine1" onmouseover="setTab('nine',1,4)" class="Menubox-li-hover" ><a href="${sys.webRoot}/list/256/1.html" style="color:black">课后一小时</a></li>
               <li id="nine2" onmouseover="setTab('nine',2,4)"  ><a href="${sys.webRoot}/list/257/1.html" style="color:black">校本课</a></li>
               <li id="nine3" onmouseover="setTab('nine',3,4)"  ><a href="${sys.webRoot}/list/258/1.html" style="color:black">社团课</a></li>
               <li id="nine4" onmouseover="setTab('nine',4,4)"  ><a href="${sys.webRoot}/list/259/1.html" style="color:black">开放性科学课</a></li>
            </ul>
            <div class="more-right">校内课程</div>
            </div>
             <div class="Contentbox">  
               <div id="con_nine_1" >
               		
                    <div class="ygt-list2">        	
                        <ul>
                        
                        	<#list morecourses0 as list>
                        		<li>
									<#if list.outURL>
									<a href="${list.outURL}" target="_blank" title="<#if list.title?length gt 30>${list.title?substring(0,30)}...<#else>${list.title}</#if>">
									
									<#else>
									<a href="${sys.webRoot}/picture/${list.id}.html" target="_blank" title="<#if list.title?length gt 30>${list.title?substring(0,30)}...<#else>${list.title}</#if>">
									
									</#if>
									<#if list.title?length gt 30>${list.title?substring(0,30)}...</br><#else>${list.title}</#if>
									</a><span class="gray-3 fr">${list.time?substring(0,10)}</span> 
								</li>
                        	
                        		
                        	</#list>
                        	
                           
                        </ul>
                    </div>
               </div>
               <div id="con_nine_2" style="display:none"> 
                    <div class="ygt-list2">        	
                        <ul>
                            <#list morecourses1 as list>
                        		<li>
									<#if list.outURL>
									<a href="${list.outURL}" target="_blank" title="<#if list.title?length gt 30>${list.title?substring(0,30)}...<#else>${list.title}</#if>">
									
									<#else>
									<a href="${sys.webRoot}/picture/${list.id}.html" target="_blank" title="<#if list.title?length gt 30>${list.title?substring(0,30)}...<#else>${list.title}</#if>">
									
									</#if>
									<#if list.title?length gt 30>${list.title?substring(0,30)}...</br><#else>${list.title}</#if>
									</a><span class="gray-3 fr">${list.time?substring(0,10)}</span> 
								</li>
                        	
                        		
                        	</#list>
                        </ul>
                    </div>
               </div>
               <div id="con_nine_3" style="display:none">
                    <div class="ygt-list2">        	
                        <ul>
                           <#list morecourses2 as list>
                        		<li>
									<#if list.outURL>
									<a href="${list.outURL}" target="_blank" title="<#if list.title?length gt 30>${list.title?substring(0,30)}...<#else>${list.title}</#if>">
									
									<#else>
									<a href="${sys.webRoot}/picture/${list.id}.html" target="_blank" title="<#if list.title?length gt 30>${list.title?substring(0,30)}...<#else>${list.title}</#if>">
									
									</#if>
									<#if list.title?length gt 30>${list.title?substring(0,30)}...</br><#else>${list.title}</#if>
									</a><span class="gray-3 fr">${list.time?substring(0,10)}</span> 
								</li>
                        	
                        		
                        	</#list>
                        </ul>
                    </div>
               </div> 
               <div id="con_nine_4" style="display:none">  
                    <div class="ygt-list2">        	
                        <ul>
                            <#list morecourses3 as list>
                        		<li>
									<#if list.outURL>
									<a href="${list.outURL}" target="_blank" title="<#if list.title?length gt 30>${list.title?substring(0,30)}...<#else>${list.title}</#if>">
									
									<#else>
									<a href="${sys.webRoot}/picture/${list.id}.html" target="_blank" title="<#if list.title?length gt 30>${list.title?substring(0,30)}...<#else>${list.title}</#if>">
									
									</#if>
									<#if list.title?length gt 30>${list.title?substring(0,30)}...</br><#else>${list.title}</#if>
									</a><span class="gray-3 fr">${list.time?substring(0,10)}</span> 
								</li>
                        	
                        		
                        	</#list>
                        </ul>
                    </div>
               </div> 
             </div>             
        </div>
        <div id="Tab10">
            <div class="Menubox">
            <ul> 
               <li id="ten1" onmouseover="setTab('ten',1,4)" class="Menubox-li-hover" ><a href="${sys.webRoot}/list/261/1.html" style="color:black">学前课程</a></li>
               <li id="ten2" onmouseover="setTab('ten',2,4)"  ><a href="${sys.webRoot}/list/262/1.html" style="color:black">艺考培训</a></li>
            </ul>
            <div class="more-right">校外课程</div>
            </div>
             <div class="Contentbox">  
               <div id="con_ten_1" >
                    <div class="ygt-list2">        	
                        <ul>
                            <#list morecourses4 as list>
                        		<li>
									<#if list.outURL>
									<a href="${list.outURL}" target="_blank" title="<#if list.title?length gt 30>${list.title?substring(0,30)}...<#else>${list.title}</#if>">
									
									<#else>
									<a href="${sys.webRoot}/picture/${list.id}.html" target="_blank" title="<#if list.title?length gt 30>${list.title?substring(0,30)}...<#else>${list.title}</#if>">
									
									</#if>
									<#if list.title?length gt 30>${list.title?substring(0,30)}...</br><#else>${list.title}</#if>
									</a><span class="gray-3 fr">${list.time?substring(0,10)}</span> 
								</li>
                        	
                        		
                        	</#list>
                        </ul>
                    </div>
               </div>
               <div id="con_ten_2" style="display:none"> 
                    <div class="ygt-list2">        	
                        <ul>
                            <#list morecourses5 as list>
                        		<li>
									<#if list.outURL>
									<a href="${list.outURL}" target="_blank" title="<#if list.title?length gt 30>${list.title?substring(0,30)}...<#else>${list.title}</#if>">
									
									<#else>
									<a href="${sys.webRoot}/picture/${list.id}.html" target="_blank" title="<#if list.title?length gt 30>${list.title?substring(0,30)}...<#else>${list.title}</#if>">
									
									</#if>
									<#if list.title?length gt 30>${list.title?substring(0,30)}...</br><#else>${list.title}</#if>
									</a><span class="gray-3 fr">${list.time?substring(0,10)}</span> 
								</li>
                        	
                        		
                        	</#list>
                        </ul>
                    </div>
               </div>
             </div>             
        </div>
</div>



   
<#include "footer.ftl">
</body>
</html>