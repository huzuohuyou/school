Ext.define('manage.controller.TeacherAttendanceStatistics', {
	extend : 'Ext.app.Controller',
	refs : [{
		ref : 'teacherAttendanceStatisticsGrid',
		selector : 'teacherAttendanceStatisticsgrid'
	},{
		ref : 'teacherAttendanceStatisticsdetailGrid',
		selector : 'teacherAttendanceStatisticsdetailgrid'
	}
	],
	views : [ 'teacherAttendanceStatistics.Grid','teacherAttendanceStatistics.ViewForm','teacherAttendanceStatistics.Form'],
	init : function(app) {
		this.control({
			'teacherAttendanceStatisticsgrid actioncolumn[action=viewdetail]': {
	            click: this.viewDetail
	        },
	        'teacherAttendanceStatisticsgrid button[action=query]' : {
				click : this.query
			},
			'teacherAttendanceStatisticsgrid button[action=shedulesexcel]' : {
				click : this.shedulesexcel
			},
			'teacherAttendanceStatisticsgrid button[action=attendenceToExcel]' : {
				click : this.attendenceToExcel
			},
			'teacherAttendanceStatisticsdetailgrid button[action=toExcel]' : {
					click : this.toExcel
		    },
		    'teacherAttendanceStatisticsform button[action=submit]' : {
				click : this.submitToExcel
	    },
		});
	},
	toExcel : function(button) {
	    	var grid = this.getTeacherAttendanceStatisticsdetailGrid();
			var store = grid.getStore();
			var teacher_name = "";
			var course_name = "";
			var s_name = "";
			var week = "";
			var charger_name = "";
			var time = "";
			var states = "";
			var status = "";
			var temp_teacher_name = "";
			for (var i = 0; i < store.getCount(); i++) {
			    var record = store.getAt(i);
			    teacher_name = teacher_name + record.get('teacher_name')+",";
			    course_name = course_name + record.get('course_name')+",";
			    s_name = s_name + record.get('s_name')+",";
			    week = week + record.get('week')+",";
			    charger_name = charger_name + record.get('charger_name')+",";
			    time = time + record.get('time')+",";
			    states = states + record.get('states')+",";
			    status = charger_name + record.get('status')+",";
			    if(record.get('temp_teacher_name') == "" || record.get('temp_teacher_name') == null){
			    	temp_teacher_name = temp_teacher_name + "-"+",";	
			    }
			    else{
			    	temp_teacher_name = temp_teacher_name + record.get('temp_teacher_name')+",";
			    }
			};
			 Ext.MessageBox.show({
				title : '提示信息',
				msg : '确定要导出到本地吗？',
				icon : Ext.MessageBox.QUESTION,
				buttons : Ext.Msg.YESNO,
				fn : function(btnId, text, opt) {
				if (btnId == "yes") {
					 Ext.Msg.wait('处理中，请稍后...', '提示');
					 if(s_name ==null||s_name =="")
				    {
						Ext.Msg.alert('提示','考勤记录为空，无法导出，请选择其他日期！');
				    }
					else{
	    	                Ext.Ajax.request({
					        url : 'system.do',
					// 请求地址
				    params : {
		                     action: 'teacherAttendDetailExcel',
		                     teacher_name:teacher_name,
		                     course_name:course_name,
		                     s_name:s_name,
		                     week:week,
		                     charger_name:charger_name,
		                     time:time,
		                     states:states,
		                     status:status,
		                     temp_teacher_name:temp_teacher_name
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
										fieldLabel : '统计表',
										name : 'file_name',
										value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"教师出勤明细表"+'</a>',
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
	 				}
	 			});
		},
		attendenceToExcel : function(button){
			var formWin = createWin('按月导出教师出勤统计', 'teacherAttendanceStatisticsform');
		},
		shedulesexcel : function(button) {
	    	var grid = this.getTeacherAttendanceStatisticsGrid();
			var store = grid.getStore();
			var teacher_name = "";
			var school_name = "";
			var c_name = "";
			var stage = "";
			var s_name = "";
			var week = "";
			var worktime = "";
			var address = "";
			var allcount = "";
			var attendcount = "";
			var latecount = "";
			var adjustcount = "";
			for (var i = 0; i < store.getCount(); i++) {
			    var record = store.getAt(i);
			    teacher_name = teacher_name + record.get('teacher_name')+",";
			    school_name = school_name + record.get('school_name')+",";
			    c_name = c_name + record.get('c_name')+",";
			    stage = stage + record.get('stage')+",";
			    s_name = s_name + record.get('s_name')+",";
			    week = week + record.get('week')+",";
			    worktime = worktime + record.get('worktime')+",";
			    address = address + record.get('address')+",";
			    allcount = allcount + record.get('allcount')+",";
			    attendcount = attendcount + record.get('attendcount')+",";			
			    latecount = latecount + record.get('latecount')+",";			   
			    adjustcount = adjustcount + record.get('adjustcount')+",";
			};
			 Ext.MessageBox.show({
				title : '提示信息',
				msg : '确定要导出到本地吗？',
				icon : Ext.MessageBox.QUESTION,
				buttons : Ext.Msg.YESNO,
				fn : function(btnId, text, opt) {
				if (btnId == "yes") {
					 Ext.Msg.wait('处理中，请稍后...', '提示');
					 if(s_name ==null||s_name =="")
				    {
						Ext.Msg.alert('提示','记录为空，无法导出！');
				    }
					else{
	    	                Ext.Ajax.request({
					        url : 'system.do',
					// 请求地址
				    params : {
		                     action: 'teacherAttendenceToExcel',
		                     teacher_name:teacher_name,
		                     school_name:school_name,
		                     c_name:c_name,
		                     stage:stage,
		                     s_name:s_name,
		                     week:week,
		                     worktime:worktime,
		                     address:address,
		                     allcount:allcount,
		                     attendcount:attendcount,
		                     latecount:latecount,
		                     adjustcount:adjustcount
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
										fieldLabel : '统计表',
										name : 'file_name',
										value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"教师出勤统计表"+'</a>',
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
	 				}
	 			});
		},
	 query: function(button) {
	        if (session.authority.indexOf('b240201') > -1) {
	            var grid = button.up('grid');
	            var form = grid.up('panel').down('form');
	            var params = form.getValues();
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
		if (session.authority.indexOf('b240202') > -1) {
			var formWin = createWin('查看出勤详情', 'teacherAttendanceStatisticsviewform');
			var grid = formWin.down('grid');
			formWin.down('form').form.findField('ssd_id').setValue(record.data.ssd_id);
        	formWin.down('form').form.findField('t_id').setValue(record.data.teacher_id);
        	var params = {
      			  ssd_id: record.data.id,
      			  t_id:record.data.teacher_id
	                };
        	var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
            store.load();
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	submitToExcel: function(button) {
	        var form = button.up('form').form;
	        var action = 'teacherAttendenceToExcelPerMonth';
	        var grid = this.getTeacherAttendanceStatisticsGrid();
			var store = grid.getStore();
			var ssd_ids = "";
			for (var i = 0; i < store.getCount(); i++) {
			    var record = store.getAt(i);
			    ssd_ids = ssd_ids + record.get('id')+",";
			}
			var month = form.findField('month').getValue();
			var year = form.findField('year').getValue();
	        var win = button.up('window');	    
	        Ext.MessageBox.show({
				title : '提示信息',
				msg : '确定要导出到本地吗？',
				icon : Ext.MessageBox.QUESTION,
				buttons : Ext.Msg.YESNO,
				fn : function(btnId, text, opt) {
				if (btnId == "yes") {
					 Ext.Msg.wait('处理中，请稍后...', '提示');		
	    	         Ext.Ajax.request({
					        url : 'system.do',
					// 请求地址
				    params : {
		                     action: 'teacherAttendenceToExcelPerMonth',
		                     ssd_ids:ssd_ids,
		                     month:month,
		                     year:year
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
										fieldLabel : '统计表',
										name : 'file_name',
										value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"教师出勤统计表"+'</a>',
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
	    },
	   
});