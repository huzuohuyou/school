Ext.define('manage.view.Parent.StudentUpdateForm', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree',
			'manage.view.ux.PicField' ],
	alias : 'widget.studentupdateform',
	layout : {
		columns : 2,
		type : 'table'
	},
	initComponent : function() {

		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'displayfield',
				fieldLabel : '学号',
				labelAlign : 'right',
				name : 'number'
//				maxLength : 50,
//				maxLengthText : '最多输入50个字符',
//		        afterLabelTextTpl: required,
//		        blankText: '此项为必填项',
//		        allowBlank: false
			}, {
				xtype : 'displayfield',
				fieldLabel : '班级',
				labelAlign : 'right',
				name : 'c_name'
			}, {
				xtype : 'displayfield',
				fieldLabel : '姓名',
				labelAlign : 'right',
				name : 'name',
				//maxLength : 50,
		
			}, {
	            xtype: 'displayfield',
	            fieldLabel: '性别',
	            labelAlign : 'right',
	            renderer : sexRender,
	            name: 'sex'
//		        items: [
//		            { boxLabel: '男', name: 'sex', inputValue: '0' },
//		            { boxLabel: '女', name: 'sex', inputValue: '1' }
//		        ],
//		        afterLabelTextTpl: required,
//		        blankText: '此项为必填项',
//		        allowBlank: false
			}, {
				xtype : 'displayfield',
				fieldLabel : '民族',
				labelAlign : 'right',
				name : 'race'
//				maxLength : 50,
//				maxLengthText : '最多输入50个字符',
//		        afterLabelTextTpl: required,
//		        blankText: '此项为必填项',
//		        allowBlank: false
			}, {
				xtype : 'displayfield',
				format : 'Y-m-d',
				fieldLabel : '出生日期',
				labelAlign : 'right',
				name : 'birthday',
//				afterLabelTextTpl: required,
//			    blankText: '此项为必填项',
//			    allowBlank: false
			}, {
		        xtype: 'picfield',
		        fieldLabel: '照片',
				labelAlign : 'right',
				colspan : 2,
		        name: 'pic'
		    }, {
				xtype : 'textfield',
				fieldLabel : '家庭地址',
				labelAlign : 'right',
				name : 'address',
				width : 650,
				maxLength : 500,
				colspan : 2,
				maxLengthText : '最多输入500个字符'
//		        afterLabelTextTpl: required,
//		        blankText: '此项为必填项',
//		        allowBlank: false
			}, {
				xtype : 'textfield',
				fieldLabel : '父亲姓名',
				labelAlign : 'right',
				name : 'father_name',
				maxLength : 50,
				maxLengthText : '最多输入50个字符'
			}, {
				xtype : 'textfield',
				fieldLabel : '父亲电话',
				labelAlign : 'right',
				name : 'father_phone',
				width : 370,
				maxLength : 50,
				maxLengthText : '最多输入50个字符'
			}, {
				xtype : 'textfield',
				fieldLabel : '父亲工作单位',
				labelAlign : 'right',
				colspan : 2,
				name : 'father_company',
				width : 650,
				maxLength : 500,
				maxLengthText : '最多输入500个字符'
			}, {
				xtype : 'textfield',
				fieldLabel : '母亲姓名',
				labelAlign : 'right',
				name : 'mother_name',
				maxLength : 50,
				maxLengthText : '最多输入50个字符'
			}, {
				xtype : 'textfield',
				fieldLabel : '母亲电话',
				labelAlign : 'right',
				name : 'mother_phone',
				width : 370,
				maxLength : 50,
				maxLengthText : '最多输入50个字符'
			}, {
				xtype : 'textfield',
				fieldLabel : '母亲工作单位',
				labelAlign : 'right',
				colspan : 2,
				name : 'mother_company',
				width : 650,
				maxLength : 500,
				maxLengthText : '最多输入500个字符'
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