Ext.define('manage.view.teacherlibrary.Form', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree','manage.view.ux.CheckComboBox',
			'manage.view.ux.PicField' ],
	alias : 'widget.teacherlibraryform',
	layout : {
		columns : 2,
		type : 'table',
		
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
				width : 600,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
		        colspan:2
			}, {
				xtype: 'radiogroup',
		        fieldLabel: '性别',
		        colspan:2,
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
				xtype : 'textfield',
				fieldLabel : '身份证号',
				labelAlign : 'right',
				emptyText : '请输入正确的18位身份证号码',
				regex : /^(\d{18,18}|\d{15,15}|\d{17,17}x)$/,
				regexText : '输入正确的身份号码',
				name : 'IDcard',
				width : 600,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
				colspan:2
			},
			{
				xtype : 'textfield',
				fieldLabel : '工商银行卡号',
				labelAlign : 'right',
				emptyText : '请输入正确的19位工商银行卡号',
				regex : /^\d{15,20}$/,
				regexText : '输入正确的银行卡号',
				name : 'bankcard',
				width : 600,
				maxLength : 20,
				maxLengthText : '最多输入19个字符',
				colspan:2
			},
			{
				xtype : 'textfield',
				fieldLabel : '户名',
				labelAlign : 'right',
				emptyText : '请输入银行卡本人姓名',
				name : 'bankcardname',
				width : 600,
				maxLength : 19,
				maxLengthText : '最多输入19个字符',
				colspan:2
			},
			{
				xtype : 'textfield',
				fieldLabel : '开户行',
				labelAlign : 'right',
				emptyText : '请输入银行卡的开户行',
				name : 'banksite',
				width : 600,
				maxLength : 19,
				maxLengthText : '最多输入19个字符',
				colspan:2
			},
			{
				xtype : 'textfield',
				fieldLabel : '微信号',
				labelAlign : 'right',
				emptyText : '请输入教师个人微信号',
				name : 'weixin',
				width : 600,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
				colspan:2
		      
			},
			{
				xtype : 'textfield',
				fieldLabel : '联系电话',
				labelAlign : 'right',
				emptyText : '请输入正确的11位手机号码，必填',
				name : 'phone',
				width : 600,
				vtype: 'checkphone',
			    vtypeText: "该手机号已经存在！",
				regex : /^1(3|5|6|7|8)[0-9]{9}$/ ,
				regexText : '输入正确的电话号码',
				maxLength : 11,
				maxLengthText : '最多输入11个字符',
				afterLabelTextTpl: required,
			    blankText: '此项为必填项',
		        allowBlank: false,
		        colspan:2
			}, 
			{
				xtype : 'textfield',
				fieldLabel : '邮箱',
				labelAlign : 'right',
				vtype :'email',
				emptyText : '请输入教师的个人邮箱',
				name : 'emailbox',
				width : 600,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
				colspan:2
			},
			{
				xtype : 'textfield',
				fieldLabel : '地址',
				emptyText : '请输入教师的通信地址',
				labelAlign : 'right',
				name : 'address',
				width : 600,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
				colspan:2
			},
			{
				xtype : 'mycombo',
				store : Ext.create('manage.store.agency.Agency',{
					autoLoad : {limit : 1000,start : 0}
				}),
				queryMode : 'local',
				fieldLabel : '所属机构',
				emptyText : '请选择所属机构，必选',
				displayfield:'name',
				width : 600,
				labelAlign : 'right',
				name : 'agency',
				editable : false,
				afterLabelTextTpl: required,
			    blankText: '此项为必填项',
		        allowBlank: false,
		        colspan:2
			},
			{
				xtype : 'checkcombo',
				fieldLabel : '上课时间',
				labelAlign : 'right',
				emptyText : '请选择上课时间',
				name : 'worktime',
				width : 600,
				store:[["1","周一"],["2","周二"],["3","周三"],["4","周四"],["5","周五"],["6","周六"],["7","周日"]],
				editable : false,
				multiCascade : true,
				multiSelect : true,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
				colspan:2
			},	
			/*
			{
				xtype : 'mycombo',
				store : Ext.create('manage.store.courses.Courses',{
					autoLoad : {limit : 1000,start : 0}
				}),
				queryMode : 'local',
				fieldLabel : '所教科目',
				emptyText : '请选择所教科目，必选',
				displayfield:'name',
				width : 300,
				labelAlign : 'right',
				name : 'courses',
				editable : false,
				multiCascade : true,
				multiSelect : true,
				colspan:2
			},
			{
				 xtype:"textfield",
	             fieldLabel:"所教科目",
	             labelAlign : 'right',
	             name : 'courses_name',
                 id :'courses_name',
	             readOnly:true,
	             emptyText: '点击选择所教科目',
	             width : 500,
			},
			{
		         xtype:"button",
		         fieldLabel:"点击选择",
		         name:"select",
		         action : 'select',
		         text : '所教科目',
		         style:'margin-left:5px;margin-bottom:5px',
		         width: 100,
		    },
		    */
			{
				xtype : 'textarea',
				fieldLabel : '备注',
				width : 600,
				labelAlign : 'right',
				name : 'remark',
				colspan:2
			},
		    {
				xtype : 'hidden',
				name : 'id' 
			},
			 {
				xtype : 'hidden',
				name : 'courses_id',
				id :'courses_id'
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