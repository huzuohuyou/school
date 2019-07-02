Ext.define('manage.controller.Banner', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'bannerGrid',
		selector : 'bannergrid'
	} ],
	views : ['banner.Form'],
	init : function(app) {
		this.control({
			'bannergrid button[action=insert]' : {
				click : this.add
			},
			'bannergrid button[action=query]' : {
				click : this.query
			},
			'bannergrid button[action=delete]' : {
				click : this.deleteItems
			},
			'bannergrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			
			'bannerform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	

	
	add : function(button) {
		if (session.authority.indexOf('b20502') > -1)
			createWin('添加', 'bannerform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b20501') > -1) {
			var grid = button.up('grid');
			var form = grid.up('panel').down('form');
			var params = form.getValues();
			var store = grid.getStore();
			store.on("beforeload", function() {
				store.proxy.extraParams = params;
			});
			store.loadPage(1);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	edit : function(grid, rowIndex, colIndex, actionItem, event, record, row) {
		if (session.authority.indexOf('b20503') > -1) {
			//获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp  
		    var curWwwPath=window.document.location.href;  
		    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp  
		    var pathName=window.document.location.pathname;  
		    var pos=curWwwPath.indexOf(pathName);  
		    //获取主机地址，如： http://localhost:8083  
		    var localhostPaht=curWwwPath.substring(0,pos);  
		    //获取带"/"的项目名，如：/uimcardprj  
		    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);  
		    //alert(localhostPaht+projectName);  
			var formWin = createWin('修改', 'bannerform');
			formWin.down('form').loadRecord(record);
			formWin.down('form').form.findField('f_name_link').setValue('<img wight=300 height=200 src='+localhostPaht+projectName+'/files/'+record.data.f_id +record.data.f_name.substring(record.data.f_name.indexOf("."))+' />');
				
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b20504') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f20504';
			deleteItems(grid, action, funcId);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	submit : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			action = 'insert';
			funcId = 'f20502';
		} else {
			action = 'update';
			funcId = 'f20503';
		}
		var win = button.up('window');
		var grid = this.getBannerGrid();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		
		var params = {
			action : action,
			funcId : funcId,
			u_id : session.id
		};
		formSubmit(form, params, freshfn);
	}
});