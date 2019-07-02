Ext.define('manage.view.charger.ChargerViewForm', {
	requires : ['manage.view.charger.ChargerSchoolGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.chargerviewform',
	width: 1000,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 's_id'},{xtype:'chargerschoolgrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});