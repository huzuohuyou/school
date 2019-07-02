Ext.define('manage.view.newactivity_charger.WorkOrderForm', {
    extend: 'manage.view.moudle.Form',
	alias : 'widget.chargernewworkorderform1',
	requires : [ 'manage.view.ux.ComboBox' ,'Ext.form.Panel'],
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout : {
		columns : 1,
		type : 'table'
	},
	width : 1050,
	margins: '5 5 5 5',
	//bodyStyle:'padding:5 5 5 5',
	maxHeight:550,
	autoScroll: true,
	id : 'chargernewworkorderform',
	split: true,  
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{

			items : [ {
           	 	title: '执行进度',         
           	 	//html: 'Panel1 content!'
           	    region:'north',
           	 	margins: '5 5 5 5', 
           	    bodyStyle:"padding:10px 10px 10px 10px", 
           	    width : 1000,
	           	layout : 'column',
	           	items : [ 
	           	      {
	      				xtype : 'hidden',
	      				name : 'status'
	      			},
	      			{ 
	      				xtype : 'hidden',
	      				name : 'pause'
	      	     },
	      		{
		           		xtype : 'displayfield',
		 				fieldLabel : '当前状态',
		 				labelAlign : 'right',
		 				name : 'states',
		 				renderer : salerActivityStatusRender,
		 				columnWidth : 0.2,
		 				
		 			
		 			}, {
		 				xtype : 'displayfield',
		 				fieldLabel : '提交工单日期',
		 				labelAlign : 'right',
		 				name : 'saler_submit_date',
		 				columnWidth : 0.2,
		 				
		 			}, {
		 				xtype : 'displayfield',
		 				fieldLabel : '策划完成日期',
		 				labelAlign : 'right',
		 				name : 'chfa_f_date',
		 				columnWidth : 0.2,
		 				
		 			}, {
		 				xtype : 'displayfield',
		 				fieldLabel : '合同上传日期',
		 				labelAlign : 'right',
		 				name : 'saler_contract_date',
		 				columnWidth : 0.2,
		 				
		 			}, {
		 				xtype : 'displayfield',
		 				fieldLabel : '流程上传日期',
		 				labelAlign : 'right',
		 				name : 'plan_finish_date',
		 				columnWidth : 0.2,
		 			},{
		 				xtype : 'displayfield',
		 				fieldLabel : '',
		 				labelAlign : 'right',
		 				name : '',
		 				columnWidth : 0.2,
		 				
		 			}, {
		 				xtype : 'displayfield',
		 				fieldLabel : '指派执行人日期',
		 				labelAlign : 'right',
		 				name : 'charger_finish_date',
		 				columnWidth : 0.2,
		 				
		 			},{
		 				xtype : 'displayfield',
		 				fieldLabel : '开始执行日期',
		 				labelAlign : 'right',
		 				name : 'start_execute_date',
		 				columnWidth : 0.2,
		 				
		 			}, {
		 				xtype : 'displayfield',
		 				fieldLabel : '执行结束日期',
		 				labelAlign : 'right',
		 				name : 'end_execute_date',
		 				columnWidth : 0.2,
		 				
		 			}, {
		 				xtype : 'displayfield',
		 				fieldLabel : '终止/暂停日期',
		 				labelAlign : 'right',
		 				name : 'orderterminate_date',
		 				columnWidth : 0.2,
		 				
		 			}]
			},{
				 
	             title: '销售人员创建工单', 
	             region: 'south', 
	             xtype: 'panel', 
	             split: true,  
	             margins: '5 5 5 5', 
	             //width: 800, 
	             width : 1000,
	             collapsible: true, 
	             collapsed: true ,
	             id: 'activity_step_1', 
	             layout: 'accordion', 

	                     //这里开始嵌套
	             items:[{
	            	 title: '销售人员新建工单', 
	            	 collapsible:true,
	                 
	            	 bodyStyle:"padding:10px 10px 10px 10px", 
	            	 layout : 'column',
	 	         	 buttonAlign : 'center',
	 	           	 items : [ {
		 	           	xtype : 'displayfield',
						name : 'name',
						fieldLabel : '活动名称',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
						maxLength: 20,
				        maxLengthText: "最长为20个字符",
						afterLabelTextTpl : required,
						emptyText : '必须填写',
						blankText : '此项为必填项',
						allowBlank : false
	 	 			
	 	 			}, {
	 	 				xtype : 'displayfield',
	 	 				fieldLabel : '我方对接人',
	 	 				labelAlign : 'right',
	 	 				name : 'saler_name',
	 	 				columnWidth : 0.3,
	 	 				
	 	 			}, {
	 	 				xtype : 'displayfield',
						name : 'type',
						fieldLabel : '活动类型',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
					//	store:[["军训","军训"],["安全教育","安全教育"],["社会实践","社会实践"],["研学","研学"]],
						editable : false
	 	 			}, {
	 	 				xtype : 'displayfield',
						name : 'theme',
						fieldLabel : '活动主题',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
						maxLength: 20,
				        maxLengthText: "最长为20个字符",
						afterLabelTextTpl : required,
						emptyText : '必须填写',
						blankText : '此项为必填项',
						allowBlank : false
	 	 				
	 	 			}, {
	 	 				xtype : 'displayfield',
						name : 'student_amount',
						fieldLabel : '学生人数',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
						maxLength: 20,
				        maxLengthText: "最长为20个字符"

	 	 			}, {
	 	 				xtype : 'displayfield',
						name : 'need_type',
						fieldLabel : '需求类型',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
					//	store:[["新开拓","新开拓"],["已确定","已确定"]],
						editable : false
	 	 			}, {
	 	 				xtype : 'displayfield',
	 	 				fieldLabel : '合同编号',
	 	 				labelAlign : 'right',
	 	 				name : 'contract_number',
	 	 				columnWidth : 0.3,
	 	 				
	 	 			}, {
	 	 				xtype : 'displayfield',
	 	 				fieldLabel : '涵盖年级',
	 	 				labelAlign : 'right',
	 	 				name : 'stages',
	 	 				columnWidth : 0.3,
	 	 				
	 	 			}, {
	 	 				xtype : 'displayfield',
						name : 'position',
						fieldLabel : '活动地点',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
					//	store:[["校内","校内"],["校外","校外"]],
						editable : false
					
	 	 				
	 	 			}, {
	 	 				xtype : 'displayfield',
						name : 'category',
						fieldLabel : '活动类别',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
					//	store:[["活动","活动"],["课程","课程"],["研学","研学"],["公益","公益"],["其他","其他"]],
						editable : false
	 	 				
	 	 			}, {
	 	 				xtype : 'displayfield',
						name : 'teacher_amount',
						fieldLabel : '随队老师人数',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
						maxLength: 20,
				        maxLengthText: "最长为20个字符"

	 	 			}, {
	 	 				xtype : 'displayfield',
						name : 'use_car',
						fieldLabel : '是否用车',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
					//	store:[["是","是"],["否","否"]],
						editable : false
	 	 				
	 	 			}, {
	 	 				xtype : 'displayfield',
						name : 'school_name',
						fieldLabel : '学校名称',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
					//	store : Ext.create('manage.store.schools.Schools',{
					//		autoLoad : {limit : 1000,start : 0}
					//	}),
						editable : false,
						afterLabelTextTpl : required,
						emptyText : '必须填写',
						blankText : '此项为必填项',
						allowBlank : false
	 	 			}, {
	 	 				xtype : 'displayfield',
						name : 'pre_start_date',
						format : 'Y-m-d',
						fieldLabel : '预计开始时间',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
						afterLabelTextTpl : required,
						emptyText : '必须填写',
						blankText : '此项为必填项',
						allowBlank : false,
				        maxLengthText: "最长为20个字符"

	 	 			}, {
	 	 				xtype : 'displayfield',
						name : 'pre_end_date',
						format : 'Y-m-d',
						fieldLabel : '预计结束时间',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
						maxLength: 20,
				        maxLengthText: "最长为20个字符"

	 	 			}, {
	 	 				xtype : 'displayfield',
	 	 				fieldLabel : '学校地址',
	 	 				labelAlign : 'right',
	 	 				name : 'address',
	 	 				columnWidth : 0.3,
	 	 				colspan:2
	 	 				
	 	 			}, {
	 	 				xtype : 'displayfield',
						name : 'ap_name',
						fieldLabel : '指定策划人',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
				//		store : Ext.create('manage.store.activityplan.Activityplan',{
				//			autoLoad : {limit : 1000,start : 0}
				//		}),
						editable : false,
						afterLabelTextTpl : required,
						emptyText : '必须填写',
						blankText : '此项为必填项',
						allowBlank : false
	 	 			}, {
	 	 				xtype : 'displayfield',
	 	 				fieldLabel : '需求描述',
	 	 				labelAlign : 'right',
	 	 				name : 'need_describe',
	 	 				columnWidth : 0.6,
	 	 				rowspan:2,
	 	 				colspan:2	
	 	 			}, {
		                xtype : 'hidden',
		                name : 'id'
	                }],
	                /*
	 	 			buttons : [ {
	 	 				text : '终止',
	 	 				action : 'end'
	 	 			},{
	 	 				text : '暂停',
	 	 				action : 'stop'
	 	 			},{
	 	 				text : '继续',
	 	 				action : 'goon'
	 	 			},{
	 	 				text : '保存',
	 	 				action : 'salersave'
	 	 			}, {
	 	 				text : '提交给策划人员',
	 	 				action : 'submit2plan'
	 	 			} ],
	 	 			*/
	            }]
			},
			
			
			/////////////////////////////////////
			
			
			{
				 
	             title: '策划人员提交策划方案', 
	             region: 'south', 
	             xtype: 'panel', 
	             split: true,  
	             margins: '5 5 5 5', 
	             //width: 800, 
	             width : 1000,
	             collapsible: true, 
	             collapsed: true ,
	             id: 'activity_step_2', 
	             layout: 'accordion', 

	                     //这里开始嵌套
	             items:[{
	                             
	                 title: '策划人员提交策划方案',         
	                 split: true,  
	                 bodyStyle:"padding:10px 10px 10px 10px", 
	            	 layout : 'column',
	 	         	 buttonAlign : 'center',
	 	           	 items : [ {
	 					
	 					xtype : 'hidden',
	 					name : 'chfa_f_name'
	 				}, {
	 					xtype : 'hidden',
	 					name : 'chfa_f_id',
	 					
	 				},{
		 	           	xtype : 'displayfield',
						name : 'chfa_f_nameLink',
						fieldLabel : '策划方案',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.4,
	 	 			},
	 	 			/*
	 	 			{
	 					xtype : 'container',
	 					columnWidth : 0.2,
	 					items : [
	 						{
	 							xtype : 'button',
	 							action : 'upload',
	 							handler : function(button){
	 								var status = button.up('form').form.findField('status').getValue();
	 								if(status == 1)
	 								{	
	 								    fileUpload(button,'chfa_f_id','chfa_f_name','chfa_f_nameLink');
	 								}
	 								else{
	 									Ext.Msg.alert('系统提示', '当前阶段不允许上传策划方案');
	 								}
	 							},
	 							text : '浏览'
	 						}, {
	 							xtype : 'button',
	 							handler : function(button){
	 								if(status == 1){
	 								button.up('form').form.findField('chfa_f_id').setValue('');
									button.up('form').form.findField('chfa_f_name').setValue('');
									button.up('form').form.findField('chfa_f_nameLink').setValue('');
	 								}
	 								else{
	 									Ext.Msg.alert('系统提示', '当前阶段不允许删除策划方案');
	 								}
	 							},
	 							text : '删除'
	 						}
	 					         ]
	 				},
	 				*/
	 			    {
	 	 				xtype : 'displayfield',
	 	 				fieldLabel : '确认签字',
	 	 				labelAlign : 'right',
	 	 				name : 'ap_name2',
	 	 				columnWidth : 0.3,
	 	 				
	 	 			}],
	 	 		/*
	 	 			buttons : [ {
	 	 				text : '提交给销售人员',
	 	 				action : 'submit2saler'
	 	 			} ],
	 	 			*/
	 	 			
	            }]
			},
			/////////////////////////////
			
			
			{
				 
	             title: '销售人员上传合同', 
	             region: 'south', 
	             xtype: 'panel', 
	             split: true,  
	             margins: '5 5 5 5', 
	             //width: 800, 
	             width : 1000,
	             collapsible: true, 
	             collapsed: true ,
	             id: 'activity_step_3', 
	             layout: 'accordion', 

	                     //这里开始嵌套
	             items:[{
	                            
	                 title: '销售人员上传合同',         
	                 bodyStyle:"padding:10px 10px 10px 10px", 
	            	 layout : 'column',
	 	         	 buttonAlign : 'center',
	 	           	 items : [ {
	 					
	 					xtype : 'hidden',
	 					name : 'xs_f_name'
	 				}, {
	 					xtype : 'hidden',
	 					name : 'xs_f_id',
	 					
	 				},{
		 	           	xtype : 'displayfield',
						name : 'xs_f_nameLink',
						fieldLabel : '上传合同',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.4,
				        
						afterLabelTextTpl : required,
						emptyText : '必须填写',
						blankText : '此项为必填项',
				//		allowBlank : false,
						
	 	 			
	 	 			},
	 	 			/*
	 	 			{
	 					xtype : 'container',
	 					columnWidth : 0.2,
	 					items : [
	 						{
	 							xtype : 'button',
	 							action : 'upload',
	 							handler : function(button){
	 						    var status = button.up('form').form.findField('status').getValue();
	 						    if(status ==2)
	 						     {
	 						      fileUpload(button,'xs_f_id','xs_f_name','xs_f_nameLink');
	 						     }
	 						    else
	 						     {
	 						    	Ext.Msg.alert('系统提示', '当前阶段不允许上传合同');
	 						     }
	 						},
	 							text : '浏览'
	 						}, {
	 							xtype : 'button',
	 							handler : function(button){
	 								button.up('form').form.findField('xs_f_id').setValue('');
									button.up('form').form.findField('xs_f_name').setValue('');
									button.up('form').form.findField('xs_f_nameLink').setValue('');
	 								
	 							},
	 							text : '删除'
	 						}
	 					         ]
	 				}
	 				*/
	 				],
	 				/*
	 	 			buttons : [ {
	 	 				text : '终止',
	 	 				action : 'end'
	 	 			},{
	 	 				text : '暂停',
	 	 				action : 'stop'
	 	 			},{
	 	 				text : '继续',
	 	 				action : 'goon'
	 	 			},{
	 	 				text : '提交给策划人员',
	 	 				action : 'submit2plan2'
	 	 			} ], 
	 	 			*/
	            }]
			},
			
			////////////////////////////////////

			{
				 
	             title: '策划人员提交活动流程', 
	             region: 'south', 
	             xtype: 'panel', 
	             split: true,  
	             margins: '5 5 5 5', 
	             //width: 800, 
	             width : 1000,
	             collapsible: true, 
	             collapsed: true ,
	             id: 'activity_step_4', 
	             layout: 'accordion', 

	                     //这里开始嵌套
	             items:[{
	                 
	                 title: '策划人员提交活动流程',         
	                 bodyStyle:"padding:10px 10px 10px 10px", 
	            	 layout : 'column',
	 	         	 buttonAlign : 'center',
	 	           	 items : [ {
	 					
	 					xtype : 'hidden',
	 					name : 'chhd_f_name'
	 				}, {
	 					xtype : 'hidden',
	 					name : 'chhd_f_id',
	 					
	 				},{
	 					
	 					xtype : 'hidden',
	 					name : 'chjw_f_name'
	 				}, {
	 					xtype : 'hidden',
	 					name : 'chjw_f_id',
	 					
	 				},{
	 	 	           	xtype : 'displayfield',
	 					name : 'chhd_f_nameLink',
	 					fieldLabel : '活动执行流程',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
	 			        
	 					afterLabelTextTpl : required,
	 			//		emptyText : '必须填写',
	 			//		blankText : '此项为必填项',
	 			//		allowBlank : false,
	 					
	 	 			
	 	 			},
	 	 			/*
	 	 			{
	 					xtype : 'container',
	 					columnWidth : 0.1,
	 					items : [{
	 						xtype : 'button',
	 						action : 'upload',
	 						handler : function(button){
	 						fileUpload(button,'chhd_f_id','chhd_f_name','chhd_f_nameLink');
	 						},
	 						text : '浏览'
	 					}, {
	 						xtype : 'button',
	 						handler : function(button){
	 							button.up('form').form.findField('chhd_f_id').setValue('');
	 							button.up('form').form.findField('chhd_f_name').setValue('');
	 							button.up('form').form.findField('chhd_f_nameLink').setValue('');
	 							
	 						},
	 						text : '删除'
	 					}]
	 				},
                   */
	 				{
	 					xtype : 'displayfield',
	 					format : 'Y-m-d',
	 					name : 'confirm_start_date',
	 					fieldLabel : '确定开始时间',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
	 					afterLabelTextTpl : required,
	 					emptyText : '必须填写',
	 					blankText : '此项为必填项',
	 			//		allowBlank : false,
	 			        maxLengthText: "最长为20个字符"
	 				},{
	 	 	           	xtype : 'displayfield',
	 					name : 'ap_name3',
	 					fieldLabel : '确认函',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,

	 	 			},{
	 	 	           	xtype : 'displayfield',
	 					name : 'chjw_f_nameLink',
	 					fieldLabel : '教委备案资料',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
	 					afterLabelTextTpl : required,
	 					emptyText : '必须填写',
	 					blankText : '此项为必填项',
	 			//		allowBlank : false,
	 					
	 	 			
	 	 			},
	 	 		/*
	 	 			{
	 					xtype : 'container',
	 					columnWidth : 0.1,
	 					items : [{
	 						xtype : 'button',
	 						action : 'upload',
	 						handler : function(button){
	 						fileUpload(button,'chjw_f_id','chjw_f_name','chjw_f_nameLink');
	 						},
	 						text : '浏览'
	 					}, {
	 						xtype : 'button',
	 						handler : function(button){
	 							button.up('form').form.findField('chjw_f_id').setValue('');
	 							button.up('form').form.findField('chjw_f_name').setValue('');
	 							button.up('form').form.findField('chjw_f_nameLink').setValue('');
	 							
	 						},
	 						text : '删除'
	 					}]
	 				},
	 		   */
	 				{
	 					xtype : 'displayfield',
	 					name : 'confirm_end_date',
	 					fieldLabel : '确定结束时间',
	 					format : 'Y-m-d',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.3,
	 					afterLabelTextTpl : required,
	 					emptyText : '必须填写',
	 					blankText : '此项为必填项',
	 			//		allowBlank : false,
	 			        maxLengthText: "最长为20个字符"
	 				}],
	 			 /*
	 	 			buttons : [ {
	 	 				text : '提交给主管',
	 	 				action : 'submit2charger',
	 	 				id :'submit2charger'
	 	 			} ], 
	 	 	     */
	            }]
			},
			
			///////////////////////////////
			{
				 
	             title: '活动主管指派执行人员', 
	             region: 'south', 
	             xtype: 'panel', 
	             split: true,  
	             margins: '5 5 5 5', 
	             //width: 800, 
	             width : 1000,
	             collapsible: true, 
	             collapsed: true ,
	             id: 'activity_step_5', 
	             layout: 'accordion', 

	                     //这里开始嵌套
	             items:[{
                
	                 title: '活动主管指派执行人员',         
	                 bodyStyle:"padding:10px 10px 10px 10px", 
	            	 layout : 'column',
	 	         	 buttonAlign : 'center',
	 	           	 items : [ {
	 	 				xtype : 'mycombo',
						name : 'executeId',
						fieldLabel : '指派执行人员',
	 	 				labelAlign : 'right',
	 	 				columnWidth : 0.4,
						store : Ext.create('manage.store.activityexecute.Activityexecute',{
						autoLoad : {limit : 1000,start : 0}
					    }),
						editable : false,
						emptyText : '必须填写',
	 					blankText : '此项为必填项',
	 					allowBlank : false,
	 			        maxLengthText: "最长为20个字符"
		 	 		}],
		 	 		
		 	 		buttons : [ {
	 	 				text : '派给执行人员',
	 	 				action : 'submit2execute',
	 	 				id :'submit2execute',
	 	 				hidden : (session.authority.indexOf('b260303') > -1) ? false : true
	 	 			} ],
	 	 			
	            }
	            	 
	            	 
	             ]
			},
			//////////////////////////////////////
			
			{
				 
	             title: '执行人员执行活动', 
	             region: 'south', 
	             xtype: 'panel', 
	             split: true,  
	             margins: '5 5 5 5', 
	             //width: 800, 
	             width : 1000,
	             collapsible: true, 
	             collapsed: true ,
	             id: 'activity_step_6', 
	             layout: 'accordion', 

	                     //这里开始嵌套
	             items:[
	            	 
	            	 {
	                     
		                 title: '执行人员执行活动',         
		                 bodyStyle:"padding:10px 10px 10px 10px", 
		            	 layout : 'column',
		 	         	 buttonAlign : 'center',
		 	           	 items : [ {
			 	           	xtype : 'displayfield',
							name : 'name2',
							fieldLabel : '活动名称',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,
			 	 		},{
			 	           	xtype : 'displayfield',
							name : 'person_number',
							fieldLabel : '活动人数',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,	
			 	 		},{
		 					xtype : 'hidden',
		 					name : 'cdbg_f_name'
		 				}, {
		 					xtype : 'hidden',
		 					name : 'cdbg_f_id',
		 					
		 				},{
			 	           	xtype : 'displayfield',
							name : 'cdbg_f_nameLink',
							fieldLabel : '踩点报告',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,
							afterLabelTextTpl : required,
							emptyText : '必须填写',
							blankText : '此项为必填项',
				//			allowBlank : false,
							
		 	 			},
		 	 			/*
		 	 			{
		 					xtype : 'container',
		 					columnWidth : 0.1,
		 					items : [{
								xtype : 'button',
								action : 'upload',
								handler : function(button){
								fileUpload(button,'chjw_f_id','chjw_f_name','chjw_f_nameLink');
								},
								text : '浏览'
		 					}, {
								xtype : 'button',
								handler : function(button){
									button.up('form').form.findField('chjw_f_id').setValue('');
									button.up('form').form.findField('chjw_f_name').setValue('');
									button.up('form').form.findField('chjw_f_nameLink').setValue('');
									
								},
								text : '删除'
		 					}]
		 				},
		 				*/
		 				{
			 	           	xtype : 'displayfield',
							name : 'saler_name2',
							fieldLabel : '销售负责人',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,
			 	 		},{
			 	           	xtype : 'displayfield',
							name : 'final_execute_number',
							fieldLabel : '最终执行人数',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,
			 	 		},{
		 					
		 					xtype : 'hidden',
		 					name : 'yjya_f_name'
		 				}, {
		 					xtype : 'hidden',
		 					name : 'yjya_f_id',
		 					
		 				},{
			 	           	xtype : 'displayfield',
							name : 'yjya_f_nameLink',
							fieldLabel : '应急预案',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,
					        
							afterLabelTextTpl : required,
							emptyText : '必须填写',
							blankText : '此项为必填项',
				//			allowBlank : false,	
		 	 			
		 	 			},
		 	 			/*
		 	 			{
		 					xtype : 'container',
		 					columnWidth : 0.1,
		 					items : [{
								xtype : 'button',
								action : 'upload',
								handler : function(button){
								fileUpload(button,'chjw_f_id','chjw_f_name','chjw_f_nameLink');
								},
								text : '浏览'
		 					}, {
								xtype : 'button',
								handler : function(button){
									button.up('form').form.findField('chjw_f_id').setValue('');
									button.up('form').form.findField('chjw_f_name').setValue('');
									button.up('form').form.findField('chjw_f_nameLink').setValue('');
									
								},
								text : '删除'
		 					}]
		 				},
		 				*/
		 				{
			 	           	xtype : 'displayfield',
							name : 'activitymanager',
							fieldLabel : '活动负责人',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,
					  
			 	 			
			 	 		},{
			 	           	xtype : 'displayfield',
							name : 'base_name',
							fieldLabel : '基地名称',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,
			 	 		},{
		 					
		 					xtype : 'hidden',
		 					name : 'hdxz_f_name'
		 				}, {
		 					xtype : 'hidden',
		 					name : 'hdxz_f_id',
		 					
		 				},{
			 	           	xtype : 'displayfield',
							name : 'hdxz_f_nameLink',
							fieldLabel : '活动须知',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,
					        
							afterLabelTextTpl : required,
							emptyText : '必须填写',
							blankText : '此项为必填项',
				//			allowBlank : false,
							
		 	 			
		 	 			},
		 	 			/*
		 	 			{
		 					xtype : 'container',
		 					columnWidth : 0.1,
		 					items : [{
								xtype : 'button',
								action : 'upload',
								handler : function(button){
								fileUpload(button,'chjw_f_id','chjw_f_name','chjw_f_nameLink');
								},
								text : '浏览'
		 					}, {
								xtype : 'button',
								handler : function(button){
									button.up('form').form.findField('chjw_f_id').setValue('');
									button.up('form').form.findField('chjw_f_name').setValue('');
									button.up('form').form.findField('chjw_f_nameLink').setValue('');
									
								},
								text : '删除'
		 					}]
		 				},
		 				*/
		 				{
			 	           	xtype : 'displayfield',
							name : 'ae_name2',
							fieldLabel : '执行人员',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,
					  
			 	 			
			 	 		},{
			 	           	xtype : 'displayfield',
							name : 'base_address',
							fieldLabel : '基地地址',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,
					  
			 	 			
			 	 		},{
		 					
		 					xtype : 'hidden',
		 					name : 'zxbz_f_name'
		 				}, {
		 					xtype : 'hidden',
		 					name : 'zxbz_f_id',
		 					
		 				},{
			 	           	xtype : 'displayfield',
							name : 'zxbz_f_nameLink',
							fieldLabel : '执行步骤',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,
					        
							afterLabelTextTpl : required,
							emptyText : '必须填写',
							blankText : '此项为必填项',
				//			allowBlank : false,
							
		 	 			
		 	 			},
		 	 			/*
		 	 			{
		 					xtype : 'container',
		 					columnWidth : 0.1,
		 					items : [{
								xtype : 'button',
								action : 'upload',
								handler : function(button){
								fileUpload(button,'chjw_f_id','chjw_f_name','chjw_f_nameLink');
								},
								text : '浏览'
		 					}, {
								xtype : 'button',
								handler : function(button){
									button.up('form').form.findField('chjw_f_id').setValue('');
									button.up('form').form.findField('chjw_f_name').setValue('');
									button.up('form').form.findField('chjw_f_nameLink').setValue('');
									
								},
								text : '删除'
		 					}]
		 				},
		 				*/
		 				{
			 	           	xtype : 'displayfield',
							name : 'final_start_dates',
							fieldLabel : '最终开始时间',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,
					  
			 	 			
			 	 		},{
			 	           	xtype : 'displayfield',
							name : 'final_end_dates',
							fieldLabel : '最终结束时间',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,
			 	 		},{
		 					
		 					xtype : 'hidden',
		 					name : 'fkjg_f_name'
		 				}, {
		 					xtype : 'hidden',
		 					name : 'fkjg_f_id',
		 					
		 				},{
			 	           	xtype : 'displayfield',
							name : 'fkjg_f_nameLink',
							fieldLabel : '反馈结果',
		 	 				labelAlign : 'right',
		 	 				columnWidth : 0.3,
					        
							afterLabelTextTpl : required,
							emptyText : '必须填写',
							blankText : '此项为必填项',
				//			allowBlank : false,
							
		 	 			
		 	 			},
		 	 			/*
		 	 			{
		 					xtype : 'container',
		 					columnWidth : 0.1,
		 					items : [{
								xtype : 'button',
								action : 'upload',
								handler : function(button){
								fileUpload(button,'chjw_f_id','chjw_f_name','chjw_f_nameLink');
								},
								text : '浏览'
		 					}, {
								xtype : 'button',
								handler : function(button){
									button.up('form').form.findField('chjw_f_id').setValue('');
									button.up('form').form.findField('chjw_f_name').setValue('');
									button.up('form').form.findField('chjw_f_nameLink').setValue('');
									
								},
								text : '删除'
		 					}]
		 				}
		 				*/
		 				],
		 				/*
			 	 		buttons : [ {
		 	 				text : '保存',
		 	 				action : 'saveExecute'
		 	 			},{
		 	 				text : '废除工单',
		 	 				action : 'submit2execute'
		 	 			} ,{
		 	 				text : '开始执行',
		 	 				action : 'submit2execute'
		 	 			} ,{
		 	 				text : '活动完结',
		 	 				action : 'submit2execute'
		 	 			}  ],
		 	 			*/
		            }
	             ]
			}
		///////////////////////////
		
			]
			
		});
		me.callParent(arguments);
	},
	buttons : [ {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
function fileUpload(button,fid,fname,flink){

	var form = button.up('form');
	var old_file = form.getForm().findField(fid).getValue();
	Ext.create('Ext.window.Window', {
		title : '上传文件',
		resizable : true,
		id : 'uploadFile',
		modal : true,
		layout : 'fit',
		items : [ {
			xtype : 'form',			
			bodyPadding : 10,
			header : false,
			buttonAlign : 'center',
			border : false,
			items : [{
						xtype : 'filefield',
						name : 'new_file',
						fieldLabel : '文件路径(最大5M)',
						labelWidth : 80,
						msgTarget : 'side',
						allowBlank : false,
						anchor : '100%',
						afterLabelTextTpl : required,
						emptyText : '请选择上传文件',
						blankText : '此项为必填项',
						allowBlank : false,
						buttonText : '浏览'
					}, {
						xtype : 'textfield',
						hidden : true,
						name : 'old_file'
					}],
			buttons : [{
						text : '确定',
						handler : function(button) {
							uploadFile(button,fid,fname,flink);
						}
					}, {
						text : '关闭',
						handler : function() {
							this.up('window').close();
						}
					}]
		} ],
		autoShow : true
	});
	Ext.getCmp('uploadFile').down('form').getForm().findField('old_file').setValue(old_file);
};
function uploadFile(button,fid,fname,flink) {

	var upLoadForm = button.up('form').getForm();
	var win = button.up('window');
	upLoadForm.submit({
		waitMsg : '正在上传数据,请等待...',
		clientValidation : true,
		url : 'system.do',
		params : {
			action : 'uploadFile'
		},
		success : function(form, action) {
			top.Ext.Msg.alert('上传成功', action.result.msg == null ? '上传成功'
					: action.result.msg, function() {
				var f_name = action.result.f_name;
				var f_id = action.result.f_id;
				var replyForm = Ext.getCmp('chargernewworkorderform').form;
				replyForm.findField(flink).setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+f_name+'</a>');
				replyForm.findField(fid).setValue(f_id);
				replyForm.findField(fname).setValue(f_name);
				win.close();
			});
		},
		failure : function(form, action) {
			switch (action.failureType) {
			case Ext.form.action.Action.CLIENT_INVALID:
				top.Ext.Msg.alert('上传失败', '所填数据不符合要求，请检查后提交');
				break;
			case Ext.form.action.Action.CONNECT_FAILURE:
				top.Ext.Msg.alert('上传失败', '上传失败，请检查网络');
				break;
			case Ext.form.action.Action.SERVER_INVALID:
				top.Ext.Msg.alert('上传失败',
						action.result.msg == null ? '上传失败'
								: action.result.msg);
			}
		}
	});
}