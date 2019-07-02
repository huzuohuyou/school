Ext.define('manage.view.yxactivity.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.yxqueryform',
	items : [ {
		xtype : 'mycombo',
		store : Ext.create('manage.store.yxactivity.YxType'),
		queryMode : 'local',
		width : 400,
		fieldLabel : '活动类型',
		name : 'yxtype'
		
	},{
		xtype : 'textfield',
		labelAlign : 'right',
		name : 'title',
		fieldLabel : '活动标题'
	}]
});