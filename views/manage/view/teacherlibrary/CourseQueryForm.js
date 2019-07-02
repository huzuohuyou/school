Ext.define('manage.view.teacherlibrary.CourseQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.teacherlibrarycoursesqueryform',
	items : [{
		xtype : 'mycombo',
		name : 'type',
		store:[["","全部"],["1","艺术类"],["2","科技类"],["3","体育类"],["4","语言类"],["5","传统类"],["6","安全类"]],
		queryMode : 'local',
		editable : true,
		labelAlign : 'right',
		fieldLabel : '课程类型',
	},{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '课程名称'
	},{
		xtype : 'combobox',
		fieldLabel : '年级',
		labelAlign : 'right',
		displayfield:'name',
		name : 'stage',
		editable:false,
		store:[["","全部"],["1","一"],["2","二"],["3","三"],["4","四"],["5","五"],["6","六"],["7","七"],["8","八"],["9","高一高二"]]
	}, {
		xtype : 'hidden',
		name : 'id' 
	}]
});