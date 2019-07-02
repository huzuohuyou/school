Ext.define('manage.view.salernewactivity.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.salernewactivityform',
	requires : [ 'manage.view.ux.ComboBox' ],
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
			items : [ {
				xtype : 'textfield',
				fieldLabel : '活动名称',
				labelAlign : 'right',
				name : 'name',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, {
				xtype : 'numberfield',
				fieldLabel : '活动价格',
				labelAlign : 'right',
				name : 'activityPrice',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},{
				xtype : 'textfield',
				fieldLabel : '活动类型',
				labelAlign : 'right',
				name : 'activityType',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
			{
				xtype : 'numberfield',
				fieldLabel : '活动人数',
				labelAlign : 'right',
				name : 'peopleNumber',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
			{
				xtype : 'textfield',
				fieldLabel : '适合年级',
				labelAlign : 'right',
				name : 'stage',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},{
				xtype : 'textarea',
				fieldLabel : '活动介绍',
				labelAlign : 'right',
				name : 'introduction',
				maxLength : 200,
				height : 100,
				maxLengthText : '最多输入200个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
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