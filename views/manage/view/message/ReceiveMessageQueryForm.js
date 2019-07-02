Ext.define('manage.view.message.ReceiveMessageQueryForm',{
	extend : 'Ext.form.Panel',
	alias : 'widget.receivemessagequeryform',
	layout : {
		columns : 3,
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
					},
					{
						xtype : 'mycombo',
						labelAlign : 'right',
						store : Ext.create('manage.store.ComboBox',{
											data : readData
										}),
						queryMode : 'local',
						fieldLabel : '读取状态',
						//value : '未读',
						name : 'read_status'
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