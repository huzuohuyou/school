Ext.define('manage.controller.Wx_odds', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'wx_oddsGrid',
		selector : 'wx_oddsgrid'
	},{
		ref : 'oddsreadingGrid',
		selector : 'oddsreadinggrid'
	},{
		ref : 'oddsreadingViewForm',
		selector : 'oddsreadingviewform'
	}],
	views : ['wx_odds.Form','wx_odds.ViewForm','wx_odds.OddsReadingViewForm','wx_odds.OddsReadingForm','wx_odds.OddsViewForm'],
	init : function(app) {
		this.control({
			'wx_oddsgrid button[action=insert]' : {
				click : this.add
			},
			'oddsreadinggrid button[action=addReading]' : {
				click : this.addReading
			},
			'wx_oddsgrid button[action=query]' : {
				click : this.query
			},
			'wx_oddsgrid button[action=delete]' : {
				click : this.deleteWx_researchs
			},
			'oddsreadinggrid button[action=deleteReading]' : {
				click : this.deleteItems
			},
			'wx_oddsgrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'oddsreadinggrid actioncolumn[action=edit]' : {
				click : this.editReading
			},
			'wx_oddsgrid actioncolumn[action=yes]' : {
				click : this.yes
			},
			'oddsreadinggrid actioncolumn[action=showOrNot]' : {
				click : this.showOrNot
			},
			'oddsreadinggrid actioncolumn[action=view]' : {
				click : this.viewReadingDetail
			},
			'wx_oddsgrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'wx_oddsgrid actioncolumn[action=reading]' : {
				click : this.reading
			},
			'wx_oddsform button[action=submit]' : {
				click : this.submit
			},
			'oddsreadingform button[action=submit]' : {
				click : this.submitReading
			}
		});
	},
	yes : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b350603') > -1) {
            var stickie = record.data.stickie == '1' ? '0': '1';
            var store = grid.getStore();
            var refresh = store.reload;
            Ext.Msg.wait('处理中，请稍后...', '提示');
            var params = {
                action: 'updateWx_new',
                id: record.data.id,
                title: record.data.title,
                short_title:record.data.short_title,
                content: record.data.content,
                pic: record.data.pic,
                stickie: stickie,
                news:record.data.news,
                stickie_time:record.data.stickie_time,
                funcId: 'f350603'
            };
            ajax(null, params, null, refresh, store);
            
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	showOrNot : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b350603') > -1) {
           // var is_show = record.data.is_show == '1' ? '0': '1';
			var store = grid.getStore();
			 var refresh = store.reload;
            var is_show = record.data.is_show;
            if(is_show == '1'){  //如果记录结果是1，则将其更新为0，即不显示的状态
                 Ext.Msg.wait('处理中，请稍后...', '提示');
                 var params = {
                     action: 'updateReadingShow',
                     id: record.data.id,
                     is_show: '0',
                     funcId: 'f350603'
                   };
                 ajax(null, params, null, refresh, store);
            }
            else{
            	 var count = 0; //声明一个变量，用于存储含有多少个显示的文章
                 for (var i = 0; i < store.getCount(); i++) {
                 	 var record = store.getAt(i);
                 	 var is_show = record.get("is_show");
                 	 if(is_show == '1'){
                 		 count = count +1 ;
                 	 }
                 }
                 if(parseInt(count)> 4 && record.data.is_show == '0'){
                 	// alert('显示数量不能超过五篇，请先取消其他文章的显示');
                 	 Ext.Msg.alert('系统提示', '显示数量不能超过五篇，请先取消其他文章的显示');         	
                 }
                 else{
                     var refresh = store.reload;
                     Ext.Msg.wait('处理中，请稍后...', '提示');
                     var params = {
                    		 action: 'updateReadingShow',
                             id: record.data.id,
                             is_show: '1',
                             funcId: 'f350603'
                     };
                     ajax(null, params, null, refresh, store);
                  }
            	
            }
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b350601') > -1) {
			var formWin = createWin('查看图文信息', 'wx_oddsviewform');
			formWin.down('form').loadRecord(record);
			Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
			formWin.down('panel[name=content]').update(record.data.content);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewReadingDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b350601') > -1) {
			var formWin = createWin('查看图文信息', 'wx_oddsreadingviewform');
			formWin.down('form').loadRecord(record);
			Ext.getCmp('browseImage1').getEl().dom.src = record.data.reading_pic;
			formWin.down('panel[name=reading_content]').update(record.data.reading_content);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b350602') > -1)
			createWin('添加图文', 'wx_oddsform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	addReading : function(button) {
		if (session.authority.indexOf('b350602') > -1)	{		
		    var formWin = createWin('添加相关阅读', 'oddsreadingform');
		    var p_id = this.getOddsreadingViewForm().form.findField('id').getValue();
		    formWin.down('form').form.findField('p_id').setValue(p_id);
		}
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b350601') > -1) {
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
	edit : function(grid, rowIndex, colIndex, actionItem, event, record, row) {
		if (session.authority.indexOf('b350603') > -1) {
			var formWin = createWin('修改课程消息', 'wx_oddsform');
			formWin.down('form').loadRecord(record);
			if(formWin.down('form').form.findField('stickie').getValue()==1)
				{
				  formWin.down('form').form.findField('stickie_a').setValue(true);
				}
			if(formWin.down('form').form.findField('news').getValue()==1)
			{
			  formWin.down('form').form.findField('news_a').setValue(true);
			}
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	editReading : function(grid, rowIndex, colIndex, actionItem, event, record, row) {
		if (session.authority.indexOf('b350603') > -1) {
			var formWin = createWin('修改相关阅读', 'oddsreadingform');
			formWin.down('form').loadRecord(record);
			formWin.down('form').form.findField('pic').setValue(record.data.reading_pic);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b350104') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f350104';
			deleteItems(grid, action, funcId);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	 //网站管理员删除栏目下面的文章。
	deleteWx_researchs : function(button) {
    	if (session.authority.indexOf('b350604') > -1) {	
    		var grid = this.getWx_oddsGrid();
            var rows = grid.getSelectionModel().getSelection();
            if(rows.length == 0){
            	Ext.Msg.alert('系统提示', '请选择要删除的文章！');
            }
            else{
    		  Ext.MessageBox.show({
  				title : '提示信息',
  				msg : '确定要删除该文章吗，删除将会同时删除其下的相关阅读，无法恢复！',
  				icon : Ext.MessageBox.QUESTION,
  				buttons : Ext.Msg.YESNO,
  				fn : function(btnId, text, opt) {
  					if (btnId == "yes") {
  						Ext.Msg.wait('处理中，请稍后...', '提示');
  						var ids = rows[0].data.id;
  				        for(var i = 1; i < rows.length; i++){
  				        	ids += ","+rows[i].data.id;
  				        };
  						Ext.Ajax.request({
  							url : 'system.do',
  							// 请求地址
  							params : {
  								action : 'deleteWx_news',
  								ids : ids,
  								funcId:'f350604'
  							},
  							// 请求参数
  							method : 'post',
  							// 方法
  							callback : function(options, success, response) {
  								if (success) {
  									Ext.Msg.hide();
  									Ext.MessageBox.show({
  										title : '提示信息',
  										msg : '删除成功!',
  										icon : Ext.MessageBox.INFO,
  										buttons : Ext.Msg.OK,
  										fn : function() {
  											  grid.getStore().reload();
  										}
  									});
  								} else {
  									Ext.Msg.hide();
  									Ext.MessageBox.show({
  										title : '提示信息',
  										msg : '删除失败!',
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
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
        
    },
	submit : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			action = 'insertWx_new';
			funcId = 'f350602';
		} else {
			action = 'updateWx_new';
			funcId = 'f350603';
		}
		var win = button.up('window');
		var grid = this.getWx_oddsGrid();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var check = form.findField("stickie_a").getValue();
		if(check)
			{
			  form.findField("stickie").setValue(1);
			}
		else
			{
			  form.findField("stickie").setValue(0);
			}
		var news_check = form.findField("news_a").getValue();
		if(news_check)
			{
			  form.findField("news").setValue(1);
			}
		else
			{
			  form.findField("news").setValue(0);
			}
		var params = {
			action : action,
			funcId : funcId,
			u_id : session.id
		};
		formSubmit(form, params, freshfn);
	},
	submitReading : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			action = 'insertWx_newReading';
			funcId = 'f350602';
		} else {
			action = 'updateWx_newReading';
			funcId = 'f350603';
		}
		var win = button.up('window');
		var grid = this.getOddsreadingGrid();	
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId
		};
		formSubmit(form, params, freshfn);
	},
	 reading:function(grid, rowIndex, colIndex, actionItem, event, record, row) {
	        if (session.authority.indexOf('b350601') > -1) {
	            var formWin = createWin('相关阅读管理', 'oddsreadingviewform');
	        	var grid = formWin.down('grid');
	        	formWin.down('form').form.findField('id').setValue(record.data.id);
	        	var params = {
	        			  id: record.data.id,
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
});