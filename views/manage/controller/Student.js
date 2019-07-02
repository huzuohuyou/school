Ext.define('manage.controller.Student', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'studentGrid',
		selector : 'studentgrid'
	} ],
	views : ['student.Form','student.ViewForm','student.EnteringinForm','student.ExportForm','student.StudentForm','student.StudentUpdateForm'],
	init : function(app) {
		this.control({
			'studentgrid button[action=insert]' : {
				click : this.add
			},
			'pupilstudentform' : {
				beforerender : this.loadData
			},
			'studentgrid button[action=entering]' : {
				click : this.entering
			},
			'studentgrid button[action=studentsexcel]' : {
				click : this.studentsexcel
			},
			'studentgrid button[action=query]' : {
				click : this.query
			},
			'studentgrid button[action=delete]' : {
				click : this.deleteItems
			},
			'studentgrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'studentgrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'studentform button[action=submit]' : {
				click : this.submit
			},
			'pupilstudentform button[action=update]' : {
				click : this.updateSelfInfo
			},
			'studentupdateinfo button[action=submit]' : {
				click : this.submitStudentInfo
			},
			'enteringinform button[action=submit]' : {
				click : this.enteringinsubmit
			},
			'studentexportform button[action=submit]' : {
				click : this.studentexportsubmit
			}
		});
	},
	updateSelfInfo : function(button) {
	    var store = Ext.create('manage.store.student.StudentSelfInfo');
	    //store.load();
	    store.on("load",function(store){
	    	if(store.getCount()>0){
	    		var record = store.getAt(0);
		        var formWin = createWin('修改信息', 'studentupdateinfo');
				formWin.down('form').loadRecord(record);
				return;
	    	}
	    	
    	});

	
	},
	submitStudentInfo : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			return;
		} else {
			action = 'updateStudentInfo';
			funcId = 'f110303';
		}
		var win = button.up('window');

		var freshfn = function() {
			win.close();
			var cmp = Ext.getCmp('btnstudent');
			Ext.require('manage.model.student.Student',function(){
				var form = cmp;
				if (cmp.xtype == 'button')
					form = cmp.up('form');
				form.form.reset();
				Ext.Ajax.request({
					url : 'system.do',
					params : {
						action : 'queryByCondition',
						funcId : 'f110301',
						id : session.id
					},
					success : function(res, opts) {
						var resp = Ext.decode(res.responseText);
						if (resp.totalCount > 0) {
							var data = resp.data;
							var reader = new Ext.data.reader.Json({
								model : 'manage.model.student.Student'
							})
							var records = reader.readRecords(data);
							var record = records.records[0];
							form.form.loadRecord(record);
							form.form.findField('sex').setValue(record.data.sex==0?'男':'女');
							if(record.data.pic)
								Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
						} else {
							Ext.Msg.show({
								title : '错误提示',
								msg : resp.msg != null ? resp.msg
										: '个人信息读取失败,请点击刷新按钮重新获取数据!',
								buttons : Ext.Msg.OK,
								icon : Ext.Msg.ERROR
							});
						}
					},
					failure : function(resp, opts) {
						Ext.Msg.show({
							title : '错误提示',
							msg : '个人信息读取失败,请点击刷新按钮重新获取数据!',
							buttons : Ext.Msg.OK,
							icon : Ext.Msg.ERROR
						});
					}
				});
			});
		};
		var params = {
			action : action,
			funcId : funcId
		};
		formSubmit(form, params, freshfn);
	},
	entering : function(button) {
		if (session.authority.indexOf('b50106') > -1)
			createWin('录入学生名单', 'enteringinform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b50105') > -1) {
			var formWin = createWin('查看学生信息', 'studentviewform');
			formWin.down('form').loadRecord(record);
			formWin.down('form').form.findField('sex').setValue(record.data.sex==0?'男':'女');
			if(record.data.pic)
				Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b50102') > -1)
			createWin('添加学生', 'studentform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b50101') > -1) {
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
		if (session.authority.indexOf('b50103') > -1) {
			var formWin = createWin('修改学生', 'studentform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b50104') > -1) {
			var grid = button.up('grid');
			var action = 'deleteStudent';
			var funcId = 'f50104';
			deleteItems(grid, action, funcId);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	enteringinsubmit : function(button) {
		var form = button.up('form');
		var win = button.up('window');
		var grid = this.getStudentGrid();
		form.getForm().submit({
			waitMsg : '正在上传数据,请等待...',
			clientValidation : true,
			url : 'system.do',
			params : {
				action : 'uploadStudentFile'
			},
			success : function(cform, action) {
				top.Ext.Msg.alert('上传成功', action.result.msg == null ? '上传成功'
						: action.result.msg, function() {
					if(form.pform!=null&&Ext.getCmp(form.pform)){
						var url = action.result.url;
						Ext.getCmp(form.pform).setValue(url);
						if(Ext.getCmp('browseImage'))
			                Ext.getCmp('browseImage').getEl().dom.src = url;
					}
					grid.getStore().reload();
					win.close();
				});
			},
			failure : function(cform, action) {
				switch (action.failureType) {
				case Ext.form.action.Action.CLIENT_INVALID:
					top.Ext.Msg.alert('上传失败', '所填数据不符合要求，请检查后提交');
					break;
				case Ext.form.action.Action.CONNECT_FAILURE:
					top.Ext.Msg.alert('上传失败', '上传失败，请检查网络');
					break;
				case Ext.form.action.Action.SERVER_INVALID:
					top.Ext.Msg.alert('上传失败',
							action.result.msg == null ? '上传失败'
									: action.result.msg);
				}
			}
		});
	
	
	},
	submit : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			action = 'addStudent';
			funcId = 'f50102';
		} else {
			action = 'updateStudent';
			funcId = 'f50103';
		}
		var win = button.up('window');
		var grid = this.getStudentGrid();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId
		};
		formSubmit(form, params, freshfn);
	},
	loadData : function(cmp) {
		Ext.require('manage.model.student.Student',function(){
			var form = cmp;
			if (cmp.xtype == 'button')
				form = cmp.up('form');
			form.form.reset();
			Ext.Ajax.request({
				url : 'system.do',
				params : {
					action : 'queryByCondition',
					funcId : 'f110301',
					id : session.id
				},
				success : function(res, opts) {
					var resp = Ext.decode(res.responseText);
					if (resp.totalCount > 0) {
						var data = resp.data;
						var reader = new Ext.data.reader.Json({
							model : 'manage.model.student.Student'
						})
						var records = reader.readRecords(data);
						var record = records.records[0];
						form.form.loadRecord(record);
						form.form.findField('sex').setValue(record.data.sex==0?'男':'女');
						if(record.data.pic)
							Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
					} else {
						Ext.Msg.show({
							title : '错误提示',
							msg : resp.msg != null ? resp.msg
									: '个人信息读取失败,请点击刷新按钮重新获取数据!',
							buttons : Ext.Msg.OK,
							icon : Ext.Msg.ERROR
						});
					}
				},
				failure : function(resp, opts) {
					Ext.Msg.show({
						title : '错误提示',
						msg : '个人信息读取失败,请点击刷新按钮重新获取数据!',
						buttons : Ext.Msg.OK,
						icon : Ext.Msg.ERROR
					});
				}
			});
		});
	},
	studentsexcel : function(button) {
		if (session.authority.indexOf('b50101') > -1)
			createWin('导出学生', 'studentexportform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	studentexportsubmit : function(button) {
		var form = button.up('form').form;
		var school = form.findField('school').getValue();
		if (form.findField('school').getValue() == null) {
			Ext.Msg.alert('系统提示', '请先选择学校');
		} else {
			 Ext.MessageBox.show({
					title : '提示信息',
					msg : '确定要导出学生到本地吗？',
					icon : Ext.MessageBox.QUESTION,
					buttons : Ext.Msg.YESNO,
					fn : function(btnId, text, opt) {
						if (btnId == "yes") {
							Ext.Msg.wait('处理中，请稍后...', '提示');
	    	                Ext.Ajax.request({
					url : 'system.do',
					// 请求地址
				    params : {
		                     action: 'studentsexcel',
		     				 school:school,
		                 },
					// 请求参数
					method : 'post',
					// 方法
					callback : function(options, success, response) {
						var resp = Ext.decode(response.responseText);
						if (success&&resp.success) {
							Ext.Msg.hide();
							var f_id = resp.msg;
							Ext.create('Ext.window.Window', {
								title : '下载统计表',
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
										fieldLabel : '学生库',
										name : 'file_name',
										value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"学生库"+'</a>',
										colspan : 1,
										width : 500
									}, {
										xtype : 'hidden',
										name : 'f_id',
										value:f_id
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
						} else {
							//Ext.Msg.hide();
							Ext.MessageBox.show({
								title : '提示信息',
								msg : resp.msg?resp.msg:'下载失败!',
								icon : Ext.MessageBox.ERROR,
								buttons : Ext.Msg.OK
							});
						}
					}
				});
						}
	 				}
	 			});
		}
    
	}
});