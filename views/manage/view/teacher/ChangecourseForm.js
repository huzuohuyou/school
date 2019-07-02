Ext.define('manage.view.teacher.ChangecourseForm', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree' ],
	alias : 'widget.changecourseform',
	layout : {
		columns : 1,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ 
			{
				xtype : 'mycombo',
				store : Ext.create('manage.store.courses.Courses'),
				queryMode : 'local',
				fieldLabel : '所教科目',
				labelAlign : 'right',
				name : 'course',
				editable : false,
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			},
		    {
				xtype : 'hidden',
				name : 'id'
			},
		    {
				xtype : 'hidden',
				name : 't_id'
			},
			{
				xtype : 'hidden',
				name : 'number'
			},
			{
				xtype : 'hidden',
				name : 'worktime'
			},
			{
				xtype : 'hidden',
				name : 'name'
			},
			{
				xtype : 'hidden',
				name : 'address'
			}
			]
		});
		me.callParent(arguments);
	},
	buttons : [ {
		text : '确定',
		action : 'changecoursesubmit'
	}, {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});