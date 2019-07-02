Ext.define('manage.store.headteacher.Score', {
	extend : 'manage.store.Store',
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getHeadTeacherScoreList&funcId=f50301',//queryByCondition
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	remoteSort : false
});