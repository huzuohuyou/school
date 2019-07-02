Ext.define('manage.controller.Studentsign', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'studentsignGrid',
		selector : 'studentsigngrid'
	} ],
	views : [ 'studentsign.Grid', 'studentsign.QueryForm','studentsign.StudentSignViewForm','studentsign.StudentSignClassViewForm'],
	init : function(app) {
		this.control({
			'studentsigngrid button[action=query]' : {
				click : this.query
			},
			'studentsigngrid' : {
				edit : this.edit
			},
			'studentsigngrid actioncolumn[action=view]': {
                click: this.viewDetail
            },
            'studentsignclasslistgrid actioncolumn[action=view]': {
                click: this.viewStudent
            },
		});
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b170102') > -1) {
			var name = record.data.name;
			var formWin = createWin('查看班级列表 :'+ name, 'studentsignclassviewform');
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
	viewStudent : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b170103') > -1) {
			var s_name = record.data.s_name;
			var formWin = createWin('班级名称 :'+s_name, 'studentsignviewform');
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
	query : function(button) {
		if (session.authority.indexOf('b120101') > -1) {
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
	edit : function( editor, context, eOpts ) {
		if (session.authority.indexOf('b120102') > -1) {
			Ext.Msg.wait('正在修改，请稍后...', '提示');
			var params = {
				action : 'update',
				funcId : 'f120102',
				id : context.record.get('id'),
				states : context.record.get('states')
			};
			var grid = this.getStudentsignGrid();
			var freshfn = function() {
				grid.getStore().reload();
			};
			ajax(null,params,null,freshfn)
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
});