Ext.define('manage.view.teacher.EnteringinForm', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree',
			'manage.view.ux.PicField', 'manage.view.ux.StudentUploadForm'],
	alias : 'widget.enteringinform',
	layout : {
		columns : 2,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
		isUpload:true,
	    items : [{
				  xtype : 'studentuploadform',
				  inputType : 'file' ,
				  name :'student'
				 },
		         {
				xtype : 'hidden',
				name : 'id'
			     } ]
		});
		me.callParent(arguments);
	}
});