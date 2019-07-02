Ext.define('manage.view.pre_courses.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.pre_coursesqueryform',
	items : [ {
		xtype : 'mycombo',
		store : Ext.create('manage.store.pre_courses.QuerySchool',{
			autoLoad : {limit : 1000,start : 0}
		}),
		queryMode : 'local',
		fieldLabel : '学校名称',
		displayfield:'name',
		width : 400,
		labelAlign : 'right',
		name : 's_id',
		editable : true,
	},{
		xtype : 'mycombo',
		fieldLabel : '年份',
		labelAlign : 'right',
		name : 'year',
		width : 200,
		store:[["0","全部"],["2018","2018"],["2019","2019"],["2020","2020"],["2021","2021"],["2022","2022"],["2023","2023"],["2024","2024"],["2025","2025"],["2026","2026"],["20273","2027"],["2028","2028"]],
		editable : false,
	},{
		xtype : 'mycombo',
		fieldLabel : '学期',
		labelAlign : 'right',
		name : 'term',
		store:[["1","上半学年"],["2","下半学年"]],
		editable : false,
	}]
});