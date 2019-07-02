Ext.define('manage.view.pre_courses.ViewForm', {
	requires : ['manage.view.pre_courses.CoursesGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.precoursesviewform',
	width: 1000,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'pre_courses_id'} ,{xtype:'pre_coursestabpanel'},{xtype : 'hidden',name : 's_id'},{xtype : 'hidden',name : 'status'},{xtype : 'hidden',name : 'term'},{xtype : 'hidden',name : 'year'}],
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
