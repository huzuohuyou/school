Ext.define('manage.controller.Schools', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'schoolsGrid',
        selector: 'schoolsgrid'
    },
    {
    	ref : 'queryForm',
        selector: 'schoolsqueryform'
    }],
    views: ['schools.Form','schools.ViewForm','schools.StudentForm','schools.SchoolcourseForm','schools.ClassprobablyViewForm','schools.Menu','schools.Panel'],
    init: function(app) {
        this.control({
        	'areamenu' : {
				itemclick : this.querySchool
			},
            'schoolsgrid button[action=insert]': {
                click: this.add
            },
			'schoolsgrid button[action=query]' : {
				click : this.query
			},
			'schoolsqueryform button[action=query1]' : {
				click : this.query1
			},
            'schoolsgrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'schoolsgrid actioncolumn[action=student_list]': {
                click: this.student_list
            },
            'schoolsgrid actioncolumn[action=view]': {
                click: this.viewDetail
            },
            'schoolsgrid actioncolumn[action=check]': {
                click: this.check
            },
            'schoolsgrid actioncolumn[action=schoolcourse]': {
                click: this.schoolcourse
            },
            'schoolsgrid button[action=delete]': {
                click: this.deleteItems
            },
            'schoolsform button[action=submit]': {
                click: this.submit
            }
           
        });
    },
    querySchool : function(o, record, item, index, e, eOpts) {
		if (record.data.leaf) {
//			var grid = this.getSchoolsGrid();
//		var form = grid.up('panel').down('form');
			
			var form = this.getQueryForm();
//			var grid = this.getScoreGrid();
			var grid = Ext.getCmp('schoolsgrid');
		//	var button = grid.down('button[action = query]');
		//	button.setDisabled(false);
			form.form.findField('area').setValue(record.data.id);
			var params = form.getValues();
			var store = grid.getStore();
			store.on("beforeload", function() {
				store.proxy.extraParams = params;
			});
			store.loadPage(1);
		}
	},
    student_list: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b200105') > -1) {
        	var formWin = createWin('学生名单', 'schoolsstudentform');
        	var grid = formWin.down('grid');
        	formWin.down('form').form.findField('id').setValue(record.data.id);
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
    schoolcourse: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b31203') > -1) {
        	var formWin = createWin('开设课程', 'schoolcourseform');
        	var grid = formWin.down('grid');
        	formWin.down('form').form.findField('id').setValue(record.data.id);
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
    check: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b31203') > -1) {
        	var formWin = createWin('学校选班列表', 'classprobablyviewform');
        	var grid = formWin.down('grid');
        	formWin.down('form').form.findField('pre_courses_id').setValue(record.data.id);
        	var params = {
	              
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
    viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b130105') > -1) {
			var formWin = createWin('查看备注', 'schoolsviewform');
			formWin.down('form').loadRecord(record);
			formWin.down('panel[name=remark]').update(record.data.remark);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
    update: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b200104') > -1) {
            if ((record.data.usable == '1' && actionItem == 2) || (record.data.usable == '0' && actionItem == 3)) return;
            var usable = actionItem == 2 ? '1': '0';
            var store = grid.getStore();
            var refresh = store.reload;
            Ext.Msg.wait('处理中，请稍后...', '提示');
            var params = {
                action: 'update',
                id: record.data.id,
                usable: usable,
                funcId: 'f200104'
            };
            ajax(null, params, null, refresh, store);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }

    },
    add: function(button) {
        if (session.authority.indexOf('b130102') > -1) createWin('添加学校', 'schoolsform');
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b130101') > -1) {
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
    query1: function(button) {
        if (session.authority.indexOf('b130101') > -1) {
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
    edit: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b130103') > -1) {
            var formWin = createWin('修改学校', 'schoolsform');
            formWin.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    deleteItems: function(button) {
        if (session.authority.indexOf('b130104') > -1) {
            var grid = button.up('grid');
            var action = 'realDelete';
            var funcId = 'f130104';
            deleteItems(grid, action, funcId);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    submit: function(button) {
        var form = button.up('form').form;
        var action;
        var funcId;
        if (form.findField('id').getValue() == "") {
            action = 'insertSchool';
            funcId = 'f130102';
        } else {
            action = 'updateSchool';
            funcId = 'f130103';
        }
        var win = button.up('window');
        var grid = this.getSchoolsGrid();
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