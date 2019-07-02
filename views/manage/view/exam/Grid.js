Ext.define('manage.view.exam.Grid', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.examgrid',
	region : 'center',
	useArrows : true,
	rootVisible : false,
	multiSelect : false,
	singleExpand : false,
	initComponent : function() {
		var store = Ext.create('manage.store.exam.Exam');
		Ext.apply(this, {
			store : store,
			columns : [ {
				xtype : 'treecolumn', // this is so we
				text : '考试名称',
				flex : 2,
				menuDisabled : true,
				dataIndex : 'name'
			},{
				text : '开始时间',
				flex : 1,
				menuDisabled : true,
				dataIndex : 'start_time'
			},{
				text : '结束时间',
				flex : 1,
				menuDisabled : true,
				dataIndex : 'end_time'
			},{
				text : '上分截至日期',
				flex : 1,
				menuDisabled : true,
				dataIndex : 'edit_date'
			}, {

				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'edit',
				align : 'center',
				hidden : session.authority.indexOf('b30503') > -1?false:true,
				icon : 'resources/images/icons/edit.png'
			}, {

				text : '增加科目',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '增加科目',
				action : 'insert',
				align : 'center',
				icon : 'resources/images/icons/add.png',
				hidden : session.authority.indexOf('b30502') > -1?false:true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					return record.data.leaf
				}
			}, {
				text : '删除',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '删除',
				action : 'delete',
				align : 'center',
				hidden : session.authority.indexOf('b30504') > -1?false:true,
				icon : 'resources/images/icons/remove.png'
			} ],
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b30501') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-',{
				text : '新增考试',
				action : 'addFirstLevel',
				hidden : session.authority.indexOf('b30502') > -1?false:true,
				icon : 'resources/images/icons/add.png'
			}, '-', {
				text : '刷新',
				icon : 'resources/images/icons/refresh.png',
				listeners : {
					'click' : function() {
						this.up('panel').getStore().load();
					}
				}
			}, '-', {
				icon : 'resources/images/icons/expand-all.gif',
				tooltip : '全部展开',
				listeners : {
					click : function() {
						this.up('panel').expandAll();
					}
				}
			}, {
				icon : 'resources/images/icons/collapse-all.gif',
				tooltip : '全部收起',
				listeners : {
					click : function() {
						this.up('panel').collapseAll();
					}
				}
			}]
		});
		this.callParent(arguments);
	}
});