Ext.define('manage.view.teacherlibrary.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teacherlibrarygrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teacher.Teacherlibrary');
		renderTo:Ext.getBody();
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
		    selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b40301') > -1 ? false : true,
				action : 'query',
				text : '查询'
			},'-',
			{
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b40304') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			},'-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b40302') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-',{
				iconCls : 'query',
				xtype : 'button',
				hidden :false,
				action : 'teachersexcel',
				text : '导出Excel'
			}, '-',
			{
				iconCls : 'item-add',
				xtype : 'button',
				hidden :false,
				action : 'typein',
				text : '导入教师名单'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ 
		     {
				text : '姓名',
				dataIndex : 'name',
				flex : 1,
				
             
				
			},{
				text : '性别',
				dataIndex : 'sex',
				renderer : sexRender,
				flex : 0.4
			},
			{
				text : '所属机构',
				align : 'center',
				dataIndex : 'agency_name',
				flex : 1
			},
			{
				text : '联系电话',
				dataIndex : 'phone',
				flex : 1
			},	
			{
				text : '教师等级',
				dataIndex : 'rate',
				renderer :teacherrateRender,
				flex : 1
			},
			 {
				text : '在职状态',
				dataIndex : 'status',
				renderer:teacherstatusRender,
				menuDisabled : true,
				hideable: false, 
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'editstatus',
				width : 80,
				align : 'center',
				//icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b40306') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b40306') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '所教课程',
				menuDisabled : true,
				hideable: false, 
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'view',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b40303') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b40303') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '授课学校',
				menuDisabled : true,
				hideable: false, 
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'viewSchools',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/building.png',
				hidden : (session.authority.indexOf('b40303') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b40303') > -1)
						return false;
					else
						return true;
				}
			},
		    {
				text : '编辑',
				menuDisabled : true,
				hideable: false, 
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'edit',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b40303') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b40303') > -1)
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
	                var formWin = createWin('查看教师信息', 'teacherlibraryviewform');
	    			formWin.down('form').loadRecord(record);
	    			formWin.down('form').form.findField('sex').setValue(record.data.sex==0?'男':'女');
	              }
	            }
	        }
		});
		this.callParent(arguments);
	}
});