Ext.define('manage.controller.Teacherplan', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'teacherplanGrid',
		selector : 'teacherplangrid'
	},{
		ref : 'planGrid',
		selector : 'plangrid'
	},{
		ref : 'teacherplanViewForm',
		selector : 'teacherplanviewform'
	}],
	views : ['teacherplan.Form','teacherplan.ViewForm','teacherplan.TeacherPlanViewForm'],
	init : function(app) {
		this.control({
			'teacherplangrid button[action=query]' : {
				click : this.query
			},
			'teacherplangrid actioncolumn[action=uploadPlan]' : {
				click : this.uploadPlan
			},
			'teacherplanform button[action=submit]' : {
				click : this.submit
			},
			'plangrid button[action=insert]' : {
				click : this.add
			},
			'plangrid button[action=delete]' : {
				click : this.deleteItems
			},
			'plangrid actioncolumn[action=view]' : {
				click : this.viewPlan
			},
			'plangrid actioncolumn[action=edit]' : {
				click : this.edit
			}
		});
	},
	  viewPlan: function(grid, rowIndex, colIndex, actionItem, event, record,row) {
		   
			Ext.create('Ext.window.Window', {
							title : '下载教案',
							resizable : false,
							modal : true,
							layout : 'fit',
							items : [
								{xtype : 'form',
								layout : {
									columns : 2,
									type : 'table'
								},
								bodyPadding : 10,
								header : false,
								id : 'planForm',
								buttonAlign : 'center',
								border : false,
								items : [ {
									xtype : 'displayfield',
									fieldLabel : '教案',
									name : 'file_name',
									value:'<a target="_blank" href=system.do?action=downloadPlan&f_id='+record.data.id+'>'+record.data.name+'</a>',
									colspan : 1,
									width : 500
								}, {
									xtype : 'hidden',
									name : 'f_id',
									value: record.data.id
								}, {
									xtype : 'hidden',
									name : 'file_name',
									value: record.data.name
									
								}, {
									xtype : 'hidden',
									name : 'id',
									value:record.data.id
								}],
							buttons : [ {
									text : '关闭',
									handler : function() {
										this.up('window').close();
										}
									} ]
							}],
							autoShow : true
						});
			
						
		},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b160205') > -1) {
			var formWin = createWin('查看图片信息', 'planviewform');
			formWin.down('form').loadRecord(record);
			Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
			formWin.down('panel[name=content]').update(record.data.content);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	uploadPlan : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b160202') > -1) {
			var formWin = createWin('上传教案列表', 'teacherplanviewform');
			formWin.down('form').loadRecord(record);
			formWin.down('form').form.findField('ssd_id').setValue(record.data.id);
			var grid = formWin.down('grid');
			var ssd_id = record.data.id;
			var params = {
        			ssd_id:ssd_id
	                };
			var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b160203') > -1)
			{
			  var formWin =createWin('上传教案', 'teacherplanform');
			  var ssd_id = this.getTeacherplanViewForm().form.findField('ssd_id').getValue();
		      formWin.down('form').form.findField('ssd_id').setValue(ssd_id);
			}
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b130201') > -1) {
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
		if (session.authority.indexOf('b160206') > -1) {
			var formWin = createWin('修改教案', 'teacherplanform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b160204') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f160204';
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
			action = 'insertTeacherPicture';
			funcId = 'f160203';
		} else {
			action = 'update';
			funcId = 'f160206';
		}
		var win = button.up('window');
		var grid = this.getPlanGrid();
		var ssd_id = form.findField('ssd_id').getValue();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId,
			t_id : session.id,
			ssd_id:ssd_id
		};
		formSubmit(form, params, freshfn);
	}
});