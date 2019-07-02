<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<#include "header.ftl">
<body style="background: #353c47">

<!-----top结束--------->
<#include "banner.ftl">
<!-----menue结束--------->

<!-----banner结束--------->

<div class="clear"></div>

<div class="content" style="width: 860px;background: #fff;padding-bottom: 0px;padding-top: 30px;padding-left: 50px;padding-right: 50px">
<div class="shou_left fl">
<div class="shou_title fl fw" style="font-size: 16px;height: 30px;width: 280px;background: url(resources/shouye_files/ann-1.jpg) no-repeat;color: #fff;padding-bottom: 0px;padding-top: 0px;padding-left: 10px;line-height: 30px;padding-right: 10px"><a href="${sys.webRoot}/categories_list/243.html" target="_blank" style="color: #fff">最新资讯</a></div>
    <a class="fr more-1" href="${sys.webRoot}/categories_list/243.html" target="_blank">更多&nbsp;&gt;</a>
<ul>
<#list latestNews as list>
<li>
<#if list.outURL>
<a href="${list.outURL}" target="_blank" title="<#if list.title?length gt 18>${list.title?substring(0,18)}...<#else>${list.title}</#if>">

<#else>
<a href="${sys.webRoot}/picture/${list.id}.html" target="_blank" title="<#if list.title?length gt 18>${list.title?substring(0,18)}...<#else>${list.title}</#if>">

</#if>
<#if list.title?length gt 18>${list.title?substring(0,18)}...</br><#else>${list.title}</#if>
</a><span class="gray-3 fr">${list.time?substring(0,10)}</span> </li>
</#list>
  
