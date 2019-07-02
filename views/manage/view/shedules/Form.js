Ext.define('manage.view.shedules.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.shedulesform',
	requires : [ 'manage.view.ux.ComboBox' ],
	bodyPadding : 10,
	header : false,
	width:500,
    height: 250,
	buttonAlign : 'center',
	layout : {
		columns : 1,
		type : 'table'
	},
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [ {
				xtype : 'textfield',
				fieldLabel : '班级名称',
				labelAlign : 'left',
				name : 's_name',
				id:'s_name',
				width:450,
				maxLength : 80,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},{
				xtype : 'numberfield',
				fieldLabel : '人数',
				labelAlign : 'left',
				name : 'count',
				width:450,
				maxLength : 80,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},{
				xtype : 'textfield',
				fieldLabel : '上课时间',
				labelAlign : 'left',
				name : 'worktime',
				width:450,
				maxLength : 80,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},{
				xtype : 'textfield',
				fieldLabel : '上课地点',
				labelAlign : 'left',
				name : 'address',
				width:450,
				maxLength : 80,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},{
			    xtype : 'datefield',
			    format : 'Y-m-d',
			    name : 'end_date',
			    id : 'end_date',
			    width:450,
			    labelAlign : 'left',
		     	id : 'end_date',
		     	fieldLabel : '结课日期',
		   //  	emptyText : '结课日期可在课程结束时再填写',
		     },{
				xtype : 'textfield',
				fieldLabel : '授课教师',
				labelAlign : 'left',
				readOnly:true,
			//	disabled:true,
			//	value:'待定',
				name : 'teacher_name',
			
			},{
				xtype : 'button',
				text : '选择教师',
				action : 'selectTeacher',
			
			},{
				xtype : 'hidden',
				name : 'teacher_id',
			},{
				xtype : 'hidden',
				name : 'week',
			},{
				xtype : 'hidden',
				name : 'temp',
				value:'0'
			},{
				xtype : 'hidden',
				name : 'c_id',
			},{
				xtype : 'hidden',
				name : 'c_name',
			},{
				xtype : 'hidden',
				name : 'school_name',
			},{
				xtype : 'hidden',
				name : 'sd_id',
			},{
				xtype : 'hidden',
				name : 'id',
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