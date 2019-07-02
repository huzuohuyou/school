Ext.define('manage.view.schedules.Form', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree' ],
	alias : 'widget.schedulesform',
	layout : {
		columns : 8,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		var c_store = Ext.create('manage.store.course.Course', {
			autoLoad : {
				limit : -1,
				start : 0
			}
		});
		Ext.applyIf(me, {
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课表名称',
				colspan : 5,
				name : 'name',
				width : 400,
				maxLength : 50,
				maxLengthText : '最多输入50个字符',
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'comboboxtree',
				store : Ext.create('manage.store.student.Class'),
				colspan : 3,
				editable : false,
				multiCascade : false,
				multiSelect : false,
				onlyLeaf : true,
				fieldLabel : '所属班级',
				name : 'c_id',
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'displayfield',
				value : '&nbsp&nbsp&nbsp&nbsp&nbsp'
			}, {
				xtype : 'displayfield',
				value : '周一'
			}, {
				xtype : 'displayfield',
				value : '周二'
			}, {
				xtype : 'displayfield',
				value : '周三'
			}, {
				xtype : 'displayfield',
				value : '周四'
			}, {
				xtype : 'displayfield',
				value : '周五'
			}, {
				xtype : 'displayfield',
				value : '周六'
			}, {
				xtype : 'displayfield',
				value : '周日'
			}, {
				xtype : 'hidden',
				name : 'id'
			}, {
				xtype : 'displayfield',
				value : '第一节'
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c00',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c10',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c20',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c30',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c40',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c50',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				width : 100,
				queryMode : 'local',
				name : 'c60',
				editable : false
			}, {
				xtype : 'displayfield',
				value : '第二节'
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c01',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c11',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c21',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c31',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c41',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c51',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				width : 100,
				queryMode : 'local',
				name : 'c61',
				editable : false
			}, {
				xtype : 'displayfield',
				value : '第三节'
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c02',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c12',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c22',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c32',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c42',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c52',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				width : 100,
				queryMode : 'local',
				name : 'c62',
				editable : false
			}, {
				xtype : 'displayfield',
				value : '第四节'
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c03',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c13',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c23',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c33',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c43',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c53',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				width : 100,
				queryMode : 'local',
				name : 'c63',
				editable : false
			}, {
				xtype : 'displayfield',
				value : '第五节'
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c04',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c14',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c24',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c34',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c44',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c54',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				width : 100,
				queryMode : 'local',
				name : 'c64',
				editable : false
			}, {
				xtype : 'displayfield',
				value : '第六节'
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c05',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c15',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c25',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c35',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c45',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store :c_store,
				queryMode : 'local',
				name : 'c55',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				width : 100,
				queryMode : 'local',
				name : 'c65',
				editable : false
			}, {
				xtype : 'displayfield',
				value : '第七节'
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c06',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c16',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c26',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c36',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c46',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c56',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				width : 100,
				queryMode : 'local',
				name : 'c66',
				editable : false
			}, {
				xtype : 'displayfield',
				value : '第八节'
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c07',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c17',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c27',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c37',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c47',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store :c_store,
				queryMode : 'local',
				name : 'c57',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				width : 100,
				queryMode : 'local',
				name : 'c67',
				editable : false
			}, {
				xtype : 'displayfield',
				value : '第九节'
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c08',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c18',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c28',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c38',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c48',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c58',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				width : 100,
				queryMode : 'local',
				name : 'c68',
				editable : false
			}, {
				xtype : 'displayfield',
				value : '第十节'
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c09',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c19',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c29',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c39',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c49',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				queryMode : 'local',
				name : 'c59',
				width : 100,
				editable : false
			}, {
				xtype : 'mycombo',
				store : c_store,
				width : 100,
				queryMode : 'local',
				name : 'c69',
				editable : false
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