Ext.define('manage.view.class.GradeForm', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.gradeform',
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				name : 'name',
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'numberfield',
				fieldLabel : '排序',
				name : 'order_flag',
				minValue : 1,
				step : 1,
				allowDecimal : false,
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'hidden',
				name : 'id'
			}, {
				xtype : 'hidden',
				name : 'p_id'
			}, {
				xtype : 'hidden',
				name : 'level'
			}, {
				xtype : 'hidden',
				name : 'leaf'
			}, {
				xtype : 'hidden',
				name : 'path'
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