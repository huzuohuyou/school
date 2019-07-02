Ext.define('manage.view.charger.ChargerUpdateForm', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.chargerupdateinfo',
	layout : {
		columns : 1,
		type : 'table'
	},
	initComponent : function() {

		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'displayfield',
				fieldLabel : '员工编号',
				name : 'number'

			}, {
				xtype : 'displayfield',
				fieldLabel : '姓名',
				name : 'name'
			}, {
				xtype: 'radiogroup',
		        fieldLabel: '性别',
		        items: [
		            { boxLabel: '男', name: 'sex', inputValue: '0' },
		            { boxLabel: '女', name: 'sex', inputValue: '1' }
		        ],

			}, {
				xtype : 'textfield',
				fieldLabel : '联系电话',
				name : 'telephone',
				vtype: 'checkphone',
			    vtypeText: "该手机号已经存在！",
				regex : /^1(3|4|5|6|7|8)[0-9]{9}$/ ,
				regexText : '输入正确的电话号码',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
				afterLabelTextTpl: required,
			    blankText: '此项为必填项',
			    allowBlank: false
			}, {
				xtype : 'textfield',
				vtype :'email',
				fieldLabel : '邮箱',
				name : 'email',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',

			},
			{
				xtype : 'textfield',
				fieldLabel : '地址',
				name : 'address',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',

			},{
				xtype : 'textfield',
				fieldLabel : '微信号',
				name : 'weixin',
				maxLength : 50,
				maxLengthText : '最多输入50个字符'
			},{
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