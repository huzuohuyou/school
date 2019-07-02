<DIV class="top">
<DIV class="top_1">
<div class="fl" style="color:#fff;">
  <a href="${sys.webRoot}/student_admin.jspx">学生登录</a>
 |
  <a href="${sys.webRoot}/admin.jspx">工作人员登录</a>

 
</div> 
 
</DIV></DIV>
    <div class="menue">
      
    
        <div style="width: 1200px;position: relative;margin: 0px auto">
            <div class="logo fl"><a href="http://www.jlu.edu.cn/index.htm"></a><!--#begineditable name="网站LOGO" viewid="110303" tagname="网站LOGO" action="" layout="" contype="" stylesysid="" template="" tplstyle="" clone="0" istemp=""-->
                <table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><a href="http://www.jlu.edu.cn/index.htm" title="吉林大学" alt="网站LOGO"><img src="${sys.webRoot}/resources/shouye_files/logo.jpg" alt="吉林大学" title="吉林大学" border="0"></a></td></tr></tbody></table><!--#endeditable-->&nbsp;</div>
            <div class="nav fr"><!--#begineditable name="网站导航" viewid="110302" tagname="网站导航" action="" layout="" contype="" stylesysid="" template="" tplstyle="" clone="0" istemp=""--><ul>
                <li class="drop-menu-effect"><a href="${sys.webRoot}" target="">首页</a></li>
                
                
<#list cache.categoriesList as categories>
<li class="drop-menu-effect">

<#if categories.subList?? && (categories.subList?size>0)>
	<a href="#" target="${categories.target}">${categories.name}</a>

<#elseif categories.url?? && categories.url!=''>
	<a href="${sys.webRoot}/${categories.url}" target="${categories.target}">${categories.name}</a>
<#else>
	<a href="${sys.webRoot}/categories_list/${categories.id}.html" target="${categories.target}">${categories.name}</a>
</#if>

<#if categories.subList?? && (categories.subList?size>0)>
<ul class="submenu" style="height: 0px; opacity: 0;">
<#list categories.subList as sub>

<#if sub.t_id=='title'>
<li style="background: orange;">
<b>
${sub.name}
</b>
</li>
<#else>
<li>
<#if sub.url?? && sub.url!=''>
<a href="${sys.webRoot}/${sub.url}" target="${sub.target}">${sub.name}</a>
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

<!--#endeditable-->
            </div>
        </div>
    </div><!-----menue结束--------->

    <div class="banner_1" style="height: 300px;width: 960px">
        <div id="fsD1" class="focus">
            <div id="D1pic1" class="fPic">
                <!--#begineditable name="banner图片轮换" viewid="111481" tagname="banner图片轮换" action="" layout="" contype="" stylesysid="" template="" tplstyle="" clone="0" istemp=""-->
                <ul>

                    <li div="" class="fcon" style="display: block;">
                        <a href="#" target="_self"><img class="bannerImg" src="${sys.webRoot}/resources/shouye_files/banner-1.jpg" style="opacity: 1;"></a>
                        <span class="shadow"><a href="#" target="_self">&nbsp;&nbsp;&nbsp;&nbsp;研学活动：人文底蕴、科学精神、学会学习、实践创新</a></span>
                    </li><li div="" class="fcon" style="display: none;">
                    <a href="#" target="_self"><img class="bannerImg" src="${sys.webRoot}/resources/shouye_files/banner-2.jpg" style="opacity: 0.6;"></a>
                    <span class="shadow"><a href="#" target="_self">&nbsp;&nbsp;&nbsp;&nbsp;阳光公益：小小安全员 万人公益活动计划</a></span>
                </li><li div="" class="fcon" style="display: none;">
                    <a href="#" target="_blank"><img class="bannerImg" src="${sys.webRoot}/resources/shouye_files/banner-5.jpg" style="opacity: 1;"></a>
                    <span class="shadow"><a href="#" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;阳光学前教育：为4-7岁幼儿提供优质学前教育，衔接重点小学</a></span>
                </li><li div="" class="fcon" style="display: none;">
                    <a href="#" target="_self"><img class="bannerImg" src="${sys.webRoot}/resources/shouye_files/banner-4.jpg" style="opacity: 1;"></a>
                    <span class="shadow"><a href="#" target="_self">&nbsp;&nbsp;&nbsp;&nbsp;开放性科学：阳光开放性实践课，奇妙的实验世界</a></span>
                </li></ul><!--#endeditable--></div>
            <div class="fbg">
                <div id="D1fBt" class="D1fBt">
                    <a class="current" hidefocus="" href="javascript:void(0)" target="_self"><i>1</i></a>

                    <a hidefocus="" href="javascript:void(0)" target="_self" class=""><i>2</i></a>
                    <a hidefocus="" href="javascript:void(0)" target="_self" class=""><i>3</i></a>
                    <a hidefocus="" href="javascript:void(0)" target="_self" class=""><i>4</i></a>



                </div></div><span class="prev"></span><span class="next"></span></div></div><!-----banner结束--------->

