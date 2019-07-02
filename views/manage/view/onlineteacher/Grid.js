Ext.define('manage.view.onlineteacher.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.onlineteachergrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.onlineteacher.Onlineteacher');
		var teacherstore = Ext.create('manage.store.onlineteacher.t_CountOnline');
		teacherstore.load(function() {
			var records = teacherstore.getRange(0, 1);
			for (var i = 0; i < records.length; i++) {
			    var record = records[i];
			    Ext.getCmp('sumteacher').setValue(record.data.sumteacher+" 人");
				Ext.getCmp('countteacher').setValue(record.data.countteacher+" 人");
				Ext.getCmp('chuqinlv').setValue((record.data.sumteacher / record.data.countteacher * 100).toFixed(2)+" %");
			}

			
		});
		Ext.apply(this, {
			store : store,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b40601') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b40602') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b40604') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}, {
				
				xtype : 'displayfield',
				fieldLabel : '在校教师:',
				labelAlign : 'right',
				value : '',
				id : 'sumteacher',
				name : 'sumteacher'
			}, {
				
				xtype : 'displayfield',
				labelAlign : 'right',
				fieldLabel : '共有教师:',
				value : '',
				id : 'countteacher',
				name : 'countteacher'
			}, {
				
				xtype : 'displayfield',
				labelAlign : 'right',
				fieldLabel : '出勤率:',
				value : '',
				id : 'chuqinlv',
				name : 'chuqinlv'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '工号',
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
			},{
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'edit',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b40603') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b40603') > -1)
						return false;
					else
						return true;
				}
			}
			]
		});
		this.callParent(arguments);
	}

});