Ext.define('manage.view.teacherrate.RateForm', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.rateform',
	requires : [ 'manage.view.ux.UEditor', 'manage.view.ux.ComboBox',
			'manage.model.categories.Categories' ],
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
				xtype : 'mycombo',
				store : Ext.create('manage.store.teacherrate.Rate'),
				queryMode : 'local',
				width : 900,
				fieldLabel : '评级结果',
				name : 'type',
				editable : false,
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			},
			{
				xtype : 'ueditor',
				fieldLabel : '评级原因',
				width : 900,
				height : 400,
				name : 'content',

			}, {
				xtype : 'hidden',
				name : 'id'
			},{
				xtype : 'hidden',
				name : 'name'
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