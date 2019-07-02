Ext.define('manage.controller.Pre_Courses', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'pre_coursesGrid',
        selector: 'pre_coursesgrid'
    },{
    	ref: 'detail_coursesGrid',
        selector: 'detail_coursesgrid'
    },{
    	ref: 'listGrid',
        selector: 'listgrid'
    },
    {
    	ref: 'classdetailGrid',
        selector: 'classdetailgrid'
    },
    {
		ref : 'pre_coursesTabPanel',
		selector : 'pre_coursestabpanel'
	}, {
		ref : 'precoursesViewForm',
		selector : 'precoursesviewform'
	}],
    views: ['pre_courses.ListForm','pre_courses.ViewForm','pre_courses.ViewremarkForm','pre_courses.TabPanel','pre_courses.TermForm','pre_courses.ClassViewForm','pre_courses.AddClassForm'],
    init: function(app) {
        this.control({
            'detail_coursesgrid button[action=insert]': {
                click: this.add
            },
			'pre_coursesgrid button[action=query]' : {
				click : this.query
			},
			'pre_coursesgrid button[action=addTerm]' : {
				click : this.addTerm
			},
			'classdetailgrid button[action=addClasses]' : {
				click : this.addClasses
			},
            'classdetailgrid actioncolumn[action=editClass]': {
                click: this.editClass
            },
            'classdetailgrid actioncolumn[action=deleteClass]': {
                click: this.deleteClass
            },
            'pre_coursesgrid button[action=deleteShedules]': {
                click: this.deleteShedules
            },
            'detail_coursesgrid actioncolumn[action=deletecourse]': {
                click: this.deletePre_courses
            },
            'detail_coursesgrid actioncolumn[action=classManage]': {
                click: this.classManage
            },
            'pre_coursesgrid actioncolumn[action=addcourses]': {    //点击推荐课程按钮
                click: this.addcourses
            },
            'pre_coursesgrid actioncolumn[action=warn]': {
                click: this.sheduleswarn
            },
            'listgrid actioncolumn[action=viewremark]': {
                click: this.viewremark
            },
            'listform button[action=submit]': {
                click: this.submit
            },
            'listgrid button[action=query]' : {
            	click: this.queryclass
            },
            'termform button[action=submit]': {
                click: this.termsubmit
            },
            'addclassform button[action=submit]': {
                click: this.addClassSubmit
            }
        });
    },
    deletePre_courses : function(grid, rowIndex, colIndex, actionItem, event, record,row) {
    	if (session.authority.indexOf('b150106') > -1) {
    		if(record.data.isaccept ==1)
    			{
    			   Ext.Msg.alert('系统提示', '学校已经选择该课程，不能删除！');
    			}
    		else{
			    Ext.MessageBox.show({
				title : '提示信息',
				msg : '确定要删除该课程吗？',
				icon : Ext.MessageBox.QUESTION,
				buttons : Ext.Msg.YESNO,
				fn : function(btnId, text, opt) {
					if (btnId == "yes") {
						Ext.Msg.wait('处理中，请稍后...', '提示');
						Ext.Ajax.request({
							url : 'system.do',
							// 请求地址
							params : {
								action : 'deletePre_courses',
								id : record.data.id,
								funcId:'f150106'
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
    		}
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
        
    },
    sheduleswarn : function(grid, rowIndex, colIndex, actionItem, event, record,row) {
    	if (session.authority.indexOf('b150113') > -1) {
    		if(record.data.status !=0)
    			{
    			   Ext.Msg.alert('系统提示', '您已发送提醒，不能重复提醒！');
    			}
    		else{
			    Ext.MessageBox.show({
				title : '提示信息',
				msg : '确定要提醒教务人员排课吗？',
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
								status:1,
								funcId:'f150113'
							},
							// 请求参数
							method : 'post',
							// 方法
							callback : function(options, success, response) {
								var resp = Ext.decode(response.responseText);
								if (success && resp.success) {
									Ext.Msg.hide();
									Ext.MessageBox.show({
										title : '提示信息',
										msg :  resp.msg,
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
										msg : resp.msg ? resp.msg : '操作失败',
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
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
        
    },
    deleteShedules : function(button) {
    	if (session.authority.indexOf('b150108') > -1) {
    		 var grid = button.up('grid');
             var action = 'deleteShedules';
             var funcId = 'f150108';
             deleteItems(grid, action, funcId);
    	
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
        
    },
    addTerm: function(button) {
        if (session.authority.indexOf('b150103') > -1) {
        	 var formWin = createWin('添加销售课程列表', 'termform');
        	 var myDate = new Date();
        	 var year = myDate.getFullYear();  //获取当前的年份
        	 formWin.down('form').form.findField('year').setValue(year);
        } 	
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    //增加班级按钮
    addClasses: function(button) {
        if (session.authority.indexOf('b150104') > -1){
        	var form = button.up('form').form;
    	    var pre_courses_detail_id = form.findField('pre_courses_detail_id').getValue();
    	    var c_id = form.findField('c_id').getValue();
    	    var week = form.findField('week').getValue();
    	    var c_name = form.findField('c_name').getValue();
    		var formWin = createWin('增加班级:'+c_name, 'addclassform');
    		formWin.down('form').form.findField('pre_courses_detail_id').setValue(pre_courses_detail_id);
    		formWin.down('form').form.findField('week').setValue(week);
    		formWin.down('form').form.findField('c_id').setValue(c_id);
    		formWin.down('form').form.findField('c_name').setValue(c_name);
        }
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    //编辑按钮，修改班级信息
    editClass: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b150104') > -1) {
            var formWin = createWin('修改班级信息', 'addclassform');
            formWin.down('form').loadRecord(record);
            Ext.getCmp('s_name').setReadOnly(true);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    //删除按钮，删除班级信息
    deleteClass: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b150104') > -1) {
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
 								funcId:'f150104'
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
	viewremark : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b40101') > -1) {
			var formWin = createWin('查看教师信息', 'viewremarkform');
			formWin.down('form').loadRecord(record);
			if(record.data.pic)
				Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	//班级管理按钮
	classManage : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b150104') > -1) {
			var course_name = record.data.name;
			var formWin = createWin(course_name+':班级列表', 'classviewform');
			var grid = formWin.down('grid');
			var pre_courses_detail_id = record.data.id;
			var week = this.getPre_coursesTabPanel().getActiveTab().id;
			formWin.down('form').form.findField('pre_courses_detail_id').setValue(pre_courses_detail_id);  //增加班级的时候要用
			formWin.down('form').form.findField('c_id').setValue(record.data.c_id);  //增加班级的时候要用
			formWin.down('form').form.findField('week').setValue(week);  //增加班级的时候要用
			formWin.down('form').form.findField('c_name').setValue(record.data.name);  //增加班级的时候要用
			var params = {
					pre_courses_detail_id: pre_courses_detail_id,
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
    // 我要推荐按钮
    add: function(button) {
        if (session.authority.indexOf('b150102') > -1) {
        	var form = button.up('form').form;
        	var pc_id = form.findField('pre_courses_id').getValue();
        	var s_id = form.findField('s_id').getValue();      //学校的id
        	var term = form.findField('term').getValue();                     //学期
        	var year = form.findField('year').getValue();                     //年份
        	var formwin = createWin('添加推荐课程', 'listform');
        	formwin.down('form').form.findField('pre_courses_id').setValue(pc_id);
        	formwin.down('form').form.findField('s_id').setValue(s_id);
        	formwin.down('form').form.findField('term').setValue(term);
        	formwin.down('form').form.findField('year').setValue(year);
        	var grid = formwin.down('grid');
        	var week = this.getPre_coursesTabPanel().getActiveTab().id;
        	var params = {
  	                week:week,
	                pre_courses_id: pc_id
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
    //点击推荐课程按钮
    addcourses: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b150111') > -1) {
        	var s_name = record.data.s_name; 
        	var formWin = createWin('推荐课程列表 :'+s_name, 'precoursesviewform');
        	var grid = formWin.down('grid');
        	formWin.down('form').form.findField('pre_courses_id').setValue(record.data.id);
        	formWin.down('form').form.findField('s_id').setValue(record.data.s_id);
        	formWin.down('form').form.findField('status').setValue(record.data.status);
        	formWin.down('form').form.findField('term').setValue(record.data.term);
        	formWin.down('form').form.findField('year').setValue(record.data.year);
        	var params = {
	                week:1,
	                pre_courses_id: record.data.id
	                };
           
	    	var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
            store.loadPage(1);

        }
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    queryclass:function(button){
    	 if (session.authority.indexOf('b150107') > -1) {
             var grid = button.up('grid');
           //  var form = grid.up('panel').down('form');
             var form = button.up('form').form;
             var week = this.getPre_coursesTabPanel().getActiveTab().id;
             var pc_id = form.findField('pre_courses_id').getValue();
             var stage = form.findField('stage').getValue();
             var name = form.findField('name').getValue();
             var params = {
   	                week:week,
 	                pre_courses_id: pc_id,
 	                stage:stage,
 	                name :name
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
    query: function(button) {
        if (session.authority.indexOf('b150101') > -1) {
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
   
    //添加推荐课程页面的确定按钮
    submit: function(button) {
    	var form = button.up('form').form;
    	var pc_id = form.findField('pre_courses_id').getValue();
    	var s_id = form.findField('s_id').getValue();                     //学校的id
    	var term = form.findField('term').getValue();                     //学期
    	var year = form.findField('year').getValue();                     //年份
        var grid1 =  this.getPre_coursesTabPanel().getActiveTab().items.items[0];
        var action = 'addPreCoursesList';
        var funcId = 'f150102';
        
        var win = button.up('window');
        var grid = this.getListGrid();
        var week = this.getPre_coursesTabPanel().getActiveTab().id;
        var rows = grid.getSelectionModel().getSelection();
        if(rows.length == 0){
        	Ext.Msg.alert('系统提示', '请选择要添加的课程！');
        }
        else{
        	var ids = "";    //课程id
            for(var i = 0; i < rows.length; i++){
            	ids += rows[i].data.id;
            	if(i < rows.length-1){
            		ids +=',';
            	}
            };
            
            var freshfn = function() {
                win.close();
                grid1.getStore().reload();
            };
            var params = {
                action: action,
                funcId: funcId,
                grid : grid,
                s_id:s_id,
                ids: ids,
                week:week,
                pc_id: pc_id,
                term:term,
                year:year
            };
            formSubmit(form, params, freshfn);
        }   
    },
    //增加班级页面的确定按钮
    addClassSubmit: function(button) {
        var form = button.up('form').form;
        var action;
        var funcId;
        if (form.findField('id').getValue() == "") {
            action = 'salerAddSubShedules';
            funcId = 'f150104';
        } else {
            action = 'salerUpdateSubShedules';
            funcId = 'f150104';
        }
        var win = button.up('window');
        var grid = this.getClassdetailGrid();
        var freshfn = function() {
        	 win.close();
        	grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId
        };
        formSubmit(form, params, freshfn);
    },
    termsubmit: function(button) {
        var form = button.up('form').form;
        var action = 'addPreCourses';   //新增推荐课表的controller，在PreCoursesController中定义
        var funcId = 'f150103';   
        var win = button.up('window');
        var grid = this.getPre_coursesGrid();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
            u_id: session.id
        };
        formSubmit(form, params, freshfn);
    }
});