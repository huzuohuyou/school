<div class="contain_left">
<div class="show_box_leftnav common_mbottom">
<#list subMenu as menu>
 <#if menu_index == 0>
  <div class="sb1_head">
   <a href="${sys.webRoot}/categories_list/${menu.id}.html">${menu.name}</a>				
  </div>
 </#if>
</#list>
<#if subMenu?size gt 1>
 <div class="sb1_main">
  <ul id="left_nav_url" class="menu_list_1">
   <#list subMenu as menu>
    <#if menu_index gt 0>
     <li style="">
     <dt>
      <#if menu.t_id == 'page'>
       <a href="${sys.webRoot}/page/${menu.id}.html">${menu.name}</a>
      <#else>
      <a href="${sys.webRoot}/list/${menu.id}/1.html">${menu.name}</a>
      </#if>
     </dt>
    </li>
   </#if>
  </#list>
<div class="clear"></div>
</ul>
<script type="text/javascript">
(function(){ $('#left_nav_url dt').click(function(){ $(this).parent().parent().find('dl').hide('normal'); if($(this).nextAll('dl').css('display') == 'none') $(this).nextAll('dl').slideDown("normal"); else $(this).nextAll('dl').slideUp("normal");});$('#left_nav_url').find('dl :first').parent().show()
})()
</script>			
</div>
</#if>
<div class="sb1_bottom">&nbsp;</div>
</div>
</div>