Ext.define('manage.view.teachersign.ViewForm', {
	requires : ['manage.view.teachersign.TeacherSignSchoolGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teachersignviewform',
	width: 1200,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 's_id'},{xtype:'teachersignschoolgrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});