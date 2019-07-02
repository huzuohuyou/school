Ext.define('manage.view.courseteacher.ScorePanel', {
	requires : ['manage.view.courseteacher.ScoreGrid','manage.view.courseteacher.ScoreQueryForm'],
	extend : 'Ext.panel.Panel',
	title : '成绩信息',
	region : 'center',
	layout : 'border',
	items : [{xtype:'teacherscorequeryform'},{xtype:'teacherscoregrid',id:'teacherscoregrid'}]
});