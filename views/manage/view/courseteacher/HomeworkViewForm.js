Ext.define('manage.view.courseteacher.HomeworkViewForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherhomeworkviewform',
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
		name : 'date',
		fieldLabel : '日期'
	},{
		xtype : 'displayfield',
		name : 'c_names',
		fieldLabel : '班级'
	},{
		xtype : 'displayfield',
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