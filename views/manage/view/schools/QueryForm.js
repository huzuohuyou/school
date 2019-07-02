Ext.define('manage.view.schools.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.schoolsqueryform',
	items : [ 
    {
	  xtype : 'textfield',
	  name : 'name',
	  labelAlign : 'right',
	  fieldLabel : '学校名称'
    } ,
	{
		xtype:'hidden',
		name :'area'
	},
	{
		xtype : 'mycombo',
		name : 'type',
		store:[["","全部"],["1","小学"],["2","初中"],["3","小学/初中"],["4","高中"],["5","小/初/高"]],
		queryMode : 'local',
		fieldLabel : '学校类型',
		labelAlign : 'right',
		editable : false
	}
	]
 });