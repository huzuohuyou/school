Ext.define('manage.view.wx_new.NewReadingViewForm', {
	requires : ['manage.view.wx_new.NewReadingGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.newreadingviewform',
	width: 900,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'},{xtype:'newreadinggrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});