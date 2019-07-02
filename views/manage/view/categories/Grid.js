Ext.define('manage.view.categories.Grid', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.categoriesgrid',
	autoScroll : true,
	region : 'center',
	useArrows : true,
	rootVisible : false,
	store : Ext.create('manage.store.categories.Categories'),
	multiSelect : false,
	singleExpand : false,
	// the 'columns' property is now 'headers'
	columns : [ {
		xtype : 'treecolumn', // this is so we
		// know which column
		// will show the
		// tree
		text : '菜单名称',
		flex : 2,
		menuDisabled : true,
		dataIndex : 'name'
	}, {

		text : '编辑',
		menuDisabled : true,
		xtype : 'actioncolumn',
		tooltip : '编辑',
		action : 'edit',
		align : 'center',
		hidden : session.authority.indexOf('b20103') > -1?false:true,
		icon : 'resources/images/icons/edit.png'
	}, {

		text : '增加下级',
		menuDisabled : true,
		xtype : 'actioncolumn',
		tooltip : '增加下级',
		action : 'insert',
		align : 'center',
		icon : 'resources/images/icons/add.png',
		hidden : session.authority.indexOf('b20102') > -1?false:true,
		isDisabled : function(view, rowIdx, colIdx, item, record) {
			if(record.data.level == 1)
				return false;
			else 
				return true;
		}
	}, {
		text : '是否显示',
		menuDisabled : true,
		xtype : 'actioncolumn',
		tooltip : '是否显示在首页菜单栏中',
		action : 'showornot',
		align : 'center',
		hidden : session.authority.indexOf('b20104') > -1?false:true,
				icon : 'resources/images/icons/ok.png',
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if ((session.authority.indexOf('b20104') > -1)&&record.data.default_flag =='0')
						return false;
					else
						return true;
				}
	}, {
		text : '删除',
		menuDisabled : true,
		xtype : 'actioncolumn',
		tooltip : '删除',
		action : 'delete',
		align : 'center',
		hidden : session.authority.indexOf('b20104') > -1?false:true,
		icon : 'resources/images/icons/remove.png'
	} ],
	tbar : [ {
		text : '新增一级菜单',
		action : 'addFirstLevel',
		hidden : session.authority.indexOf('b20102') > -1?false:true,
		icon : 'resources/images/icons/add.png'
	}, {
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