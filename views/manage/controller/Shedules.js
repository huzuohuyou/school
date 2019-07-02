Ext.define('manage.controller.Shedules', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'shedulesGrid',
		selector : 'shedulesgrid'
	}, {
		ref : 'detail_shedulesGrid',
		selector : 'detail_shedulesgrid'
	}, {
		ref : 'shedules_detailGrid',
		selector : 'shedules_detailgrid'
	}, {
		ref : 'shedulesstudentGrid',
		selector : 'shedulesstudentgrid'
	}, {
		ref : 'shedulesTabPanel',
		selector : 'shedulestabpanel'
	}, {
		ref : 'shedules_teacherGrid',
		selector : 'shedules_teachergrid'
	},{
		ref : 'addstudentGrid',
		selector : 'addstudentgrid'
	},
	{
		ref : 'detail_shedulesstatisticsGrid',
		selector : 'detail_shedulesstatisticsgrid'
	},
	{
		ref : 'manualstudentGrid',
		selector : 'manualstudentgrid'
	},{
		ref : 'shedulesViewForm',
		selector : 'shedulesviewform'
	},{
		ref : 'shedules_detailViewForm',
		selector : 'shedules_detailviewform'
	},{
		ref : 'shedulesForm',
		selector : 'shedulesform'
	},{
		ref : 'statusForm',
		selector : 'statusform'
	},{
		ref : 'adddateForm',
		selector : 'adddateform'
	}],
	views: ['shedules.Form','shedules.ClassOtherViewForm','shedules.TeacherForm','shedules.StatusForm','shedules.ViewForm','shedules.Shedules_DetailViewForm','shedules.TabPanel','shedules.Form','shedules.StudentForm','shedules.AddStudentForm','shedules.ManualStudentForm','shedules.AddDateForm','shedules.ManualStudentQueryForm','shedules.QueryForm'],
    init: function(app) {
        this.control({
        	'detail_shedulesgrid actioncolumn[action=student]': {
                click: this.querystudent
            },
            'manualstudentgrid button[action=query]': {
                click: this.queryAllstudent
            },
            'shedules_detailgrid button[action=insert]': {
                click: this.addsubdetail
            },
            'detail_shedulesgrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'detail_shedulesgrid actioncolumn[action=status]': {
                click: this.updatestatus
            },
            'detail_shedulesgrid actioncolumn[action=viewclasses]': {
                click: this.viewclasses
            },
            'shedulesgrid actioncolumn[action=addshedules]': {
                click: this.addshedules
            },
            'detail_shedulesgrid actioncolumn[action=deleteClass]': {
                click: this.deleteClass
            },
            'detail_shedulesgrid actioncolumn[action=viewOther]': {
                click: this.viewOther
            },
            'shedulesform button[action=submit]': {
                click: this.submit
            },
            'statusform button[action=submit]': {
                click: this.statussubmit
            },
            'shedulesstudentgrid button[action=selectstudent]': {
                click: this.addstudent
            },
            'shedulesstudentgrid button[action=manualInput]': {
                click: this.manualInput
            },
            'addstudentform button[action=submit]': {
                click: this.addstudentsubmit
            },
            'manualstudentform button[action=submit]': {
                click: this.manualstudentsubmit
            },
            'shedulesstudentgrid button[action=delete]': {
                click: this.deleteclassstudent
            },
            'addstudentgrid button[action=delete]': {
                click: this.deleteshedulesstudent
            },
            'shedulesform button[action=selectTeacher]': {
                click: this.selectTeacher
            },
            'teacherform button[action=submit]': {
                click: this.teachersubmit
            },
            'detail_shedulesstatisticsgrid button[action=classesexcel]': {    //班级列表界面-导出表格
                click: this.classesexcel
            },
            'statusform button[action=selectTeacher]': {
                click: this.selectTeacher
            },
            'shedulesgrid button[action=query]' : {
				click : this.query
			},
        });
    },
  //班级列表界面-导出表格
    classesexcel : function(button) {
    	var grid = this.getDetail_shedulesstatisticsGrid();
		var store = grid.getStore();
		var s_name = "";
		var week = "";
		var count = "";
		var worktime = "";
		var address = "";
		var stage = "";
		var type = "";
		var grade = "";
		var start_date = "";
		var end_date = "";
		var allcount = "";
		var phone = "";
		for (var i = 0; i < store.getCount(); i++) {
		    var record = store.getAt(i);
		    s_name = s_name + record.get('s_name')+",";
		    week = week + record.get('week')+",";
		    count = count + record.get('count')+",";
		    worktime = worktime + record.get('worktime')+",";
		    address = address + record.get('address')+",";
		    stage = stage + record.get('stage')+",";
		    type = type + record.get('type')+",";
		    grade = grade + record.get('grade')+",";
		    if(record.get('start_date') == "" || record.get('start_date') == null){
		    	start_date = start_date + "-"+",";	
		    }
		    else{
		    	start_date = start_date + record.get('start_date')+",";
		    }
		    if(record.get('end_date') == "" || record.get('end_date') == null){
		    	end_date = end_date + "-"+",";	
		    }
		    else{
		    	end_date = end_date + record.get('end_date')+",";
		    }
		    allcount = allcount + record.get('allcount')+",";
		    phone = phone + record.get('phone')+",";
		};
		 Ext.MessageBox.show({
			title : '提示信息',
			msg : '确定要导出到本地吗？',
			icon : Ext.MessageBox.QUESTION,
			buttons : Ext.Msg.YESNO,
			fn : function(btnId, text, opt) {
			if (btnId == "yes") {
				 Ext.Msg.wait('处理中，请稍后...', '提示');
				 if(store.getCount() == 0)
			    {
					Ext.Msg.alert('提示','记录为空，无法导出');
			    }
				else{
    	                Ext.Ajax.request({
				        url : 'system.do',
				// 请求地址
			    params : {
	                     action: 'sheduelsClassesExcel',	                
	                     s_name:s_name,
	                     week:week,
	                     count:count,
	                     worktime:worktime,
	                     address:address,
	                     stage:stage,
	                     type:type,
	                     grade:grade,
	                     start_date:start_date,
	                     end_date:end_date,
	                     allcount:allcount,
	                     phone:phone
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
									value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"学生开班统计表"+'</a>',
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
	        if (session.authority.indexOf('b90101') > -1) {
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
    queryAllstudent : function(button) {
			var grid = button.up('grid');
			var form = grid.up('panel').down('form');
			var form1 = button.up('form').form;
        	var sd_id = form1.findField('sd_id').getValue();
        	var courses_id = form1.findField('c_id').getValue();
        	var s_id = form1.findField('s_id').getValue();
        	var week = form1.findField('week').getValue();
        	var grad = form1.findField('grad').getValue();
        	var class_id = form1.findField('class').getValue();
			 var params = {
			            grad:grad,
			            class_id:class_id,
			            sd_id:sd_id,
			            courses_id:courses_id,
			            s_id:s_id,
			            week:week
			        };
			var store = grid.getStore();
			store.on("beforeload", function() {
				store.proxy.extraParams = params;
			});
			store.loadPage(1);
		
	},
    updatestatus: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b90110') > -1) {
            var formWin = createWin('修改状态', 'statusform');
            formWin.down('form').loadRecord(record);
            formWin.down('form').form.findField('sd_id').setValue(record.data.id);
        	formWin.down('form').form.findField('c_id').setValue(record.data.c_id);
        	formWin.down('form').form.findField('week').setValue(record.data.week);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    statussubmit: function(button) {
        var form = button.up('form').form;
        var action = 'updateSupplyteacher';
        var funcId= 'f30712';
   
        var win = button.up('window');
        var grid = this.getDetail_shedulesGrid();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId
            //u_id: session.id
        };
        formSubmit(form, params, freshfn);
    },
    querystudent:function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b90107') > -1) {
            var formWin = createWin('学生名单', 'shedulesstudentform');
        	var s_id = this.getShedulesViewForm().form.findField('s_id').getValue();
        	var grid = formWin.down('grid');
        	formWin.down('form').form.findField('sub_id').setValue(record.data.id);
        	formWin.down('form').form.findField('sd_id').setValue(record.data.sd_id);
        	formWin.down('form').form.findField('c_id').setValue(record.data.c_id);
        	formWin.down('form').form.findField('s_id').setValue(s_id);
        	formWin.down('form').form.findField('week').setValue(record.data.week);
        	var params = {
        			  sub_id: record.data.id,
        			  s_id:s_id,
        			  c_id:record.data.c_id
	                };
	    	var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
            store.load();    
        }	
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    addstudent: function(button) {
        if (session.authority.indexOf('b90108') > -1) {
        	var form = button.up('form').form;
        	var sub_id = form.findField('sub_id').getValue();
        	var sd_id = form.findField('sd_id').getValue();
        	var s_id = form.findField('s_id').getValue();
            var week = form.findField('week').getValue();
        	var c_id = form.findField('c_id').getValue();
        	var formWin = createWin('添加学生', 'addstudentform');
        	var grid = formWin.down('grid');
        	formWin.down('form').form.findField('sub_id').setValue(sub_id);
        	formWin.down('form').form.findField('sd_id').setValue(sd_id);
        	formWin.down('form').form.findField('week').setValue(week);
        	formWin.down('form').form.findField('c_id').setValue(c_id);
        	var params = {
        			sd_id: sd_id,
        			sub_id:sub_id,
        			c_id : c_id,
        			s_id :s_id,
        			week:week
	                };
           
	    	var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
            store.load();
        }
        	
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    manualInput : function(button) {
		if (session.authority.indexOf('b90111') > -1){
			var form = button.up('form').form;
    	    var sub_id = form.findField('sub_id').getValue();
    	    var sd_id = form.findField('sd_id').getValue();
    	    var s_id = form.findField('s_id').getValue();
    	    var c_id = form.findField('c_id').getValue();
    	    var week = form.findField('week').getValue();
    	    var formWin= createWin('手动添加学生', 'manualstudentform');
			var grid = formWin.down('grid');
        	formWin.down('form').form.findField('sub_id').setValue(sub_id);
        	formWin.down('form').form.findField('sd_id').setValue(sd_id);
        	formWin.down('form').form.findField('s_id').setValue(s_id);
        	formWin.down('form').form.findField('c_id').setValue(c_id);
        	formWin.down('form').form.findField('week').setValue(week);
        	var params = {
        			sd_id: sd_id,
        			courses_id : c_id,
        			s_id :s_id,
        			week:week
	                };         
	    	var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
            store.load();
		}
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	 addshedules:function(grid, rowIndex, colIndex, actionItem, event, record, row) {
	        if (session.authority.indexOf('b90103') > -1) {
	        	var term = record.data.term;        //学期
				var year = record.data.year;        //年份
	        	if(record.data.status == 1){
	        	  Ext.MessageBox.show({
					title : '提示信息',
					msg : '确定开始排课吗？',
					icon : Ext.MessageBox.QUESTION,
					buttons : Ext.Msg.YESNO,
					fn : function(btnId, text, opt) {
						if (btnId == "yes") {
							Ext.Msg.wait('处理中，请稍后...', '提示');
							Ext.Ajax.request({
								url : 'system.do',
								// 请求地址
								params : {
									action : 'updatePre_coursesStatus',
									id : record.data.id,
									status:2,
									funcId:'f90103'
								},
								// 请求参数
								method : 'post',
								// 方法
								callback : function(options, success, response) {
									if (success) {
										Ext.Msg.hide();
										 var s_name = record.data.s_name;    //学校名称
										 var formWin = createWin('学校 : '+s_name+' 排课列表', 'shedulesviewform');
								         var grid = formWin.down('grid');
								         formWin.down('form').form.findField('school_id').setValue(record.data.s_id);//学校的id
								         formWin.down('form').form.findField('s_name').setValue(s_name);
								         formWin.down('form').form.findField('term').setValue(term);
								         formWin.down('form').form.findField('year').setValue(year);
								         var params = {
								        			week : 1,
									                school_id: record.data.s_id,
									                term :term,
									                year:year
									                };
								           
									     var store = grid.getStore();
								         store.on("beforeload",
								         function() {
								                store.proxy.extraParams = params;
								            });
								         store.load();
									} else {
										Ext.Msg.hide();
										Ext.MessageBox.show({
											title : '提示信息',
											msg : '请检查网络设置!',
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
	        	else{
	        		 var s_name = record.data.s_name;
					 var formWin = createWin('学校 : '+s_name+' 排课列表', 'shedulesviewform');
			         var grid = formWin.down('grid');
			         formWin.down('form').form.findField('s_id').setValue(record.data.s_id);
			         formWin.down('form').form.findField('school_id').setValue(record.data.s_id);
			         formWin.down('form').form.findField('s_name').setValue(s_name);
			         formWin.down('form').form.findField('term').setValue(term);
			         formWin.down('form').form.findField('year').setValue(year);
			         var params = {
			        			week : 1,
				                school_id: record.data.s_id,
				                term :term,
				                year:year
				                };
			           
				     var store = grid.getStore();
			         store.on("beforeload",
			         function() {
			                store.proxy.extraParams = params;
			            });
			         store.load();
	        		
	        	}
	        }
	        	
	        else {
	            Ext.Msg.alert('系统提示', '您无权进行此项操作');
	        }
	    },
	    //班级管理按钮，弹出班级列表
        viewclasses:function(grid, rowIndex, colIndex, actionItem, event, record, row) {
           if (session.authority.indexOf('b90103') > -1) {
        	     var c_name = record.data.name;
        	     var s_name = this.getShedulesViewForm().form.findField('s_name').getValue();
        		 var formWin = createWin('课程名称 : '+c_name+'', 'shedules_detailviewform');
		         var grid = formWin.down('grid');
		         formWin.down('form').form.findField('sd_id').setValue(record.data.id);
		         formWin.down('form').form.findField('c_id').setValue(record.data.c_id);
		         formWin.down('form').form.findField('c_name').setValue(c_name);
		         formWin.down('form').form.findField('s_name').setValue(s_name);
		         formWin.down('form').form.findField('week').setValue(record.data.week);
		         var params = {
			                sd_id: record.data.id
			                };
		           
			     var store = grid.getStore();
		         store.on("beforeload",
		         function() {
		                store.proxy.extraParams = params;
		            });
		         store.load();
        }	
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    addsubdetail: function(button) {
        if (session.authority.indexOf('b90102') > -1) {
        	var form = button.up('form').form;
    	    var sd_id = form.findField('sd_id').getValue();
    	    var c_id = form.findField('c_id').getValue();
    	    var c_name = form.findField('c_name').getValue();
    	    var s_name = form.findField('s_name').getValue();
    	    var week = form.findField('week').getValue();
        	var formWin = createWin('增加班级', 'shedulesform');
        	formWin.down('form').form.findField('sd_id').setValue(sd_id);
        	formWin.down('form').form.findField('c_id').setValue(c_id);
        	formWin.down('form').form.findField('c_name').setValue(c_name);
        	formWin.down('form').form.findField('school_name').setValue(s_name);
        	formWin.down('form').form.findField('week').setValue(week);
        }
        	
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    //编辑按钮：教务人员（主管）编辑班级信息
    edit: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b90105') > -1) {
        	var week = this.getShedulesTabPanel().getActiveTab().id;
            var formWin = createWin('修改班级信息', 'shedulesform');
            formWin.down('form').loadRecord(record);      
            Ext.getCmp('s_name').setReadOnly(true);                      //设定班级名称不可更改
            Ext.getCmp('end_date').setMinValue(record.data.start_date);  // 设置结课日期最小值为开课日期
        	formWin.down('form').form.findField('week').setValue(week);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    //教务人员（主管）删除某个课程下的某个班级
    deleteClass : function(grid, rowIndex, colIndex, actionItem, event, record,row) {
    	if (session.authority.indexOf('b90104') > -1) {	
    		 Ext.MessageBox.show({
  				title : '提示信息',
  				msg : '确定要删除该班级吗，删除后将删除该班级的所有信息，请确认后再执行此操作！',
  				icon : Ext.MessageBox.QUESTION,
  				buttons : Ext.Msg.YESNO,
  				fn : function(btnId, text, opt) {
  					if (btnId == "yes") {
  						Ext.Msg.wait('处理中，请稍后...', '提示');
  						Ext.Ajax.request({
  							url : 'system.do',
  							// 请求地址
  							params : {
  								action : 'deleteSalerSubShedule',
  								id : record.data.id,
  								funcId:'f90104'
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
  											 // var grid = this.getPre_coursesGrid();
  											  grid.getStore().reload();
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
        
    },
    //其他信息按钮：教务人员（主管）查看班级其他信息
    viewOther: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b90105') > -1) {
            var formWin = createWin('班级信息', 'classotherviewform');
            formWin.down('form').loadRecord(record);      
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    //编辑班级信息的确定按钮
    submit: function(button) {
        var form = button.up('form').form;
        var action;
        var funcId;
        if (form.findField('id').getValue() == "") {
            action = 'addsubshedules';
            funcId = 'f90102';
        } else {
            action = 'updateSubshedules';
            funcId = 'f90105';
        }
        var win = button.up('window');
        var grid = this.getDetail_shedulesGrid();
        var week = this.getShedulesTabPanel().getActiveTab().id;
      //  var grid = this.getShedulesTabPanel().getActiveTab().items.items[3];
        var school_id = this.getShedulesViewForm().form.findField('school_id').getValue();
        var freshfn = function() {
        	win.close();
         	grid.getStore().reload();
        
        };
        var params = {
            action: action,
            funcId: funcId,
        };
        formSubmit(form, params, freshfn);
    },
    addstudentsubmit: function(button) {
    	var form = button.up('form').form;
    	var sub_id = form.findField('sub_id').getValue();
    	var sd_id = form.findField('sd_id').getValue();
    	var week = form.findField('week').getValue();
    	var c_id = form.findField('c_id').getValue();
        var grid1 = this.getShedulesstudentGrid();
        var action = 'insertShedulesStudentList';
        var funcId = 'f90108';
        
        var win = button.up('window');
        var grid = this.getAddstudentGrid();
     
        var rows = grid.getSelectionModel().getSelection();
        if(rows.length == 0){
        	Ext.Msg.alert('系统提示', '请选择要添加的学生！');
        };
        var ids = rows[0].data.id;
        for(var i = 1; i < rows.length; i++){
        	ids += ","+rows[i].data.id;
        };
        var freshfn = function() {
            win.close();
            grid1.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
            grid : grid,
            ids: ids,
            sub_id: sub_id,
            sd_id: sd_id,
            week:week

        };
        formSubmit(form, params, freshfn);
    },
    manualstudentsubmit: function(button) {
    	var form = button.up('form').form;
    	var sub_id = form.findField('sub_id').getValue();
    	var sd_id = form.findField('sd_id').getValue();
    	var week = form.findField('week').getValue();
    	var c_id = form.findField('c_id').getValue();
        var grid1 = this.getShedulesstudentGrid();
        var action = 'insertShedulesStudentList';
        var funcId = 'f90111';
        
        var win = button.up('window');
        var grid = this.getManualstudentGrid();
     
        var rows = grid.getSelectionModel().getSelection();
        if(rows.length == 0){
        	    Ext.MessageBox.show({
    			title : '提示信息',
    			msg : '请先勾选要添加的学生!',
    			icon : Ext.MessageBox.WARNING,
    			buttons : Ext.Msg.OK
    		});
    		return;
        }
        else{	
        	 var ids = rows[0].data.st_id;
             for(var i = 1; i < rows.length; i++){
             	ids += ","+rows[i].data.st_id;
             };
        var freshfn = function() {
            win.close();
            grid1.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
            ids: ids,
            sub_id: sub_id,
            sd_id: sd_id

        };
        formSubmit(form, params, freshfn);
        }
    },
    deleteclassstudent: function(button) {
        var action = 'deleteClassStudent';
        var funcId = 'f90109';
    	var form = button.up('form').form;
    	var sub_id = form.findField('sub_id').getValue();
        var grid = this.getShedulesstudentGrid();
        var rows = grid.getSelectionModel().getSelection();
        if(rows.length == 0){
        	Ext.Msg.alert('系统提示', '请选择要删除的学生！');
        };
        var ids = rows[0].data.id;
       
        for(var i = 1; i < rows.length; i++){
        	ids += ","+rows[i].data.id;
        };
        var freshfn = function() {
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
            grid : grid,
            ids: ids,
            sub_id:sub_id
        };
        formSubmit(form, params, freshfn);
    },
    //“选择教师”按钮
    selectTeacher: function(button) {
        if (session.authority.indexOf('b90106') > -1) {
        	var school_id = this.getShedulesViewForm().form.findField('school_id').getValue();
        	var form = button.up('form').form;
        	var temp = form.findField('temp').getValue();
        	var c_id = form.findField('c_id').getValue();
        	var week = form.findField('week').getValue();
        	var formwin = createWin('选择教师', 'teacherform');
        	formwin.down('form').form.findField('temp').setValue(temp);
        	var grid = formwin.down('grid');
        	formwin.down('form').form.findField('school_id').setValue(school_id);
        	var params = {
	                school_id: school_id,
	                week : week,
	                c_id:c_id,
	                number:""
	                
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
    teachersubmit:function(button){
    	 if (session.authority.indexOf('b90106') > -1) {
             var form = button.up('form').form;
             var win = button.up('window');
             var grid = this.getShedules_teacherGrid();
             var temp = form.findField('temp').getValue();
             var rows = grid.getSelectionModel().getSelection();
             if(rows.length == 0){
             	Ext.Msg.alert('系统提示', '请选择任课教师！');
             };
             var ids = rows[0].data.id;
             if(temp == 0 || temp == '0'){
            	 this.getShedulesForm().form.findField('teacher_id').setValue(rows[0].data.id);
            //	 this.getShedulesForm().form.findField('t_name').setValue(rows[0].data.name);
            	 this.getShedulesForm().form.findField('teacher_name').setValue(rows[0].data.name);
            	
             }else if(temp == 1 || temp == '1'){
            	 this.getStatusForm().form.findField('temp_teacher_id').setValue(rows[0].data.id);
            	 this.getStatusForm().form.findField('temp_teacher_name').setValue(rows[0].data.name);
            //	 this.getStatusForm().form.findField('temp_name').setValue(rows[0].data.name);
            	 
             }
             win.close();
        
        }
        	
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    }
});