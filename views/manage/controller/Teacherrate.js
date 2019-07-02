Ext.define('manage.controller.Teacherrate', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'teacherrateGrid',
		selector : 'teacherrategrid'
	},
	{
		ref : 'evaluateviewGrid',
		selector : 'evaluateviewgrid'
	},
	{
		ref : 'classcontentGrid',
		selector : 'classcontentgrid'
	},
	{
		ref : 'rateGrid',
		selector : 'rategrid'
	}],
	views : [ 'teacherrate.Grid', 'teacherrate.QueryForm','teacherrate.EvaluatesViewForm','teacherrate.ViewForm','teacherrate.ClasscontentViewForm','teacherrate.ClasscontentdetailViewForm','teacherrate.RateViewForm','teacherrate.RateForm','teacherrate.RatedetailViewForm','teacher.ViewForm'],
	init : function(app) {
		this.control({
			'teacherrategrid button[action=query]' : {
				click : this.query
			},
			'teacherrategrid button[action=downloadPic]' : {
				click : this.downloadPic
			},
			'teacherrategrid actioncolumn[action=view]' : {
				click : this.viewevaluate
			},
			'teacherrategrid actioncolumn[action=classdetail]' : {
				click : this.classdetail
			},
			'teacherrategrid actioncolumn[action=rate]' : {
				click : this.rate
			},
			'rategrid button[action=insert]' : {
				click : this.add
			},
			'rategrid button[action=delete]' : {
				click : this.deleteItems
			},
			'rategrid actioncolumn[action=viewratedetail]' : {
				click : this.viewratedetail
			},
			'evaluateviewgrid actioncolumn[action=viewevaluatedetail]' : {
				click : this.viewevaluatedetail
			},
			'classcontentgrid actioncolumn[action=viewclasscontent]' : {
				click : this.viewclasscontent
			},
			'rateform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	add : function(button) {
		if (session.authority.indexOf('b140108') > -1){
			var formWin =createWin('添加评级', 'rateform');
		    var form = button.up('form').form;
		    var id = form.findField('id').getValue();
		    var name = form.findField('name').getValue();
        	formWin.down('form').form.findField('id').setValue(id);
        	formWin.down('form').form.findField('name').setValue(name);
	}
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	  deleteItems: function(button) {
	        if (session.authority.indexOf('b140109') > -1) {
	            var grid = button.up('grid');
	            var action = 'realDelete';
	            var funcId = 'f140109';
	            deleteItems(grid, action, funcId);
	        } else {
	            Ext.Msg.alert('系统提示', '您无权进行此项操作');
	        }
	    },
	rate : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b140106') > -1) {
			var formWin = createWin('查看评价列表', 'rateviewform');
		    var grid = formWin.down('grid');
	        formWin.down('form').loadRecord(record);
        	formWin.down('form').form.findField('name').setValue(record.data.name);
        	formWin.down('form').form.findField('courses_name').setValue(record.data.courses_name);
	        formWin.down('form').form.findField('id').setValue(record.data.id);
	    
	        var params = {
	  	              id: record.data.id
	  	             };
	             
	  	    	var store = grid.getStore();
	             store.on("beforeload",
	              function() {
	                  store.proxy.extraParams = params;
	             });
	              store.loadPage(1);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewclasscontent : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b140105') > -1) {
			var formWin = createWin('查看图片信息', 'classcontentdetailviewform');
			formWin.down('form').loadRecord(record);
			Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
			formWin.down('panel[name=content]').update(record.data.content);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewratedetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b140110') > -1) {
			var formWin = createWin('查看图片信息', 'ratedetailviewform');
			formWin.down('form').loadRecord(record);
			formWin.down('panel[name=content]').update(record.data.content);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	classdetail: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b140102') > -1) {
        	
            var formWin = createWin('教师课堂内容展示', 'classcontentviewform');
            var grid = formWin.down('grid');
            formWin.down('form').loadRecord(record);
            formWin.down('form').form.findField('id').setValue(record.data.id);
            var params = {
  	              id: record.data.id
  	             };
             
  	    	var store = grid.getStore();
             store.on("beforeload",
              function() {
                  store.proxy.extraParams = params;
             });
              store.loadPage(1);

          
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
  },
	viewevaluatedetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b140104') > -1) {
			var formWin = createWin('查看评价信息', 'teacherrateviewform');
			formWin.down('form').loadRecord(record);
			Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
			formWin.down('panel[name=content]').update(record.data.content);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewevaluate: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
	        if (session.authority.indexOf('b140103') > -1) {
	        	
	            var formWin = createWin('教师评价列表', 'evaluatesviewform');
	            var grid = formWin.down('grid');
	            formWin.down('form').loadRecord(record);
	            formWin.down('form').form.findField('id').setValue(record.data.id);
	            var params = {
	  	              id: record.data.id
	  	             };
	             
	  	    	var store = grid.getStore();
	             store.on("beforeload",
	              function() {
	                  store.proxy.extraParams = params;
	             });
	              store.loadPage(1);

	          
	        } else {
	            Ext.Msg.alert('系统提示', '您无权进行此项操作');
	        }
	  },
	query : function(button) {
		if (session.authority.indexOf('b140101') > -1) {
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
	downloadPic : function(button) {
		var action;
		var funcId;
		var grid = this.getTeacherrateGrid();
		var store = grid.getStore();		
		var params = {
				action : 'downloadPic',
				funcId : 'f140111',		
			};
		var freshfn = function() {
			grid.getStore().reload();

		};
		ajax(null,params,null,freshfn);
		
	},
	submit : function(button) {
		var form = button.up('form').form;
		var action= 'insertteacherrate';
		var funcId = 'f140108';
    	var id = form.findField('id').getValue();
    	var name = form.findField('name').getValue();
		var win = button.up('window');
		var grid = this.getRateGrid();
		var grid1 = this.getTeacherrateGrid();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
			grid1.getStore().reload();
		};
	
		var params = {
			action : action,
			funcId : funcId,
			id:id,
			name:name
		};
	
		formSubmit(form, params, freshfn);
	
	},
});