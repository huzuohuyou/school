Ext.define('manage.view.pre_courses.TermForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.termform',
	requires : [ 'manage.view.ux.ComboBox' ],
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout : {
		columns : 1,
		type : 'table'
	},
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [
		    {
				xtype : 'mycombo',
				store : Ext.create('manage.store.pre_courses.QuerySchool',{
					autoLoad : {limit : 1000,start : 0}
				}),
				queryMode : 'local',
				fieldLabel : '推荐学校',
				displayfield:'name',
				width : 400,
				labelAlign : 'right',
				name : 's_id',
				editable : false,
				afterLabelTextTpl: required,
			    blankText: '此项为必填项',
			    allowBlank: false
			},
			{
				xtype : 'mycombo',
				fieldLabel : '推荐学期',
				labelAlign : 'right',
				emptyText : '请选择学期',
				name : 'term',
				width : 400,
				store:[["1","上半学年"],["2","下半学年"]],
				editable : false,
				afterLabelTextTpl: required,
			    blankText: '此项为必填项',
			    allowBlank: false
			},{
				xtype : 'textfield',
				fieldLabel : '课表名称',
				labelAlign : 'right',
				emptyText : '请填写课表名称,尽量明确',
				name : 'name',
				width : 400,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, {
				xtype : 'hidden',
				name : 'id'
			},{
				xtype : 'hidden',
				name : 'year'
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