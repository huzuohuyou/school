Ext.define('manage.view.teacherevaluate.EvaluateForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.evaluateform',
	requires : [ 'manage.view.ux.UEditor', 'manage.view.ux.ComboBox',
			'manage.model.categories.Categories', 'manage.view.ux.PicField' ],
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout : {
		columns : 1,
		type : 'table'
	},
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [{
				xtype : 'textfield',
				name : 'title',
				fieldLabel : '标题',
				width : 900,
				afterLabelTextTpl : required,
				emptyText : '必须填写页面标题',
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'picfield',
				fieldLabel : '图片',
				name : 'pic',
				width : 900,
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false,
				readOnly : true
			}, {
				xtype : 'ueditor',
				fieldLabel : '评价内容',
				width : 900,
				height : 400,
				name : 'content',
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'hidden',
				name : 'id'
			},
			 {
				xtype : 'hidden',
				name : 'teacher_id'
			},
			 {
				xtype : 'hidden',
				name : 'ssd_id'
			},
			 {
				xtype : 'hidden',
				name : 'c_id'
			}
			]
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