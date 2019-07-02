Ext.define('manage.view.activityselected.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.activityselectedform',
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
				fieldLabel : '活动编号',
				labelAlign : 'right',
				regex : /^[0-9]*[1-9][0-9]*$/ ,
				regexText : '输入正确的年级，只能为数字',
				name : 'a_id',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, {
				xtype : 'textfield',
				fieldLabel : '活动名称',
				labelAlign : 'right',
				name : 'name',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, {
				xtype : 'datefield',
				format : 'Y-m-d',
				fieldLabel : '活动时间',
				labelAlign : 'right',
				name : 'date',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},{
				xtype : 'textfield',
				fieldLabel : '活动地点',
				labelAlign : 'right',
				name : 'site',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
			{
				xtype : 'mycombo',
				store : Ext.create('manage.store.schools.Schools',{
					autoLoad : {limit : -1,start : 0}
				}),
				queryMode : 'local',
				fieldLabel : '学校名称',
				displayfield:'name',
				labelAlign : 'right',
				name : 'school',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
			{
				xtype : 'numberfield',
				fieldLabel : '班级数量',
				labelAlign : 'right',
				name : 'classcount',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
			{
				xtype : 'numberfield',
				fieldLabel : '学生数量',
				labelAlign : 'right',
				name : 'amount',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
			{
				xtype : 'textfield',
				fieldLabel : '年级',
				labelAlign : 'right',
				name : 'stage',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
			{
				xtype : 'mycombo',
				store : Ext.create('manage.store.saler.Saler',{
					autoLoad : {limit : -1,start : 0}
				}),
				queryMode : 'local',
				fieldLabel : '负责人',
				displayfield:'name',
				labelAlign : 'right',
				name : 'charger',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
			{
				xtype : 'mycombo',
				store : Ext.create('manage.store.ComboBox',{
									data : activitystateData
								}),
				queryMode : 'local',
				fieldLabel : '活动状态',
				labelAlign : 'right',
				name : 'status_id',
				editable : false,
				afterLabelTextTpl : required,
				emptyText : '请选择',
				blankText : '此项为必填项',
				allowBlank : false
			},
			{
				xtype : 'textarea',
				fieldLabel : '备注',
				labelAlign : 'right',
				name : 'remark',
				maxLength : 2000,
				colspan : 2,
				width:550,
				maxLengthText : '最多输入10000个字符',
			    preventScrollbars : true,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, {
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