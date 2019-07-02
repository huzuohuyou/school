Ext.define('manage.view.exam.Form', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.examform',
	layout : {
		columns : 2,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [{
				xtype : 'textfield',
				fieldLabel : '考试名称',
				labelAlign : 'right',
				name : 'name',
				width : 600,
				colspan : 2,
				maxLength : 500,
				maxLengthText : '最多输入500个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, {
				xtype : 'datefield',
				format : 'Y-m-d H:i:s',
				width : 300,
				fieldLabel : '考试日期',
				labelAlign : 'right',
				id : 'start_time',
				name : 'start_time',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
		        listeners: {
		        	select : function( field, value, eOpts){
		        		this.up('form').form.findField('end_time').setMinValue(value);
		        	}
		        }
			}, {
				xtype : 'datefield',
				format : 'Y-m-d H:i:s',
				width : 300,
				fieldLabel : '至',
				labelAlign : 'right',
				name : 'end_time',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, {
				xtype : 'hidden',
				name : 'id'
			}, {
				xtype : 'hidden',
				name : 'type',
				value : 0
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