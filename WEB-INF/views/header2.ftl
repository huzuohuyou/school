
<head><title>阳光丽和</title>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
    <meta name="applicable-device" content="pc">
    <link rel="stylesheet" type="text/css" href="${sys.webRoot}/resources/shouye_files/lanrenzhijia.css">
    <script type="text/javascript" src="${sys.webRoot}/resources/shouye_files/terminator2.js" async="true"></script>
    <script type="text/javascript" src="${sys.webRoot}/resources/shouye_files/jquery-1.js"></script>
    <script src="${sys.webRoot}/resources/shouye_files/jquery_002.js"></script>
    <script type="text/javascript" src="${sys.webRoot}/resources/shouye_files/koala.js"></script>
    <!--Announced by Visual SiteBuilder 9-->
    <link rel="stylesheet" type="text/css" href="${sys.webRoot}/resources/shouye_files/_sitegray_d.css">
    <script language="javascript" src="${sys.webRoot}/resources/shouye_files/_sitegray.js"></script>
    <!-- CustomerNO:7765626265723230766847545352564203050000 -->
    <link rel="stylesheet" type="text/css" href="${sys.webRoot}/resources/shouye_files/index.css">
    <meta name="keywords" content="阳光丽和">
    <script type="text/javascript" src="${sys.webRoot}/resources/shouye_files/vsbscreen.js" id="_vsbscreen" devices="pc|pad"></script>
    <script type="text/javascript" src="${sys.webRoot}/resources/shouye_files/counter.js"></script>
    <script type="text/javascript">_jsq_(1001,'/index.jsp',-1,1180385364)</script>
    <script>
        function dropMenu(obj){
            $(obj).each(function(){
                var theSpan = $(this);
                var theMenu = theSpan.find("ul");
                var tarHeight = theMenu.height();
                theMenu.css({height:0,opacity:0});

                var t1;

                function expand() {
                    clearTimeout(t1);
                    theSpan.find('a').addClass("selected");
                    theMenu.stop().show().animate({height:tarHeight,opacity:1},0);
                }

                function collapse() {
                    clearTimeout(t1);
                    t1 = setTimeout(function(){
                        theSpan.find('a').removeClass("selected");
                        theMenu.stop().animate({height:0,opacity:0},0,function(){
                            $(this).css({display:"none"});
                        });
                    }, 250);
                }

                theSpan.hover(expand, collapse);
                theMenu.hover(expand, collapse);
            });
        }

        $(document).ready(function(){

            dropMenu(".drop-menu-effect");

        });
    </script>
    <script type="text/javascript">
        Qfast.add('widgets', { path: "${sys.webRoot}/resources/shouye_files/terminator2.2.min.js", type: "js", requires: ['fx'] });
        Qfast(false, 'widgets', function () {
            K.tabs({
                id: 'fsD1',   //焦点图包裹id
                conId: "D1pic1",  //** 大图域包裹id
                tabId:"D1fBt",
                tabTn:"a",
                conCn: '.fcon', //** 大图域配置class
                auto: 1,   //自动播放 1或0
                effect: 'fade',   //效果配置
                eType: 'click', //** 鼠标事件
                pageBt:true,//是否有按钮切换页码
                bns: ['.prev', '.next'],//** 前后按钮配置class
                interval: 5000  //** 停顿时间
            })
        })
    </script>
    <script type="text/javascript">
        Qfast.add('widgets', { path: "${sys.webRoot}/resources/shouye_files/terminator2.2.min.js", type: "js", requires: ['fx'] });
        Qfast(false, 'widgets', function () {
            K.tabs({
                id: 'fsD2',   //焦点图包裹id
                conId: "D1pic2",  //** 大图域包裹id
                tabId:"D2fBt",
                tabTn:"a",
                conCn: '.fcon', //** 大图域配置class
                auto: 1,   //自动播放 1或0
                effect: 'fade',   //效果配置
                eType: 'click', //** 鼠标事件
                pageBt:true,//是否有按钮切换页码
                bns: ['.prev', '.next'],//** 前后按钮配置class
                interval: 5000  //** 停顿时间
            })
        })
    </script>
    <script type="text/javascript">
        Qfast.add('widgets', { path: "${sys.webRoot}/resources/shouye_files/terminator2.2.min.js", type: "js", requires: ['fx'] });
        Qfast(false, 'widgets', function () {
            K.tabs({
                id: 'fsD3',   //焦点图包裹id
                conId: "D1pic3",  //** 大图域包裹id
                tabId:"D3fBt",
                tabTn:"a",
                conCn: '.fcon', //** 大图域配置class
                auto: 1,   //自动播放 1或0
                effect: 'fade',   //效果配置
                eType: 'click', //** 鼠标事件
                pageBt:true,//是否有按钮切换页码
                bns: ['.prev', '.next'],//** 前后按钮配置class
                interval: 5000  //** 停顿时间
            })
        })
    </script>
</head>

