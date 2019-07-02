Ext.define('manage.view.wx_odds.OddsReadingViewForm', {
	requires : ['manage.view.wx_odds.OddsReadingGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.oddsreadingviewform',
	width: 900,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'},{xtype:'oddsreadinggrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});