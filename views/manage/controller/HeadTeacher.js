Ext.define('manage.controller.HeadTeacher', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'queryForm',
		selector : 'headteacherscorequeryform'
	},{
		ref : 'headteacherAnnouncementGrid',
		selector : 'headteacherannouncementgrid'
	},  {
		ref : 'scoreGrid',
		selector : 'headteacherscoregrid'
	} ],

	views : [ 'student.ViewForm', 'message.SendMessageForm','headteacher.AnnouncementForm','headteacher.LocationViewForm','headteacher.AnnouncementViewForm','attendance.ViewForm'],

	init : function(app) {
		this.control({
			'headteacherschedules button[action=refresh]' : {
				click : this.loadData
			},
			'headteacherschedules' : {
				beforerender : this.loadData
			},
			'headteacherstudentgrid button[action=query]' : {
				click : this.queryStudent
			},
			'headteacherstudentgrid actioncolumn[action=view]' : {
				click : this.viewStudent
			},
			'headteacherstudentgrid actioncolumn[action=contact]' : {
				click : this.contactParent
			},
			'headteacherexammenu' : {
				itemdblclick : this.queryScore
			},
			'headteacherannouncementgrid button[action=query]' : {
				click : this.queryAnnouncement
			},
			'headteacherannouncementgrid button[action=insert]' : {
				click : this.addAnnouncement
			},
			'headteacherannouncementgrid button[action=delete]' : {
				click : this.deleteAnnouncement
			},
			'headteacherannouncementgrid actioncolumn[action=view]' : {
				click : this.viewAnnouncement
			},
			'headteacherannouncementgrid actioncolumn[action=edit]' : {
				click : this.editAnnouncement
			},
			'headteacherlocationgrid button[action=query]' : {
				click : this.queryLocation
			},
			'headteacherlocationgrid actioncolumn[action=view]' : {
				click : this.viewLocation
			},
			'announcementform button[action=submit]':{
				click:this.submitAnnouncement
			},
			'headteacherattendancegrid button[action=query]' : {
				click : this.queryAttendance
			},
			'headteacherattendancegrid actioncolumn[action=view]' : {
				click : this.viewAttendance
			},
			'headteacherscoregrid button[action=query]' : {
				click : this.queryScore1
			},
			'headteacherattendancegrid button[action=query]' : {
				click : this.queryAttendance
			},
			'headteacherattendancegrid actioncolumn[action=view]' : {
				click : this.viewAttendance
			}
		});
	},
	queryScore : function(o, record, item, index, e, eOpts) {
		var form = this.getQueryForm();
		var grid = Ext.getCmp('headteacherscoregrid');
		var button = grid.down('button[action=query]');
		button.setDisabled(false);
		var code = record.data.ed_code.split(',');
		code.push('name');
		code.push('number');
		code.push('total');
		var items=grid.columns; 
		Ext.each(items,function(item){
			if(code.indexOf(item.dataIndex)>-1)
				item.setVisible(true);
			else
				item.setVisible(false);
		});
		form.form.findField('e_id').setValue(record.data.id);
		var params = form.getValues();
		var store = grid.getStore();
		store.on("beforeload", function() {
			store.proxy.extraParams = params;
		});
		store.loadPage(1);
	},
	queryScore1 : function(button) {
		if (session.authority.indexOf('b50301') > -1) {
			var form = this.getQueryForm();
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	queryStudent : function(button) {
		if (session.authority.indexOf('b50201') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewStudent : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		var formWin = createWin('查看学生信息', 'studentviewform');
		formWin.down('form').loadRecord(record);
		formWin.down('form').form.findField('sex').setValue(
				record.data.sex == 0 ? '男' : '女');
		if (record.data.pic)
			Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
	},

	queryAttendance : function(button) {
		if (session.authority.indexOf('b50401') > -1) {
			
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewAttendance : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		var formWin = createWin('查看考勤信息', 'attendanceviewform');
		formWin.down('form').loadRecord(record);
		
		if (record.data.pic)
			Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
	},

	queryAnnouncement : function(button) {
		if (session.authority.indexOf('b50501') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	addAnnouncement : function(button) {
		if (session.authority.indexOf('b50504') > -1)
			createWin('添加公告', 'announcementform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteAnnouncement : function(button) {
		if (session.authority.indexOf('b50502') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f50502';
			deleteItems(grid, action, funcId);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewAnnouncement : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		var formWin = createWin('查看公告', 'headteacherannouncementviewform');
		formWin.down('form').loadRecord(record);
		formWin.down('panel[name=content]').update(record.data.content);
	},
	editAnnouncement : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		if (session.authority.indexOf('b50503') > -1) {
			var formWin = createWin('修改公告', 'announcementform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	submitAnnouncement: function(button){
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {

			action = 'addAnnouncement';
			funcId = 'f50504';

		} else {
			action = 'update';
			funcId = 'f50503';
		}
		var win = button.up('window');
		var grid =this.getHeadteacherAnnouncementGrid();// Ext.getCmp('manage.view.headteacher.AnnouncementGrid');
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId,
			t_id : session.id,
			date : (new Date()).Format("yyyy-MM-dd") 
		};
		formSubmit(form, params, freshfn);
	},

	queryLocation : function(button) {
		if (session.authority.indexOf('b50601') > -1) {
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewLocation : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		var formWin = createWin('查看路线信息', 'headteacherlocationviewform');
		formWin.down('form').loadRecord(record);
		formWin.down('panel[name=content]').update(record.data.content);
	},
	queryAttendance : function(button) {
		if (session.authority.indexOf('b50401') > -1) {
			
			query(button);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewAttendance : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		var formWin = createWin('查看考勤信息', 'attendanceviewform');
		formWin.down('form').loadRecord(record);
		
		if (record.data.pic)
			Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
	},

	contactParent : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		var formWin = createWin('联系家长', 'sendmessageform');
		formWin.down('form').form.findField('receiver').setValue(
				record.data.parent_id);
		formWin.down('form').form.findField('receiver_name').setValue(
				record.data.name + '家长');
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
				funcId : 'f50101',
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