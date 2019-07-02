Ext.define('manage.view.pupil.LocationViewForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.pupillocationviewform',
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout: {
        columns: 1,
        type: 'table'
    },
	border : false,
	items : [ {
		xtype : 'displayfield',
		name : 'time',
		fieldLabel : '时间'
	},{
		xtype : 'displayfield',
		name : 'location',
		fieldLabel : '地点'
	},{
		xtype : 'displayfield',
		name : 'status',
		renderer : locationRender,
		fieldLabel : '状态'
	},{
		xtype : 'panel',
		autoScroll : true,
		header : false,
		border : false,
		height :400,
		width : 900,
		name : 'content'
	}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});