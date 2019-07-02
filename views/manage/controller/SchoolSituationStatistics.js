Ext.define('manage.controller.SchoolSituationStatistics', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'schoolSituationStatisticsGrid',
        selector: 'schoolSituationStatisticsgrid'
    }],
    init: function(app) {
        this.control({
			'schoolSituationStatisticsgrid button[action=schoolSituationStatisticsexcel]' : {
			    click : this.schoolSituationStatisticsexcel
			},
			'schoolSituationStatisticsgrid button[action=query]' : {
				click : this.query
			},
        });
    },
    query: function(button) {
        if (session.authority.indexOf('b240301') > -1) {
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
    schoolSituationStatisticsexcel : function(button) {
    	var grid = this.getSchoolSituationStatisticsGrid();
		var store = grid.getStore();
		var school_name = "";
		var weeks = "";
		var classCount = "";
		var stages = "";
		var courseCount = "";
		var studentCount = "";
		var address = "";
		var start_date_first ="";
		var end_date_last ="";
		var weekamount="";
		var linkman="";
		var telephone="";
		var count = store.getCount();
		if(count == 0){
			Ext.Msg.alert('系统提示', '没有数据可以导出！');
		}
		else{
			for (var i = 0; i < store.getCount(); i++) {
			    var record = store.getAt(i);
			    //前六列不会为空，因此可以直接叠加在一起成字符串
			    school_name = school_name + record.get('school_name')+",";
			    weeks = weeks + record.get('weeks')+",";
			    classCount = classCount + record.get('classCount')+",";
			    stages = stages + record.get('stages')+",";
			    courseCount = courseCount + record.get('courseCount')+",";
			    studentCount = studentCount + record.get('studentCount')+",";
			    //下面的数据有可能为空，导致导出excel功能不好使，因此要加上为空的判断
			    if(record.get('address') == "" || record.get('address') == null){
			    	address = address + "-"+",";	
			    }
			    else{
			    	address = address + record.get('address')+",";
			    }	
			    //开课日期
			    if(record.get('start_date_first') == "" || record.get('start_date_first') == null){
			    	start_date_first = start_date_first + "-"+",";	
			    }
			    else{
			    	start_date_first = start_date_first + record.get('start_date_first')+",";
			    }	
			    //结课日期
			    if(record.get('end_date_last') == "" || record.get('end_date_last') == null){
			    	end_date_last = end_date_last + "-"+",";	
			    }
			    else{
			    	end_date_last = end_date_last + record.get('end_date_last')+",";
			    }	
			    //开课周数
			    if(record.get('weekamount') == "" || record.get('weekamount') == null){
			    	weekamount = weekamount + "-"+",";	
			    }
			    else{
			    	weekamount = weekamount + record.get('weekamount')+",";
			    }	
			    //学校联系人
			    if(record.get('linkman') == "" || record.get('linkman') == null){
			    	linkman = linkman + "-"+",";	
			    }
			    else{
			    	linkman = linkman + record.get('linkman')+",";
			    }				  
			    //联系人电话
			    if(record.get('telephone') == "" || record.get('telephone') == null){
			    	telephone = telephone + "-"+",";	
			    }
			    else{
			    	telephone = telephone + record.get('telephone')+",";
			    }			  
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
		                     action: 'getSchoolSituationStatistics',
		     				 school_name : school_name,
		     				 weeks : weeks,
		     				 classCount:classCount,
		     				 stages:stages,
		     				 courseCount:  courseCount,
		     				 studentCount:studentCount,
		     				 address: address,
		     				 start_date_first:start_date_first,
		     				 end_date_last:end_date_last ,
		     				 weekamount:weekamount,
		     				 linkman :linkman,
		     				 telephone:telephone
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
									//	fieldLabel : '学校整体情况',
										name : 'file_name',
										value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"学校整体情况统计表"+'</a>',
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