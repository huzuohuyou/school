Ext.define('manage.view.student_charger.ChargerStudentViewForm', {
	requires : ['manage.view.student_charger.StudentListGrid','manage.view.student_charger.QueryForm'],
	extend : 'Ext.form.Panel',
	alias : 'widget.chargerstudentviewform',
	width: 1000,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 's_id'},{xtype:'studentlist_chargergrid'},{xtype:'student_chargerqueryform'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});