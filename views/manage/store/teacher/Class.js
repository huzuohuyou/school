Ext.define('manage.store.teacher.Class', {
	extend : 'Ext.data.TreeStore',
	requires: 'manage.model.ComboBoxTree', 
	model : 'manage.model.ComboBoxTree',
	autoLoad : true,
	sorters : [ {
		property : 'order_flag',
		direction : 'ASC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=s00003',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});