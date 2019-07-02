Ext.define('manage.view.wx_research_in.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.wx_research_inqueryform',
	items : [{
		xtype : 'textfield',
		labelAlign : 'right',
		name : 'title',
		fieldLabel : '标题名称'
	}]
});