Ext.define('manage.view.teacherresource.ViewForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherpictureviewform',
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout: {
        columns: 1,
        type: 'table'
    },
	border : false,
	items : [{
		xtype : 'fieldcontainer',
		items : [{
			xtype : 'box',
			id : 'browseImage',
			autoEl : {
				width : 400,
				height : 400,
				tag : 'img',
				// type : 'image',
				src : Ext.BLANK_IMAGE_URL,
				style : 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale);',
				complete : 'off',
				id : 'imageBrowse'
			}
		}]
	}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});