Ext.define('manage.view.teacherrate.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teacherrategrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teacherrate.Teacherrate');
		renderTo:Ext.getBody();
		Ext.apply(this, {
			store : store,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b140101') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-',
			{
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b140111') > -1 ? false : true,
				action : 'downloadPic',
				text : '批量下载照片'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '教师编号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '姓名',
				dataIndex : 'name',
				flex : 1,
				renderer : function(v) {
                    return "<span style='margin-right:10px'><a href='#' onclick='' style='text-decoration:none'>"+v+"</a></span>";
                }
			},{
				text : '性别',
				dataIndex : 'sex',
				renderer : sexRender,
				flex : 1
			},
			{
				text : '教师评级',
				dataIndex : 'rate',
				align:'center',
				renderer :teacherrateRender,
				flex : 1
			},
		    {
				text : '课堂内容展示',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '课堂内容展示',
				action : 'classdetail',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b140102') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b140102') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '驻校管理人员评价',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 120,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b140103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b140103') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '评级',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'rate',
				width : 120,
				align : 'center',
				icon : 'resources/images/icons/operate.png',
				hidden : (session.authority.indexOf('b140106') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b140106') > -1)
						return false;
					else
						return true;
				}
			}
			],
			listeners: {
	            cellclick: function( thi, td, cellIndex, record, tr, rowIndex, e, eOpts) {
	            	if(cellIndex == 1)
	              {
	                var formWin = createWin('查看教师信息', 'teacherviewform');
	    			formWin.down('form').loadRecord(record);
	    			formWin.down('form').form.findField('sex').setValue(record.data.sex==0?'男':'女');
	              }
	            }
	        }
		});
		this.callParent(arguments);
	}
});