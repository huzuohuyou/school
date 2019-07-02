Ext.define('manage.view.classSchedules.SignlistViewForm', {
	requires : ['manage.view.classSchedules.SignlistGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.signlistviewform',
	width: 1200,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'}, {xtype : 'hidden',name : 'class_id'},{xtype : 'hidden',name : 'week'},{xtype:'signlistgrid'}],
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