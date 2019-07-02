Ext.define('manage.controller.ClassSchedules', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'classSchedulesGrid',
        selector: 'classSchedulesgrid'
    },{
    	ref: 'detail_classGrid',
        selector: 'detail_classgrid'
    },{
    	ref: 'detail_studentGrid',
        selector: 'detail_studentgrid'
    },
    {
		ref : 'teacherGrid',
		selector : 'daiketeachergrid'
	},
	 {
		ref : 'teacherGrid1',
		selector : 'teachergrid1'
	},
    {
    	ref: 'addclassstudentGrid',
        selector: 'addclassstudentgrid'
    },
    {
		ref : 'addclassstudentForm',
		selector : 'addclassstudentform'
	},
	{
		ref : 'classSchedulesForm',
		selector : 'classSchedulesform'
	}
    ],
    views: ['classSchedules.ViewForm','classSchedules.Form','classSchedules.StudentListViewForm','classSchedules.AddClassStudentForm','classSchedules.SignlistViewForm','classSchedules.TeacherForm','classSchedules.TeacherForm1'],
    init: function(app) {
        this.control({
			'classSchedulesgrid button[action=query]' : {
				click : this.query
			},
			'daiketeachergrid button[action=query]' : {
				click : this.queryteacher
			},
			'classSchedulesgrid actioncolumn[action=check]': {
                click: this.check
            },
            'detail_classgrid button[action=excel]' : {
				click : this.excel
			},
            'detail_classgrid actioncolumn[action=studentlist]': {
                click: this.studentlist
            },
            'detail_classgrid actioncolumn[action=arrangeclass]': {
                click: this.arrangeclass
            },
            'detail_classgrid actioncolumn[action=changeteacher]': {
                click: this.changeteacher
            },
            'detail_classgrid actioncolumn[action=signlist]': {
                click: this.signlist
            },
            'detail_studentgrid button[action=delete]' : {
				click : this.deleteClassStudent
			},
		    'detail_studentgrid button[action=insert]' : {
			    click : this.insertClassStudent
		    },
		    'addclassstudentform button[action=submit]' : {
			    click : this.submit
		    },
		    'classSchedulesform button[action=submit]' : {
			    click : this.submitarrange
		    },
		    'classSchedulesform button[action=selectTeacher]' : {
			    click : this.selectTeacher
		    },
		    'teacherform button[action=submit]': {
                click: this.teachersubmit
            },
            'teacherform1 button[action=submit]': {
                click: this.changesubmit
            }
        });
    },
	excel : function(button) {
		var action;
		var funcId;
		var grid = this.getDetail_classGrid();
		var store = grid.getStore();
		var strid = "";
		var strt_name = "";
		var strc_name = "";
		var week = "";
		var worktime = "";
		var position = "";
		var amount ="";
		var grad="";
		var form = button.up('form').form;
		var  school_id = form.findField('pre_courses_id').getValue();
		var  school_name = form.findField('school_name').getValue();
		for (var i = 0; i < store.getCount(); i++) {
		    var record = store.getAt(i);
		    strid = strid + record.get('id')+",";
		    strt_name = strt_name + record.get('name')+",";
		    strc_name = strc_name + record.get('course_name')+",";
		    week = week + record.get('week')+",";
		    worktime = worktime + record.get('worktime')+",";
		    position = position + record.get('position')+",";
		    amount = amount + record.get('amount')+",";
		    grad= grad+record.get('grad')+ ",";
		};
		
		var params = {
				action : 'schoolclassExcel',
				funcId : 'f31201',
				strid : strid,
				strt_name : strt_name,
				strc_name : strc_name,
				week : week,
				worktime:  worktime,
				position:position,
				amount: amount,
				grad:grad,
				school_name:school_name
				
			};
		var freshfn = function() {
			grid.getStore().reload();

		};
		ajax(null,params,null,freshfn);
		
	},
     selectTeacher: function(button) {
        if (session.authority.indexOf('b31210') > -1) {
        	var form = button.up('form').form;
        	var  class_id = form.findField('class_id').getValue();
        	var formwin = createWin('选择教师', 'teacherform');
        	formwin.down('form').form.findField('class_id').setValue(class_id);
        	var grid = formwin.down('grid');
        	var params = {
	                class_id: class_id     
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
    arrangeclass: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b31208') > -1){
            var formWin = createWin('排班', 'classSchedulesform');
            formWin.down('form').loadRecord(record);
        	formWin.down('form').form.findField('id').setValue(record.data.id);
        	formWin.down('form').form.findField('class_id').setValue(record.data.class_id);
        	formWin.down('form').form.findField('temp_teacher_name').setValue(record.data.temp_teacher_name);
        	}
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    changeteacher: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b31213') > -1){
            var formWin = createWin('更换教师', 'teacherform1');
            var grid = formWin.down('grid');
        	formWin.down('form').form.findField('class_id').setValue(record.data.id);
        	formWin.down('form').form.findField('name').setValue(record.data.name);
        	formWin.down('form').form.findField('week').setValue(record.data.week);
        	formWin.down('form').form.findField('course_name').setValue(record.data.course_name);
        	var params = {
	                class_id: record.data.id,
	                week:record.data.week,
	                course_name:record.data.course_name
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
    query: function(button) {
        if (session.authority.indexOf('b31201') > -1) {
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
    queryteacher: function(button) {
        if (session.authority.indexOf('b31210') > -1) {
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
    studentlist: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b31204') > -1) {
        	var formWin = createWin('选班学生名单', 'studentlistviewform');
        	var grid = formWin.down('grid');
        	formWin.down('form').form.findField('id').setValue(record.data.id);
        	formWin.down('form').form.findField('class_id').setValue(record.data.class_id);
        	formWin.down('form').form.findField('week').setValue(record.data.week);
        	var params = {
	                id:record.data.id
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
    signlist: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b31209') > -1) {
        	var formWin = createWin('教师签到记录', 'signlistviewform');
        	var grid = formWin.down('grid');
        	formWin.down('form').form.findField('id').setValue(record.data.id);
        	formWin.down('form').form.findField('class_id').setValue(record.data.class_id);
        	formWin.down('form').form.findField('week').setValue(record.data.week);
        	var params = {
	                class_id:record.data.class_id,
	                week:record.data.week,
	                id:record.data.id
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
    insertClassStudent: function(button) {
        if (session.authority.indexOf('b31205') > -1) {
        	var form = button.up('form').form;
        	var week = form.findField('week').getValue();
        	var id  = form.findField('id').getValue();
        	var class_id = form.findField('class_id').getValue();
        	var formWin = createWin('添加学生', 'addclassstudentform');
        	var grid = formWin.down('grid');
        	formWin.down('form').form.findField('id').setValue(id);
        	formWin.down('form').form.findField('week').setValue(week);
        	var params = {
	              week:week,
	              id:id
	              
	                };
           
	    	var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
            store.reload();
         
        }
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    deleteClassStudent : function(button) {
		if (session.authority.indexOf('b31206') > -1) {
			var grid = button.up('grid');
			var action = 'deleteClassStudent';
			var funcId = 'f31206';
			deleteClassStudent(grid, action, funcId);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
    check: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b31203') > -1) {
        	var formWin = createWin('学校选班列表', 'classSchedulesviewform');
        	var grid = formWin.down('grid');
        	formWin.down('form').form.findField('pre_courses_id').setValue(record.data.s_id);
        	formWin.down('form').form.findField('school_name').setValue(record.data.name);
        	var params = {              
	                pre_courses_id: record.data.s_id,
	                school_name:record.data.name
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
    submit: function(button) {
    	var form = button.up('form').form;
        var grid = this.getAddclassstudentGrid();
    	var week = form.findField('week').getValue();
    	var id  = form.findField('id').getValue();
        var grid1 = this.getDetail_studentGrid();
        var action = 'submitClassStudent';
        var funcId = 'f31205';   
        var win = button.up('window');
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
            week:week,
            id:id
        };
        formSubmit(form, params, freshfn);
    },
    submitarrange: function(button) {
    	var form = button.up('form').form;
        var action = 'submitarrange';
        var funcId = 'f31208';   
    	var id  = form.findField('id').getValue();
    	var temp_teacher_id  = form.findField('temp_teacher_id').getValue();
    	var temp_teacher_name  = form.findField('temp_teacher_name').getValue();
        var win = button.up('window');
        var grid = this.getDetail_classGrid();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId ,
            id:id,
            temp_teacher_name:temp_teacher_name,
            temp_teacher_id:temp_teacher_id
            
        };
        formSubmit(form, params, freshfn);
    },
    changesubmit: function(button) {
    	var form = button.up('form').form;
        var action = 'changeteachersubmit';
        var funcId = 'f31213';   
        var grid1 = this.getDetail_classGrid();
    	var id  = form.findField('class_id').getValue();
    	var name  = form.findField('name').getValue();
    	var grid= this.getTeacherGrid1();
        var win = button.up('window');
      
        var rows = grid.getSelectionModel().getSelection();
        if(rows.length == 0){
        	Ext.Msg.alert('系统提示', '请选择任课教师！');
        }
        else{
        var teacher_name = "";
        for ( var i = 0; i < rows.length; i++) {
        	teacher_name += rows[i].get("name");
       	    if (i < rows.length - 1)
       	    	teacher_name += ',';
       		   }
         name = teacher_name;
        
       form.findField('name').setValue(name);
        var freshfn = function() {
            win.close();
            grid1.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId ,
        //    grid : grid,
            id:id,
     
            
        };
        formSubmit(form, params, freshfn);
        }
    },
    teachersubmit:function(button){
   	 if (session.authority.indexOf('b31211') > -1) {
   		    var grid = this.getTeacherGrid();
            var form = button.up('form').form;
            var win = button.up('window');
         //   var temp = form.findField('temp').getValue();
            var rows = grid.getSelectionModel().getSelection();

            if(rows.length == 0){
            	Ext.Msg.alert('系统提示', '请选择任课教师！');
            }
            else{
         //   var ids = rows[0].data.id;
            var ids = "";
            for ( var i = 0; i < rows.length; i++) {
    			ids += rows[i].get("number");
    			if (i < rows.length - 1)
    				ids += ',';
    		}
          
            var name = "";
            for ( var i = 0; i < rows.length; i++) {
            	name += rows[i].get("name");
    			if (i < rows.length - 1)
    				name += ',';
    		}
        
           	this.getClassSchedulesForm().form.findField('temp_teacher_id').setValue(ids);
           	this.getClassSchedulesForm().form.findField('temp_teacher_name').setValue(name);
            win.close();
            }
       }
       	
       else {
           Ext.Msg.alert('系统提示', '您无权进行此项操作');
       }
   }
});