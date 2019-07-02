Ext.define('manage.controller.Saler', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'salerGrid',
        selector: 'salergrid'
    }],
    views: ['saler.Form','saler.SelfInfo','saler.SalerUpdateForm'],
    init: function(app) {
        this.control({
            'salergrid button[action=insert]': {
                click: this.add
            },
			'salergrid button[action=query]' : {
				click : this.query
			},
            'salergrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'salergrid actioncolumn[action=yes]' : {
				click : this.update
			},
			'salergrid actioncolumn[action=no]' : {
				click : this.update
			},
            'salergrid button[action=delete]': {
                click: this.deleteItems
            },
            'salerform button[action=submit]': {
                click: this.submit
            },
            'salerselfinfo' : {
				beforerender : this.loadData
			},
			'salerselfinfo button[action=refresh]' : {
				click : this.loadData
			},
			'salerselfinfo button[action=update]' : {
				click : this.updateSelfInfo
			},
			'salerupdateinfo button[action=submit]' : {
				click : this.submitSalerInfo
			},
        });
    },
    updateSelfInfo : function(button) {
	    var store = Ext.create('manage.store.saler.SalerSelfInfo');
	    //store.load();
	    store.on("load",function(store){
	    	if(store.getCount()>0){
	    		var record = store.getAt(0);
		        var formWin = createWin('修改信息', 'salerupdateinfo');
				formWin.down('form').loadRecord(record);
				return;
	    	}
	    	
    	});
	},
	submitSalerInfo : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			return;
		} else {
			action = 'updateSalerInfo';
			funcId = 'f110403';
		}
		var win = button.up('window');
		var freshfn = function() {
			win.close();
			var cmp = Ext.getCmp('btnsaler');
			Ext.require('manage.model.saler.Saler',function(){
				var form = cmp;
				if (cmp.xtype == 'button')
					form = cmp.up('form');
				form.form.reset();
				Ext.Ajax.request({
					url : 'system.do',
					params : {
						action : 'queryByCondition',
						funcId : 'f110401',
						id : session.id
					},
					success : function(res, opts) {
						var resp = Ext.decode(res.responseText);
						if (resp.totalCount > 0) {
							var data = resp.data;
							var reader = new Ext.data.reader.Json({
								model : 'manage.model.saler.Saler'
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
    update: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b40304') > -1) {
            if ((record.data.status == '1' && actionItem == 2) || (record.data.status == '0' && actionItem == 3)) return;
            var status = actionItem == 2 ? '1': '0';
            var store = grid.getStore();
            var refresh = store.reload;
            Ext.Msg.wait('处理中，请稍后...', '提示');
            var params = {
                action: 'update',
                id: record.data.id,
                status: status,
                funcId: 'f40304'
            };
            ajax(null, params, null, refresh, store);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }

    },
    add: function(button) {
        if (session.authority.indexOf('b60102') > -1) createWin('添加销售人员', 'salerform');
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b60101') > -1) {
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
        if (session.authority.indexOf('b60103') > -1) {
            var formWin = createWin('修改销售人员', 'salerform');
            formWin.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    deleteItems: function(button) {
        if (session.authority.indexOf('b60104') > -1) {
            var grid = button.up('grid');
            var action = 'deleteSaler';
            var funcId = 'f60104';
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
            action = 'addSaler';
            funcId = 'f60102';
        } else {
            action = 'updateSaler';
            funcId = 'f60103';
        }
        var win = button.up('window');
        var grid = this.getSalerGrid();
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
		Ext.require('manage.model.saler.Saler',function(){
			var form = cmp;
			if (cmp.xtype == 'button')
				form = cmp.up('form');
			form.form.reset();
			Ext.Ajax.request({
				url : 'system.do',
				params : {
					action : 'queryByCondition',
					funcId : 'f110401',
					id : session.id
				},
				success : function(res, opts) {
					var resp = Ext.decode(res.responseText);
					if (resp.totalCount > 0) {
						var data = resp.data;
						var reader = new Ext.data.reader.Json({
							model : 'manage.model.saler.Saler'
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