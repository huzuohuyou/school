Ext.define('manage.view.picture.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.pictureform',
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
			items : [ {
				xtype : 'mycombo',
				store : Ext.create('manage.store.picture.Categories'),
				queryMode : 'local',
				width : 400,
				fieldLabel : '所属栏目',
				name : 'c_id',
				editable : false,
				afterLabelTextTpl : required,
				emptyText : '必须选择所属栏目',
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'textfield',
				name : 'title',
				fieldLabel : '页面标题',
				width : 400,
				afterLabelTextTpl : required,
				emptyText : '必须填写页面标题',
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'picfield',
				fieldLabel : '图片',
				name : 'pic',
				width : 400
			}, {
				xtype : 'textfield',
				fieldLabel : '图文外链网址',
				vtype:'url',
				vtypeText:'不是有效的网址',
				name : 'outURL',
				width : 400
			},{
				xtype : 'ueditor',
				fieldLabel : '页面内容',
				width : 900,
				height : 400,
				name : 'content',
				colspan:2,
				
			},
			{
				xtype:'checkbox',
				fieldLabel:'置顶',
				id :'stickie_a',
				name:'stickie_a',
				boxlabel:'是否置顶',
				checked:false,
				colspan:2,
				width:800
			},
			{
				xtype: 'hidden',
				id:'stickie',
				name:'stickie'
			},
			{
				xtype : 'hidden',
				name : 'id'
			} ]
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