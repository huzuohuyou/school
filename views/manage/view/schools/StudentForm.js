Ext.define('manage.view.schools.StudentForm', {
	requires : ['manage.view.schools.StudentGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.schoolsstudentform',
	width:800,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'},{xtype:'schoolsstudentgrid'}],
	buttons : [ {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});