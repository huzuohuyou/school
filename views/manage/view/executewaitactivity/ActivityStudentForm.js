Ext.define('manage.view.executewaitactivity.ActivityStudentForm', {
	requires : ['manage.view.executewaitactivity.ActivityStudentGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.activitystudentform',
	width:700,
    height: 550,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype:'activitystudentgrid'}],
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
