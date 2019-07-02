Ext.define('manage.store.schoolSituationStatistics.SchoolSituationStatistics', {
	extend : 'manage.store.Store',
	model : 'manage.model.schoolSituationStatistics.SchoolSituationStatistics',
	autoLoad : session.authority.indexOf('b240301')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=querySchoolSituationStatisticsResult&funcId=f240301',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});