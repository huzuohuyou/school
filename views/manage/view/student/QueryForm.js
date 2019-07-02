Ext.define('manage.view.student.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.studentqueryform',
	items : [{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '姓名'
	},{
		xtype : 'mycombo',
		store : Ext.create('manage.store.schools.Schools',{
			autoLoad : {limit : 100,start : 0}
		}),
		queryMode : 'local',
		fieldLabel : '所在学校',
		displayfield:'name',
		labelAlign : 'right',
		name : 'school_id', 
		width : 350
	},{
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