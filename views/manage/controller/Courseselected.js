Ext.define('manage.controller.Courseselected', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'courseselectedGrid',
        selector: 'courseselectedgrid'
    }],
    views: ['courseselected.ViewForm'],
    init: function(app) {
        this.control({
			'courseselectedgrid button[action=query]' : {
				click : this.query
			},
			'courseselectedgrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'courseselectedgrid actioncolumn[action=drop]' : {
				click : this.dropcourse
			},
        });
    },
    dropcourse:function(grid, rowIndex, colIndex, actionItem, event, record,
			row){
    	if (session.authority.indexOf('b80206') > -1) {
    		 var store = grid.getStore();
	         var refresh = store.reload;
             var sd_id = record.data.sd_id;
             var c_id = record.data.course_id;
             var week = record.data.week;
             Ext.MessageBox.show({
  				title : '提示信息',
  				msg : '确定要选择该课程吗？',
  				icon : Ext.MessageBox.QUESTION,
  				buttons : Ext.Msg.YESNO,
  				fn : function(btnId, text, opt) {
  					if (btnId == "yes") {
  						Ext.Msg.wait('处理中，请稍后...', '提示');
  						Ext.Ajax.request({
  							url : 'system.do',
  							// 请求地址
  						    params : {
  						    	 action: 'dropcourse',
  			                     sd_id:sd_id,
  			                     c_id:c_id,
  			                     week:week,
  			                     user_id:session.id,
  			                     funcId: 'f80206'      
  				                 },
  							// 请求参数
  							method : 'post',
  							// 方法
  							callback : function(options, success, response) {
  								var resp = Ext.decode(response.responseText);
  								if (success&&resp.success) {
  									Ext.Msg.hide();
  									Ext.MessageBox.show({
  										title : '提示信息',
  										msg : resp.msg?resp.msg:'退课成功!',
  										icon : Ext.MessageBox.INFO,
  										buttons : Ext.Msg.OK
  									});
  									 grid.getStore().reload();
  								} else {
  									//Ext.Msg.hide();
  									Ext.MessageBox.show({
  										title : '提示信息',
  										msg : resp.msg?resp.msg:'退课失败!',
  										icon : Ext.MessageBox.ERROR,
  										buttons : Ext.Msg.OK
  									});
  								}
  							}
  						});
  					}
  				}
  			});
    	}else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    	
    },
    
    query: function(button) {
        if (session.authority.indexOf('b80201') > -1) {
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
    viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b80105') > -1) {
			var formWin = createWin('查看课程介绍', 'courseselectedviewform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	}
});