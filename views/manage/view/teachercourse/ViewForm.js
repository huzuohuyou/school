Ext.define('manage.view.teachercourse.ViewForm', {
	requires : ['manage.view.teachercourse.CoursesGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teachercourseviewform',
	width: 700,
    height: 400,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'ssd_id'},{xtype:'sign_coursesgrid'},{xtype : 'hidden',name : 'id'}],
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
