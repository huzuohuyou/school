Ext.define('manage.view.courses.CoursesTypeInForm', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree',
			'manage.view.ux.PicField', 'manage.view.ux.CoursesUploadForm'],
	alias : 'widget.coursestypeinform',
	layout : {
		columns : 2,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
		isUpload:true,
	    items : [{
				  xtype : 'coursesuploadform',
				  inputType : 'file' ,
				  name :'courses'
				 },
		         {
				xtype : 'hidden',
				name : 'id'
			     } ]
		});
		me.callParent(arguments);
	}
});