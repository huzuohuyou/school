Ext.define('manage.store.schools.AddSchool', {
	extend : 'manage.store.Store',
	model : 'manage.model.schools.Schools',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f130201&u_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});