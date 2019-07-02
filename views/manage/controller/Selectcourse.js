Ext.define('manage.controller.Selectcourse', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'selectcourseGrid',
        selector: 'selectcoursegrid'
    }],
    views: ['selectcourse.ViewForm'],
    init: function(app) {
        this.control({
			'selectcoursegrid button[action=query]' : {
				click : this.query
			},
			'selectcoursegrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'selectcoursegrid actioncolumn[action=select]' : {
				click : this.selectcourse
			},
        });
    },
    selectcourse:function(grid, rowIndex, colIndex, actionItem, event, record,row){
    	if (session.authority.indexOf('b80106') > -1) {
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
 				                     action: 'selectcourse',
 				                     name: record.data.name,
 				                     week: record.data.week,
 				                     stage:record.data.stage,
 				                     id:record.data.id,
 				                     c_id:record.data.course_id,
 				                     user_id:session.id,
 				                     funcId: 'f80106'       
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
 										msg : resp.msg?resp.msg:'选课成功!',
 										icon : Ext.MessageBox.INFO,
 										buttons : Ext.Msg.OK
 									});
 								} else {
 									//Ext.Msg.hide();
 									Ext.MessageBox.show({
 										title : '提示信息',
 										msg : resp.msg?resp.msg:'选课失败!',
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
        if (session.authority.indexOf('b80104') > -1) {
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
			var formWin = createWin('查看课程介绍', 'selectcourseviewform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	}
});