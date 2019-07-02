Ext.define('manage.view.wx_research_in.ResearchInReadingViewForm', {
	requires : ['manage.view.wx_research_in.ResearchInReadingGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.researchinreadingviewform',
	width: 900,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'},{xtype:'researchinreadinggrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});