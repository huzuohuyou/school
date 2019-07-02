Ext.define('manage.view.pre_courses.ListForm', {
	requires : ['manage.view.pre_courses.ListGrid','manage.view.pre_courses.Listqueryform'],
	extend : 'Ext.form.Panel',
	alias : 'widget.listform',
	width:1000,
    height: 650,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [
	         {xtype : 'hidden',name : 'pre_courses_id'} ,
	         {xtype : 'hidden',name : 's_id'} ,
	         {xtype : 'hidden',name : 'term'} ,
	         {xtype : 'hidden',name : 'year'} ,
	         {xtype:'listgrid'},
	         {xtype:'listqueryform'}],
	buttons : [ {
		text : '确定',
		action : 'submit'
	}, {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