</ul>
</div>
<div class="shou_right fr">
<div class="shou_title fl fw" style="font-size: 16px;height: 30px;width: 280px;background: url(resources/shouye_files/ann-1.jpg) no-repeat;color: #fff;padding-bottom: 0px;padding-top: 0px;padding-left: 10px;line-height: 30px;padding-right: 10px"><a href="${sys.webRoot}/categories_list/267.html" target="_blank" style="color: #fff">活动掠影</a></div>
    <a class="fr more-1" href="${sys.webRoot}/categories_list/267.html" target="_blank">更多&nbsp;&gt;</a>

    <table width="415" height="250" cellspacing="0" align="center">

        <tr>
        
            <td>
                <table width="138" height="130" cellspacing="0" align="center">
                    <tr>
                        <td align="center" width="138" height="90">
	                        <#if fuckyou[0].outURL>
	                            <a href="${fuckyou[0].outURL}"><IMG src="${sys.webRoot}/${fuckyou[0].pic}" width="125px" height="90px"></a>
								
								<#else>
                            	<a href="${sys.webRoot}/picture/${fuckyou[0].id}.html"><IMG src="${sys.webRoot}/${fuckyou[0].pic}" width="125px" height="90px"></a>
								
							</#if>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                   
							<#if fuckyou[0].outURL>
                            	<a href="${fuckyou[0].outURL}" target="_blank" title="<#if fuckyou[0].title?length gt 8>${fuckyou[0].title?substring(0,8)}...<#else>${fuckyou[0].title}</#if>"><#if fuckyou[0].title?length gt 8>${fuckyou[0].title?substring(0,8)}...<#else>${fuckyou[0].title}</#if></a>
								
								<#else>
                            <a href="${sys.webRoot}/picture/${fuckyou[0].id}.html" target="_blank" title="<#if fuckyou[0].title?length gt 8>${fuckyou[0].title?substring(0,8)}...<#else>${fuckyou[0].title}</#if>"><#if fuckyou[0].title?length gt 8>${fuckyou[0].title?substring(0,8)}...<#else>${fuckyou[0].title}</#if></a>
								
							</#if>
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                <table width="138" height="130" cellspacing="0" align="center">
                    <tr>
                        <td align="center" width="138" height="90">
							<#if fuckyou[1].outURL>
	                            <a href="${fuckyou[1].outURL}"><IMG src="${sys.webRoot}/${fuckyou[1].pic}" width="125px" height="90px"></a>
								
								<#else>
                            	<a href="${sys.webRoot}/picture/${fuckyou[1].id}.html"><IMG src="${sys.webRoot}/${fuckyou[1].pic}" width="125px" height="90px"></a>
								
							</#if>                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                
							<#if fuckyou[1].outURL>
                            	<a href="${fuckyou[1].outURL}" target="_blank" title="<#if fuckyou[1].title?length gt 8>${fuckyou[1].title?substring(0,8)}...<#else>${fuckyou[1].title}</#if>"><#if fuckyou[1].title?length gt 8>${fuckyou[1].title?substring(0,8)}...<#else>${fuckyou[1].title}</#if></a>
								
								<#else>
                            <a href="${sys.webRoot}/picture/${fuckyou[1].id}.html" target="_blank" title="<#if fuckyou[1].title?length gt 8>${fuckyou[1].title?substring(0,8)}..。><#else>${fuckyou[1].title}</#if>"><#if fuckyou[1].title?length gt 8>${fuckyou[1].title?substring(0,8)}...<#else>${fuckyou[1].title}</#if></a>
								
							</#if>
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                <table width="138" height="130" cellspacing="0" align="center">
                    <tr>
                        <td align="center" width="138" height="90">
                        	<#if fuckyou[2].outURL>
	                            <a href="${fuckyou[2].outURL}"><IMG src="${sys.webRoot}/${fuckyou[2].pic}" width="125px" height="90px"></a>
								
								<#else>
                            	<a href="${sys.webRoot}/picture/${fuckyou[2].id}.html"><IMG src="${sys.webRoot}/${fuckyou[2].pic}" width="125px" height="90px"></a>
								
							</#if>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                    
							<#if fuckyou[2].outURL>
                            <a href="${fuckyou[2].outURL}" target="_blank" title="<#if fuckyou[2].title?length gt 8>${fuckyou[2].title?substring(0,8)}...<#else>${fuckyou[2].title}</#if>"><#if fuckyou[2].title?length gt 8>${fuckyou[2].title?substring(0,8)}...<#else>${fuckyou[2].title}</#if></a>
								
								<#else>
                            <a href="${sys.webRoot}/picture/${fuckyou[2].id}.html" target="_blank" title="<#if fuckyou[2].title?length gt 8>${fuckyou[2].title?substring(0,8)}...<#else>${fuckyou[2].title}</#if>"><#if fuckyou[2].title?length gt 8>${fuckyou[2].title?substring(0,8)}...<#else>${fuckyou[2].title}</#if></a>
								
							</#if>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table width="138" height="130" cellspacing="0" align="center">
                    <tr>
                        <td align="center" width="138" height="90">
                        	<#if fuckyou[3].outURL>
                            <a href="${fuckyou[3].outURL}"><IMG src="${sys.webRoot}/${fuckyou[3].pic}" width="125px" height="90px"></a>
								
								<#else>
                            <a href="${sys.webRoot}/picture/${fuckyou[3].id}.html"><IMG src="${sys.webRoot}/${fuckyou[3].pic}" width="125px" height="90px"></a>
								
							</#if>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                    
							<#if fuckyou[3].outURL>
                            <a href="${fuckyou[3].outURL}" target="_blank" title="<#if fuckyou[3].title?length gt 8>${fuckyou[3].title?substring(0,8)}...<#else>${fuckyou[3].title}</#if>"><#if fuckyou[3].title?length gt 8>${fuckyou[3].title?substring(0,8)}...<#else>${fuckyou[3].title}</#if></a>
								
								<#else>
                            <a href="${sys.webRoot}/picture/${fuckyou[3].id}.html" target="_blank" title="<#if fuckyou[3].title?length gt 8>${fuckyou[3].title?substring(0,8)}...<#else>${fuckyou[3].title}</#if>"><#if fuckyou[3].title?length gt 8>${fuckyou[3].title?substring(0,8)}...<#else>${fuckyou[3].title}</#if></a>
								
							</#if>
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                <table width="138" height="130" cellspacing="0" align="center">
                    <tr>
                        <td align="center" width="138" height="90">
                        <#if fuckyou[4].outURL>
                            <a href="${fuckyou[4].outURL}"><IMG src="${sys.webRoot}/${fuckyou[4].pic}" width="125px" height="90px"></a>
								
								<#else>
                            <a href="${sys.webRoot}/picture/${fuckyou[4].id}.html"><IMG src="${sys.webRoot}/${fuckyou[4].pic}" width="125px" height="90px"></a>
								
							</#if>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                
							<#if fuckyou[4].outURL>
                            <a href="${fuckyou[4].outURL}" target="_blank" title="<#if fuckyou[4].title?length gt 15>${fuckyou[4].title?substring(0,8)}...<#else>${fuckyou[4].title}</#if>"><#if fuckyou[4].title?length gt 8>${fuckyou[4].title?substring(0,8)}...<#else>${fuckyou[4].title}</#if></a>
								
								<#else>
                            <a href="${sys.webRoot}/picture/${fuckyou[4].id}.html" target="_blank" title="<#if fuckyou[4].title?length gt 8>${fuckyou[4].title?substring(0,8)}...<#else>${fuckyou[4].title}</#if>"><#if fuckyou[4].title?length gt 8>${fuckyou[4].title?substring(0,8)}...<#else>${fuckyou[4].title}</#if></a>
								
							</#if>
                           
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                <table width="138" height="130" cellspacing="0" align="center">
                    <tr>
                        <td align="center" width="138" height="90">
                        <#if fuckyou[5].outURL>
                            <a href="${fuckyou[5].outURL}"><IMG src="${sys.webRoot}/${fuckyou[5].pic}" width="125px" height="90px"></a>
								
								<#else>
                            <a href="${sys.webRoot}/picture/${fuckyou[5].id}.html"><IMG src="${sys.webRoot}/${fuckyou[5].pic}" width="125px" height="90px"></a>
								
							</#if>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
               
								<#if fuckyou[5].outURL>
                            <a href="${fuckyou[5].outURL}" target="_blank" title="<#if fuckyou[5].title?length gt 8>${fuckyou[5].title?substring(0,8)}...<#else>${fuckyou[5].title}</#if>"><#if fuckyou[5].title?length gt 8>${fuckyou[5].title?substring(0,8)}...<#else>${fuckyou[5].title}</#if></a>
								
								<#else>
                            <a href="${sys.webRoot}/picture/${fuckyou[5].id}.html" target="_blank" title="<#if fuckyou[5].title?length gt 8>${fuckyou[5].title?substring(0,8)}...<#else>${fuckyou[5].title}</#if>"><#if fuckyou[5].title?length gt 8>${fuckyou[5].title?substring(0,8)}...<#else>${fuckyou[5].title}</#if></a>
								
							</#if>
							
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

