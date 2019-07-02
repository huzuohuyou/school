Ext.define('manage.view.studentSignStatistics.ViewForm', {
	requires : ['manage.view.studentSignStatistics.StudentGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.studentSignStatisticsviewform',
	width:700,
    height: 550,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'ssd_id'},{xtype:'studentSignStatisticsstudentgrid'},{xtype:'datequeryform'},{xtype : 'hidden',name : 'c_name'},{xtype : 'hidden',name : 'worktime'},{xtype : 'hidden',name : 't_name'},{xtype : 'hidden',name : 'count'},{xtype : 'hidden',name : 'address'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
