Ext.define('manage.view.wx_benefit.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.wx_benefitqueryform',
	items : [{
		xtype : 'textfield',
		labelAlign : 'right',
		name : 'title',
		fieldLabel : '标题名称'
	}]
});