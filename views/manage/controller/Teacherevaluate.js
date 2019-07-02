Ext.define('manage.controller.Teacherevaluate', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'teacherevaluateGrid',
		selector : 'teacherevaluategrid'
	},
	{
		ref : 'evaluateForm',
		selector : 'evaluateform'
	},
	 {
    	ref: 'evaluateGrid',
        selector: 'evaluategrid'
    }
	],
	views : [ 'teacherevaluate.Grid', 'teacherevaluate.QueryForm','teacherevaluate.EvaluateViewForm','teacherevaluate.EvaluateForm','teacherevaluate.ViewForm','teacherevaluate.EvaluateTeacherListViewForm'],
	init : function(app) {
		this.control({
			'teacherevaluategrid button[action=query]' : {
				click : this.query
			},
			'teacherevaluategrid actioncolumn[action=view]': {
	                click: this.viewTeachers
	        },
            'evaluateteacherlistgrid actioncolumn[action=evaluate]': {
	            click: this.evaluate
	        },
	        'evaluategrid button[action=insert]': {
                click: this.add
            },
            'evaluategrid button[action=delete]': {
                click: this.deleteItems
            },
            'evaluategrid actioncolumn[action=view]': {
                click: this.viewDetail
            },
            'evaluateform button[action=submit]': {
                click: this.submit
            },
		});
	},
	viewTeachers : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b180202') > -1) {
			var name = record.data.name;
			var formWin = createWin('查看教师名单 :'+ name, 'evaluateteacherlistviewform');
			var grid = formWin.down('grid');
			formWin.down('form').form.findField('s_id').setValue(record.data.id);
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
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b180205') > -1) {
			var formWin = createWin('查看评价信息', 'teacherevaluateviewform');
			formWin.down('form').loadRecord(record);
			Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
			formWin.down('panel[name=content]').update(record.data.content);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	 add: function(button) {
	        if (session.authority.indexOf('b180203') > -1) {
	        	var formWin =createWin('添加教师评价', 'evaluateform');
	        	var form = button.up('form').form;
	        	var teacher_id = form.findField('teacher_id').getValue();
	        	var c_id = form.findField('c_id').getValue();
	        	var ssd_id = form.findField('ssd_id').getValue();
	        	formWin.down('form').form.findField('teacher_id').setValue(teacher_id);
	        	formWin.down('form').form.findField('c_id').setValue(c_id);
	        	formWin.down('form').form.findField('ssd_id').setValue(ssd_id);
	        	
	        }
	        else {
	            Ext.Msg.alert('系统提示', '您无权进行此项操作');
	        }
	 },
	  deleteItems: function(button) {
	        if (session.authority.indexOf('b180204') > -1) {
	            var grid = button.up('grid');
	            var action = 'realDelete';
	            var funcId = 'f180204';
	            deleteItems(grid, action, funcId);
	        } else {
	            Ext.Msg.alert('系统提示', '您无权进行此项操作');
	        }
	    },
	  evaluate: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
	        if (session.authority.indexOf('b180202') > -1) {
	        	
	            var formWin = createWin('教师评价列表', 'evaluateviewform');
	            var grid = formWin.down('grid');
	            formWin.down('form').loadRecord(record);
	            formWin.down('form').form.findField('ssd_id').setValue(record.data.id);
	            formWin.down('form').form.findField('teacher_id').setValue(record.data.teacher_id);
	            formWin.down('form').form.findField('c_id').setValue(record.data.c_id);
	            var params = {
	            	  u_id:session.id,
	  	              ssd_id: record.data.id,
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
		if (session.authority.indexOf('b180101') > -1) {
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
	 submit: function(button) {
	        var form = button.up('form').form;
	        var action= 'insertevaluate';
	        var funcId= 'f180202';
	    	var ssd_id = form.findField('ssd_id').getValue();
	        var teacher_id = form.findField('teacher_id').getValue();
	        var c_id = form.findField('c_id').getValue();
	        var win = button.up('window');
	        var grid = this.getEvaluateGrid();
	        var freshfn = function() {
	            win.close();
	            grid.getStore().reload();
	        };
	        var params = {
	            action: action,
	            funcId: funcId,
	            ssd_id:ssd_id,
	            teacher_id:teacher_id,
	            c_id:c_id,
	            charger:session.id
	      
	        };
	        formSubmit(form, params, freshfn);
	 }
});