Ext.define('manage.controller.Teacher', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'teacherGrid',
		selector : 'teachergrid'
	} ],
	views : ['teacher.Form','teacher.ViewForm','teacher.SelfInfo','teacher.TeacherUpdateForm','teacher.TypeinForm','teacher.TeachercourseForm'],
	init : function(app) {
		this.control({
			'teachergrid button[action=insert]' : {
				click : this.add
			},
			'teacherselfinfo' : {
				beforerender : this.loadData
			},
			'teacherselfinfo button[action=refresh]' : {
				click : this.loadData
			},
			'teacherupdateinfo button[action=submit]' : {
				click : this.submitTeacherInfo
			},
			'teacherselfinfo button[action=update]' : {
				click : this.updateSelfInfo
			},
			'teachergrid button[action=query]' : {
				click : this.query
			},
			'teachergrid button[action=delete]' : {
				click : this.deleteItems
			},
			'teachergrid button[action=typein]' : {
				click : this.typein
			},
			'teachergrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'teachergrid actioncolumn[action=editstatus]' : {
				click : this.editstatus
			},
			'teachergrid actioncolumn[action=changecourse]' : {
				click : this.changecourse
			},
			'teachereditform button[action=submit]' : {
				click : this.submit
			},
			'typeinform button[action=submit]' : {
				click : this.typeinsubmit
			},
			'changecourseform button[action=changecoursesubmit]' : {
				click : this.changecoursesubmit
			}
		});
	},
	updateSelfInfo : function(button) {
	    var store = Ext.create('manage.store.teacher.TeacherSelfInfo');
	    //store.load();
	    store.on("load",function(store){
	    	if(store.getCount()>0){
	    		var record = store.getAt(0);

		        var formWin = createWin('修改信息', 'teacherupdateinfo');
				formWin.down('form').loadRecord(record);
				return;
	    	}
	    	
    	});

	
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b40105') > -1) {
			var formWin = createWin('查看教师信息', 'teacherviewform');
			formWin.down('form').loadRecord(record);
			formWin.down('form').form.findField('sex').setValue(record.data.sex==0?'男':'女');
		//	formWin.down('form').form.findField('ischarge').setValue(record.data.ischarge==0?'否':'是');
			if(record.data.pic)
				Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b40102') > -1)
			createWin('添加教师', 'teachereditform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	changecourse : function(grid, rowIndex, colIndex, actionItem, event, record, row)  {
		if (session.authority.indexOf('b40108') > -1)
	{
	    var formWin =createWin('教师开课情况', 'teachercourseform');
	    var grid = formWin.down('grid');
		formWin.down('form').form.findField('t_id').setValue(record.data.id);
		var params = {
                t_id:record.data.id
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
	typein : function(button) {
		if (session.authority.indexOf('b40102') > -1)
			createWin('录入教师', 'typeinform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b40101') > -1) {
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
	editstatus: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b40103') > -1) {
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
                  funcId: 'f40103'
                            };
               var grid = this.getTeacherGrid();
			   var refresh = function() {
			   grid.getStore().reload();
			};
                ajax(null, params, null, refresh);
        	   }
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }

    },
	edit : function(grid, rowIndex, colIndex, actionItem, event, record, row) {
		if (session.authority.indexOf('b40103') > -1) {
			var formWin = createWin('修改教师', 'teachereditform');
			formWin.down('form').loadRecord(record);
			formWin.down('form').form.findField('courses').setValue(record.data.courses_name);
			formWin.down('form').form.findField('schools').setValue(record.data.schools_name);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b40104') > -1) {
			var grid = button.up('grid');
			var action = 'deleteTeacher';
			var funcId = 'f40104';
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
			funcId = 'f40102';
		} else {
			action = 'updateTeacher';
			funcId = 'f40103';
		}
		var win = button.up('window');
		var grid = this.getTeacherGrid();
		var worktime = form.findField('worktime').getValue();
		var  courses_name = form.findField('courses').getDisplayValue();
		var  schools_name = form.findField('schools').getDisplayValue();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId,
		    worktime:worktime,
		    courses_name:courses_name,
		    schools_name:schools_name,
	
		};
	   
		formSubmit(form, params, freshfn);
	
	},
	typeinsubmit : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			action = 'insert';
			funcId = 'f40107';
		} else {
			action = 'updateTeacher';
			funcId = 'f40103';
		}
		var win = button.up('window');
		var grid = this.getTeacherGrid();
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
	changecoursesubmit : function(button) {
		var form = button.up('form').form;
		var t_id = form.findField('t_id').getValue();
		var number = form.findField('number').getValue();
		var worktime = form.findField('worktime').getValue();
		var name = form.findField('name').getValue();
		var address = form.findField('address').getValue();
		alert(t_id);
		var action = 'changesubmit';
		var funcId = 'f40108';
		var win = button.up('window');
		var grid = this.getTeacherGrid();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId,
			t_id :t_id,
			number : number,
			worktime:worktime,
			name :name,
			address:address
		};
	
		formSubmit(form, params, freshfn);
	
	},
	submitTeacherInfo : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			return;
		} else {
			action = 'updateTeacherInfo';
			funcId = 'f110203';
		}
		var win = button.up('window');

		var freshfn = function() {
			win.close();
			var cmp = Ext.getCmp('btnteacher');
			Ext.require('manage.model.teacher.Teacher',function(){
				var form = cmp;
				if (cmp.xtype == 'button')
					form = cmp.up('form');
				form.form.reset();
				Ext.Ajax.request({
					url : 'system.do',
					params : {
						action : 'queryByCondition',
						funcId : 'f110201',
						id : session.id
					},
					success : function(res, opts) {
						var resp = Ext.decode(res.responseText);
						if (resp.totalCount > 0) {
							var data = resp.data;
							var reader = new Ext.data.reader.Json({
								model : 'manage.model.teacher.Teacher'
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
	loadData : function(cmp) {
		Ext.require('manage.model.teacher.Teacher',function(){
			var form = cmp;
			if (cmp.xtype == 'button')
				form = cmp.up('form');
			form.form.reset();
			Ext.Ajax.request({
				url : 'system.do',
				params : {
					action : 'queryByCondition',
					funcId : 'f110201',
					id : session.id
				},
				success : function(res, opts) {
					var resp = Ext.decode(res.responseText);
					if (resp.totalCount > 0) {
						var data = resp.data;
						var reader = new Ext.data.reader.Json({
							model : 'manage.model.teacher.Teacher'
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
	}
});