<!--#endeditable-->
<div class="clear"></div>

</div>
<div class="clear"></div>

</div>

<div class="banner_2" style="height: 200px;width: 960px">
    <div id="fsD2" class="focus">
        <div id="D1pic2" class="fPic">
            <!--#begineditable name="banner图片轮换" viewid="111481" tagname="banner图片轮换" action="" layout="" contype="" stylesysid="" template="" tplstyle="" clone="0" istemp=""-->
            <ul>

                <li div="" class="fcon" style="display: block;">
                    <a href="#" target="_self"><img class="bannerImg" src="resources/shouye_files/001-1.jpg" style="opacity: 1;"></a>
                    <span class="shadow"><a href="#" target="_self">我爱祖国我爱吉大摄影作品展      书香育芳菲   方卫东摄</a></span>
                </li><li div="" class="fcon" style="display: none;">
                <a href="#" target="_self"><img class="bannerImg" src="resources/shouye_files/001.jpg" style="opacity: 0.6;"></a>
                <span class="shadow"><a href="#" target="_self">我爱祖国我爱吉大摄影作品展  宫皓宇摄</a></span>
            </li><li div="" class="fcon" style="display: none;">
                <a href="#" target="_blank"><img class="bannerImg" src="resources/shouye_files/002.jpg" style="opacity: 1;"></a>
                <span class="shadow"><a href="#" target="_blank">我爱祖国我爱吉大摄影作品展    段为摄</a></span>
            </li></ul><!--#endeditable--></div>
        <div class="fbg">
            <div id="D2fBt" class="D1fBt">
                <a class="current" hidefocus="" href="javascript:void(0)" target="_self"><i>1</i></a>

                <a hidefocus="" href="javascript:void(0)" target="_self" class=""><i>2</i></a>
                <a hidefocus="" href="javascript:void(0)" target="_self" class=""><i>3</i></a>
                <a hidefocus="" href="javascript:void(0)" target="_self" class=""><i>4</i></a>
                <a hidefocus="" href="javascript:void(0)" target="_self" class=""><i>5</i></a>
                <a hidefocus="" href="javascript:void(0)" target="_self" class=""><i>6</i></a>


            </div></div> </div></div><!-----banner结束--------->

