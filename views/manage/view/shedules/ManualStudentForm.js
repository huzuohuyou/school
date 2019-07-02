Ext.define('manage.view.shedules.ManualStudentForm', {
	requires : ['manage.view.shedules.ManualStudentGrid','manage.view.shedules.ManualStudentQueryForm'],
	extend : 'Ext.form.Panel',
	alias : 'widget.manualstudentform',
	width:700,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'sub_id'} ,{xtype : 'hidden',name : 'sd_id'} ,{xtype : 'hidden',name : 'c_id'},{xtype : 'hidden',name : 'week'},{xtype : 'hidden',name : 's_id'},{xtype:'manualstudentgrid'},{xtype:'manualstudentqueryform'}],
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
