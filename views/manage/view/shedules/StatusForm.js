Ext.define('manage.view.shedules.StatusForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.statusform',
	requires : [ 'manage.view.ux.ComboBox' ],
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout : {
		columns : 2,
		type : 'table'
	},
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [ {
				xtype : 'mycombo',
				labelAlign : 'left',
				store : Ext.create('manage.store.ComboBox',{
									data : classStatus
								}),
				queryMode : 'local',
				fieldLabel : '状态',
				editable : false,
				colspan : 2,
				name : 'status',
				editable : false,
				afterLabelTextTpl : required,
				emptyText : '请选择',
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'textfield',
				fieldLabel : '代课教师',
				labelAlign : 'left',
				readOnly:true,
				name : 'temp_teacher_name',
			},{
				xtype : 'button',
				text : '选择教师',
				action : 'selectTeacher',
			
			},{
				xtype : 'hidden',
				name : 'temp_teacher_id',
			},
			{
				xtype : 'hidden',
				name : 'week',
			},
			{
				xtype : 'hidden',
				name : 'c_id',
			},{
				xtype : 'hidden',
				name : 'sd_id',
			},
			{
				xtype : 'hidden',
				name : 'temp',
				value:'1'
			},{
				xtype : 'hidden',
				name : 'id'
			}]
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