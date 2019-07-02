Ext.define('manage.view.headteacher.LocationViewForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.headteacherlocationviewform',
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
		name : 's_number',
		width : 300,
		fieldLabel : '学号'
	}, {
		xtype : 'displayfield',
		name : 's_name',
		fieldLabel : '姓名'
	},{
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
	}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});