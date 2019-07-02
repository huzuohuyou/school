Ext.define('manage.view.qtactivity.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.qtqueryform',
	items : [  {
		xtype : 'mycombo',
		store : Ext.create('manage.store.qtactivity.QtType'),
		queryMode : 'local',
		width : 400,
		fieldLabel : '活动类型',
		name : 'qttype'
		
	},{
		xtype : 'textfield',
		labelAlign : 'right',
		name : 'title',
		fieldLabel : '活动标题'
	}]
});