Ext.define('manage.view.chargeworkorderactivity.AddPersonForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.addpersonform',
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
			items : [{
				xtype : 'mycombo',
				store : Ext.create('manage.store.activity.AddActionPlan',{
					autoLoad : {limit : 100,start : 0}
				}),
				width : 400,
				queryMode : 'local',
				fieldLabel : '分配活动策划人',
				displayfield:'name',
				labelAlign : 'right',
				name : 'planUserId',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype : 'mycombo',
				store : Ext.create('manage.store.activity.AddActionExecute',{
					autoLoad : {limit : 100,start : 0}
				}),
				width : 400,
				queryMode : 'local',
				fieldLabel : '分配活动执行人',
				displayfield:'name',
				labelAlign : 'right',
				name : 'actionUserId',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype : 'hidden',
				name : 'id'
			},{
				xtype : 'hidden',
				name : 'activity_id'
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