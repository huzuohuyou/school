Ext.define('manage.controller.ChargerSignStatistics', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'chargerSignStatisticsGrid',
		selector : 'chargerSignStatisticsgrid'
	}
	],
	views : ['chargerSignStatistics.Form'],
	init : function(app) {
		this.control({
	        'chargerSignStatisticsgrid button[action=toExcel]' : {
				click : this.attendenceToExcel
			},
			 'chargerSignStatisticsgrid button[action=query]' : {
					click : this.query
		    },
		    'chargerSignStatisticsform button[action=submit]' : {
				click : this.submitToExcel
	        },
		});
	},
	 query: function(button) {
	        if (session.authority.indexOf('b240501') > -1) {
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
	    attendenceToExcel : function(button){
			var formWin = createWin('按月导出驻校出勤统计', 'chargerSignStatisticsform');
		},
		submitToExcel: function(button) {
	        var form = button.up('form').form;	      
	        var grid = this.getChargerSignStatisticsGrid();
			var store = grid.getStore();
			var charger_ids = "";
			for (var i = 0; i < store.getCount(); i++) {
			    var record = store.getAt(i);
			    charger_ids = charger_ids + record.get('id')+",";
			}
			var month = form.findField('month').getValue();
	        var win = button.up('window');	    
	        Ext.MessageBox.show({
				title : '提示信息',
				msg : '确定要导出到本地吗？',
				icon : Ext.MessageBox.QUESTION,
				buttons : Ext.Msg.YESNO,
				fn : function(btnId, text, opt) {
				if (btnId == "yes") {
					 Ext.Msg.wait('处理中，请稍后...', '提示');		
	    	         Ext.Ajax.request({
					        url : 'system.do',
					// 请求地址
				    params : {
		                     action: 'chargerSignGatherToExcelPerMonth',
		                     charger_ids:charger_ids,
		                     month:month,
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
										fieldLabel : '统计表',
										name : 'file_name',
										value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"驻校出勤统计表"+'</a>',
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
	    },
	toExcel : function(button) {
    	var grid = this.getChargerSignStatisticsGrid();
		var store = grid.getStore();
		var c_number = "";
		var c_name = "";
		var c_telephone = "";
		var c_chuqin = "";
		var c_chidao = "";
		var c_zaotui = "";
		var c_queqin = "";
		for (var i = 0; i < store.getCount(); i++) {
		    var record = store.getAt(i);
		    c_number = c_number + record.get('number')+",";
		    c_name = c_name + record.get('c_name')+",";
		    c_telephone = c_telephone + record.get('telephone')+",";
		    c_chuqin = c_chuqin + record.get('chuqin')+",";
		    c_chidao = c_chidao + record.get('chidao')+",";
		    c_zaotui = c_zaotui + record.get('zaotui')+",";
		    c_queqin = c_queqin + record.get('queqin')+",";
		};
		 Ext.MessageBox.show({
				title : '提示信息',
				msg : '确定要导出到本地吗？',
				icon : Ext.MessageBox.QUESTION,
				buttons : Ext.Msg.YESNO,
				fn : function(btnId, text, opt) {
					if (btnId == "yes") {
						Ext.Msg.wait('处理中，请稍后...', '提示');
    	                Ext.Ajax.request({
				url : 'system.do',
				// 请求地址
			    params : {
	                     action: 'chargerSignGatherToExcel',
	                     c_number:c_number,
	     				 c_name:c_name,
	     				 c_telephone:c_telephone,
	     				 c_chuqin:c_chuqin,
	     				 c_chidao:c_chidao,
	     				 c_zaotui:c_zaotui,
	     				 c_queqin:c_queqin
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
									fieldLabel : '统计表',
									name : 'file_name',
									value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"驻校人员考勤汇总表"+'</a>',
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