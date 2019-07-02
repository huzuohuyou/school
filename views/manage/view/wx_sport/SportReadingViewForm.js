Ext.define('manage.view.wx_sport.SportReadingViewForm', {
	requires : ['manage.view.wx_sport.SportReadingGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.sportreadingviewform',
	width: 900,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'},{xtype:'sportreadinggrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});