<div class="content" style="width: 860px;background: #fff;padding-bottom: 0px;padding-top: 30px;padding-left: 50px;padding-right: 50px">
    <div class="shou_left fl">
        <div class="shou_title fl" style="font-size: 16px;height: 30px;width: 280px;background: url(resources/shouye_files/ann-1.jpg) no-repeat;color: #fff;padding-bottom: 0px;padding-top: 0px;padding-left: 10px;line-height: 30px;padding-right: 10px"><a href="${sys.webRoot}/yangguangkechengmore.html" target="_blank" style="color: #fff">阳光课程</a></div>
        <a class="fr more-1" href="${sys.webRoot}/yangguangkechengmore.html" target="_blank">更多&nbsp;&gt;</a>
        <ul>
        <table width="400" height="250"  cellspacing="0" align="center">

                <th>
                    <div style="width:120px; height:250px; overflow:auto; overflow-x:hidden;background-color:gainsboro ;">
                        <table width="120" cellspacing="0" align="center">

							<#list courses as list>
							 <tr align="center" height="30">
							 	<#if list.t_id='title'>
							 		<th class="td02" id="course${list_index}" border="5" align="left" style="background-color: orange;padding-left:10px">
							 		 <b>${list.name}</b>
							 		 </th>
							 	<#else>
							 
								 	<#if list.id == initcourseid>
	                                	<th class="td02" id="course${list_index}" border="5" align="center" style="background-color: sandybrown;">
								 	
								 	<#else>
	                                	<th class="td02" id="course${list_index}" border="5" align="center">
								 	
								 	</#if>
	                                    <a onclick="queryInfos(${list.id},${list_index},${courses?size})" >
	                                        ${list.name}
	                                    </a>
	                                </th>
                                </#if>
                            </tr>
							</#list>
                            
                        </table>
                    </div>

                </th>
                <th>
                    <div style="width:300px; height:250px; overflow:auto; overflow-x:hidden;background-color: whitesmoke ;">
                        <table width="300" height="250" cellspacing="0" align="center">

                            <tr align="center" height="83">
                                <th  style="border-bottom: 1px inset white;">
                                    <table border="0" bordercolor="black" width="320" cellspacing="0" cellpadding="5">
                                        <tr>
                                            <td height="80" width="105" >
                                            	<#if initcourses[0].outURL>
                                                	<a id="coursea0" href="${initcourses[0].outURL}"><IMG id="courseimg0" src="${sys.webRoot}/${initcourses[0].pic}" width="80px" height="70px" style="padding: 10px"></a>
                                            	
                                            	<#else>
                                                	<a id="coursea0" href="${sys.webRoot}/picture/${initcourses[0].id}.html"><IMG id="courseimg0" src="${sys.webRoot}/${initcourses[0].pic}" width="80px" height="70px" style="padding: 10px"></a>
                                            	
                                            	</#if>
                                            </td>
                                            <td>
                                                <table width="198" >
                                                    <tr>
                                                        <td height="30"  valign="bottom" >
                                                          <#if initcourses[0].outURL>
                                                	          <a id="coursetitle0" href="${initcourses[0].outURL}">${initcourses[0].title}</a>
                                            	          <#else>
                                                	          <a id="coursetitle0" href="${sys.webRoot}/picture/${initcourses[0].id}.html">${initcourses[0].title}</a>
                                            	          </#if>
                                                        </td>
                                                    </tr>
                                               
                                                </table>

                                            </td>

                                        </tr>
                                    </table>


                                </th>
                            </tr>
                            <tr align="center" height="83">
                                <th  style="border-bottom: 1px inset white;">
                                    <table border="0" bordercolor="black" width="320" cellspacing="0" cellpadding="5">
                                        <tr>
                                            <td height="80" width="105" >
                                            	<#if initcourses[1].outURL>
                                                	<a id="coursea1" href="${initcourses[1].outURL}"><IMG id="courseimg1" src="${sys.webRoot}/${initcourses[1].pic}" width="80px" height="70px" style="padding: 10px"></a>
                                            	
                                            	<#else>
                                                	<a id="coursea1" href="${sys.webRoot}/picture/${initcourses[1].id}.html"><IMG id="courseimg1" src="${sys.webRoot}/${initcourses[1].pic}" width="80px" height="70px" style="padding: 10px"></a>
                                            	
                                            	</#if>
                                            </td>
                                            <td>
                                                <table width="198" >
                                                    <tr>
                                                        <td height="30"  valign="bottom" >
                                                       		<#if initcourses[1].outURL>
                                                	          <a id="coursetitle1" href="${initcourses[1].outURL}">${initcourses[1].title}</a>
                                            	          <#else>
                                                	          <a id="coursetitle1" href="${sys.webRoot}/picture/${initcourses[1].id}.html">${initcourses[1].title}</a>
                                            	          </#if>
                                                        </td>
                                                    </tr>
                                                </table>

                                            </td>

                                        </tr>
                                    </table>


                                </th>
                            </tr>
                            <tr align="center" height="83">
                                <th  style="border-bottom: 1px inset white;">
                                    <table border="0" bordercolor="black" width="320" cellspacing="0" cellpadding="5">
                                        <tr>
                                            <td height="80" width="105" >
                                            <#if initcourses[2].outURL>
                                                <a id="coursea2" href="${initcourses[2].outURL}"><IMG id="courseimg2" src="${sys.webRoot}/${initcourses[2].pic}" width="80px" height="70px" style="padding: 10px"></a>
                                            	
                                            	<#else>
                                                <a id="coursea2" href="${sys.webRoot}/picture/${initcourses[2].id}.html"><IMG id="courseimg2" src="${sys.webRoot}/${initcourses[2].pic}" width="80px" height="70px" style="padding: 10px"></a>
                                            	
                                            	</#if>
                                            </td>
                                            <td>
                                                <table width="198" >
                                                    <tr>
                                                        <td height="30"  valign="bottom">
                                                 
                                                            <#if initcourses[2].outURL>
                                                	          <a id="coursetitle2" href="${initcourses[2].outURL}">${initcourses[2].title}</a>
                                            	          <#else>
                                                	          <a id="coursetitle2" href="${sys.webRoot}/picture/${initcourses[2].id}.html">${initcourses[2].title}</a>
                                            	          </#if>
                                                        </td>
                                                    </tr>
                                                </table>

                                            </td>

                                        </tr>
                                    </table>


                                </th>
                            </tr>


                        </table>
                    </div>
                </th>

        </table>

       </ul>
        <!--#endeditable-->

    </div>
    <div class="shou_right fr">
        <div class="shou_title fl" style="font-size: 16px;height: 30px;width: 280px;background: url(resources/shouye_files/ann-1.jpg) no-repeat;color: #fff;padding-bottom: 0px;padding-top: 0px;padding-left: 10px;line-height: 30px;padding-right: 10px"><a href="${sys.webRoot}/huodonglueyingmore.html" target="_blank" style="color: #fff">阳光活动</a></div>
         <a class="fr more-1" href="${sys.webRoot}/huodonglueyingmore.html" target="_blank">更多&nbsp;&gt;</a>
        

        <table width="415" height="250" cellspacing="5" align="center">

            <tr>
                <td bgcolor="gainsboro">
                    <table width="138" height="125" cellspacing="0" align="center">
                        <tr>
                        
                            <td align="center">
                           		<p><b><a href="${sys.webRoot}/list/252/1.html" style="color:black;">公益活动</a></b></p></br>
                            <#if gongyiactivity[0].outURL>
                            	<a href="${gongyiactivity[0].outURL}"><IMG src="${sys.webRoot}/${gongyiactivity[0].pic}" width="125px" height="90px"></a>
                            
                            <#else>
                                <a href="${sys.webRoot}/picture/${gongyiactivity[0].id}.html"><IMG src="${sys.webRoot}/${gongyiactivity[0].pic}" width="125px" height="90px"></a>
                            
                            </#if>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="138">
                            <#if gongyiactivity[0].outURL>
                            <a href="${gongyiactivity[0].outURL}" target="_blank" title="<#if gongyiactivity[0].title?length gt 8>${gongyiactivity[0].title?substring(0,8)}...</br><#else>${gongyiactivity[0].title}</#if>">
                            
                            <#else>
                            <a href="${sys.webRoot}/picture/${gongyiactivity[0].id}.html" target="_blank" title="<#if gongyiactivity[0].title?length gt 8>${gongyiactivity[0].title?substring(0,8)}...</br><#else>${gongyiactivity[0].title}</#if>">
                            
                            </#if>
                            	<#if gongyiactivity[0].stickie == 1>
									<font color="red">
									
									</font>
								</#if>
                            <#if gongyiactivity[0].title?length gt 8>${gongyiactivity[0].title?substring(0,8)}...</br><#else>${gongyiactivity[0].title}</#if></a>
                            </td>
                        </tr>
                    
                    </table>
                </td>
               <td bgcolor="gainsboro">
                    <table width="138" height="125" cellspacing="0" align="center">
                        <tr>
                        
                            <td align="center">
                           		<p><b><a href="${sys.webRoot}/list/253/1.html" style="color:black;">综合实践</a></b></p></br>
                            <#if sunshineactivity[0].outURL>
                            	<a href="${sunshineactivity[0].outURL}"><IMG src="${sys.webRoot}/${sunshineactivity[0].pic}" width="125px" height="90px"></a>
                            
                            <#else>
                                <a href="${sys.webRoot}/picture/${sunshineactivity[0].id}.html"><IMG src="${sys.webRoot}/${sunshineactivity[0].pic}" width="125px" height="90px"></a>
                            
                            </#if>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="138">
                            
	 							<#if sunshineactivity[0].outURL>
                            <a href="${sunshineactivity[0].outURL}" target="_blank" title="<#if sunshineactivity[0].title?length gt 8>${sunshineactivity[0].title?substring(0,8)}...</br><#else>${sunshineactivity[0].title}</#if>">
                            
                            <#else>
                            <a href="${sys.webRoot}/picture/${sunshineactivity[0].id}.html" target="_blank" title="<#if sunshineactivity[0].title?length gt 8>${sunshineactivity[0].title?substring(0,8)}...</br><#else>${sunshineactivity[0].title}</#if>">
                            
                            </#if>                     	
                            <#if sunshineactivity[0].stickie == 1>
									<font color="red">
									
									</font>
								</#if>
                            <#if sunshineactivity[0].title?length gt 8>${sunshineactivity[0].title?substring(0,8)}...</br><#else>${sunshineactivity[0].title}</#if></a>
                            </td>
                        </tr>
           
                    </table>
                </td>
               <td bgcolor="gainsboro">
                    <table width="138" height="125" cellspacing="0" align="center">
                        <tr>
                        
                            <td align="center">
                           		<p><b><a href="${sys.webRoot}/list/254/1.html" style="color:black;">研学活动</a></b></p></br>
                             <#if yanxueactivity[0].outURL>
                            	<a href="${yanxueactivity[0].outURL}"><IMG src="${sys.webRoot}/${yanxueactivity[0].pic}" width="125px" height="90px"></a>
                            
                            <#else>
                                <a href="${sys.webRoot}/picture/${yanxueactivity[0].id}.html"><IMG src="${sys.webRoot}/${yanxueactivity[0].pic}" width="125px" height="90px"></a>
                            
                            </#if>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="138">
                             <#if yanxueactivity[0].outURL>
                            <a href="${yanxueactivity[0].outURL}" target="_blank" title="<#if yanxueactivity[0].title?length gt 8>${yanxueactivity[0].title?substring(0,8)}...</br><#else>${yanxueactivity[0].title}</#if>">
                            
                            <#else>
                            <a href="${sys.webRoot}/picture/${yanxueactivity[0].id}.html" target="_blank" title="<#if yanxueactivity[0].title?length gt 8>${yanxueactivity[0].title?substring(0,8)}...</br><#else>${yanxueactivity[0].title}</#if>">
                            
                            </#if>
                            	<#if yanxueactivity[0].stickie == 1>
									<font color="red">
									
									</font>
								</#if>
                            <#if yanxueactivity[0].title?length gt 8>${yanxueactivity[0].title?substring(0,8)}...</br><#else>${yanxueactivity[0].title}</#if></a>
                            </td>
                        </tr>
                 
                    </table>
                </td>
            </tr>
           
        </table>
        <!--#endeditable-->
        <div class="clear"></div>

    </div>
    <div class="clear"></div>



