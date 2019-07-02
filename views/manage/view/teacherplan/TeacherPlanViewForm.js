Ext.define('manage.view.teacherplan.TeacherPlanViewForm', {
	requires : ['manage.view.teacherplan.PlanGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherplanviewform',
	width: 900,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'ssd_id'},{xtype:'plangrid'},{xtype : 'hidden',name : 'id'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});