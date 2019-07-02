Ext.define('manage.view.device.Form', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree',
			'manage.view.ux.PicField' ],
	alias : 'widget.deviceform',
	layout : {
		columns : 2,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'textfield',
				fieldLabel : '地点名称',
				labelAlign : 'right',
				name : 'location',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},{
				xtype : 'textfield',
				fieldLabel : '读卡器列表',
				labelAlign : 'right',
				name : 'readers',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, {
				xtype : 'textfield',
				fieldLabel : '进天线列表',
				labelAlign : 'right',
				name : 'ins',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, {
				xtype : 'textfield',
				fieldLabel : '出天线列表',
				labelAlign : 'right',
				name : 'outs',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},{
				xtype : 'textfield',
				fieldLabel : '类型',
				labelAlign : 'right',
				name : 'type',
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},{
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