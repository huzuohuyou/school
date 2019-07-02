Ext.define('manage.view.article.ViewForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.articleviewform',
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout: {
        columns: 1,
        type: 'table'
    },
	border : false,
	items : [ {
		xtype : 'displayfield',
		name : 'c_name',
		fieldLabel : '所属栏目'
	},{
		xtype : 'displayfield',
		name : 'title',
		fieldLabel : '页面标题'
	},{
		xtype : 'displayfield',
		fieldLabel : '页面内容'
	},{
		xtype : 'panel',
		autoScroll : true,
		header : false,
		border : false,
		height :400,
		width : 900,
		name : 'content'
	}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});