Ext.define('manage.view.courses.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.coursesform',
	requires : [ 'manage.view.ux.ComboBox','manage.view.ux.UEditor','manage.view.ux.ComboBoxTree'],
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	modal:true,
	constrain : true,
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
				fieldLabel : '课程名称',
				width : 900,
				labelAlign : 'right',
				name : 'name',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},{
				xtype : 'mycombo',
				store : Ext.create('manage.store.courses.Course_type',{
					autoLoad : {limit : 10,start : 0}
				}),
				width : 900,
				queryMode : 'local',
				fieldLabel : '课程类型',
				displayfield:'name',
				labelAlign : 'right',
				name : 'type',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
			{
				xtype : 'combobox',
				fieldLabel : '课程级别',
				width : 900,
				labelAlign : 'right',
				displayfield:'name',
				name : 'grade',
				editable:false,
				store:[["1","A"],["2","B"]]
			},{
				xtype : 'combobox',
				fieldLabel : '适合年级',
				width : 900,
				labelAlign : 'right',
				displayfield:'name',
				name : 'stage',
				editable:false,
				store:[["1","一"],["2","二"],["3","三"],["4","四"],["5","五"],["6","六"],["7","七"],["8","八"],["9","高一高二"]]
			},{
				xtype : 'ueditor',
				fieldLabel : '课程介绍',
				labelAlign : 'right',
				width : 900,
				height : 400,
				name : 'introduction',
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
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