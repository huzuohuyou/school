Ext.define('manage.view.wx_research_out.ResearchOutReadingViewForm', {
	requires : ['manage.view.wx_research_out.ResearchOutReadingGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.researchoutreadingviewform',
	width: 900,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'},{xtype:'researchoutreadinggrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});