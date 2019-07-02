Ext.define('manage.view.allocatedteacher.ViewForm', {
	requires : ['manage.view.allocatedteacher.ListteacherGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.allocatedteacherviewform',
	width: 1000,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'number'},{xtype:'listteachergrid'}],
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
