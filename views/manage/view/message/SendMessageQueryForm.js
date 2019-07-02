Ext.define('manage.view.message.SendMessageQueryForm',{
	extend : 'Ext.form.Panel',
	alias : 'widget.sendmessagequeryform',
	layout : {
		columns : 4,
		type : 'table'
	},
	bodyPadding : 10,
	header : false,
	region : 'north',
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [
					{
						xtype : 'textfield',
						name : 'title',
						labelAlign : 'right',
						fieldLabel : '标题'
					},
					{
						xtype : 'textfield',
						name : 'receiver_name',
						labelAlign : 'right',
						fieldLabel : '接收人'
					},{
						xtype : 'datefield',
						labelAlign : 'right',
						fieldLabel : '发送日期',
						format :'Y-m-d',
						name : 'from'
					},{
						xtype : 'datefield',
						fieldLabel : '到',
						labelAlign : 'right',
						format :'Y-m-d',
						name : 'to'
					}
					 ]
		});
		me.callParent(arguments);
	}

});