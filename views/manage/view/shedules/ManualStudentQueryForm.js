Ext.define('manage.view.shedules.ManualStudentQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.manualstudentqueryform',
	items : [{
		xtype : 'mycombo',
		name : 'grad',
		store:[["","全部"],["1","一年级"],["2","二年级"],["3","三年级"],["4","四年级"],["5","五年级"],["6","六年级"],["7","七年级"],["8","高一高二"]],
		queryMode : 'local',
		editable : true,
		labelAlign : 'right',
		fieldLabel : '年级',
	},{
		xtype : 'numberfield',
		name : 'class',
		labelAlign : 'right',
		fieldLabel : '班级'
	}]
});