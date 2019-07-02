Ext.define('manage.view.shedules.Shedules_DetailViewForm', {
	requires : ['manage.view.shedules.Shedules_DetailGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.shedules_detailviewform',
	width: 1200,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'sd_id'},{xtype : 'hidden',name : 'c_id'},{xtype : 'hidden',name : 'c_name'},{xtype : 'hidden',name : 's_id'},{xtype : 'hidden',name : 's_name'},{xtype : 'hidden',name : 'week'},{xtype:'shedules_detailgrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});