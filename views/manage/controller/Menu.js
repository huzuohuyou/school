Ext.define('manage.controller.Menu', {
	extend : 'Ext.app.Controller',
	// requires : 'manage.store.Menu',
	refs : [ {
		ref : 'manageMenu',
		selector : 'managemenu'
	}, {
		ref : 'tabPanel',
		selector : 'tabpanel'
	}, {
		ref : 'headerpanel',
		selector : 'headerPanel'
	} ],
	totalMenu : 9999,
	init : function() {
		this.control({
			'managemenu' : {
				beforerender : this.loadList,
				itemmousedown : this.loadTab
			},
			'headerpanel button[action=logout]' : {
				click : this.logout
			}
			
		});
	},
	loadTab : function(selModel, record) {
		var me = this;
		Ext.getBody().mask('正在加载....');
		if (record.get('leaf')) {
			Ext.require('manage.controller.' + record.get('controller'),
					function() {
						var controller = this.application.getController(record
								.get('controller'));
						controller.openTab(me, record);
					}, me);
		}
	},
	loadList : function() {
		Ext.getBody().mask('正在加载系统菜单....');
		Ext.Ajax.request({
			url : 'system.do', // 请求地址
			params : {
				action : 'getMenu',
				id : 'root',
				role : session.role_id
			}, // 请求参数
			method : 'post', // 方法
			callback : this.addTree,
			scope : this
		// 调用回调函数
		});

	},
	cancleMask : function(){
		if(totalMenu == 1 || totalMenu == 0)
			Ext.getBody().unmask();
		else 
			totalMenu = totalMenu-1;
	},
	addTree : function(options, success, response) {
		data = Ext.JSON.decode(response.responseText);
		totalMenu = data.length;
		if(totalMenu==0) {
			Ext.getBody().unmask();
			return;
		}
		var me = this;
		var createStore = function(id) { // 创建树面板数据源

			return Ext.create("manage.store.Menu", {
				defaultRootId : id, // 默认的根节点id
				clearOnLoad : true,
				nodeParam : "id",
				filters : [ {
					property : "role",
					value : session.role_id
				} ],
				listeners : {
					load : me.cancleMask
				}
			});
		};
		
		var menu = this.getManageMenu();
		for ( var i = 0; i < data.length; i++) {
			var treePanel = Ext.create("Ext.tree.Panel", {
				title : data[i].text,
				iconCls : data[i].iconCls,
				// useArrows: true,
				autoScroll : true,
				rootVisible : false,
				viewConfig : {
					loadingText : "正在加载..."
				},
				store : createStore(data[i].id),
				listeners : {
					itemclick : this.loadTab,
					scope : this
				}
			});
			menu.add(treePanel);
			menu.doLayout();

		}
	},
	logout : function(button) {
		Ext.MessageBox.confirm('提示', '您是否确定注销登陆？', function(btn) {
			if (btn == 'yes') {
				var me = self;
				var role = session.role_id;
				Ext.Ajax.request({
					url : 'logout.do',
					success : function() {
						if(role=='17')
							{
							location.replace('student_admin.jspx');
							}
						else
							{
							location.replace('admin.jspx');
							}
						
					}
				});

			}
		});
	}
});
