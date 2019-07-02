Ext.define('manage.controller.Bottom', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'bottomGrid',
		selector : 'bottomgrid'
	} ],
	views : ['bottom.Form'],
	init : function(app) {
		this.control({
			'bottomgrid button[action=insert]' : {
				click : this.add
			},
			'bottomgrid button[action=query]' : {
				click : this.query
			},
			'bottomgrid button[action=delete]' : {
				click : this.deleteItems
			},
			'bottomgrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			
			'bottomform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	

	
	add : function(button) {
		if (session.authority.indexOf('b20602') > -1)
			createWin('添加', 'bottomform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b20601') > -1) {
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
		if (session.authority.indexOf('b20603') > -1) {
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
			var formWin = createWin('修改', 'bottomform');
			formWin.down('form').loadRecord(record);
			formWin.down('form').form.findField('img1_nameLink').setValue('<img wight=300 height=200 src='+localhostPaht+projectName+'/files/'+record.data.img1_fid +record.data.img1_fname.substring(record.data.img1_fname.indexOf("."))+' />');
			formWin.down('form').form.findField('img2_nameLink').setValue('<img wight=300 height=200 src='+localhostPaht+projectName+'/files/'+record.data.img2_fid +record.data.img2_fname.substring(record.data.img2_fname.indexOf("."))+' />');

		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b20604') > -1) {
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
			funcId = 'f20602';
		} else {
			action = 'update';
			funcId = 'f20603';
		}
		var win = button.up('window');
		var grid = this.getBottomGrid();
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