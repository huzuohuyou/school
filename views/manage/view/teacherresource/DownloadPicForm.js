Ext.define('manage.view.teacherresource.DownloadPicForm', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree',
			'manage.view.ux.PicField', 'manage.view.ux.FileUploadForm'],
	alias : 'widget.downloadpicform',
	layout : {
		columns : 2,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
	    items : [{
	    	      xtype : 'displayfield',
			      fieldLabel : '点击下载',
			      name : 'f_name',
			      value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+record.data.id+'>'+"图片链接"+'</a>',
			      width : 400
				 },
		         {
				xtype : 'hidden',
				name : 'id'
			     } ]
		});
		me.callParent(arguments);
	}
});