Ext.define('manage.view.categories.EditForm', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.categorieseditform',
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [ {
				xtype : 'textfield',
				fieldLabel : '菜单名称',
				name : 'name',
				afterLabelTextTpl : required,
				emptyText : '必须填写菜单名称',
				blankText : '此项为必填项',
				allowBlank : false
			},  {
				xtype : 'textfield',
				fieldLabel : 'URL',
				name : 'url'
			},  {
				xtype : 'numberfield',
				minValue : 1,
				maxValue : 9,
				step : 1,
				fieldLabel : '排序字段',
				name : 'order_flag',
				value : 9,
				afterLabelTextTpl : required,
				emptyText : '必须填写排序字段',
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'hidden',
				name : 'level',
				value : '1'
			} , {
				xtype : 'hidden',
				name : 'p_id',
				value : 'root'
			} , {
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