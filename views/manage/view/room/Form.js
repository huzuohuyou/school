Ext.define('manage.view.room.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.roomform',
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
			items : [ {
				xtype : 'textfield',
				fieldLabel : '房间名称',
				name : 'name',
				vtype : 'checkroomname',
				maxLength: 50,
				vtypeText: "该房间名已经存在",
			    maxLengthText: "最长为50个字符",
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'mycombo',
				store : Ext.create('manage.store.ComboBox',{
									data : roomTypeData
								}),
				queryMode : 'local',
				fieldLabel : '房间类型',
				name : 'type',
				editable : false,
				afterLabelTextTpl : required,
				emptyText : '请选择',
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'numberfield',
				fieldLabel : '容纳人数',
				name : 'amount',
				minValue : 0,
				step : 1,
				allowDecimals : false,
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			}, {
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