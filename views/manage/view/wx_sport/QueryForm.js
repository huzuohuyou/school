Ext.define('manage.view.wx_sport.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.wx_sportqueryform',
	items : [{
		xtype : 'textfield',
		labelAlign : 'right',
		name : 'title',
		fieldLabel : '标题名称'
	}]
});