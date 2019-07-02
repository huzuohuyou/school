Ext.define('manage.view.teacherlibrary.AddSchoolsForm', {
	requires : ['manage.view.teacherlibrary.AddSchoolsGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherlibarayaddschoolsform',
	width: 1000,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype:'addschoolsgrid'},{xtype : 'hidden',name : 'id'}],
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