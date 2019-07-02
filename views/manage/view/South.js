Ext.define('manage.view.South', {
			extend : 'Ext.Toolbar',
			alias : 'widget.bottombar',
			initComponent : function() {
				Ext.apply(this, {
							id : "bottom",
							// frame:true,
							border : false,
							region : "south",
							style :'background-color:#add2ed;',
							height : 35,
							items : ['->', "技术支持:北京新发智信科技有限责任公司",'->']
						});
				this.callParent(arguments);
			}
		});
