Ext.define('manage.view.student.StudentUpdateForm', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.studentupdateinfo',
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
				name : 'number'

			}, {
				xtype : 'displayfield',
				fieldLabel : '姓名',
				name : 'name'
			}, {
				xtype: 'radiogroup',
		        fieldLabel: '性别',
		        items: [
		            { boxLabel: '男', name: 'sex', inputValue: '0' },
		            { boxLabel: '女', name: 'sex', inputValue: '1' }
		        ],

			},
			{
		        xtype: 'displayfield',
		        fieldLabel: '身份证号',
		        name: 'IDcard'
		    }, {
				xtype : 'displayfield',
				fieldLabel : '所在学校',
				name : 's_name',
				colspan:2,
				maxLength : 50,
				maxLengthText : '最多输入50个字符'
			},{
				xtype : 'textfield',
				fieldLabel : '联系电话',
				name : 'telephone',
				width : 300,
				regex : /^1(3|4|5|6|7|8|9)[0-9]{9}$/ ,
				regexText : '输入正确的电话号码',
				maxLength : 11,
				maxLengthText : '最多输入11个字符',
			},
			{
				xtype : 'mycombo',
				fieldLabel : '年级',
				name : 'grad',
				width : 300,
				store:[["1","一"],["2","二"],["3","三"],["4","四"],["5","五"],["6","六"],["7","七"],["8","八"],["9","高一"],["10","高二"]],
				editable : false,
				maxLength : 50,
				maxLengthText : '最多输入50个字符'
			},{
				xtype : 'textfield',
				fieldLabel : '班级',
				regex : /^[0-9]*[1-9][0-9]*$/ ,
				regexText : '输入正确的班级，只能为数字',
				name : 'class',
				width : 300,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
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