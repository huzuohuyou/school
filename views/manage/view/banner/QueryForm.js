Ext.define('manage.view.banner.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.bannerqueryform',
	items : [ {
		xtype : 'textfield',
		labelAlign : 'right',
		fieldLabel : '标题',
		name : 'title'
	}]
});