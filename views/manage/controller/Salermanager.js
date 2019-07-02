Ext.define('manage.controller.Salermanager', {
    extend: 'Ext.app.Controller',
    views: ['salermanager.SelfInfo','salermanager.SalermanagerUpdateForm'],
    init: function(app) {
        this.control({
            'salermanagerselfinfo' : {
				beforerender : this.loadData
			},
			'salermanagerselfinfo button[action=refresh]' : {
				click : this.loadData
			},
			'salermanagerselfinfo button[action=update]' : {
				click : this.updateSelfInfo
			},
			'salermanagerupdateinfo button[action=submit]' : {
				click : this.submitSalermanagerInfo
			},
        });
    },
    updateSelfInfo : function(button) {
	    var store = Ext.create('manage.store.salermanager.SalermanagerSelfInfo');
	    //store.load();
	    store.on("load",function(store){
	    	if(store.getCount()>0){
	    		var record = store.getAt(0);
		        var formWin = createWin('修改信息', 'salermanagerupdateinfo');
				formWin.down('form').loadRecord(record);
				return;
	    	}
	    	
    	});
	},
	submitSalermanagerInfo : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			return;
		} else {
			action = 'updateSalermanagerInfo';
			funcId = 'f110603';
		}
		var win = button.up('window');
		var freshfn = function() {
			win.close();
			var cmp = Ext.getCmp('btnsalermanager');
			Ext.require('manage.model.saler.Saler',function(){
				var form = cmp;
				if (cmp.xtype == 'button')
					form = cmp.up('form');
				form.form.reset();
				Ext.Ajax.request({
					url : 'system.do',
					params : {
						action : 'queryByCondition',
						funcId : 'f110601',
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
		Ext.require('manage.model.saler.Saler',function(){
			var form = cmp;
			if (cmp.xtype == 'button')
				form = cmp.up('form');
			form.form.reset();
			Ext.Ajax.request({
				url : 'system.do',
				params : {
					action : 'queryByCondition',
					funcId : 'f110601',
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