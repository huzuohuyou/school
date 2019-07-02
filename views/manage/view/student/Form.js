Ext.define('manage.view.student.Form', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree',
			'manage.view.ux.PicField' ],
	alias : 'widget.studentform',
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [{
				xtype : 'textfield',
				fieldLabel : '姓名',
				labelAlign : 'right',
				emptyText : '请输入学生姓名',
				name : 'name',
				width : 400,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},{
				xtype : 'textfield',
				fieldLabel : '教育ID',
				labelAlign : 'right',
				name : 'number',
				afterLabelTextTpl: required,
				emptyText : '请输入8位学籍号',
				vtype: 'checknumber',
		        vtypeText: "该学籍号已经存在！",
		        regex: /^\d{8}$/,
				regexText : '输入正确的8位学籍号',
				width : 400,
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
				fieldLabel : '身份证号',
				labelAlign : 'right',
				emptyText : '请输入正确的18位身份证号码',
				vtype: 'checkIDcard',
		        vtypeText: "该身份证号已经存在！",
		        regex: /^(\d{18,18}|\d{15,15}|\d{17,17}x)$/,
				regexText : '输入正确的身份号码',
				name : 'IDcard',
				width : 400,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
			},
			{
				xtype : 'mycombo',
				store : Ext.create('manage.store.schools.Schools',{
					autoLoad : {limit : 1000,start : 0}
				}),
				queryMode : 'local',
				fieldLabel : '学校名称',
				emptyText : '请选择所在学校',
				displayfield:'name',
				labelAlign : 'right',
				name : 'school',
				width : 400,
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
			{
				xtype : 'mycombo',
				fieldLabel : '年级',
				labelAlign : 'right',
				emptyText : '请选择年级',
				name : 'grad',
				width : 400,
				store:[["1","一"],["2","二"],["3","三"],["4","四"],["5","五"],["6","六"],["7","七"],["8","八"],["9","高一"],["10","高二"]],
				editable : false,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
				afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},	
			{
				xtype : 'textfield',
				fieldLabel : '班级',
				labelAlign : 'right',
				emptyText : '请输入班级，只能为两位以内的数字',
				regex : /^[0-9]*[1-9][0-9]*$/ ,
				regexText : '输入正确的班级，只能为数字',
				name : 'class',
				width : 400,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},	
			{
				xtype : 'textfield',
				fieldLabel : '父亲电话',
				labelAlign : 'right',
				emptyText : '请填写11位电话号码',
				regex : /^1(3|4|5|6|7|8|9)[0-9]{9}$/ ,
				regexText : '输入正确的电话号码',
				name : 'fatherphone',
				width : 400,
				maxLength : 11,
				maxLengthText : '最多输入11个字符',
			},
			{
				xtype : 'textfield',
				fieldLabel : '母亲电话',
				labelAlign : 'right',
				emptyText : '请填写11位电话号码',
				regex : /^1(3|4|5|6|7|8|9)[0-9]{9}$/ ,
				regexText : '输入正确的电话号码',
				name : 'motherphone',
				width : 400,
				maxLength : 11,
				maxLengthText : '最多输入11个字符',
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