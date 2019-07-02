Ext.define('manage.view.picture.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.picturequeryform',
	items : [ {
		xtype : 'textfield',
		labelAlign : 'right',
		fieldLabel : '所属栏目',
		name : 'name'
	},{
		xtype : 'textfield',
		labelAlign : 'right',
		name : 'title',
		fieldLabel : '标题名称'
	}]
});