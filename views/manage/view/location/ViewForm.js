Ext.define('manage.view.location.ViewForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.locationviewform',
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
		name : 'c_name',
		fieldLabel : '班级'
	}, {
		xtype : 'displayfield',
		name : 's_number',
		fieldLabel : '学号'
	}, {
		xtype : 'displayfield',
		name : 'time',
		fieldLabel : '日期'
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