Ext.define('manage.view.wx_research_out.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.wx_research_outqueryform',
	items : [{
		xtype : 'textfield',
		labelAlign : 'right',
		name : 'title',
		fieldLabel : '标题名称'
	}]
});