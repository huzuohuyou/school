Ext.define('manage.controller.Charger', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'chargerGrid',
        selector: 'chargergrid'
    },{
        ref: 'chargerschoolGrid',
        selector: 'chargerschoolgrid'
    },{
        ref: 'addchargeschoolGrid',
        selector: 'addchargeschoolgrid'
    }],
    views: ['charger.Form','charger.SelfInfo','charger.ChargerUpdateForm','charger.ChargerViewForm','charger.AddChargeSchoolForm'],
    init: function(app) {
        this.control({
            'chargergrid button[action=insert]': {
                click: this.add
            },
            'chargerschoolgrid button[action=addChargeSchool]': {
                click: this.addChargeSchool
            },
            'chargerschoolgrid button[action=deleteChargeSchool]': {
                click: this.deleteChargeSchool
            },
			'chargergrid button[action=query]' : {
				click : this.query
			},
            'chargergrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'chargergrid actioncolumn[action=selectSchool]': {
                click: this.selectSchool
            },
            'chargergrid button[action=delete]': {
                click: this.deleteItems
            },
            'chargerform button[action=submit]': {
                click: this.submit
            },
            'addchargeschoolform button[action=submit]': {
                click: this.submitAddChargeSchool
            },
            'chargerselfinfo' : {
				beforerender : this.loadData
			},
			'chargerselfinfo button[action=refresh]' : {
				click : this.loadData
			},
			'chargerselfinfo button[action=update]' : {
				click : this.updateSelfInfo
			},
			'chargerupdateinfo button[action=submit]' : {
				click : this.submitChargerInfo
			},
        });
    },
    updateSelfInfo : function(button) {
	    var store = Ext.create('manage.store.charger.ChargerSelfInfo');
	    //store.load();
	    store.on("load",function(store){
	    	if(store.getCount()>0){
	    		var record = store.getAt(0);
		        var formWin = createWin('修改信息', 'chargerupdateinfo');
				formWin.down('form').loadRecord(record);
				return;
	    	}
	    	
    	});
	},
	submitChargerInfo : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			return;
		} else {
			action = 'updateChargerInfo';
			funcId = 'f110503';
		}
		var win = button.up('window');
		var freshfn = function() {
			win.close();
			var cmp = Ext.getCmp('btncharger');
			Ext.require('manage.model.charger.Charger',function(){
				var form = cmp;
				if (cmp.xtype == 'button')
					form = cmp.up('form');
				form.form.reset();
				Ext.Ajax.request({
					url : 'system.do',
					params : {
						action : 'queryByCondition',
						funcId : 'f110501',
						id : session.id
					},
					success : function(res, opts) {
						var resp = Ext.decode(res.responseText);
						if (resp.totalCount > 0) {
							var data = resp.data;
							var reader = new Ext.data.reader.Json({
								model : 'manage.model.charger.Charger'
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
        if (session.authority.indexOf('b40404') > -1) {
            if ((record.data.status == '1' && actionItem == 2) || (record.data.status == '0' && actionItem == 3)) return;
            var status = actionItem == 2 ? '1': '0';
            var store = grid.getStore();
            var refresh = store.reload;
            Ext.Msg.wait('处理中，请稍后...', '提示');
            var params = {
                action: 'update',
                id: record.data.id,
                status: status,
                funcId: 'f40404'
            };
            ajax(null, params, null, refresh, store);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }

    },
    add: function(button) {
        if (session.authority.indexOf('b70102') > -1) createWin('添加驻校管理人员', 'chargerform');
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    addChargeSchool: function(button) {
        if (session.authority.indexOf('b70103') > -1) {
        	var form = button.up('form').form;
        	var s_id = form.findField('s_id').getValue();
        	var formWin = createWin('添加学校', 'addchargeschoolform');
        	formWin.down('form').form.findField('s_id').setValue(s_id);
        	var grid = formWin.down('grid');
        	var params = {
        			s_id :s_id,
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
    query: function(button) {
        if (session.authority.indexOf('b70101') > -1) {
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
        if (session.authority.indexOf('b70103') > -1) {
            var formWin = createWin('修改驻校管理人员', 'chargerform');
            formWin.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    selectSchool : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b70103') > -1) {
			var formWin = createWin('查看管理学校', 'chargerviewform');
			var grid = formWin.down('grid');
			formWin.down('form').form.findField('s_id').setValue(record.data.id);
			var params = {
	                id: record.data.id
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
    deleteItems: function(button) {
        if (session.authority.indexOf('b70104') > -1) {
            var grid = button.up('grid');
            var action = 'deleteCharger';
            var funcId = 'f70104';
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
            action = 'addCharger';
            funcId = 'f70102';
        } else {
            action = 'updateCharger';
            funcId = 'f70103';
        }
        var win = button.up('window');
        var grid = this.getChargerGrid();
        var worktime = form.findField('worktime').getValue();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
            worktime:worktime,
            u_id: session.id
        };
        formSubmit(form, params, freshfn);
    },
    submitAddChargeSchool: function(button) {
    	var form = button.up('form').form;
    	var s_id = form.findField('s_id').getValue();
        var grid = this.getAddchargeschoolGrid();
        var action = 'insertChargeSchoolList';
        var funcId = 'f70103';
        var win = button.up('window');
        var grid1 = this.getChargerschoolGrid();
        var rows = grid.getSelectionModel().getSelection();
        if(rows.length == 0){
        	Ext.Msg.alert('系统提示', '请选择要添加的学校！');
        }
        else{
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
            s_id: s_id
        };
        formSubmit(form, params, freshfn);
        }
    },
    deleteChargeSchool: function(button) {
        var action = 'deleteChargeSchoolList';
        var funcId = 'f70103';
    	var form = button.up('form').form;
    	var s_id = form.findField('s_id').getValue();
        var grid = this.getChargerschoolGrid();
        var rows = grid.getSelectionModel().getSelection();
        if(rows.length == 0){
        	Ext.Msg.alert('系统提示', '请选择要删除的学校！');
        }
        else{
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
            s_id:s_id
        };
        formSubmit(form, params, freshfn);
        }
    },
    loadData : function(cmp) {
		Ext.require('manage.model.charger.Charger',function(){
			var form = cmp;
			if (cmp.xtype == 'button')
				form = cmp.up('form');
			form.form.reset();
			Ext.Ajax.request({
				url : 'system.do',
				params : {
					action : 'queryByCondition',
					funcId : 'f110501',
					id : session.id
				},
				success : function(res, opts) {
					var resp = Ext.decode(res.responseText);
					if (resp.totalCount > 0) {
						var data = resp.data;
						var reader = new Ext.data.reader.Json({
							model : 'manage.model.charger.Charger'
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