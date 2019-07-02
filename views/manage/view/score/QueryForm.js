Ext.define('manage.view.score.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.scorequeryform',
	items : [ {
		xtype : 'textfield',
		name : 's_number',
		labelAlign : 'right',
		fieldLabel : '学号'
	},{
		xtype : 'textfield',
		name : 's_name',
		labelAlign : 'right',
		fieldLabel : '姓名'
	},{
		xtype : 'hidden',
		name : 'ed_id'
	} ]
});