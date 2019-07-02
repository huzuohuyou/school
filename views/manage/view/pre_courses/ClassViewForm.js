Ext.define('manage.view.pre_courses.ClassViewForm', {
	requires : ['manage.view.pre_courses.ClassDetailGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.classviewform',
	width: 1100,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'sd_id'},{xtype : 'hidden',name : 'pre_courses_detail_id'},{xtype : 'hidden',name : 'c_name'},{xtype : 'hidden',name : 'c_id'},{xtype : 'hidden',name : 'week'},{xtype : 'hidden',name : 's_name'},{xtype : 'hidden',name : 'week'},{xtype:'classdetailgrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});