Ext.define('manage.view.pupil.ScorePanel', {
	requires : ['manage.view.pupil.ScoreGrid','manage.view.pupil.ScoreQueryForm'],
	extend : 'Ext.panel.Panel',
	title : '成绩信息',
	region : 'center',
	layout : 'border',
	items : [{xtype:'pupilscorequeryform'},{xtype:'pupilscoregrid',id:'pupilscoregrid'}]
});