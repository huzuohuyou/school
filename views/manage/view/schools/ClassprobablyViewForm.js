Ext.define('manage.view.schools.ClassprobablyViewForm', {
	requires : ['manage.view.schools.ClassprobablyGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.classprobablyviewform',
	width: 1200,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'pre_courses_id'} ,{xtype:'probably_classgrid'}],
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
