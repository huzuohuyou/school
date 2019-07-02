Ext.define('manage.controller.Pupil', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'queryForm',
		selector : 'pupilscorequeryform'
	}, {
		ref : 'scoreGrid',
		selector : 'pupilscoregrid'
	} ],

	views : [ 'message.SendMessageForm','pupil.HomeworkViewForm' ,'pupil.LocationViewForm','pupil.AnnouncementViewForm','attendance.ViewForm','pupil.ScoreViewForm'],


	init : function(app) {
		this.control({
			'pupilstudentviewform button[action=refresh]' : {
				click : this.loadData
			},
			'pupilstudentviewform' : {
				beforerender : this.loadData
			},
			'pupilscoreviewform':{
				beforerender : this.loadTotalScore
			},
			'pupilscoreviewform button[action=refresh]':{
				click : this.loadTotalScore
			},
			'pupilschedules button[action=refresh]' : {
				click : this.loadSchedules
			},
			'pupilschedules button[action=refresh]' : {
				click : this.loadSchedules
			},
			'pupilschedules' : {
				beforerender : this.loadSchedules
			},
			'pupilhomeworkgrid button[action=query]' : {
				click : this.queryHomework
			},
			'pupilhomeworkgrid actioncolumn[action=view]' : {
				click : this.viewHomework
			},
			'pupillocationgrid button[action=query]' : {
				click : this.querylocation
			},
			'pupillocationgrid actioncolumn[action=view]' : {
				click : this.viewlocation
			},
			'pupilexammenu' : {
				itemdblclick : this.queryScore
			},
			'pupilscoregrid button[action=query]' : {
				click : this.queryScore1

			},
			'pupilscoregrid button[action=querytotal]' : {
				click : this.queryScore2
			},
			'pupilannouncementgrid button[action=query]' : {
				click : this.queryAnnouncement
			},
			'pupilannouncementgrid actioncolumn[action=view]' : {
				click : this.viewAnnouncement
			},
			'pupilattendancegrid button[action=query]' : {
				click : this.queryAttendance
			},
			'pupilattendancegrid actioncolumn[action=view]' : {
				click : this.viewAttendance

			}
		});
	},
	queryScore : function(o, record, item, index, e, eOpts) {
		var form = this.getQueryForm();
		var grid = Ext.getCmp('pupilscoregrid');
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
		if (session.authority.indexOf('b80402') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	queryScore2 : function(button) {
		if (session.authority.indexOf('b80402') > -1)
		var formWin = createWin('查看总成绩信息', 'pupilscoreviewform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
		//formWin.down('form').loadRecord(record);
		//formWin.down('panel[name=content]').update(record.data.content);
	},
	queryHomework : function(button) {
		if (session.authority.indexOf('b80301') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewHomework : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		var formWin = createWin('查看作业信息', 'pupilhomeworkviewform');
		formWin.down('form').loadRecord(record);
		formWin.down('panel[name=content]').update(record.data.content);
	},

	queryAttendance : function(button) {
		if (session.authority.indexOf('b80601') > -1) {
			
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

	querylocation : function(button) {
		if (session.authority.indexOf('b80501') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewlocation : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		var formWin = createWin('查看路线信息', 'pupillocationviewform');
		formWin.down('form').loadRecord(record);
		formWin.down('panel[name=content]').update(record.data.content);
	},

	queryAnnouncement : function(button) {
		if (session.authority.indexOf('b80701') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewAnnouncement : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		var formWin = createWin('查看公告信息', 'pupilannouncementviewform');
		formWin.down('form').loadRecord(record);
		formWin.down('panel[name=text]').update(record.data.text);
	},
	queryAttendance : function(button) {
		if (session.authority.indexOf('b80601') > -1) {
			
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
					funcId : 'f80101',
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
					funcId : 'f80402',
					id : session.id,
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
				funcId : 'f80201',
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
	}
});