Ext.define('manage.view.activitymanager.ActivitymanagerUpdateForm', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.activitymanagerupdateinfo',
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