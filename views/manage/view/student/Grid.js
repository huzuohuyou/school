Ext.define('manage.view.student.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.studentgrid',
	
	initComponent : function() {
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
	        groupHeaderTpl: '学校: {name} ({rows.length} 人)',
	      //  hideGroupedHeader: true
	    });
		var store = Ext.create('manage.store.student.Student');
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
				hidden : session.authority.indexOf('b50101') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b50102') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b50104') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			},'-',{
				iconCls : 'item-add',
				xtype : 'button',
				action : 'entering',
				text : '导入学生名单'
			},'-',{
				iconCls : 'query',
				xtype : 'button',
				action : 'studentsexcel',
				text : '导出Excel'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '教育ID',
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
			},{
				text : '所在学校',
				dataIndex : 'sc_name',
				flex : 1
			},{
				text : '年级',
				dataIndex : 'grad',
				flex : 1
			},{
				text : '班级',
				dataIndex : 'class',
				flex : 1
			},
			{
				text : '父亲电话',
				dataIndex : 'fatherphone',
				flex : 1
			},
			{
				text : '母亲电话',
				dataIndex : 'motherphone',
				flex : 1
			},
			 {
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				hideable: false, 
				tooltip : '编辑',
				hideable: false,
				action : 'edit',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b50103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b50103') > -1)
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
	            		var formWin = createWin('查看学生信息', 'studentviewform');
	        			formWin.down('form').loadRecord(record);
	        			formWin.down('form').form.findField('sex').setValue(record.data.sex==0?'男':'女');
	              }
	            }
	        }
		});
		this.callParent(arguments);
	}
});