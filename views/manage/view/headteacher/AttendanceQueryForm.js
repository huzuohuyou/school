Ext.define('manage.view.headteacher.AttendanceQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.headteacherattendancequeryform',
	items : [ {
		xtype : 'textfield',
		name : 's_number',
		labelAlign : 'right',
		fieldLabel : '学号'
	},{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '姓名'
	}]
});