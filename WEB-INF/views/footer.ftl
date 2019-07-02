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