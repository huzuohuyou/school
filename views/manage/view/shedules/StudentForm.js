Ext.define('manage.view.shedules.StudentForm', {
	requires : ['manage.view.shedules.StudentGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.shedulesstudentform',
	width:700,
    height: 550,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 's_id'} ,{xtype : 'hidden',name : 'sd_id'} ,{xtype : 'hidden',name : 'sub_id'} ,{xtype : 'hidden',name : 'c_id'} ,{xtype : 'hidden',name : 'week'} ,{xtype:'shedulesstudentgrid'}],
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
