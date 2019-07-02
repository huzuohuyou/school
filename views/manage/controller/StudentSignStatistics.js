Ext.define('manage.controller.StudentSignStatistics', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'studentSignStatisticsGrid',
        selector: 'studentSignStatisticsgrid'
    },{
        ref: 'studentSignStatisticsstudentGrid',
        selector: 'studentSignStatisticsstudentgrid'
    },{
		ref : 'datequeryForm',
		selector : 'datequeryform'
	}],
    views : [ 'studentSignStatistics.Grid','studentSignStatistics.DateQueryForm','studentSignStatistics.ViewForm'],
    init: function(app) {
        this.control({
			'studentSignStatisticsstudentgrid button[action=querydate]' : {
				click : this.querydate
			},
			'studentSignStatisticsstudentgrid button[action=studentgridexcel]' : {
				click : this.studentgridexcel
			},
			'studentSignStatisticsgrid actioncolumn[action=viewStatistics]': {
                click: this.viewStatistics
            },
        });
    },
    studentgridexcel : function(button) {
    	var grid = this.getStudentSignStatisticsstudentGrid();
		var store = grid.getStore();
		var form = button.up('form').form;
		var t_name = form.findField('t_name').getValue();
	    var c_name = form.findField('c_name').getValue();
	    var address = form.findField('address').getValue();
	    var worktime = form.findField('worktime').getValue();
	    var count = form.findField('count').getValue();
	    if(store.getCount()>0)
	    	{
	    	var typetime =store.getAt(0).get('typetime');
	    	}
		var s_name = "";
		var s_grad = "";
		var s_class = "";
		var s_states = "";
		for (var i = 0; i < store.getCount(); i++) {
		    var record = store.getAt(i);
		    s_name = s_name + record.get('name')+",";
		    s_grad = s_grad + record.get('grad')+",";
		    s_class = s_class + record.get('class')+",";
		    s_states = s_states + record.get('states')+",";
		};
		 Ext.MessageBox.show({
			title : '提示信息',
			msg : '确定要导出到本地吗？',
			icon : Ext.MessageBox.QUESTION,
			buttons : Ext.Msg.YESNO,
			fn : function(btnId, text, opt) {
			if (btnId == "yes") {
				 Ext.Msg.wait('处理中，请稍后...', '提示');
				 if(s_name ==null||s_name =="")
			    {
					Ext.Msg.alert('提示','考勤记录为空，无法导出，请选择其他日期！');
			    }
				else{
    	                Ext.Ajax.request({
				        url : 'system.do',
				// 请求地址
			    params : {
	                     action: 'studentSignExcel',
	     				 s_name:s_name,
	     				 s_grad:s_grad,
	     				 s_class:s_class,
	     				 s_states:s_states,
	     			     c_name:c_name,
	     			     t_name:t_name,
	     			     address:address,
	     			     worktime:worktime,
	     			     count:count,
	     			     typetime:typetime
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
									value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"学生考勤汇总表"+'</a>',
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
 				}
 			});
	},
    viewStatistics:function(grid, rowIndex, colIndex, actionItem, event, record, row) {
            var formWin = createWin('学生考勤记录', 'studentSignStatisticsviewform');
        	var grid = formWin.down('grid');
        	formWin.down('form').form.findField('ssd_id').setValue(record.data.id);
        	formWin.down('form').form.findField('t_name').setValue(record.data.t_name);
        	formWin.down('form').form.findField('c_name').setValue(record.data.c_name);
        	formWin.down('form').form.findField('worktime').setValue(record.data.worktime);
        	formWin.down('form').form.findField('address').setValue(record.data.address);
        	formWin.down('form').form.findField('count').setValue(record.data.count);
        	this.getDatequeryForm().form.findField('ssd_id').setValue(record.data.id);
        	/*
        	var params = {
        			  ssd_id: record.data.id
	                };
	    	var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
            store.load();    
            */  	
    },
    querydate:function(button){
            var grid = button.up('grid');
          //  var form = grid.up('panel').down('form');
            var form = grid.up('panel').down('form');
            var params = form.getValues();
            var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
            store.loadPage(1); 
   }
});