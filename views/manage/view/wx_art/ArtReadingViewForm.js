Ext.define('manage.view.wx_art.ArtReadingViewForm', {
	requires : ['manage.view.wx_art.ArtReadingGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.artreadingviewform',
	width: 900,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'},{xtype:'artreadinggrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});