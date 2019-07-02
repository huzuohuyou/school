Ext.define('manage.view.class.Form', {
	extend : 'manage.view.moudle.Form',
	requires : ['manage.view.ux.ComboBox'],
	alias : 'widget.classform',
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				name : 'name',
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'numberfield',
				fieldLabel : '排序',
				name : 'order_flag',
				minValue : 1,
				step : 1,
				allowDecimal : false,
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'mycombo',
				store : Ext.create('manage.store.room.Room',{
					autoLoad : {limit : -1,start : 0,type : 1},
					proxy : {
						type : 'ajax',
						url : 'system.do?action=queryByCondition&funcId=s30202',
						reader : {
							type : 'json',
							root : 'data',
							totalProperty : 'totalCount',
							successProperty : 'success'
						}
					}
				}),
				queryMode : 'local',
				fieldLabel : '教室',
				typeAhead : true,
				triggerAction : 'all',
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false,
				selectOnTab : true,
				forceSelection : true,
				name : 'r_id'
			},{
				xtype : 'mycombo',
				store : Ext.create('manage.store.teacher.Teacher',{
					autoLoad : {limit : -1,start : 0,ischarge : 1},
					proxy : {
						type : 'ajax',
						url : 'system.do?action=queryByCondition&funcId=s40101',
						reader : {
							type : 'json',
							root : 'data',
							totalProperty : 'totalCount',
							successProperty : 'success'
						}
					}
				}),
				queryMode : 'local',
				fieldLabel : '班主任',
				typeAhead : true,
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false,
				triggerAction : 'all',
				selectOnTab : true,
				forceSelection : true,
				name : 'charge'
			}, {
				xtype : 'hidden',
				name : 'id'
			}, {
				xtype : 'hidden',
				name : 'p_id'
			}, {
				xtype : 'hidden',
				name : 'level'
			}, {
				xtype : 'hidden',
				name : 'leaf'
			}, {
				xtype : 'hidden',
				name : 'path'
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