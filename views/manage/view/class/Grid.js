Ext.define('manage.view.class.Grid', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.classgrid',
	autoScroll : true,
	region : 'center',
	useArrows : true,
	rootVisible : false,
	store : Ext.create('manage.store.class.Class'),
	multiSelect : false,
	singleExpand : false,
	// the 'columns' property is now 'headers'
	columns : [ {
		xtype : 'treecolumn', // this is so we
		// know which column
		// will show the
		// tree
		text : '名称',
		flex : 2,
		menuDisabled : true,
		dataIndex : 'name'
	},{
		text : '顺序',
		dataIndex : 'order_flag',
	}, {
		text : '编辑',
		menuDisabled : true,
		xtype : 'actioncolumn',
		tooltip : '编辑',
		action : 'edit',
		align : 'center',
		hidden : session.authority.indexOf('b30302') > -1?false:true,
		icon : 'resources/images/icons/edit.png',
		isDisabled : function(view, rowIdx, colIdx, item, record) {
			if(record.data.level == 1)
				return true;
			else 
				return false;
		}
	}, {

		text : '增加下级',
		menuDisabled : true,
		xtype : 'actioncolumn',
		tooltip : '增加下级',
		action : 'insert',
		align : 'center',
		icon : 'resources/images/icons/add.png',
		hidden : session.authority.indexOf('b30301') > -1?false:true,
		isDisabled : function(view, rowIdx, colIdx, item, record) {
			if(record.data.level == 3)
				return true;
			else 
				return false;
		}
	}, {
		xtype : 'actioncolumn',
		text : '启用',
		action : 'yes',
		hideable : false,
		menuDisabled : true,
		align : 'center',
		icon : 'resources/images/icons/ok.png',
		width : 60,
		isDisabled : function(view, rowIdx, colIdx, item,
				record) {
			if (record.data.del_flag == 0
					&& session.authority.indexOf('b30303') > -1)
				return false;
			else
				return true;
		}
	},
	{
		xtype : 'actioncolumn',
		text : '禁用',
		action : 'no',
		hideable : false,
		menuDisabled : true,
		align : 'center',
		icon : 'resources/images/icons/no.png',
		width : 60,
		isDisabled : function(view, rowIdx, colIdx, item,
				record) {
			if (record.data.del_flag == 1
					&& session.authority.indexOf('b30303') > -1)
				return false;
			else
				return true;
		}
	} ],
	tbar : [ {
		text : '刷新',
		icon : 'resources/images/icons/refresh.png',
		listeners : {
			'click' : function() {
				this.up('panel').getStore().load();
			}
		}
	}, {
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