</div>


<div class="banner_2" style="height: 200px;width: 960px">
    <div id="fsD3" class="focus">
        <div id="D1pic3" class="fPic">
            <!--#begineditable name="banner图片轮换" viewid="111481" tagname="banner图片轮换" action="" layout="" contype="" stylesysid="" template="" tplstyle="" clone="0" istemp=""-->
            <ul>

                <li div="" class="fcon" style="display: block;">
                    <a href="#" target="_self"><img class="bannerImg" src="resources/shouye_files/001-2.jpg" style="opacity: 1;"></a>
                    <span class="shadow"><a href="#" target="_self">我爱祖国我爱吉大摄影作品展      书香育芳菲   方卫东摄</a></span>
                </li><li div="" class="fcon" style="display: none;">
                <a href="#" target="_self"><img class="bannerImg" src="resources/shouye_files/003.jpg" style="opacity: 0.6;"></a>
                <span class="shadow"><a href="#" target="_self">我爱祖国我爱吉大摄影作品展  宫皓宇摄</a></span>
            </li><li div="" class="fcon" style="display: none;">
                <a href="#" target="_blank"><img class="bannerImg" src="resources/shouye_files/004.jpg" style="opacity: 1;"></a>
                <span class="shadow"><a href="#" target="_blank">我爱祖国我爱吉大摄影作品展    段为摄</a></span>
            </li></ul><!--#endeditable--></div>
        <div class="fbg">
            <div id="D3fBt" class="D1fBt">
                <a class="current" hidefocus="" href="javascript:void(0)" target="_self"><i>1</i></a>

                <a hidefocus="" href="javascript:void(0)" target="_self" class=""><i>2</i></a>
                <a hidefocus="" href="javascript:void(0)" target="_self" class=""><i>3</i></a>
                <a hidefocus="" href="javascript:void(0)" target="_self" class=""><i>4</i></a>
                <a hidefocus="" href="javascript:void(0)" target="_self" class=""><i>5</i></a>
                <a hidefocus="" href="javascript:void(0)" target="_self" class=""><i>6</i></a>


            </div></div> </div></div><!-----banner结束--------->

