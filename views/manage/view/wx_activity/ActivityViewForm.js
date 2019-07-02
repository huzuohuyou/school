Ext.define('manage.view.wx_activity.ActivityViewForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.wxactivityreadingviewform',
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout: {
        columns: 2,
        type: 'table'
    },
	border : false,
	items : [{
		xtype : 'displayfield',
		name : 'c_name',
		fieldLabel : '所属栏目'
	},{
		xtype : 'fieldcontainer',
		rowspan : 3,
		fieldLabel : '图片',
		labelWidth : 60,
		items : [{
			xtype : 'box',
			id : 'browseImage1',
			autoEl : {
				width : 100,
				height : 100,
				tag : 'img',
				// type : 'image',
				src : Ext.BLANK_IMAGE_URL,
				style : 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale);',
				complete : 'off',
				id : 'imageBrowse1'
			}
		}]
	},{
		xtype : 'displayfield',
		name : 'reading_title',
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
		name : 'reading_content'
	}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});