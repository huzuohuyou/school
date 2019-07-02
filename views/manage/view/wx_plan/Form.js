Ext.define('manage.view.wx_plan.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.wx_planform',
	requires : [ 'manage.view.ux.UEditor', 'manage.view.ux.ComboBox',
			'manage.model.categories.Categories', 'manage.view.ux.PicField' ],
	bodyPadding : 10,
	//header : false,
	buttonAlign : 'center',
	layout : {
		columns : 2,
		type : 'table'
	},
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [{
				xtype : 'textfield',
				name : 'short_title',
				fieldLabel : '首页标题',
				width : 400,
				afterLabelTextTpl : required,
				emptyText : '请填写显示在首页的标题',
			},{
				xtype : 'textfield',
				name : 'title',
				fieldLabel : '文章标题',
				width : 400,
				afterLabelTextTpl : required,
				emptyText : '必须填写页面标题',
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'picfield',
				fieldLabel : '图片',
				name : 'pic',
				width : 400
			},
			{
				xtype:'checkbox',
				fieldLabel:'置顶',
				id :'stickie_a',
				name:'stickie_a',
				boxlabel:'是否置顶',
				checked:false,
			//	colspan:2,
				width:400
			},{
				xtype:'checkbox',
				fieldLabel:'是否显示在最新',
				id :'news_a',
				name:'news_a',
				boxlabel:'是否显示在最新',
				checked:false,
				colspan:2,
				width:900
			},{
				xtype : 'ueditor',
				fieldLabel : '页面内容',
				width : 900,
				height : 400,
				name : 'content',
				colspan:2,
				
			},			
			{
				xtype: 'hidden',
				id:'stickie',
				name:'stickie'
			},
			{
				xtype: 'hidden',
				id:'news',
				name:'news'
			},
			{
				xtype: 'hidden',
				id:'stickie_time',
				name:'stickie_time'
			},
			{
				xtype : 'hidden',
				name : 'id'
			},
			{
				xtype : 'hidden',
				name : 'c_id',
				value: '8' //生涯规划
			}]
		});
		me.callParent(arguments);
	},
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