<div class="clear"></div>
<div class="shou_news" style="height: 355px;position: relative">
<DIV class="content" style="HEIGHT: 320px; WIDTH: 960px; PADDING-BOTTOM: 0px; PADDING-TOP: 35px; PADDING-LEFT: 30px; PADDING-RIGHT: 30px">
    <DIV class="clear"></DIV>
    <DIV class="w_1000 fl" id="imagesNews111372">

        <UL class="shou_news_list fl">
            <LI>
                <DIV class="shou_title fl fw" style="MARGIN-BOTTOM: -24px !important; WIDTH: 250px; POSITION: absolute; Z-INDEX: 1000000000">
                    <DIV class="fl">阳光基地</DIV><A class="fr more-1" href="http://www.jlu.edu.cn/index/jdxw.htm" target="_blank"></A>
                </DIV>
                <div class="shou_bottom_left">

                    <ul>
                        <table width="270" height="250" cellspacing="0" align="center">

                            <tr>

                                <td class="td02">
                                    <table width="138" height="130" cellspacing="0" align="center">
                                        <tr>
                                            <td align="center">
                            <#if sunshinejidi[0].outURL>
                            <a href="${sunshinejidi[0].outURL}"><IMG src="${sys.webRoot}/${sunshinejidi[0].pic}" width="125px" height="90px"></a>
                            
                            <#else>
                            <a href="${sys.webRoot}/picture/${sunshinejidi[0].id}.html"><IMG src="${sys.webRoot}/${sunshinejidi[0].pic}" width="125px" height="90px"></a>
                            
                            </#if>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                            <#if sunshinejidi[0].outURL>
                            <a href="${sunshinejidi[0].outURL}" target="_blank" title="<#if sunshinejidi[0].title?length gt 8>${sunshinejidi[0].title?substring(0,8)}...</br><#else>${sunshinejidi[0].title}</#if>"><#if sunshinejidi[0].title?length gt 15>${sunshinejidi[0].title?substring(0,8)}...</br><#else>${sunshinejidi[0].title}</#if></a>
                            
                            <#else>
                            <a href="${sys.webRoot}/picture/${sunshinejidi[0].id}.html" target="_blank" title="<#if sunshinejidi[0].title?length gt 8>${sunshinejidi[0].title?substring(0,8)}...</br><#else>${sunshinejidi[0].title}</#if>"><#if sunshinejidi[0].title?length gt 8>${sunshinejidi[0].title?substring(0,8)}...</br><#else>${sunshinejidi[0].title}</#if></a>
                            
                            </#if>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="td02">
                                    <table width="138" height="130" cellspacing="0" align="center">
                                        <tr>
                                            <td align="center">
                            <#if sunshinejidi[1].outURL>
                            <a href="${sunshinejidi[1].outURL}"><IMG src="${sys.webRoot}/${sunshinejidi[1].pic}" width="125px" height="90px"></a>
                            
                            <#else>
                            <a href="${sys.webRoot}/picture/${sunshinejidi[1].id}.html"><IMG src="${sys.webRoot}/${sunshinejidi[1].pic}" width="125px" height="90px"></a>
                            
                            </#if>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                            <#if sunshinejidi[1].outURL>
                            <a href="${sunshinejidi[1].outURL}" target="_blank" title="<#if sunshinejidi[1].title?length gt 8>${sunshinejidi[1].title?substring(0,8)}...</br><#else>${sunshinejidi[1].title}</#if>"><#if sunshinejidi[1].title?length gt 8>${sunshinejidi[1].title?substring(0,8)}...</br><#else>${sunshinejidi[1].title}</#if></a>
                            
                            <#else>
                            <a href="${sys.webRoot}/picture/${sunshinejidi[1].id}.html" target="_blank" title="<#if sunshinejidi[1].title?length gt 8>${sunshinejidi[1].title?substring(0,8)}...</br><#else>${sunshinejidi[1].title}</#if>"><#if sunshinejidi[1].title?length gt 8>${sunshinejidi[1].title?substring(0,8)}...</br><#else>${sunshinejidi[1].title}</#if></a>
                            
                            </#if>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="td02">
                                    <table width="138" height="130" cellspacing="0" align="center">
                                        <tr>
                                            <td align="center">
                             <#if sunshinejidi[2].outURL>
                            <a href="${sunshinejidi[2].outURL}"><IMG src="${sys.webRoot}/${sunshinejidi[2].pic}" width="125px" height="90px"></a>
                            
                            <#else>
                            <a href="${sys.webRoot}/picture/${sunshinejidi[2].id}.html"><IMG src="${sys.webRoot}/${sunshinejidi[2].pic}" width="125px" height="90px"></a>
                            
                            </#if>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                                            <#if sunshinejidi[2].outURL>
                            <a href="${sunshinejidi[2].outURL}" target="_blank" title="<#if sunshinejidi[2].title?length gt 8>${sunshinejidi[2].title?substring(0,8)}...</br><#else>${sunshinejidi[2].title}</#if>"><#if sunshinejidi[2].title?length gt 8>${sunshinejidi[2].title?substring(0,8)}...</br><#else>${sunshinejidi[2].title}</#if></a>
                            
                            <#else>
                            <a href="${sys.webRoot}/picture/${sunshinejidi[2].id}.html" target="_blank" title="<#if sunshinejidi[2].title?length gt 8>${sunshinejidi[2].title?substring(0,8)}...</br><#else>${sunshinejidi[2].title}</#if>"><#if sunshinejidi[2].title?length gt 8>${sunshinejidi[2].title?substring(0,8)}...</br><#else>${sunshinejidi[2].title}</#if></a>
                            
                            </#if>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="td02">
                                    <table width="138" height="130" cellspacing="0" align="center">
                                        <tr>
                                            <td align="center">
                                            <#if sunshinejidi[3].outURL>
                            <a href="${sunshinejidi[3].outURL}"><IMG src="${sys.webRoot}/${sunshinejidi[3].pic}" width="125px" height="90px"></a>
                            
                            <#else>
                            <a href="${sys.webRoot}/picture/${sunshinejidi[3].id}.html"><IMG src="${sys.webRoot}/${sunshinejidi[3].pic}" width="125px" height="90px"></a>
                            
                            </#if>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                                             <#if sunshinejidi[3].outURL>
                            <a href="${sunshinejidi[3].outURL}" target="_blank" title="<#if sunshinejidi[3].title?length gt 8>${sunshinejidi[3].title?substring(0,8)}...</br><#else>${sunshinejidi[3].title}</#if>"><#if sunshinejidi[3].title?length gt 8>${sunshinejidi[3].title?substring(0,8)}...</br><#else>${sunshinejidi[3].title}</#if></a>
                            
                            <#else>
                            <a href="${sys.webRoot}/picture/${sunshinejidi[3].id}.html" target="_blank" title="<#if sunshinejidi[3].title?length gt 8>${sunshinejidi[3].title?substring(0,8)}...</br><#else>${sunshinejidi[3].title}</#if>"><#if sunshinejidi[3].title?length gt 8>${sunshinejidi[3].title?substring(0,8)}...</br><#else>${sunshinejidi[3].title}</#if></a>
                            
                            </#if>
                            
                                            </td>
                                        </tr>
                                    </table>
                                </td>

                            </tr>
                        </table>

                        <!--#endeditable-->
                        <div class="clear"></div>
                    </ul>
                </div>




            </LI>


            <LI>
                <DIV class="shou_title fl fw" style="MARGIN-BOTTOM: -24px !important; WIDTH: 250px; POSITION: absolute; Z-INDEX: 1000000000">
                    <DIV class="fl">阳光团</DIV><A class="fr more-1" href="#" target="_blank"></A>
                </DIV>
                <div class="shou_bottom_left ">


                    <ul>
						<#list sunshinetuan as list>
							<li>
							<#if list.outURL>
							<a href="${list.outURL}" target="_blank" title="<#if list.title?length gt 15>${list.title?substring(0,15)}...<#else>${list.title}</#if>">
                            
                            <#else>
							<a href="${sys.webRoot}/picture/${list.id}.html" target="_blank" title="<#if list.title?length gt 15>${list.title?substring(0,15)}...<#else>${list.title}</#if>">
                            
                            </#if>
							<#if list.stickie == 1>
									<font color="red">
									
									</font>
								</#if>
							<#if list.title?length gt 15>${list.title?substring(0,15)}...</br><#else>${list.title}</#if>
							</a> </li>
						</#list>
                    
                    </ul>
                </div>
            </LI>
            <LI style="margin-right:0;">
                <DIV class="shou_title fl fw" style="MARGIN-BOTTOM: -24px !important; WIDTH: 250px; POSITION: absolute; Z-INDEX: 1000000000">
                    <DIV class="fl">体育俱乐部</DIV><A class="fr more-1" href="#" target="_blank"></A>
                </DIV>
                <div class="shou_bottom_left ">

                    <ul>
                        <#list sunshinetiyu as list>
							<li>
							<#if list.outURL>
							<a href="${list.outURL}" target="_blank" title="<#if list.title?length gt 15>${list.title?substring(0,15)}...<#else>${list.title}</#if>">
                            
                            <#else>
							<a href="${sys.webRoot}/picture/${list.id}.html" target="_blank" title="<#if list.title?length gt 15>${list.title?substring(0,15)}...<#else>${list.title}</#if>">
                            
                            </#if>
							
							<#if list.stickie == 1>
									<font color="red">
									
									</font>
								</#if>
							<#if list.title?length gt 15>${list.title?substring(0,15)}...</br><#else>${list.title}</#if>
							</a> </li>
						</#list>
                    </ul>
                </div>


             </LI>
        </UL>
    </DIV>
    <DIV class="clear"></DIV></DIV>
    <div class="clear"></div><div class="clear"></div>
