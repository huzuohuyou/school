Ext.define('manage.view.role.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.roleform',
	requires : [ 'manage.view.ux.ComboBoxTree' ],
	layout : {
		columns : 1,
		type : 'table'
	},
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [ {
				xtype : 'textfield',
				fieldLabel : '角色名称',
				name : 'name',
				afterLabelTextTpl : required,
				emptyText : '必须填写名称',
				width : 300,
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'comboboxtree',
				store : Ext.create('manage.store.authority.SystemAuthority'),
				editable : false,
				multiCascade : true,
				multiSelect : true,
				fieldLabel : '功能权限',
				name : 'authority',
				afterLabelTextTpl : required,
				emptyText : '必须填写功能权限',
				width : 300,
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'textfield',
				hidden : true,
				fieldLabel : 'id',
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