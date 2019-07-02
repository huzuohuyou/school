Ext.define('manage.store.authority.FolderAuthority', {
	extend : 'Ext.data.TreeStore',
	requires: 'manage.model.ComboBoxTree', 
	model : 'manage.model.ComboBoxTree',
	proxy : {
		type : 'ajax',
		url : 'manage.do?action=getFolderTree&project_id=0'
	}
});