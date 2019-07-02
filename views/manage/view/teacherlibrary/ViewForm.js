Ext.define('manage.view.teacher.ViewForm', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.teacherlibraryviewform',
	layout : {
		columns : 1,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'displayfield',
				fieldLabel : '教师编号',
				width : 300,
				name : 'number'
			}, {
				xtype : 'displayfield',
				fieldLabel : '姓名',
				width : 300,
				name : 'name'
			}, {
				xtype: 'displayfield',
		        fieldLabel: '性别',
				width : 300,
		        name : 'sex'
			},{
				xtype : 'displayfield',
				fieldLabel : '身份证号',
				width : 300,
				name : 'IDcard'
			}, {
				xtype : 'displayfield',
				fieldLabel : '银行卡号',
				name : 'bankcard'
			}, {
				xtype : 'displayfield',
				fieldLabel : '微信号',
				width : 300,
				name : 'weixin'
			}, {
				xtype: 'displayfield',
		        fieldLabel: '所属机构',
		        name : 'agency'
			}, {
				xtype : 'displayfield',
				fieldLabel : '联系电话',
				name : 'phone'
			},
			{
				xtype : 'displayfield',
				fieldLabel : '邮箱',
				name : 'emailbox'
			},
			{
				xtype : 'displayfield',
				fieldLabel : '地址',
				name : 'address'
			},
			{
				xtype : 'displayfield',
				fieldLabel : '备注',
				name : 'remark'
			}
			]
		});
		me.callParent(arguments);
	},
	buttons : [  {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});