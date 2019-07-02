Ext.define('manage.view.parent.HomeworkViewForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.parenthomeworkviewform',
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
		name : 'course_name',
		fieldLabel : '科目'
	},{
		xtype : 'displayfield',
		//name : 'content',
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