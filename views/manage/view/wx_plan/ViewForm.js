Ext.define('manage.view.wx_plan.ViewForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.wx_planviewform',
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout: {
        columns: 2,
        type: 'table'
    },
	border : false,
	items : [ {
		xtype : 'displayfield',
		name : 'short_title',
		fieldLabel : '页面标题'
	},{
		xtype : 'fieldcontainer',
		rowspan : 3,
		fieldLabel : '图片',
		labelWidth : 60,
		items : [{
			xtype : 'box',
			id : 'browseImage',
			autoEl : {
				width : 100,
				height : 100,
				tag : 'img',
				// type : 'image',
				src : Ext.BLANK_IMAGE_URL,
				style : 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale);',
				complete : 'off',
				id : 'imageBrowse'
			}
		}]
	},{
		xtype : 'displayfield',
		name : 'title',
		fieldLabel : '文章标题'
	},{
		xtype : 'displayfield',
		fieldLabel : '页面内容'
	},{
		xtype : 'panel',
		autoScroll : true,
		header : false,
		border : false,
		height :400,
		width : 900,
		colspan : 2,
		name : 'content'
	}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});