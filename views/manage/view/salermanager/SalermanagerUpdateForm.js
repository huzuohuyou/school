Ext.define('manage.view.salermanager.SalermanagerUpdateForm', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.salermanagerupdateinfo',
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
			},{
				xtype : 'textfield',
				fieldLabel : '联系电话',
				name : 'telephone',
				regex : /^1(3|4|5|6|7|8|9)[0-9]{9}$/ ,
				regexText : '输入正确的电话号码',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
				afterLabelTextTpl: required,
			    blankText: '此项为必填项',
			    allowBlank: false
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