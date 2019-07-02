Ext.define('manage.store.student.Class', {
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
		url : 'system.do?action=queryByCondition&funcId=s00004',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});