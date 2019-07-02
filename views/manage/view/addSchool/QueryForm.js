Ext.define('manage.view.addSchool.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.addschoolqueryform',
	items : [{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '学校名称'
	} ,
	{
		xtype : 'mycombo',
		name : 'area',
		store : Ext.create('manage.store.schools.Schools_area',{
			autoLoad : {limit : 1000,start : 0}
		}),
		labelAlign : 'right',
		editable:true,
		fieldLabel : '学校所在区',
	},{
		xtype : 'mycombo',
		name : 'type',
		store:[["","全部"],["1","小学"],["2","初中"],["3","小学/初中"],["4","高中"]],
		queryMode : 'local',
		fieldLabel : '学校类型',
		labelAlign : 'right',
		editable : false
	}]
 });