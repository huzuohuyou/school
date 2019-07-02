Ext.define('manage.view.shedules.ViewForm', {
	requires : ['manage.view.shedules.TabPanel'],
	extend : 'Ext.form.Panel',
	alias : 'widget.shedulesviewform',
	width: 1200,
    height: 550,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'school_id'} ,{xtype : 'hidden',name : 's_id'},{xtype : 'hidden',name : 'term'} ,{xtype : 'hidden',name : 'year'} ,{xtype : 'hidden',name : 's_name'} ,{xtype:'shedulestabpanel'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
