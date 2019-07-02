Ext.define('manage.store.authority.SystemAuthority', {
	extend : 'Ext.data.TreeStore',
	requires: 'manage.model.ComboBoxTree', 
	model : 'manage.model.ComboBoxTree',
	proxy : {
		type : 'ajax',
		url : 'systemauthority.json'
	}
});