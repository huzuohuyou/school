Ext.define('manage.view.teacherlibrary.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.teacherlibraryqueryform',
	items : [ {
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '姓名'
	},
	/*
	{
		xtype : 'mycombo',
		name : 'course',
		store: Ext.create('manage.store.courses.Courses',{
			autoLoad : {limit : 1000,start : 0}
		}),
		queryMode : 'local',
		editable : true,
		labelAlign : 'right',
		fieldLabel : '课程',
	},
	*/{
		xtype : 'mycombo',
		name : 'status',
		store:[["","全部"],["1","在职"],["0","离职"]],
		queryMode : 'local',
		editable : true,
		labelAlign : 'right',
		fieldLabel : '状态',
	}]
});