Ext.define('manage.view.teacherrate.RateViewForm', {
	requires : ['manage.view.teacherrate.RateGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.rateviewform',
	width: 1000,
    height: 400,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'}, {xtype : 'hidden',name : 'number'},{xtype : 'hidden',name : 'name'},{xtype : 'hidden',name : 'courses_name'},{xtype:'rategrid'}],
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