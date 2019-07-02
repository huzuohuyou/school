Ext.define('manage.controller.Teacherlibrary', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'teacherlibraryGrid',
		selector : 'teacherlibrarygrid'
	},{
		ref : 'teachercoursesGrid',
		selector : 'teachercoursesgrid'
	},{
		ref : 'teacherschoolsGrid',
		selector : 'teacherschoolsgrid'
	},{
		ref : 'addcoursesGrid',
		selector : 'addcoursesgrid'
	},{
		ref : 'addschoolsGrid',
		selector : 'addschoolsgrid'
	},{
		ref : 'teacherlibrarycoursesQueryForm',
		selector : 'teacherlibrarycoursesqueryform'
	}],
	views : ['teacherlibrary.ViewForm','teacherlibrary.CourseViewForm','teacherlibrary.AddCoursesForm','teacherlibrary.Form','teacherlibrary.TypeinForm','teacherlibrary.TeacherLibaraySchoolViewForm','teacherlibrary.AddSchoolsForm'],
	init : function(app) {
		this.control({
			'teacherlibrarygrid button[action=query]' : {
				click : this.query
			},
			'addcoursesgrid button[action=query]' : {
				click : this.queryCourses
			},
			'teacherlibrarygrid button[action=delete]' : {
				click : this.deleteItems
			},
			'teacherlibrarygrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'teacherlibrarygrid actioncolumn[action=viewSchools]' : {
				click : this.viewSchools   //查看教师的授课学校
			},
			'teacherlibrarygrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'teacherlibrarygrid actioncolumn[action=editstatus]' : {
				click : this.editstatus
			},
			'teacherlibrarygrid button[action=insert]' : {
				click : this.add
			},
			'teachercoursesgrid button[action=add]' : {
				click : this.addCourses
			},
			'teacherschoolsgrid button[action=add]' : {
				click : this.addSchools                     //为教师添加可教授的学校
			},
			'teachercoursesgrid button[action=delete]' : {
				click : this.deleteCourses
			},
			'teacherschoolsgrid button[action=delete]' : {
				click : this.deleteSchools
			},
			'teacherlibraryform button[action=submit]' : {
				click : this.submit
			},
			'teacherlibraryform button[action=select]' : {
				click : this.select
			},
			'teacherlibrarygrid button[action=typein]' : {
				click : this.typein
			},
			'teacherlibrarytypeinform button[action=submit]' : {
				click : this.typeinsubmit
			},
			'teacherlibarayaddcoursesform button[action=submit]' : {
				click : this.submitCourses
			},
			'teacherlibarayaddschoolsform button[action=submit]' : {
				click : this.submitSchools
			},
			'teacherlibrarygrid button[action=teachersexcel]': {
	                click: this.teachersexcel
	        }
		});
	},
	submitCourses: function(button) {
	    var form = button.up('form').form;
	    var id = form.findField('id').getValue();
		var action = 'updateTeacherCourses';
        var win = button.up('window');
        var grid = this.getAddcoursesGrid();
        var grid1 = this.getTeachercoursesGrid();
        var rows = grid.getSelectionModel().getSelection();
        var courses_name = "";
        var courses_id = "";
        if(rows.length == 0){
        	Ext.Msg.alert('系统提示', '请选择要教的课程！');
        }
        else
        {
            for(var i = 0; i < rows.length; i++){    	
            	courses_id += rows[i].data.id;
            	if (i < rows.length - 1){
            	    courses_id += ',';
            	}
            	courses_name += rows[i].data.name;
	        	if (i < rows.length - 1){
	        		courses_name += ',';
	        	}
        };
        var freshfn = function() {
			win.close();
			grid1.getStore().reload();
		};
		var params = {
			action : action,
			id:id,
			courses_id :courses_id,
			courses_name:courses_name
		};
	
		formSubmit(form, params, freshfn);
        }
    },
    //选择所教课程表单的确定按钮
    submitSchools: function(button) {
	    var form = button.up('form').form;
	    var id = form.findField('id').getValue();
		var action = 'updateTeacherSchools';
        var win = button.up('window');
        var grid = this.getAddschoolsGrid();
        var grid1 = this.getTeacherschoolsGrid();
        var rows = grid.getSelectionModel().getSelection();
        var schools_id = "";
        if(rows.length == 0){
        	Ext.Msg.alert('系统提示', '请选择授课学校！');
        }
        else
        {
            for(var i = 0; i < rows.length; i++){    	
            	schools_id += rows[i].data.id;
            	if (i < rows.length - 1){
            		schools_id += ',';
            	}          	        	
        };
        var freshfn = function() {
			win.close();
			grid1.getStore().reload();
		};
		var params = {
			action : action,
			id:id,
			schools_id :schools_id,			
		};
	
		formSubmit(form, params, freshfn);
        }
    },
	select : function(button) {
			var form = button.up('form').form;
    	    var id = form.findField('id').getValue();
			var formWin = createWin('选择所教课程', 'teacherlibaraycourseviewform');
			var grid = formWin.down('grid');
			formWin.down('form').form.findField('id').setValue(id);
			var params = {
        		     id: id,
	                };         
	    	var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
            store.load();
		
	},
	addCourses : function(button) {
		var form = button.up('form').form;
	    var id = form.findField('id').getValue();
		var formWin = createWin('选择课程', 'teacherlibarayaddcoursesform');
		var grid = formWin.down('grid');
		formWin.down('form').form.findField('id').setValue(id);
		var params = {
    		     id: id,
                };         
    	var store = grid.getStore();
        store.on("beforeload",
        function() {
            store.proxy.extraParams = params;
        });
        store.load();
	
    },
    addSchools : function(button) {
		var form = button.up('form').form;
	    var id = form.findField('id').getValue();
		var formWin = createWin('选择学校', 'teacherlibarayaddschoolsform');
		var grid = formWin.down('grid');
		formWin.down('form').form.findField('id').setValue(id);
		var params = {
    		     id: id,
                };         
    	var store = grid.getStore();
        store.on("beforeload",
        function() {
            store.proxy.extraParams = params;
        });
        store.load();
	
    },
    deleteCourses : function(button) {
    	var action = 'deleteTeacherCourses';
     	var form = button.up('form').form;
     	var t_id = form.findField('id').getValue();
     	var grid = this.getTeachercoursesGrid();
        var rows = grid.getSelectionModel().getSelection();
        if(rows.length == 0){
        	Ext.Msg.alert('系统提示', '请选择要删除的课程！');
        }
        else{
        	 var ids = "";
        	 for ( var i = 0; i < rows.length; i++) {
					ids += rows[i].get("id");
					if (i < rows.length - 1)
						ids += ',';
			}
        }
        var freshfn = function() {
            grid.getStore().reload();
        };
        var params = {
                action: action,
                grid : grid,
                ids: ids,
                t_id:t_id
            };
        formSubmit(form, params, freshfn);
	},
	
	//删除教师的授课学校
	 deleteSchools : function(button) {
	    	var action = 'deleteTeacherSchools';
	     	var form = button.up('form').form;
	     	var t_id = form.findField('id').getValue();
	     	var grid = this.getTeacherschoolsGrid();
	        var rows = grid.getSelectionModel().getSelection();
	        if(rows.length == 0){
	        	Ext.Msg.alert('系统提示', '请选择要删除的学校！');
	        }
	        else{
	        	 var ids = "";
	        	 for ( var i = 0; i < rows.length; i++) {
						ids += rows[i].get("id");
						if (i < rows.length - 1)
							ids += ',';
				}
	        }
	        var freshfn = function() {
	            grid.getStore().reload();
	        };
	        var params = {
	                action: action,
	                grid : grid,
	                ids: ids,
	                t_id:t_id
	            };
	        formSubmit(form, params, freshfn);
		},
	typeinsubmit : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			action = 'insert';
			funcId = 'f40307';
		} else {
			action = 'updateTeacher';
			funcId = 'f40303';
		}
		var win = button.up('window');
		var grid = this.getTeacherlibraryGrid();
		//var courses = form.findField('course').getValue();
		//var courses_name = form.findField('course').getDisplayValue();
		//alert(courses_name);
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId,
		//	courses :courses,
		//	courses_name:courses_name
		//	test :test
		};
	
		formSubmit(form, params, freshfn);
	
	},
	typein : function(button) {
		if (session.authority.indexOf('b40302') > -1)
			createWin('录入教师', 'teacherlibrarytypeinform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b40302') > -1)
			createWin('添加教师', 'teacherlibraryform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	editstatus: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b40306') > -1) {
        	   if(record.data.classcount !=0)
        		{
        		   Ext.Msg.alert('系统提示', '该教师已录用，不能改为离职状态！');
        		   return;
        		}
        	   else{
               Ext.Msg.wait('处理中，请稍后...', '提示');
               var status = record.data.status == 0 ? '1': '0';
               var params = {
                  action: 'changeTeacher',
                  id: record.data.id,
                  status: status,
                  funcId: 'f40306'
                            };
               var grid = this.getTeacherlibraryGrid();
			   var refresh = function() {
			   grid.getStore().reload();
			};
                ajax(null, params, null, refresh);
        	   }
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }

    },
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b40305') > -1) {
			var formWin = createWin('查看教师所教课程', 'teacherlibaraycourseviewform');
			var grid = formWin.down('grid');
			formWin.down('form').form.findField('id').setValue(record.data.id);
			var params = {
        		     id: record.data.id,
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
	viewSchools : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b40305') > -1) {
			var formWin = createWin('查看教师所教课程', 'teacherlibarayschoolviewform');
			var grid = formWin.down('grid');
			formWin.down('form').form.findField('id').setValue(record.data.id);
			var params = {
        		     id: record.data.id,
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
	query : function(button) {
		if (session.authority.indexOf('b40301') > -1) {
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
	queryCourses : function(button) {
			var grid = button.up('grid');
			var form = grid.up('panel').down('form');
			var form1 = button.up('form').form;
		    var id = form1.findField('id').getValue();
		    this.getTeacherlibrarycoursesQueryForm().form.findField('id').setValue(id);
			var params = form.getValues();
			var store = grid.getStore();
			store.on("beforeload", function() {
				store.proxy.extraParams = params;
			});
			store.loadPage(1);
		
	},
	edit : function(grid, rowIndex, colIndex, actionItem, event, record, row) {
		if (session.authority.indexOf('b40303') > -1) {
			var formWin = createWin('修改教师', 'teacherlibraryform');
			formWin.down('form').loadRecord(record);
			formWin.down('form').form.findField('courses_name').setValue(record.data.courses_name);
			formWin.down('form').form.findField('schools').setValue(record.data.schools_name);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b40304') > -1) {
			var grid = button.up('grid');
			var action = 'deleteTeacher';
			var funcId = 'f40304';
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
			action = 'addTeacher';
			funcId = 'f40302';
		} else {
			action = 'updateTeacher';
			funcId = 'f40303';
		}
		var win = button.up('window');
		var grid = this.getTeacherlibraryGrid();
		var worktime = form.findField('worktime').getValue();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId,
		    worktime:worktime,		 
	
		};
		formSubmit(form, params, freshfn);
	},
	  teachersexcel : function(button) {
			 Ext.MessageBox.show({
					title : '提示信息',
					msg : '确定要导出教师到本地吗？',
					icon : Ext.MessageBox.QUESTION,
					buttons : Ext.Msg.YESNO,
					fn : function(btnId, text, opt) {
						if (btnId == "yes") {
							Ext.Msg.wait('处理中，请稍后...', '提示');
	    	                Ext.Ajax.request({
					url : 'system.do',
					// 请求地址
				    params : {
		                     action: 'teachersexcel'
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
										fieldLabel : '教师库',
										name : 'file_name',
										value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"教师库"+'</a>',
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
});