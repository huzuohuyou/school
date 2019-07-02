Ext.define('manage.view.schedules.ViewForm', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.schedulesviewform',
	layout : {
		columns : 8,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'displayfield',
				fieldLabel : '课表名称',
				colspan : 4,
				name : 'name'
			}, {
				xtype : 'displayfield',
				colspan : 4,
				fieldLabel : '所属班级',
				name : 'c_name'
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
				xtype : 'displayfield',
				name : 'c00',
				width : 100
			}, {
				xtype : 'displayfield',
				name : 'c10',
				width : 100
			}, {
				xtype : 'displayfield',
				name : 'c20',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c30',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c40',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c50',
				width : 100
				
			}, {
				xtype : 'displayfield',
				width : 100,
				name : 'c60'
				
			}, {
				xtype : 'displayfield',
				value : '第二节'
			}, {
				xtype : 'displayfield',
				name : 'c01',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c11',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c21',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c31',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c41',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c51',
				width : 100
				
			}, {
				xtype : 'displayfield',
				width : 100,
				name : 'c61'
				
			}, {
				xtype : 'displayfield',
				value : '第三节'
			}, {
				xtype : 'displayfield',
				name : 'c02',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c12',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c22',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c32',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c42',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c52',
				width : 100
				
			}, {
				xtype : 'displayfield',
				width : 100,
				name : 'c62'
				
			}, {
				xtype : 'displayfield',
				value : '第四节'
			}, {
				xtype : 'displayfield',
				name : 'c03',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c13',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c23',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c33',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c43',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c53',
				width : 100
				
			}, {
				xtype : 'displayfield',
				width : 100,
				name : 'c63'
				
			}, {
				xtype : 'displayfield',
				value : '第五节'
			}, {
				xtype : 'displayfield',
				name : 'c04',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c14',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c24',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c34',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c44',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c54',
				width : 100
				
			}, {
				xtype : 'displayfield',
				width : 100,
				name : 'c64'
				
			}, {
				xtype : 'displayfield',
				value : '第六节'
			}, {
				xtype : 'displayfield',
				name : 'c05',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c15',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c25',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c35',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c45',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c55',
				width : 100
				
			}, {
				xtype : 'displayfield',
				width : 100,
				name : 'c65'
				
			}, {
				xtype : 'displayfield',
				value : '第七节'
			}, {
				xtype : 'displayfield',
				name : 'c06',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c16',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c26',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c36',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c46',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c56',
				width : 100
				
			}, {
				xtype : 'displayfield',
				width : 100,
				name : 'c66'
				
			}, {
				xtype : 'displayfield',
				value : '第八节'
			}, {
				xtype : 'displayfield',
				name : 'c07',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c17',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c27',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c37',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c47',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c57',
				width : 100
				
			}, {
				xtype : 'displayfield',
				width : 100,
				name : 'c67',
				
			}, {
				xtype : 'displayfield',
				value : '第九节'
			}, {
				xtype : 'displayfield',
				name : 'c08',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c18',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c28',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c38',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c48',
				width : 100
				
			}, {
				xtype : 'displayfield',
				name : 'c58',
				width : 100
			}, {
				xtype : 'displayfield',
				width : 100,
				name : 'c68'
			}, {
				xtype : 'displayfield',
				value : '第十节'
			}, {
				xtype : 'displayfield',
				name : 'c09',
				width : 100
			}, {
				xtype : 'displayfield',
				name : 'c19',
				width : 100
			}, {
				xtype : 'displayfield',
				name : 'c29',
				width : 100
			}, {
				xtype : 'displayfield',
				name : 'c39',
				width : 100
			}, {
				xtype : 'displayfield',
				name : 'c49',
				width : 100
			}, {
				xtype : 'displayfield',
				name : 'c59',
				width : 100
			}, {
				xtype : 'displayfield',
				width : 100,
				name : 'c69'
			}]
		});
		me.callParent(arguments);
	},
	buttons : [  {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});