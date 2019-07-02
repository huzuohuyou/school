Ext.define('manage.view.courses.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.coursesgrid',
	
	initComponent : function() {
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
	        groupHeaderTpl: '课程类型: {name} ({rows.length} 门)',
	      //  hideGroupedHeader: true
	    });
		var store = Ext.create('manage.store.courses.Courses');
		renderTo:Ext.getBody();
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			features: [groupingFeature],
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b30101') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b30102') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b30104') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			},'-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b30102') > -1 ? false : true,
				action : 'typeincourses',
				text : '录入课程'
			},'-', {
				iconCls : 'query',
				xtype : 'button',
				action : 'coursesexcel',
				text : '导出excel',
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '课程编号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '课程名称',
				dataIndex : 'name',
				flex : 1,
				renderer : function(v) {
                    return "<span style='margin-right:10px'><a href='#' onclick='' style='text-decoration:none'>"+v+"</a></span>";
                }
			},{
				text : '课程类型',
				dataIndex : 'type_name',
				//renderer :courseTypeRender,
				flex : 1
			},
			{
				text : '课程级别',
				dataIndex : 'grade',
				renderer : coursegradeRender,
				flex : 1
			},
			{
				text : '适合年级',
				dataIndex : 'stage',
				flex : 1
			},
			{
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				hideable: false,
				action : 'edit',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b30103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b30103') > -1)
						return false;
					else
						return true;
				}
			}
			
			],
			listeners: {
	            cellclick: function( thi, td, cellIndex, record, tr, rowIndex, e, eOpts) {
	            	if(cellIndex == 2)
	              {
	            		var formWin = createWin('查看备注', 'coursesviewform');
	        			formWin.down('form').loadRecord(record);
	        			formWin.down('panel[name=introduction]').update(record.data.introduction);
	              }
	            }
	        }
		});
		this.callParent(arguments);
	}
});