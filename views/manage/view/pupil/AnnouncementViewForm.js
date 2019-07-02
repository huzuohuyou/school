Ext.define('manage.view.pupil.AnnouncementViewForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.pupilannouncementviewform',
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
		name : 'head',
		fieldLabel : '标题'
	},{
		xtype : 'displayfield',
		name : 'time',
		fieldLabel : '时间'
	},{
		xtype : 'displayfield',
		name : 'c_name',
		fieldLabel : '班级'
	},{
		xtype : 'displayfield',
		name : 'text',
		fieldLabel : '内容'
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