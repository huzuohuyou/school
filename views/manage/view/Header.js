Ext.define('manage.view.Header', {
	extend : 'Ext.Toolbar',
	alias : 'widget.headerpanel',
	requires : [ 'manage.view.ux.ComboBox' ],
	initComponent : function() {
		Ext.apply(this, {
			id : "header",
			// frame:true,
			border : false,
			region : 'north',
			height : 35,
			items : [ '<div style="background: url('+webRoot+'/resources/images/nav.gif) no-repeat scroll 0 50% #fff;font-size: 16px;height: 32px;line-height: 32px;margin: 0 15px;padding-left: 18px;color:blue"><a href="javascript:goIndex();">首页</a>'+
			          '&gt;&gt; 阳光丽和课后一小时管理平台 </div>','->', " 当前用户：" + session.name, '-',
					Ext.Date.format(new Date(), 'Y年m月d日'),'-', {
						xtype : 'button',
						text : '退出',
						action : 'logout',
						iconCls : 'close'
					}]
		});
		this.callParent(arguments);
	}
});
