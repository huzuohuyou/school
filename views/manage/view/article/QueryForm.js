Ext.define('manage.view.article.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.articlequeryform',
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