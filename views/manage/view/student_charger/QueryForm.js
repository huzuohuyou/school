Ext.define('manage.view.student_charger.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.student_chargerqueryform',
	items : [{
		xtype : 'textfield',
		name : 'grad',
		labelAlign : 'right',
		fieldLabel : '年级'
	},{
		xtype : 'textfield',
		name : 'class',
		labelAlign : 'right',
		fieldLabel : '班级'
	},{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '姓名'
	}]
});