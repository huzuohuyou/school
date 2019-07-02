Ext.define('manage.model.Menu', {
	extend : 'Ext.data.Model',
	fields : [ 'id', 'text', 'iconCls', 'leaf', 'controller','config'],
	root : {
		expanded : true
	},
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getMenu'
	}
});
