Ext.define('manage.view.agency.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.agencyform',
	requires : [ 'manage.view.ux.ComboBox','manage.view.ux.UEditor' ],
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
				fieldLabel : '机构名称',
				width : 500,
				labelAlign : 'right',
				name : 'name',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
			{
				xtype : 'textfield',
				fieldLabel : '联系电话',
				labelAlign : 'right',
				name : 'phone',
				width : 500,
				regex : /^1(3|4|5|6|7|8|9)[0-9]{9}$/ ,
				regexText : '输入正确的电话号码',
				maxLength : 11,
				maxLengthText : '最多输入11个字符',
//		        afterLabelTextTpl: required,
//		        blankText: '此项为必填项',
//		        allowBlank: false
			}, 
			{
				xtype : 'textfield',
				fieldLabel : '通信地址',
				width : 500,
				labelAlign : 'right',
				name : 'address',
				maxLength : 50,
				maxLengthText : '最多输入50个字符'
			},
			{
				xtype : 'textfield',
				fieldLabel : '邮箱',
				labelAlign : 'right',
				name : 'email',
				vtype :'email',
				width : 500,
				maxLengthText : '最多输入50个字符',
//		        afterLabelTextTpl: required,
//		        blankText: '此项为必填项',
//		        allowBlank: false
			}, 
			{
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