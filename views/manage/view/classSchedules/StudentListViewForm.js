Ext.define('manage.view.classSchedules.StudentListViewForm', {
	requires : ['manage.view.classSchedules.StudentGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.studentlistviewform',
	width: 1200,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'}, {xtype : 'hidden',name : 'class_id'},{xtype : 'hidden',name : 'week'},{xtype:'detail_studentgrid'}],
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
