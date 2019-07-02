/**
 * 这个是在排课前增加开课日期，结课日期和周数的
 * author：桂哲群
 */
Ext.define('manage.view.shedules.AddDateForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.adddateform',
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
				xtype : 'datefield',
				format : 'Y-m-d',
				name : 'start_date',
				labelAlign : 'right',
				width : 300,
				id : 'start_date',
				fieldLabel : '开课日期',
				afterLabelTextTpl: required,
			    blankText: '此项为必填项',
			    allowBlank: false,
			    listeners: {
		        	select : function( field, value, eOpts){
		        		this.up('form').form.findField('end_date').setMinValue(value);
		        	}
		        }
				
			},{
				xtype : 'datefield',
				format : 'Y-m-d',
				fieldLabel : '结课日期',
				labelAlign : 'right',
				width : 300,
				name : 'end_date',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, {
				xtype : 'textfield',
				fieldLabel : '开课周数',
				width : 300,
				regex : /^\d+$/ ,
				regexText : '输入正确的数字',
				labelAlign : 'right',
				name : 'weekamount',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
				afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
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