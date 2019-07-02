Ext.define('manage.view.studentsign.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.studentsignqueryform',
	requires : [ 'manage.view.ux.ComboBox'],
	items : [
	         /*{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '姓名'
	},{
		xtype : 'textfield',
		name : 'course_name',
		labelAlign : 'right',
		fieldLabel : '课程名称'
	},
	{
		xtype : 'textfield',
		name : 'grad',
		regex : /^[0-9]*[1-9][0-9]*$/ ,
		regexText : '输入正确的年级，只能为数字',
		labelAlign : 'right',
		fieldLabel : '年级'
	},
	{
		xtype : 'textfield',
		name : 'class',
		regex : /^[0-9]*[1-9][0-9]*$/ ,
		regexText : '输入正确的班级，只能为数字',
		labelAlign : 'right',
		fieldLabel : '班级'
	}
	*/
	]
});