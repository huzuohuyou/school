Ext.define('manage.view.salercontractactivity.ContractForm', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree',
			'manage.view.ux.PicField', 'manage.view.ux.FileUploadForm'],
	alias : 'widget.contractform',
	layout : {
		columns : 2,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
		isUpload:true,
	    items : [{
				  xtype : 'fileuploadform',
				  inputType : 'file' ,
				  name :'contractFile'
				 },
		         {
				xtype : 'hidden',
				name : 'id'
			     } ]
		});
		me.callParent(arguments);
	}
});