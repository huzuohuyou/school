Ext.define('manage.view.charger.AddChargeSchoolForm', {
	requires : ['manage.view.charger.AddChargeSchoolGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.addchargeschoolform',
	width: 600,
    height: 400,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 's_id'},{xtype:'addchargeschoolgrid'}],
	buttons : [{
		text : '确定',
		action : 'submit'
	},{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});