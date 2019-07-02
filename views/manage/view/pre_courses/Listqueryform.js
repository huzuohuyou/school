Ext.define('manage.view.pre_courses.Listqueryform', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.listqueryform',
	items : [ {
		xtype : 'combobox',
		fieldLabel : '年级',
		labelAlign : 'right',
		displayfield:'name',
		name : 'stage',
		editable:false,
		store:[["1","一"],["2","二"],["3","三"],["4","四"],["5","五"],["6","六"],["7","七"],["8","八"],["9","高一高二"]]
	},{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '课程名称'
	}
	]
});