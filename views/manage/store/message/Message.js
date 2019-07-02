Ext.define('manage.store.message.Message', {
	extend : 'Ext.data.Store',
	model : 'manage.model.message.Message',
	sorters : [ {
		property : 'send_time',
		direction : 'DESC'
	}],
	pageSize : 20,
	remoteSort : true
});