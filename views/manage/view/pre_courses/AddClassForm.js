/**
 * 这个是点击增加班级按钮弹出的班级信息页面
 * author：桂哲群
 * date:2018-05-06
 */
Ext.define('manage.view.pre_courses.AddClassForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.addclassform',
	width:500,
    height: 250,
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
				    name : 'start_date',
				    width:450,
				    labelAlign : 'left',
			     	id : 'start_date',
			     	fieldLabel : '开课日期',
			    	afterLabelTextTpl: required,
			        blankText: '此项为必填项',
			        allowBlank: false		
			},{
				xtype : 'hidden',
				name : 'id'
			},{
				xtype : 'hidden',
				name : 'pre_courses_detail_id'
			},{
				xtype : 'hidden',
				name : 'c_id'
			},{
				xtype : 'hidden',
				name : 'c_name'
			},{
				xtype : 'hidden',
				name : 'week'
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