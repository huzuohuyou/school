Ext.define('manage.view.activityplan.Form', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree',
			'manage.view.ux.PicField' ],
	alias : 'widget.activityplanform',
	layout : {
		columns : 1,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [{
				xtype : 'textfield',
				fieldLabel : '姓名',
				labelAlign : 'right',
				name : 'name',
				maxLength : 50,
				width : 400,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, {
				xtype: 'radiogroup',
		        fieldLabel: '性别',
				labelAlign : 'right',
		        items: [
		            { boxLabel: '男', name: 'sex', inputValue: '0' },
		            { boxLabel: '女', name: 'sex', inputValue: '1' }
		        ],
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, 
			{
				xtype : 'textfield',
				fieldLabel : '联系电话',
				labelAlign : 'right',
				regex : /^1(3|4|5|6|7|8|9)[0-9]{9}$/ ,
				regexText : '输入正确的电话号码',
				name : 'phone',
				width : 400,
				maxLength : 11,
				maxLengthText : '最多输入11个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
			{
				xtype : 'textfield',
				fieldLabel : '邮箱',
				labelAlign : 'right',
				vtype :'email',
				name : 'email',
				width : 400,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
			},
			{
				xtype : 'textfield',
				fieldLabel : '地址',
				labelAlign : 'right',
				name : 'address',
				width : 400,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',

			}, 
			{
				xtype : 'textfield',
				fieldLabel : '微信',
				labelAlign : 'right',
				name : 'weixin',
				width : 400,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
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