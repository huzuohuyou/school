Ext.define('manage.view.classSchedules.AddClassStudentForm', {
	requires : ['manage.view.classSchedules.AddClassStudentGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.addclassstudentform',
	width:800,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'week'},{xtype : 'hidden',name : 'id'},{xtype:'addclassstudentgrid'}],
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