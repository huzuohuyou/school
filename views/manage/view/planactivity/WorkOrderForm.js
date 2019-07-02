Ext.define('manage.view.planactivity.WorkOrderForm', {
    extend: 'manage.view.moudle.Form',
	alias : 'widget.planactivityworkorderform',
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
				xtype : 'textfield',
				fieldLabel : '任务名称',

				labelAlign : 'right',
				name : 'w_name',
				readOnly:true,
				width : 300,
			
			}, {
				xtype : 'textfield',
				fieldLabel : '需求类型',
				labelAlign : 'right',
				name : 'w_needType',
				readOnly:true,
				width : 300,
				
			},{
				xtype : 'textfield',
				fieldLabel : '任务类型',
				labelAlign : 'right',
				name : 'w_taskType',
				readOnly:true,
				width : 300,
			
			},{
				xtype : 'textfield',
				fieldLabel : '我方对接人',
				labelAlign : 'right',
				name : 'w_taskUserName',
				width : 300,
				readOnly:true,
			},{
				xtype : 'textfield',
				fieldLabel : '学校名称',
				labelAlign : 'right',
				name : 'w_schoolName',
				maxLength : 50,
				width : 300,
				readOnly:true,
			},{
				xtype : 'textfield',
				fieldLabel : '学校地址',
				labelAlign : 'right',
				name : 'w_schoolAddress',
				width : 300,
				readOnly:true,
			},
			{
				xtype : 'numberfield',
				fieldLabel : '学生人数',
				labelAlign : 'right',
				name : 'w_studentNumber',
				width : 300,
				readOnly:true,
			},
			{
				xtype : 'textfield',
				fieldLabel : '涵盖年级',
				labelAlign : 'right',
				name : 'w_stage',
				width : 300,
				readOnly:true,
			},
			{
				xtype : 'textfield',
				fieldLabel : '活动日期(天数)',
				labelAlign : 'right',
				name : 'w_activityDays',
				width : 300,
				readOnly:true,
			},
			{
				xtype : 'textfield',
				fieldLabel : '校内/校外',
				labelAlign : 'right',
				name : 'w_outOrNot',
				renderer:xiaoneiwaiRender,
				width : 300,
				readOnly:true,
			},{
				xtype : 'textarea',
				fieldLabel : '需求描述',
				labelAlign : 'right',
				readOnly:true,
				name : 'w_needIntroduction',
				colspan: 2,
				height:100,
				width : 600,
				
			},{
				xtype : 'textfield',
				fieldLabel : '接单时间',
				name : 'w_acceptTime',

				readOnly:true,
				labelAlign : 'right',
				name : 'w_stage',
				width : 300,
				
			},{
				xtype : 'textfield',
				fieldLabel : '最终修订时间',
				name : 'w_editTime',
				readOnly:true,
				labelAlign : 'right',
				width : 300,
				
			},{
				xtype : 'textfield',
				fieldLabel : '最终执行时间',
				readOnly:true,
				labelAlign : 'right',
				name : 'w_executeTime',
				width : 300,
				
			},{
				xtype : 'textfield',
				fieldLabel : '最终执行人数',
				readOnly:true,
				labelAlign : 'right',
				name : 'w_executeNumber',
				width : 300,
				
			},{
				xtype : 'textfield',
				fieldLabel : '基地名称',
				readOnly:true,
				labelAlign : 'right',
				name : 'w_basicName',
				width : 300,
				
			},{
				xtype : 'textfield',
				fieldLabel : '基地地址',
				readOnly:true,
				labelAlign : 'right',
				name : 'w_basicaddress',
				width : 300,
				
			},{
				xtype : 'textarea',
				fieldLabel : '活动方案',
				labelAlign : 'right',
				readOnly:true,
				colspan: 2,
				height:100,
				name : 'w_planIntroduction',
				width : 600,
				
			}, {
				xtype : 'hidden',
				name : 'w_id'
			}, {
				xtype : 'hidden',
				name : 'w_activityId'
			} ]
		});
		me.callParent(arguments);
	},
	buttons : [ {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});