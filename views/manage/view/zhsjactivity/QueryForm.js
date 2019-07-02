Ext.define('manage.view.zhsjactivity.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.zhsjqueryform',
	items : [  {
		xtype : 'mycombo',
		store : Ext.create('manage.store.zhsjactivity.ZhsjType'),
		queryMode : 'local',
		width : 400,
		fieldLabel : '活动类型',
		name : 'zhsjtype'
		
	},{
		xtype : 'textfield',
		labelAlign : 'right',
		name : 'title',
		fieldLabel : '活动标题'
	}]
});