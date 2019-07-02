Ext.define('manage.view.schools.SchoolcourseForm', {
	requires : ['manage.view.schools.SchoolcourseGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.schoolcourseform',
	width:800,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'},{xtype:'schoolcoursegrid'}],
	buttons : [ {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});