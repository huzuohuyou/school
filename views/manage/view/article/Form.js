Ext.define('manage.view.article.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.articleform',
	requires : [ 'manage.view.ux.UEditor','manage.view.ux.ComboBox','manage.model.categories.Categories' ],
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout: {
        columns: 1,
        type: 'table'
    },
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [ {
				xtype : 'mycombo',
				store : Ext.create('manage.store.article.Categories'),
				queryMode : 'local',
				width : 900,
				fieldLabel : '所属栏目',
				name : 'c_id',
				editable : false,
				afterLabelTextTpl : required,
				emptyText : '必须选择所属栏目',
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'textfield',
				name : 'title',
				fieldLabel : '页面标题',
				width : 900,
				afterLabelTextTpl : required,
				emptyText : '必须填写页面标题',
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'ueditor',
				fieldLabel : '页面内容',
				width : 900,
				height : 400,
				name : 'content',
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'hidden',
				name : 'id'
			} ]
		});
		me.callParent(arguments);
	},
	buttons : [ {
		text : '确定',
		action : 'submit'
	}, {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});