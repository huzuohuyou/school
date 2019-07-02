Ext.define('manage.view.classmanage.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.classmanagequeryform',
	items : [ {
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '教师姓名'
	},{
		xtype : 'textfield',
		name : 'course_name',
		labelAlign : 'right',
		fieldLabel : '课程名称'
	},
	{
		xtype : 'combobox',
		name : 'week',
		store:[["","全部"],["1","周一"],["2","周二"],["3","周三"],["4","周四"],["5","周五"],["6","周六"],["7","周日"]],
		labelAlign : 'right',
		fieldLabel : '时间',
	},{
		xtype : 'textfield',
		name : 'address',
		labelAlign : 'right',
		fieldLabel : '上课地点'
	},
	{
		xtype : 'combobox',
		name : 'states',
		store:[["","全部"],["0","未选"],["1","已选"]],
		labelAlign : 'right',
		fieldLabel : '状态',
	}
	]
});