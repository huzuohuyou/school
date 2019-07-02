Ext.define('manage.view.onlinestudent.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.onlinestudentgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.onlinestudent.Onlinestudent');
		var studentstore = Ext.create('manage.store.onlinestudent.s_CountOnline');
		studentstore.load(function() {
			var records = studentstore.getRange(0, 1);
			for (var i = 0; i < records.length; i++) {
			    var record = records[i];
			    Ext.getCmp('sumstudent').setValue(record.data.sumstudent+" 人");
				Ext.getCmp('countstudent').setValue(record.data.countstudent+" 人");
				Ext.getCmp('s_chuqinlv').setValue((record.data.sumstudent / record.data.countstudent * 100).toFixed(2)+" %");
			}

			
		});
		Ext.apply(this, {
			store : store,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b40701') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b40702') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b40704') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}, {
				
				xtype : 'displayfield',
				fieldLabel : '在校学生:',
				labelAlign : 'right',
				value : '',
				id : 'sumstudent',
				name : 'sumstudent'
			}, {
				
				xtype : 'displayfield',
				labelAlign : 'right',
				fieldLabel : '共有学生:',
				value : '',
				id : 'countstudent',
				name : 'countstudent'
			}, {
				
				xtype : 'displayfield',
				labelAlign : 'right',
				fieldLabel : '出勤率:',
				value : '',
				id : 's_chuqinlv',
				name : 's_chuqinlv'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '学号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '姓名',
				dataIndex : 'name',
				flex : 1
			},{
				text : '出入时间',
				dataIndex : 'time',
				flex : 1
			},{
				text : '状态',
				dataIndex : 'status',
				renderer : onlineRender,
				flex : 1
			}
			]
		});
		this.callParent(arguments);
	}

});