Ext.define('manage.view.charger.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.chargerqueryform',
	items : [{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '姓名'
	},{
		xtype : 'mycombo',
		name : 'week',
		store:[["","全部"],["1","周一"],["2","周二"],["3","周三"],["4","周四"],["5","周五"],["6","周六"],["7","周日"]],
		queryMode : 'local',
		editable : true,
		labelAlign : 'right',
		fieldLabel : '星期',
	}, {
		xtype : 'mycombo',
		store : Ext.create('manage.store.schools.Schools',{
			autoLoad : {limit : 1000,start : 0}
		}),
		queryMode : 'local',
		fieldLabel : '学校',
		displayfield:'name',
		width : 300,
		labelAlign : 'right',
		name : 's_id',
		editable : true,
	}]
});