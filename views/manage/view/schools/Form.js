Ext.define('manage.view.schools.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.schoolsform',
	requires : [ 'manage.view.ux.ComboBox','manage.view.ux.UEditor' ],
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
				xtype : 'textfield',
				fieldLabel : '学校名称',
				width : 900,
				labelAlign : 'right',
				name : 'name',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
			{
				xtype : 'mycombo',
				store : Ext.create('manage.store.schools.Schools_area',{
					autoLoad : {limit : 1000,start : 0}
				}),
				queryMode : 'local',
				fieldLabel : '学校所在区',
				displayfield:'name',
				width : 900,
				labelAlign : 'right',
				name : 'area',
				editable : false,
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			},
			{
				xtype : 'textfield',
				fieldLabel : '预计参与人数',
				width : 900,
				regex : /^\d+$/ ,
				regexText : '输入正确的数字',
				labelAlign : 'right',
				name : 'studentcount',
				maxLength : 50,
				maxLengthText : '最多输入50个字符'
			},
			{
				xtype : 'textfield',
				fieldLabel : '联系人电话',
				labelAlign : 'right',
				name : 'telephone',
				width : 900,
				regex : /^1(3|5|8)[0-9]{9}$/ ,
				regexText : '输入正确的电话号码',
				maxLength : 11,
				maxLengthText : '最多输入11个字符',
//		        afterLabelTextTpl: required,
//		        blankText: '此项为必填项',
//		        allowBlank: false
			}, 
			{
				xtype : 'ueditor',
				fieldLabel : '备注',
				labelAlign : 'right',
				width : 900,
				height : 300,
				name : 'remark'
			},
			{
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