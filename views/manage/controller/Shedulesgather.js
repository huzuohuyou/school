Ext.define('manage.controller.Shedulesgather', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'shedulesgatherGrid',
        selector: 'shedulesgathergrid'
    }],
    init: function(app) {
        this.control({
			'shedulesgathergrid button[action=query]' : {
				click : this.query
			},
			'shedulesgathergrid button[action=shedulesexcel]' : {
			    click : this.shedulesexcel
			}
        });
    },
    query: function(button) {
        if (session.authority.indexOf('b240101') > -1) {
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
    shedulesexcel : function(button) {
    	var grid = this.getShedulesgatherGrid();
		var store = grid.getStore();
		var school_name = "";
		var week = "";
		var c_name = "";
		var stage = "";
		var s_name = "";
		var worktime = "";
		var address = "";
		var t_name ="";
		var phone ="";
		var agency="";
		var term = "";  //学期
		var year = "";  //年份
		var count = store.getCount();
		if(count == 0){
			Ext.Msg.alert('系统提示', '没有数据可以导出！');
		}
		else{
			for (var i = 0; i < store.getCount(); i++) {
			    var record = store.getAt(i);
			    school_name = school_name + record.get('school_name')+",";
			    week = week + record.get('week')+",";
			    c_name = c_name + record.get('c_name')+",";
			    stage = stage + record.get('stage')+",";
			    s_name = s_name + record.get('s_name')+",";
			    worktime = worktime + record.get('worktime')+",";
			    address = address + record.get('address')+",";
			    t_name = t_name + record.get('t_name')+",";
			    phone = phone + record.get('phone')+",";
			    agency = agency + record.get('agency')+ ",";
			    term = record.get('term');
			    year = record.get('year');
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
		                     action: 'shedulesClassExcel',
		                     funcId : 'f240102',
		     				 school_name : school_name,
		     				 week : week,
		     				 c_name:c_name,
		     				 stage:stage,
		     				 s_name:s_name,
		     				 worktime:  worktime,
		     				 address:address,
		     				 t_name: t_name,
		     				 phone:phone,
		     				 agency:agency,
		     				 term:term,
		     				 year:year
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
								title : '点击下载统计表',
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
										fieldLabel : '开班统计',
										name : 'file_name',
										value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"开班统计表"+'</a>',
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
		}		
	}

});