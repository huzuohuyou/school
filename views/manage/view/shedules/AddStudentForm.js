Ext.define('manage.view.shedules.AddStudentForm', {
	requires : ['manage.view.shedules.AddStudentGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.addstudentform',
	width:700,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'sub_id'} ,{xtype : 'hidden',name : 'sd_id'},{xtype : 'hidden',name : 'week'} ,{xtype : 'hidden',name : 'c_id'},{xtype:'addstudentgrid'}],
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
