Ext.define('manage.store.announcement.Announcement', {
	extend : 'Ext.data.Store',
	model : 'manage.model.announcement.Announcement',
	pageSize : 20,
	remoteSort : true
});