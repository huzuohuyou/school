Ext.define('manage.view.schools.Panel', {
	requires : ['manage.view.schools.Grid','manage.view.schools.QueryForm'],
	extend : 'Ext.panel.Panel',
	title : '学校列表',
	region : 'center',
	layout : 'border',
	items : [{xtype:'schoolsqueryform'},{xtype:'schoolsgrid',id:'schoolsgrid'}]
});