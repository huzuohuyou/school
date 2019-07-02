Ext.define('manage.controller.Courses', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'coursesGrid',
        selector: 'coursesgrid'
    },
    {
        ref: 'TeacheramountGrid',
        selector: 'teacheramountgrid'
    } ],
    views: ['courses.Form','courses.ViewForm','courses.ViewteacheramountForm','courses.CoursesTypeInForm'],
    init: function(app) {
        this.control({
            'coursesgrid button[action=insert]': {
                click: this.add
            },
			'coursesgrid button[action=query]' : {
				click : this.query
			},
            'coursesgrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'coursesgrid actioncolumn[action=view]': {
                click: this.viewDetail
            },
            'coursesgrid actioncolumn[action=viewamount]': {
                click: this.viewamount
            },
            'coursesgrid button[action=delete]': {
                click: this.deleteItems
            },
            'coursesgrid button[action=typeincourses]': {
                click: this.typeincourses
            },
            'coursesform button[action=submit]': {
                click: this.submit
            },
            'coursesgrid button[action=coursesexcel]': {
                click: this.coursesexcel
            }
        });
    },
    typeincourses : function(button) {
		if (session.authority.indexOf('b30102') > -1)
			createWin('录入课程', 'coursestypeinform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
    viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b30105') > -1) {
			
			var formWin = createWin('查看备注', 'coursesviewform');
			formWin.down('form').loadRecord(record);
			formWin.down('panel[name=introduction]').update(record.data.introduction);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
    update: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b30104') > -1) {
            if ((record.data.usable == '1' && actionItem == 2) || (record.data.usable == '0' && actionItem == 3)) return;
            var usable = actionItem == 2 ? '1': '0';
            var store = grid.getStore();
            var refresh = store.reload;
            Ext.Msg.wait('处理中，请稍后...', '提示');
            var params = {
                action: 'update',
                id: record.data.id,
                usable: usable,
                funcId: 'f30104'
            };
            ajax(null, params, null, refresh, store);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }

    },
    add: function(button) {
        if (session.authority.indexOf('b30102') > -1){ 
        	createWin('添加课程', 'coursesform');}
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b30101') > -1) {
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
        if (session.authority.indexOf('b30103') > -1) {
            var formWin = createWin('修改课程', 'coursesform');
            formWin.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    deleteItems: function(button) {
        if (session.authority.indexOf('b30104') > -1) {
            var grid = button.up('grid');
            var action = 'realDelete';
            var funcId = 'f30104';
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
            action = 'insertcourse';
            funcId = 'f30102';
        } else {
            action = 'updatecourse';
            funcId = 'f30103';
        }
        var win = button.up('window');
        var grid = this.getCoursesGrid();
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
    },
    coursesexcel : function(button) {
    	var grid = this.getCoursesGrid();
		var store = grid.getStore();
		var c_name = "";
		var c_type = "";
		var c_stage = "";
		var c_grade = "";
		var c_introduction = "";
		for (var i = 0; i < store.getCount(); i++) {
		    var record = store.getAt(i);
		    c_name = c_name + record.get('name')+",";
		    c_type = c_type + record.get('type_name')+",";
		    c_stage = c_stage + record.get('stage')+",";
		    c_grade = c_grade + record.get('grade')+",";
		    c_introduction = c_introduction + record.get('introduction')+",";
		};
		 Ext.MessageBox.show({
				title : '提示信息',
				msg : '确定要导出课程到本地吗？',
				icon : Ext.MessageBox.QUESTION,
				buttons : Ext.Msg.YESNO,
				fn : function(btnId, text, opt) {
					if (btnId == "yes") {
						Ext.Msg.wait('处理中，请稍后...', '提示');
    	                Ext.Ajax.request({
				url : 'system.do',
				// 请求地址
			    params : {
	                     action: 'coursesexcel',
	     				 c_name:c_name,
	     				 c_type:c_type,
	     				 c_stage:c_stage,
	     				 c_grade:c_grade,
	     				 c_introduction:c_introduction
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
									fieldLabel : '课程库',
									name : 'file_name',
									value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"课程库"+'</a>',
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