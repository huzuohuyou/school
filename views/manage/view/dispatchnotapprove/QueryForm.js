Ext.define('manage.view.dispatchnotapprove.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.dispatchnotapprovequeryform',
	items : [{
		xtype : 'mycombo',
		fieldLabel : '年份',
		labelAlign : 'right',
		name : 'year',
		store:[["2018","2018"],["2019","2019"],["2020","2020"],["2021","2021"],["2022","2022"],["2023","2023"],["2024","2024"],["2025","2025"],["2026","2026"],["20273","2027"],["2028","2028"]],
		editable : false,
	},{
		xtype : 'mycombo',
		fieldLabel : '学期',
		labelAlign : 'right',
		name : 'term',
		store:[["1","上半学年"],["2","下半学年"]],
		editable : false,
	},{
		xtype : 'mycombo',
		store : Ext.create('manage.store.schools.Schools',{
			autoLoad : {limit : 1000,start : 0}
		}),
		queryMode : 'local',
		fieldLabel : '学校名称',
		width:300,
		displayfield:'name',
		labelAlign : 'right',
		name : 's_id',
		editable : true,
	},{
		xtype : 'mycombo',
		fieldLabel : '星期',
		labelAlign : 'right',
		name : 'week',
		store:[["","全部"],["1","周一"],["2","周二"],["3","周三"],["4","周四"],["5","周五"],["6","周六"],["7","周日"]],
		editable : false,
	},{
		xtype : 'textfield',
		name : 't_name',
		labelAlign : 'right',
		fieldLabel : '教师姓名'
	}]
});