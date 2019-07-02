Ext.define('manage.view.pre_courses.ViewremarkForm', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.viewremarkform',
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ 
			{
				xtype : 'displayfield',
				fieldLabel : '备注',
				name : 'remark'
			}
			]
		});
		me.callParent(arguments);
	},
	buttons : [  {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});