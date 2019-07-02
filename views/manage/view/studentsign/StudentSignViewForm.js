Ext.define('manage.view.studentsign.StudentSignViewForm', {
	requires : ['manage.view.studentsign.StudentSignListGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.studentsignviewform',
	width: 1200,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 's_id'},{xtype:'studentsignlistgrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});