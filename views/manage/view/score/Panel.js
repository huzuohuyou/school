Ext.define('manage.view.score.Panel', {
	requires : ['manage.view.score.Grid','manage.view.score.QueryForm'],
	extend : 'Ext.panel.Panel',
	title : '成绩信息',
	region : 'center',
	layout : 'border',
	items : [{xtype:'scorequeryform'},{xtype:'scoregrid',id:'jwscoregrid'}]
});