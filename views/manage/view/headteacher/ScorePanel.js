Ext.define('manage.view.headteacher.ScorePanel', {
	requires : ['manage.view.headteacher.ScoreGrid','manage.view.headteacher.ScoreQueryForm'],
	extend : 'Ext.panel.Panel',
	title : '成绩信息',
	region : 'center',
	layout : 'border',
	items : [{xtype:'headteacherscorequeryform'},{xtype:'headteacherscoregrid',id:'headteacherscoregrid'}]
});