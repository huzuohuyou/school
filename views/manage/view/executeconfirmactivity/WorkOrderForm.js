Ext.define('manage.view.executeconfirmactivity.WorkOrderForm', {
    extend: 'manage.view.moudle.Form',
	alias : 'widget.executeconfirmactivityworkorderform',
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
				maxLength : 50,
				width : 300,
				disabled:true,
			}, {
				xtype : 'textfield',
				fieldLabel : '需求类型',
				labelAlign : 'right',
				name : 'w_needType',
				maxLength : 50,
				width : 300,
				disabled:true,
		
			},{
				xtype : 'textfield',
				fieldLabel : '任务类型',
				labelAlign : 'right',
				name : 'w_taskType',
				maxLength : 50,
				width : 300,
				disabled:true,
	
			},{
				xtype : 'textfield',
				fieldLabel : '我方对接人',
				labelAlign : 'right',
				name : 'w_taskUserName',
				maxLength : 50,
				width : 300,
				disabled:true,
			},{
				xtype : 'textfield',
				fieldLabel : '学校名称',
				labelAlign : 'right',
				name : 'w_schoolName',
				maxLength : 50,
				width : 300,
				disabled:true,
			},{
				xtype : 'textfield',
				fieldLabel : '学校地址',
				labelAlign : 'right',
				name : 'w_schoolAddress',
				maxLength : 50,
				width : 300,
				disabled:true,
			},
			{
				xtype : 'numberfield',
				fieldLabel : '学生人数',
				labelAlign : 'right',
				name : 'w_studentNumber',
				width : 300,
				maxLength : 50,
				disabled:true,
			},
			{
				xtype : 'textfield',
				fieldLabel : '涵盖年级',
				labelAlign : 'right',
				name : 'w_stage',
				maxLength : 50,
				width : 300,
				disabled:true,
			},
			{
				xtype : 'textfield',
				fieldLabel : '活动日期(天数)',
				labelAlign : 'right',
				name : 'w_activityDays',
				maxLength : 50,
				width : 300,
				disabled:true,
			},
			{
				xtype : 'textfield',
				fieldLabel : '校内/校外',
				labelAlign : 'right',
				name : 'w_outOrNot',
				renderer:xiaoneiwaiRender,
				width : 300,
				maxLength : 50,
				disabled:true,
			},{
				xtype : 'textarea',
				fieldLabel : '需求描述',
				labelAlign : 'right',
				name : 'w_needIntroduction',
				colspan: 2,
				maxLength : 200,
				height:100,
				width : 600,
				disabled:true,
			},{
				xtype : 'textfield',
				fieldLabel : '接单时间',
				name : 'w_acceptTime',

				disabled:true,
				labelAlign : 'right',
				width : 300
				
			},{
				xtype : 'textfield',
				fieldLabel : '最终修订时间',
				name : 'w_editTime',
				disabled:true,
				labelAlign : 'right',
				width : 300
				
			},{
				xtype : 'textfield',
				fieldLabel : '最终执行时间',
				disabled:true,
				labelAlign : 'right',
				name : 'w_executeTime',
				width : 300,
				
			},{
				xtype : 'textfield',
				fieldLabel : '最终执行人数',
				disabled:true,
				labelAlign : 'right',
				name : 'w_executeNumber',
				width : 300,
				
			},{
				xtype : 'textfield',
				fieldLabel : '基地名称',
				labelAlign : 'right',
				name : 'w_basicName',
				width : 300,
				
			},{
				xtype : 'textfield',
				fieldLabel : '基地地址',
				labelAlign : 'right',
				name : 'w_basicaddress',
				width : 300,
				
			},{
				xtype : 'textarea',
				fieldLabel : '活动方案',
				labelAlign : 'right',
				colspan: 2,
				height:100,
				name : 'w_planIntroduction',
				width : 600,
				maxLengthText : '最多输入200个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
				disabled:true,
		        allowBlank: false
				
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
		text : '确定',
		action : 'submit'
	},{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});