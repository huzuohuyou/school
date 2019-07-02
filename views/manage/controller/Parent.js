Ext.define('manage.controller.Parent', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'queryForm',
		selector : 'parentscorequeryform'
	}, {
		ref : 'scoreGrid',
		selector : 'parentscoregrid'
	} ],

	views : [ 'parent.StudentForm','message.SendMessageForm','parent.HomeworkViewForm' ,'parent.StudentUpdateForm' ,'parent.LocationViewForm','parent.AnnouncementViewForm','attendance.ViewForm','parent.ScoreViewForm'],


	init : function(app) {
		this.control({
			'parentstudentviewform button[action=refresh]' : {
				click : this.loadData
			},
			'parentstudentviewform button[action=update]' : {
				click : this.updateStudent
			},
			'parentstudentviewform' : {
				beforerender : this.loadData
			},
			'parentscoreviewform':{
				beforerender : this.loadTotalScore
			},
			'parentscoreviewform button[action=refresh]':{
				click : this.loadTotalScore
			},
			'parentschedules button[action=refresh]' : {
				click : this.loadSchedules
			},
			'parentschedules' : {
				beforerender : this.loadSchedules
			},
			'parenthomeworkgrid button[action=query]' : {
				click : this.queryHomework
			},
			'parenthomeworkgrid actioncolumn[action=view]' : {
				click : this.viewHomework
			},
			'parentlocationgrid button[action=query]' : {
				click : this.queryLocation
			},
			'parentlocationgrid actioncolumn[action=view]' : {
				click : this.viewLocation
			},
			'parentannouncementgrid button[action=query]' : {
				click : this.queryAnnouncement
			},
			'parentannouncementgrid actioncolumn[action=view]' : {
				click : this.viewAnnouncement
			},
			'parentexammenu' : {
				itemdblclick : this.queryScore
			},
			'parentteachergrid actioncolumn[action=contact]' : {
				click : this.contactTeacher
			},
			'parentscoregrid button[action=query]' : {
				click : this.queryScore1
			},
			'parentscoregrid button[action=querytotal]' : {
				click : this.queryScore2
			},
			'parentattendancegrid button[action=query]' : {
				click : this.queryAttendance
			},
			'parentattendancegrid actioncolumn[action=view]' : {
				click : this.viewAttendance
			},
			'studentupdateform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	updateStudent : function(button) {
		    var store = Ext.create('manage.store.parent.Student');
		    //store.load();
		    store.on("load",function(store){
		    	if(store.getCount()>0){
		    		var record = store.getAt(0);
			        var formWin = createWin('修改学生', 'studentupdateform');
					formWin.down('form').loadRecord(record);
					return;
		    	}
		    	
	    	});

		
	},
	queryScore : function(o, record, item, index, e, eOpts) {
		var form = this.getQueryForm();
		var grid = Ext.getCmp('parentscoregrid');
		var button = grid.down('button[action=query]');
		var button1 = grid.down('button[action=querytotal]')
		button.setDisabled(false);
		button1.setDisabled(false);
		form.form.findField('e_id').setValue(record.data.id);
		var params = form.getValues();
		var store = grid.getStore();
		store.on("beforeload", function() {
			store.proxy.extraParams = params;
		});
		store.loadPage(1);
	},
	queryScore1 : function(button) {
		if (session.authority.indexOf('b70402') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	queryScore2 : function(button) {
		if (session.authority.indexOf('b70402') > -1)
		var formWin = createWin('查看总成绩信息', 'parentscoreviewform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
		//formWin.down('form').loadRecord(record);
		//formWin.down('panel[name=content]').update(record.data.content);
	},
	queryHomework : function(button) {
		if (session.authority.indexOf('b70301') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewHomework : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		var formWin = createWin('查看作业信息', 'parenthomeworkviewform');
		formWin.down('form').loadRecord(record);
		formWin.down('panel[name=content]').update(record.data.content);
	},
	queryAttendance : function(button) {
		if (session.authority.indexOf('b70601') > -1) {
			
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewAttendance : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		var formWin = createWin('查看考勤信息', 'attendanceviewform');
		formWin.down('form').loadRecord(record);
		//formWin.down('panel[name=content]').update(record.data.content);
		if (record.data.pic)
			Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
	},
	queryLocation : function(button) {
		if (session.authority.indexOf('b70701') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewLocation : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		var formWin = createWin('查看路线信息', 'parentlocationviewform');
		formWin.down('form').loadRecord(record);
		formWin.down('panel[name=content]').update(record.data.content);
	},
	queryAnnouncement : function(button) {
		if (session.authority.indexOf('b70801') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewAnnouncement : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		var formWin = createWin('查看公告信息', 'parentannouncementviewform');
		formWin.down('form').loadRecord(record);
		//formWin.down('panel[name=text]').update(record.data.text);
	},
	queryAttendance : function(button) {
		if (session.authority.indexOf('b70601') > -1) {
			
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewAttendance : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		var formWin = createWin('查看考勤信息', 'attendanceviewform');
		formWin.down('form').loadRecord(record);
		formWin.down('panel[name=content]').update(record.data.content);
		if (record.data.pic)
			Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
	},
	contactTeacher : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		var formWin = createWin('联系老师', 'sendmessageform');
		formWin.down('form').form.findField('receiver').setValue(
				record.data.id);
		formWin.down('form').form.findField('receiver_name').setValue(
				record.data.name);
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
					funcId : 'f70101',
					number : session.loginname.substring(3)
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
									: '学生信息读取失败,请点击刷新按钮重新获取数据!',
							buttons : Ext.Msg.OK,
							icon : Ext.Msg.ERROR
						});
					}
				},
				failure : function(resp, opts) {
					Ext.Msg.show({
						title : '错误提示',
						msg : '学生信息读取失败,请点击刷新按钮重新获取数据!',
						buttons : Ext.Msg.OK,
						icon : Ext.Msg.ERROR
					});
				}
			});
		});
	},
	loadTotalScore : function(cmp) {
		var form1 = this.getQueryForm();
		Ext.require('manage.model.score.Score',function(){
			var form = cmp;
		
			if (cmp.xtype == 'button')
				form = cmp.up('form');
			form.form.reset();
			Ext.Ajax.request({
				url : 'system.do',
				params : {
					action : 'queryByCondition',
					funcId : 'f70402',
					number : session.loginname.substring(3),
					e_id:form1.form.findField('e_id').getValue()
				},
				success : function(res, opts) {
					var resp = Ext.decode(res.responseText);
					if (resp.totalCount > 0) {
						var data = resp.data;
						var reader = new Ext.data.reader.Json({
							model : 'manage.model.score.Score'
						})
						var records = reader.readRecords(data);
						var record = records.records[0];
						form.form.loadRecord(record);
					}
						else {
						Ext.Msg.show({
							title : '错误提示',
							msg : resp.msg != null ? resp.msg
									: '学生信息读取失败,请点击刷新按钮重新获取数据!',
							buttons : Ext.Msg.OK,
							icon : Ext.Msg.ERROR
						});
					}
				},
				failure : function(resp, opts) {
					Ext.Msg.show({
						title : '错误提示',
						msg : '学生信息读取失败,请点击刷新按钮重新获取数据!',
						buttons : Ext.Msg.OK,
						icon : Ext.Msg.ERROR
					});
				}
			});
		});
	},
	loadSchedules : function(cmp) {
		var form = cmp;
		if (cmp.xtype == 'button')
			form = cmp.up('form');
		form.form.reset();
		Ext.Ajax.request({
			url : 'system.do',
			params : {
				action : 'queryByCondition',
				funcId : 'f70201',
				number : session.loginname.substring(3)
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
	submit : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			return;
		} else {
			action = 'update';
			funcId = 'f70103';
		}
		var win = button.up('window');
	
		var freshfn = function() {
			win.close();
			var cmp = Ext.getCmp('btn');
			Ext.require('manage.model.student.Student',function(){
				var form = cmp;
				if (cmp.xtype == 'button')
					form = cmp.up('form');
				form.form.reset();
				Ext.Ajax.request({
					url : 'system.do',
					params : {
						action : 'queryByCondition',
						funcId : 'f70101',
						number : session.loginname.substring(3)
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
										: '学生信息读取失败,请点击刷新按钮重新获取数据!',
								buttons : Ext.Msg.OK,
								icon : Ext.Msg.ERROR
							});
						}
					},
					failure : function(resp, opts) {
						Ext.Msg.show({
							title : '错误提示',
							msg : '学生信息读取失败,请点击刷新按钮重新获取数据!',
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
	}
});