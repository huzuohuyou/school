Ext.define('manage.view.teacher.Form', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree',
			'manage.view.ux.PicField' ],
	alias : 'widget.teachereditform',
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
				emptyText : '请填写教师姓名，必填',
				name : 'name',
				width : 400,
				maxLength : 50,
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
//		        afterLabelTextTpl: required,
//		        blankText: '此项为必填项',
//		        allowBlank: false
			}, 
			 {
				xtype: 'radiogroup',
		        fieldLabel: '在职状态',
				labelAlign : 'right',
		        items: [
		            { boxLabel: '在职', name: 'status', inputValue: '1',checked:true },
		            { boxLabel: '离职', name: 'status', inputValue: '0' }
		        ],
//		        afterLabelTextTpl: required,
//		        blankText: '此项为必填项',
//		        allowBlank: false
			}, 
			{
				xtype : 'textfield',
				fieldLabel : '身份证号',
				labelAlign : 'right',
				emptyText : '请输入正确的18位身份证号码',
				regex : /^(\d{18,18}|\d{15,15}|\d{17,17}x)$/,
				regexText : '输入正确的身份号码',
				name : 'IDcard',
				width : 400,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
			},
			{
				xtype : 'numberfield',
				fieldLabel : '工商银行卡号',
				labelAlign : 'right',
				emptyText : '请输入正确的19位工商银行卡号',
				name : 'bankcard',
				width : 400,
				maxLength : 19,
				maxLengthText : '最多输入19个字符',
			},
			{
				xtype : 'textfield',
				fieldLabel : '开户行',
				labelAlign : 'right',
				emptyText : '请输入银行卡的开户行',
				name : 'banksite',
				width : 400,
				maxLength : 19,
				maxLengthText : '最多输入19个字符',
			},
			{
				xtype : 'textfield',
				fieldLabel : '微信号',
				labelAlign : 'right',
				emptyText : '请输入教师个人微信号',
				name : 'weixin',
				width : 400,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		    
		      
			},
			{
				xtype : 'textfield',
				fieldLabel : '联系电话',
				labelAlign : 'right',
				emptyText : '请输入正确的11位手机号码，必填',
				name : 'phone',
				width : 400,
				regex : /^1(3|4|5|6|7|8)[0-9]{9}$/ ,
				regexText : '输入正确的电话号码',
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
				emptyText : '请输入教师的个人邮箱',
				name : 'emailbox',
				width : 400,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
			},
			{
				xtype : 'textfield',
				fieldLabel : '地址',
				emptyText : '请输入教师的通信地址',
				labelAlign : 'right',
				name : 'address',
				width : 400,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
			},
			{
				xtype : 'mycombo',
				store : Ext.create('manage.store.agency.Agency',{
					autoLoad : {limit : 1000,start : 0}
				}),
				queryMode : 'local',
				fieldLabel : '所属机构',
				displayfield:'name',
				width : 400,
				labelAlign : 'right',
				name : 'agency',
				editable : false,
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			},
			{
				xtype : 'checkcombo',
				fieldLabel : '上课时间',
				labelAlign : 'right',
				emptyText : '请选择上课时间',
				name : 'worktime',
				width : 400,
				store:[["1","周一"],["2","周二"],["3","周三"],["4","周四"],["5","周五"],["6","周六"],["7","周日"]],
				editable : false,
				multiCascade : true,
				multiSelect : true,
				maxLength : 50,
				maxLengthText : '最多输入50个字符'
			},	
			{
				xtype : 'mycombo',
				store : Ext.create('manage.store.courses.Courses',{
					autoLoad : {limit : 1000,start : 0}
				}),
				queryMode : 'local',
				fieldLabel : '所教科目',
				emptyText : '请选择所教科目，必选',
				displayfield:'name',
				width : 400,
				labelAlign : 'right',
				name : 'courses',
				editable : false,
				multiCascade : true,
				multiSelect : true,
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			},
			{
				xtype : 'mycombo',
				store : Ext.create('manage.store.schools.Schools',{
					autoLoad : {limit : 1000,start : 0}
				}),
				queryMode : 'local',
				fieldLabel : '授课学校意向',
				displayfield:'name',
				width : 400,
				labelAlign : 'right',
				emptyText : '请选择可授课学校',
				name : 'schools',
				editable : false,
				multiCascade : true,
				multiSelect : true,
			},
			{
				xtype : 'textarea',
				fieldLabel : '备注',
				width : 400,
				labelAlign : 'right',
				name : 'remark'
			},
		    {
				xtype : 'hidden',
				name : 'id' 
			},
			 {
				xtype : 'hidden',
				name : 'courses_id' 
			},
			 {
				xtype : 'hidden',
				name : 'schools_id' 
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