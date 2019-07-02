Ext.define('manage.view.schools.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.schoolsgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.schools.Schools');
		renderTo:Ext.getBody();
		Ext.apply(this, {
			store : store,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b130101') > -1 ? false : true,
				action : 'query',
				text : '查询全部'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '学校编号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '学校名称',
				dataIndex : 'name',
				flex : 1,
				renderer : function(v) {
                    return "<span style='margin-right:10px'><a href='#' onclick='' style='text-decoration:none'>"+v+"</a></span>";
                }
			},
			{
				text : '学校类型',
				dataIndex : 'type',
				flex : 1,
				renderer :schooltypeRender,
			},
			{
				text : '负责人',
				dataIndex : 'u_name',
				flex : 1
			},
			{
				text : '学校所在区',
				dataIndex : 'area',
				renderer :schoolAreaRender,
				flex : 1
			},
			{
				text : '联系人电话',
				dataIndex : 'telephone',
				flex : 1
			},
			{
				text : '预计参与人数',
				dataIndex : 'studentcount',
				flex : 1
			}
			],
			listeners: {
	            cellclick: function( thi, td, cellIndex, record, tr, rowIndex, e, eOpts) {
	            	if(cellIndex == 1)
	              {
	            		var formWin = createWin('查看学校备注', 'schoolsviewform');
	        			formWin.down('form').loadRecord(record);
	        			formWin.down('panel[name=remark]').update(record.data.remark);
	              }
	            }
	        }
		});
		this.callParent(arguments);
	}
});