</div>
<#include "footer.ftl">

<div class="clear"></div></div></div>

<script type="text/javascript">
    var req = new XMLHttpRequest();
    function queryInfos(id,index,size) {
        //设置传送方式，对应的servlet或action路径，是否异步处理
        req.open("POST", "${sys.webRoot}/getcourse.do?action=getCourseSample", true);
        //如果设置数据传送方式为post，则必须设置请求头信息
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
        //设置回调函数，当前操作完成后进行的操作
        req.onreadystatechange = callback;

        //Ajax请求发送的数据不是表单，需要拼接数据，格式和get方式一样
        var reqData = "id=" + id;
        for( i = 0; i < size; i++){
        	if(i == index){
	        	document.getElementById("course"+i).style.backgroundColor="sandybrown";
        	
        	}else if(i!=0 && i!= 5){
	        	document.getElementById("course"+i).style.backgroundColor="";
        	
        	}
        	
        }
        
        
        

        //发送请求
        req.send(reqData);
    }
    //回调函数
    function callback() {
        //如果Ajax和request的状态都正确则进行操作
        if (req.readyState == 4 && req.status == 200) {
            //获取后台返回的数据
            var response = req.responseText;
            //进行对象化处理
            //加上圆括号的目的是迫使eval函数在处理JavaScript代码的时候强制将括号内的表达式转化为对象，而不是作为语句来执行
            //由于json是以"{}"的方式来开始以及结束的，在JS中，它会被当成一个语句块来处理，所以必须强制性的将它转换成一种表达式。
            var jsonobject = eval("(" + response + ")");
            var i=0;
           for(i=0;i<3;i++){
	           if(jsonobject.data[i]){
	           		if(jsonobject.data[i].stickie==1){
	           			document.getElementById("coursetitle"+i).innerHTML = "<font color=red></font>"+jsonobject.data[i].title;
	           		}else{
		            	document.getElementById("coursetitle"+i).innerHTML = jsonobject.data[i].title;
	           		
	           		}
	         
	            	$("#courseimg"+i).attr("src",jsonobject.data[i].pic);
	            	if(jsonobject.data[i].outURL){
	        			document.getElementById("coursea"+i).href = jsonobject.data[i].outURL;
	        			document.getElementById("coursetitle"+i).href = jsonobject.data[i].outURL;
	            	
	            	}else{
	        			document.getElementById("coursea"+i).href = "${sys.webRoot}/picture/"+ jsonobject.data[i].id +".html";
	        			document.getElementById("coursetitle"+i).href = "${sys.webRoot}/picture/"+ jsonobject.data[i].id +".html";
	            	
	            	}
	            
	            }else{
	            	document.getElementById("coursetitle"+i).innerHTML = "";
	            	$("#courseimg"+i).attr("src","");
	        		document.getElementById("coursea"+i).href = "#";
	            }
           
           }
            
            
            
           
        
           
            

       
           
        }
    }

</script>

</body></html>