Ext.define('manage.view.coursedispatch.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.coursedispatchform',
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
				xtype : 'mycombo',
				store : Ext.create('manage.store.teachersummary.Categories'),
				queryMode : 'local',
				width : 500,
				fieldLabel : '班级名称',
				labelAlign : 'right',
				name : 'ssd_id',
				editable : false,
				afterLabelTextTpl : required,
				emptyText : '必须选择所教班级',
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'mycombo',
				name : 'type',
				width : 500,
				store:[["0","自己找人代课"],["1","公司找人代课"]],
				queryMode : 'local',
				fieldLabel : '串课类型',
				labelAlign : 'right',
				editable : false,
				emptyText : '必须选择串课类型',
				blankText : '此项为必填项',
				allowBlank : false,
				afterLabelTextTpl : required,
			},{
				xtype : 'textfield',
				fieldLabel : '代课教师',
				width : 500,
				labelAlign : 'right',
				name : 'temp_teacher_name',
				emptyText : '如果请公司找人代课，则此处不填',
				maxLength : 50,
				maxLengthText : '最多输入50个字符'
			},
			{
				xtype : 'datefield',
				format : 'Y-m-d',
				width : 500,
				fieldLabel : '串课日期',
				emptyText : '必须选择串课日期',
				labelAlign : 'right',
				name : 'time',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},{
				xtype : 'textarea',
				fieldLabel : '详细说明',
				width : 500,
				labelAlign : 'right',
				name : 'reason',
				maxLength : 200,
				height : 100,
				maxLengthText : '最多输入200个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
		        emptyText : '必须填写详细说明，请说明串课原因，替课人的姓名、联系方式等',
			}, {
				xtype : 'hidden',
				name : 'id'
			} ]
		});
		me.callParent(arguments);
	},
	buttons : [ {
		text : '提交',
		action : 'submit'
	}, {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});