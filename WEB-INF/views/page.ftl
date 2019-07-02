<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<#include "header.ftl">
<body>


    <!-----top结束--------->
<#include "banner.ftl">
    <!-----banner结束--------->



    <div class="width-1200">

      <div style="width: 1200px;padding-bottom: 0px;font-family: 黑体 ;font-size: 40px;text-align:center">
           ${categories.name}
           
            <br/><img src="${sys.webRoot}/resources/shouye_files/AD0I6ISlBRAEGAAgm8TYvgUouajSMDDCAzgy.png" alt="" />
        </div>
       
        <div  style="width: 1200px;padding-bottom: 80px;text-align:center">
          ${page.content}

        </div>



	<div class="clear"></div>
    </div>




    <div class="clear"></div>

<#include "footer.ftl">
   
    </div>

</body>
</html>