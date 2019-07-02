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
               <li id="nine1" onmouseover="setTab('nine',1,9)" class="Menubox-li-hover" ><a href="${sys.webRoot}/list/268/1.html" style="color:black">户外拓展</a></li>
               <li id="nine2" onmouseover="setTab('nine',2,9)"  ><a href="${sys.webRoot}/list/269/1.html" style="color:black">农耕文化</a></li>
               <li id="nine3" onmouseover="setTab('nine',3,9)"  ><a href="${sys.webRoot}/list/270/1.html" style="color:black">科技环保</a></li>
               <li id="nine4" onmouseover="setTab('nine',4,9)"  ><a href="${sys.webRoot}/list/271/1.html" style="color:black">安全教育</a></li>
               <li id="nine5" onmouseover="setTab('nine',5,9)"  ><a href="${sys.webRoot}/list/272/1.html" style="color:black">传统文化</a></li>
               <li id="nine6" onmouseover="setTab('nine',6,9)"  ><a href="${sys.webRoot}/list/273/1.html" style="color:black">红色国防</a></li>
               <li id="nine7" onmouseover="setTab('nine',7,9)"  ><a href="${sys.webRoot}/list/274/1.html" style="color:black">生涯规划</a></li>
               <li id="nine8" onmouseover="setTab('nine',8,9)"  ><a href="${sys.webRoot}/list/275/1.html" style="color:black">戏剧教育</a></li>
               <li id="nine9" onmouseover="setTab('nine',9,9)"  ><a href="${sys.webRoot}/list/276/1.html" style="color:black">博物场馆</a></li>
            </ul>
            <div class="more-right">综合实践</div>
            </div>
             <div class="Contentbox">  
               <div id="con_nine_1" >	
                    <div class="ygt-list2">        	
                        <ul>
                        	<#list morepractices0 as list>
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
                            <#list morepractices1 as list>
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
                           <#list morepractices2 as list>
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
                            <#list morepractices3 as list>
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
			   <div id="con_nine_5" style="display:none">  
                    <div class="ygt-list2">        	
                        <ul>
                            <#list morepractices4 as list>
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
			   <div id="con_nine_6" style="display:none">  
                    <div class="ygt-list2">        	
                        <ul>
                            <#list morepractices5 as list>
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
			   <div id="con_nine_7" style="display:none">  
                    <div class="ygt-list2">        	
                        <ul>
                            <#list morepractices6 as list>
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
			   <div id="con_nine_8" style="display:none">  
                    <div class="ygt-list2">        	
                        <ul>
                            <#list morepractices7 as list>
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
			   <div id="con_nine_9" style="display:none">  
                    <div class="ygt-list2">        	
                        <ul>
                            <#list morepractices8 as list>
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