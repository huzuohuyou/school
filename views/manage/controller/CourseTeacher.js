Ext.define('manage.controller.CourseTeacher', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'teacherHomeworkGrid',
		selector : 'teacherhomeworkgrid'
	}, {
		ref : 'queryForm',
		selector : 'teacherscorequeryform'
	}, {
		ref : 'scoreGrid',
		selector : 'teacherscoregrid'
	}, {
		ref : 'teacherExamGrid',
		selector : 'teacherexamgrid'
	} ],
	views : [ 'student.ViewForm', 'message.SendMessageForm', 'courseteacher.HomeworkViewForm','courseteacher.ExamForm',
			'courseteacher.HomeworkForm' ],
	init : function(app) {
		this.control({
			'teacherschedules button[action=refresh]' : {
				click : this.loadData
			},
			'teacherschedules' : {
				beforerender : this.loadData
			},
			'teacherhomeworkgrid button[action=insert]' : {
				click : this.addHomework
			},
			'teacherhomeworkgrid button[action=query]' : {
				click : this.queryHomework
			},
			'teacherhomeworkgrid button[action=delete]' : {
				click : this.deleteHomeworks
			},
			'teacherhomeworkgrid actioncolumn[action=view]' : {
				click : this.viewHomework
			},
			'teacherhomeworkgrid actioncolumn[action=edit]' : {
				click : this.editHomework
			},
			'homeworkform button[action=submit]' : {
				click : this.submitHomework
			},
			'teacherstudentgrid button[action=query]' : {
				click : this.queryStudent
			},
			'teacherstudentgrid actioncolumn[action=view]' : {
				click : this.viewStudent
			},
			'teacherstudentgrid actioncolumn[action=contact]' : {
				click : this.contactParent
			},
			'teacherexammenu' : {
				itemdblclick : this.queryScore
			},
			'teacherscoregrid button[action=query]' : {
				click : this.queryScore1
			},
			'teacherscoregrid' : {
				edit : this.editScore
			},
			'teacherexamgrid button[action=insert]' : {
				click : this.addExam
			},
			'teacherexamgrid button[action=query]' : {
				click : this.queryExam
			},
			'teacherexamgrid actioncolumn[action=delete]' : {
				click : this.deleteItems
			},
			'teacherexamgrid actioncolumn[action=view]' : {
				click : this.viewExam
			},
			'teacherexamgrid actioncolumn[action=edit]' : {
				click : this.editExam
			},
			'teacherexamform button[action=submit]' : {
				click : this.submitExam
			}
		});
	},
	queryScore : function(o, record, item, index, e, eOpts) {
		var form = this.getQueryForm();
		var grid = this.getScoreGrid();
//		var grid = Ext.getCmp('teacherscoregrid');
		var button = grid.down('button[action=query]');
		button.setDisabled(false);
		form.setMyValue(record.data.ed_id);
		//form.form.findField('ed_id').setValue(record.data.ed_id);
		var params = form.getValues();
		var store = grid.getStore();
		store.on("beforeload", function() {
			store.proxy.extraParams = params;
		});
		store.loadPage(1);
	},
	queryScore1 : function(button) {
		if (session.authority.indexOf('b60401') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	editScore : function(editor, context, eOpts) {
		if (session.authority.indexOf('b60402') > -1) {
			var today = new Date().Format('yyyy-MM-dd');
			if (context.record.get('edit_date') < today) {
				Ext.Msg.alert('系统提示', '已过上分日期，请联系管理员进行修改成绩');
				return;
			}
			Ext.Msg.wait('正在修改，请稍后...', '提示');
			var params = {
				action : 'update',
				funcId : 'f60402',
				id : context.record.get('id'),
				score : context.record.get('score')
			};
			var grid = this.getScoreGrid();
			var freshfn = function() {
				grid.getStore().reload();
			};
			ajax(null, params, null, freshfn)
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	queryStudent : function(button) {
		if (session.authority.indexOf('b60201') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	queryHomework : function(button) {
		if (session.authority.indexOf('b60301') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	addHomework : function(button) {
		if (session.authority.indexOf('b60302') > -1)
			createWin('添加作业', 'homeworkform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteHomeworks : function(button) {
		if (session.authority.indexOf('b60304') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f60304';
			deleteItems(grid, action, funcId);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewHomework : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		if (session.authority.indexOf('b60305') > -1) {
			var formWin = createWin('查看作业信息', 'teacherhomeworkviewform');
			formWin.down('form').loadRecord(record);
			formWin.down('panel[name=content]').update(record.data.content);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewStudent : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b60202') > -1) {
			var formWin = createWin('查看学生信息', 'studentviewform');
			formWin.down('form').loadRecord(record);
			formWin.down('form').form.findField('sex').setValue(
					record.data.sex == 0 ? '男' : '女');
			if (record.data.pic)
				Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	contactParent : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		var formWin = createWin('联系家长', 'sendmessageform');
		formWin.down('form').form.findField('receiver').setValue(record.data.parent_id);
		formWin.down('form').form.findField('receiver_name').setValue(record.data.name+'家长');
	},
	editHomework : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		if (session.authority.indexOf('b60303') > -1) {
			var formWin = createWin('修改作业', 'homeworkform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	loadData : function(cmp) {
		var form = cmp;
		if (cmp.xtype == 'button')
			form = cmp.up('form');
		form.form.reset();
		Ext.Ajax.request({
			url : 'system.do',
			params : {
				action : 'queryByCondition',
				funcId : 'f60101',
				id : session.id
			},
			success : function(res, opts) {
				var resp = Ext.decode(res.responseText);
				if (resp.totalCount > 0) {
					var data = resp.data;
					for ( var i = 0; i < data.length; i++) {
						var temp = data[i];
						form.form.findField(temp.type).setValue(
								'<span style="color:blue;">' + temp.c_name
										+ '</span>');
					}
				} else {
					Ext.Msg.show({
						title : '错误提示',
						msg : resp.msg != null ? resp.msg
								: '课表信息读取失败,请点击刷新按钮重新获取数据!',
						buttons : Ext.Msg.OK,
						icon : Ext.Msg.ERROR
					});
				}
			},
			failure : function(resp, opts) {
				Ext.Msg.show({
					title : '错误提示',
					msg : '课表信息读取失败,请点击刷新按钮重新获取数据!',
					buttons : Ext.Msg.OK,
					icon : Ext.Msg.ERROR
				});
			}
		});
	},
	submitHomework : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			action = 'insert';
			funcId = 'f60302';
		} else {
			action = 'update';
			funcId = 'f60303';
		}
		var win = button.up('window');
		var grid = this.getTeacherHomeworkGrid();
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
	addExam : function(button) {
		if (session.authority.indexOf('b60502') > -1)
			createWin('添加考试', 'teacherexamform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	queryExam : function(button) {
		if (session.authority.indexOf('b60501') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	editExam : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		if (session.authority.indexOf('b60503') > -1) {
			var formWin = createWin('修改考试', 'teacherexamform');
			formWin.down('form').loadRecord(record);
			//formWin.down('form').form.findField('c_ids').setRawValue(record.data.c_name);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	submitExam : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			action = 'teacherAddExam';
			funcId = 'f60502';
		} else {
			action = 'teacherUpdateExam';
			funcId = 'f60503';
		}
		var win = button.up('window');
		
		var grid = this.getTeacherExamGrid();
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
	deleteItems : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b60504') > -1) {
			var cgrid = this.getTeacherExamGrid();
			Ext.MessageBox.show({
				title : '提示信息',
				msg : record.data.leaf?'删除科目，将会删除该科目下已登记的分数<br>确定删除吗？':'删除考试，则删除所有相关信息<br>确定删除吗？',
				icon : Ext.MessageBox.QUESTION,
				buttons : Ext.Msg.YESNO,
				fn : function(btnId, text, opt) {
					if (btnId == "yes") {
						Ext.Msg.wait('处理中，请稍后...', '提示');
						Ext.Ajax.request({
							url : 'system.do',
							// 请求地址
							params : {
								action : 'realDelete',
								ids : record.data.leaf?record.data.id.substring(1):record.data.id,
								funcId : record.data.leaf?'s60504':'f60504'
							},
							// 请求参数
							method : 'post',
							// 方法
							callback : function(options, success, response) {
								if (success) {
									Ext.Msg.hide();
									Ext.MessageBox.show({
										title : '提示信息',
										msg : '删除成功!',
										icon : Ext.MessageBox.INFO,
										buttons : Ext.Msg.OK,
										fn : function() {
											cgrid.getStore().reload();
//											var node = cgrid.getStore()
//													.getNodeById(
//															record.data.e_id?record.data.e_id:'root');
//											cgrid.getStore().load({
//												node : node
//											});
										}
									});
								} else {
									Ext.Msg.hide();
									Ext.MessageBox.show({
										title : '提示信息',
										msg : '删除失败!',
										icon : Ext.MessageBox.ERROR,
										buttons : Ext.Msg.OK
									});
								}
							}
						});
					}
				}
			});
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	}
});