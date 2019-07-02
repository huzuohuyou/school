Ext.define('manage.controller.Teachercourse', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'teachercourseGrid',
        selector: 'teachercoursegrid'
    },
    {
    	ref: 'sign_coursesGrid',
        selector: 'sign_coursesgrid'
    }
    ],
    views: ['teachercourse.Form','teachercourse.ViewForm','teachercourse.StateForm'],
    init: function(app) {
        this.control({
			'teachercoursegrid button[action=query]' : {
				click : this.query
			},
            'teachercourseform button[action=submit]': {
                click: this.submit
            },
        	'teachercoursegrid actioncolumn[action=sign]' : {
				click : this.sign
			},
			'sign_coursesgrid actioncolumn[action=edit]':{
				click : this.edit
			},
			'studentStateform button[action=submit]': {
	            click: this.studentsign
	        },
	    	'sign_coursesgrid button[action=resetsign]':{
				click : this.resetsign
			},
			
        });
    },
    resetsign: function(button) {
        if (session.authority.indexOf('b130106') > -1) {
        	 var grid = button.up('grid');
        	 var action = 'resetsign';
        	 var funcId = 'f130106';
        	 resetsign(grid, action, funcId);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    
    edit: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b120105') > -1) {
            var formWin = createWin('修改状态', 'studentStateform');
            formWin.down('form').loadRecord(record);
            formWin.down('form').form.findField('ssd_id').setValue(record.data.ssd_id);
            formWin.down('form').form.findField('student_id').setValue(record.data.id);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    
    sign: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b120103') > -1) {
        	var formWin = createWin('学生签到列表', 'teachercourseviewform');
        	var grid = formWin.down('grid');
        	formWin.down('form').form.findField('ssd_id').setValue(record.data.id);
            var params = {
	              
	              ssd_id: record.data.id
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
        if (session.authority.indexOf('b120101') > -1) {
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
    studentsign: function(button) {
        var form = button.up('form').form;
        var action = 'studentsign';
        var funcId = 'f120105';
    	var states = form.findField('states').getValue();
    	var ssd_id = form.findField('ssd_id').getValue();
    	var student_id = form.findField('student_id').getValue();
        var win = button.up('window');
        var grid = this.getSign_coursesGrid();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
            states:states,
            student_id:student_id,
            ssd_id:ssd_id
          
        };
        formSubmit(form, params, freshfn);
    }
         
          
       
  
});