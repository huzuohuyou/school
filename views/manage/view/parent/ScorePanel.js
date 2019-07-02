Ext.define('manage.view.parent.ScorePanel', {
	requires : ['manage.view.parent.ScoreGrid','manage.view.parent.ScoreQueryForm'],
	extend : 'Ext.panel.Panel',
	title : '成绩信息',
	region : 'center',
	layout : 'border',
	items : [{xtype:'parentscorequeryform'},{xtype:'parentscoregrid',id:'parentscoregrid'}]
});