Ext.define('manage.view.teacher.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.teacherqueryform',
	items : [ {
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '教师姓名'
	},
	{
		xtype : 'combobox',
		fieldLabel : '上课时间',
		labelAlign : 'right',
		displayfield:'name',
		name : 'worktime',
		editable:false,
		store:[["","全部"],["1","一"],["2","二"],["3","三"],["4","四"],["5","五"],["6","六"],["7","日"]]
	},{
		xtype : 'combobox',
		fieldLabel : '授课状态',
		labelAlign : 'right',
		displayfield:'name',
		name : 'classcount',
		editable:false,
		store:[["","全部"],["0","未录用"],["1","已录用"]]
	},{
		xtype : 'mycombo',
		name :'agency',
		store : Ext.create('manage.store.agency.Agency',{
			autoLoad : {limit : 1000,start : 0}
		}),
		queryMode : 'local',
		editable : true,
		labelAlign : 'right',
		fieldLabel : '所属机构',
	},]
});