Ext.define('manage.view.studentsign.StudentSignClassViewForm', {
	requires : ['manage.view.studentsign.StudentSignClassListGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.studentsignclassviewform',
	width: 1200,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 's_id'},{xtype:'studentsignclasslistgrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});