Ext.define('manage.view.wx_benefit.BenefitReadingForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.benefitreadingform',
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
				name : 'reading_title',
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
				xtype : 'ueditor',
				fieldLabel : '页面内容',
				width : 900,
				height : 400,
				name : 'reading_content',
				colspan:2,
				
			},
			
			{
				xtype: 'hidden',
				id:'is_show',
				name:'is_show'
			},
			{
				xtype : 'hidden',
				name : 'id'
			},
			{
				xtype : 'hidden',
				name : 'p_id'
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