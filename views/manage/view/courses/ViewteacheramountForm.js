Ext.define('manage.view.courses.ViewteacheramountForm', {
	requires : ['manage.view.courses.TeacheramountGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teacheramountviewform',
	width: 800,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'c_id'} ,{xtype:'teacheramountgrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});