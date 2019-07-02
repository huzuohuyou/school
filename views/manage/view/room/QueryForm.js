Ext.define('manage.view.room.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.roomqueryform',
	items : [ {
		xtype : 'mycombo',
		store : Ext.create('manage.store.ComboBox',{
							data : roomTypeData,
							autoDestroy : false
						}),
		queryMode : 'local',
		fieldLabel : '房间类型',
		name : 'type',
		labelAlign : 'right'
	},{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '房间名称'
	} ]
});