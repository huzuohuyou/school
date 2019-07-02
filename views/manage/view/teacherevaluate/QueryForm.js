Ext.define('manage.view.teacherevaluate.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.teacherevaluatequeryform',
	requires : [ 'manage.view.ux.ComboBox'],
	items : [ {
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '教师姓名'
	},
	{
		xtype : 'combobox',
		name : 'week',
		store:[["","全部"],["1","周一"],["2","周二"],["3","周三"],["4","周四"],["5","周五"],["6","周六"],["7","周日"]],
		labelAlign : 'right',
		fieldLabel : '星期',
	}
	]
});