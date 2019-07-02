Ext.define('manage.view.teacher.TeacherUpdateForm', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.teacherupdateinfo',
	layout : {
		columns : 2,
		type : 'table'
	},
	initComponent : function() {

		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'displayfield',
				fieldLabel : '教师编号',
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
				name : 'phone',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
			}, {
				xtype : 'textfield',
				vtype :'email',
				fieldLabel : '邮箱',
				name : 'emailbox',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',

			},
			{
				xtype : 'textfield',
				fieldLabel : '地址',
				name : 'address',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',

			},
			{
		        xtype: 'displayfield',
		        fieldLabel: '身份证号',
		        name: 'IDcard'
		    }, {
				xtype : 'textfield',
				fieldLabel : '开户行',
				name : 'banksite',
				maxLength : 50,
				maxLengthText : '最多输入50个字符'
			}, {
				xtype : 'numberfield',
				fieldLabel : '银行卡号',
				name : 'bankcard',
				maxLength : 19,
				maxLengthText : '最多输入19个字符',

			}, {
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