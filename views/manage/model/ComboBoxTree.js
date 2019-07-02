Ext.define('manage.model.ComboBoxTree',{
	extend:'Ext.data.Model',
	fields : [ 'id', 'text', 'iconCls', 'leaf','cls','expanded','children','path']
});