Ext.define('manage.controller.Activityexecute', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'activityexecuteGrid',
        selector: 'activityexecutegrid'
    }],
    views: ['activityexecute.Form','activityexecute.SelfInfo','activityexecute.ActivityexecuteUpdateForm'],
    init: function(app) {
        this.control({
            'activityexecutegrid button[action=insert]': {
                click: this.add
            },
			'activityexecutegrid button[action=query]' : {
				click : this.query
			},
            'activityexecutegrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'activityexecutegrid button[action=delete]': {
                click: this.deleteItems
            },
            'activityexecuteform button[action=submit]': {
                click: this.submit
            },
            'activityexecuteselfinfo' : {
				beforerender : this.loadData
			},
			'activityexecuteselfinfo button[action=refresh]' : {
				click : this.loadData
			},
			'activityexecuteselfinfo button[action=update]' : {
				click : this.updateSelfInfo
			},
			'activityexecuteupdateinfo button[action=submit]' : {
				click : this.submitActivityexecuteInfo
			},
        });
    },
    updateSelfInfo : function(button) {
	    var store = Ext.create('manage.store.activityexecute.ActivityexecuteSelfInfo');
	    //store.load();
	    store.on("load",function(store){
	    	if(store.getCount()>0){
	    		var record = store.getAt(0);
		        var formWin = createWin('修改信息', 'activityexecuteupdateinfo');
				formWin.down('form').loadRecord(record);
				return;
	    	}
	    	
    	});
	},
	submitActivityexecuteInfo : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			return;
		} else {
			action = 'updateActivityexecuteInfo';
			funcId = 'f110903';
		}
		var win = button.up('window');
		var freshfn = function() {
			win.close();
			var cmp = Ext.getCmp('btnactivityexecute');
			Ext.require('manage.model.activityexecute.Activityexecute',function(){
				var form = cmp;
				if (cmp.xtype == 'button')
					form = cmp.up('form');
				form.form.reset();
				Ext.Ajax.request({
					url : 'system.do',
					params : {
						action : 'queryByCondition',
						funcId : 'f110901',
						id : session.id
					},
					success : function(res, opts) {
						var resp = Ext.decode(res.responseText);
						if (resp.totalCount > 0) {
							var data = resp.data;
							var reader = new Ext.data.reader.Json({
								model : 'manage.model.activityexecute.Activityexecute'
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
    add: function(button) {
        if (session.authority.indexOf('b220202') > -1) createWin('添加活动执行人员', 'activityexecuteform');
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b220201') > -1) {
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
        if (session.authority.indexOf('b220203') > -1) {
            var formWin = createWin('修改活动策划人员', 'activityexecuteform');
            formWin.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    deleteItems: function(button) {
        if (session.authority.indexOf('b220204') > -1) {
            var grid = button.up('grid');
            var action = 'deleteActivityexecute';
            var funcId = 'f220204';
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
            action = 'addActivityexecute';
            funcId = 'f220202';
        } else {
            action = 'updateActivityexecute';
            funcId = 'f220203';
        }
        var win = button.up('window');
        var grid = this.getActivityexecuteGrid();
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
    loadData : function(cmp) {
		Ext.require('manage.model.activityexecute.Activityexecute',function(){
			var form = cmp;
			if (cmp.xtype == 'button')
				form = cmp.up('form');
			form.form.reset();
			Ext.Ajax.request({
				url : 'system.do',
				params : {
					action : 'queryByCondition',
					funcId : 'f110901',
					id : session.id
				},
				success : function(res, opts) {
					var resp = Ext.decode(res.responseText);
					if (resp.totalCount > 0) {
						var data = resp.data;
						var reader = new Ext.data.reader.Json({
							model : 'manage.model.activityexecute.Activityexecute'
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