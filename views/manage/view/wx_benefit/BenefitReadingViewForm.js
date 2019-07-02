Ext.define('manage.view.wx_benefit.BenefitReadingViewForm', {
	requires : ['manage.view.wx_benefit.BenefitReadingGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.benefitreadingviewform',
	width: 900,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'},{xtype:'benefitreadinggrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});