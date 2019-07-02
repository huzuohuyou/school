Ext.define('manage.view.headteacher.ScoreQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.headteacherscorequeryform',
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
		name : 'e_id'
	}]
});