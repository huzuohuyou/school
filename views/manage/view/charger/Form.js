Ext.define('manage.view.charger.Form', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree','manage.view.ux.CheckComboBox',
			'manage.view.ux.PicField' ],
	alias : 'widget.chargerform',
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
				name : 'name',
				maxLength : 50,
				width : 900,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, {
				xtype: 'radiogroup',
		        fieldLabel: '性别',
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
				vtype: 'checkphone',
			    vtypeText: "该手机号已经存在！",
				regex : /^1(3|4|5|6|7|8)[0-9]{9}$/ ,
				regexText : '输入正确的电话号码',
				name : 'telephone',
				width : 900,
				maxLength : 11,
				maxLengthText : '最多输入11个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
			{
				xtype : 'checkcombo',
				fieldLabel : '工作时间',
				name : 'worktime',
				width : 900,
				store:[["1","一"],["2","二"],["3","三"],["4","四"],["5","五"],["6","六"],["7","日"]],
				editable : false,
				multiCascade : true,
				multiSelect : true,
				maxLength : 50,
				maxLengthText : '最多输入50个字符'
			},
			{
				xtype : 'textfield',
				fieldLabel : '邮箱',
				vtype :'email',
				name : 'email',
				width : 900,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
			},
			{
				xtype : 'textfield',
				fieldLabel : '地址',
				name : 'address',
				width : 900,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',

			}, 
			{
				xtype : 'textfield',
				fieldLabel : '微信',
				name : 'weixin',
				width : 900,
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