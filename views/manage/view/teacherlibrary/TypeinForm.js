Ext.define('manage.view.teacherlibrary.TypeinForm', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree',
			'manage.view.ux.PicField', 'manage.view.ux.TeacherUploadForm'],
	alias : 'widget.teacherlibrarytypeinform',
	layout : {
		columns : 2,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
		isUpload:true,
	    items : [{
				  xtype : 'teacheruploadform',
				  inputType : 'file' ,
				  name :'teacher'
				 },
		         {
				xtype : 'hidden',
				name : 'id'
			     } ]
		});
		me.callParent(arguments);
	}
});