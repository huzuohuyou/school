Ext.define('manage.view.newactivity_charger.WorkOrderForm', {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.chargernewworkorderform',
	requires : [ 'manage.view.ux.ComboBox','manage.view.ux.UEditor' ],
//	bodyPadding : 10,
	header : false,
	id : 'chargernewworkorderform',
	buttonAlign : 'center',
	bodyStyle:'padding:5px 5px 0',
	autoScroll:true,
	frame:true,
	layout : {
		columns : 1,
		type : 'form',
		align:'center',
		//type: 'vbox',   
		pack: 'center'
	},
	width:1000,
	height:550,
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items:[{
			    xtype:"fieldset",
			    title:"执行进度",
			    autoHeight:true,
			    border:true,
			    collapsible: true, 
			    bodyStyle:"border:11px solid #B5B8C8;padding:10px;margin-bottom:10px;display:block;",
			    layout:"column",
			    items:[{
      				xtype : 'hidden',
      				name : 'status'
      			},{ 
      				xtype : 'hidden',
      				name : 'pause'
      	        },{
		            columnWidth:0.2,
		            layout:"form",
		            border:false,
		            items:[{
			           		xtype : 'displayfield',
			 				fieldLabel : '当前状态',
			 			//	labelAlign : 'right',
			 				name : 'states',
			 				renderer : salerActivityStatusRender,		
			 		},{
			 				xtype : 'displayfield',
			 				fieldLabel : '提交工单日期',
			 			//	labelAlign : 'right',
			 				name : 'saler_submit_date',	 				
			 	    }]
		          },{
			            columnWidth:0.2,
			            layout:"form",
			            border:false,
			            items:[ {
			 				xtype : 'displayfield',
			 				fieldLabel : '策划完成日期',
			 		//		labelAlign : 'right',
			 				name : 'chfa_f_date',		 				
			 			}, {
			 				xtype : 'displayfield',
			 				fieldLabel : '合同上传日期',
			 		//		labelAlign : 'right',
			 				name : 'saler_contract_date',	
			 			},]
			       },{
			            columnWidth:0.2,
			            layout:"form",
			            border:false,
			            items:[ {
			 				xtype : 'displayfield',
			 				fieldLabel : '流程上传日期',
			 		//		labelAlign : 'right',
			 				name : 'plan_finish_date',
			 				columnWidth : 0.2,
			 			},{
			 				xtype : 'displayfield',
			 				fieldLabel : '',
			 		//		labelAlign : 'right',
			 				name : '',
			 				columnWidth : 0.2,		 				
			 			}]
			       },{
			            columnWidth:0.2,
			            layout:"form",
			            border:false,
			            items:[ {
			 				xtype : 'displayfield',
			 				fieldLabel : '指派执行人日期',
			 	//			labelAlign : 'right',
			 				name : 'charger_finish_date',
			 				columnWidth : 0.2,			 				
			 			},{
			 				xtype : 'displayfield',
			 				fieldLabel : '开始执行日期',
			 	//			labelAlign : 'right',
			 				name : 'start_execute_date',
			 				columnWidth : 0.2,			 				
			 			}]
			       },{
			            columnWidth:0.2,
			            layout:"form",
			            border:false,
			            items:[  {
			 				xtype : 'displayfield',
			 				fieldLabel : '执行结束日期',
			 	//			labelAlign : 'right',
			 				name : 'end_execute_date',
			 				columnWidth : 0.2,			 				
			 			}, {
			 				xtype : 'displayfield',
			 				fieldLabel : '终止/暂停日期',
			 	//			labelAlign : 'right',
			 				name : 'orderterminate_date',
			 				columnWidth : 0.2,			 				
			 			}]
			       }]
			  },{
				    xtype:"fieldset",
				    title:"销售人员创建工单",
				    autoHeight:true,
				    collapsible:true,
				    collapsed:true,
				    border:true,
				    bodyStyle:"border:11px solid #B5B8C8;padding:10px;margin-bottom:10px;display:block;",
				    layout:"column",
				    items:[{
				        columnWidth:1,
				        layout:"form",
				        border:false,
				        items:[{
						    xtype:"fieldset",
						    title:"活动工单基本信息",
						    autoHeight:true,
						    collapsible:true,
						    collapsed:true,
						    border:true,
						    bodyStyle:"border:11px solid #B5B8C8;padding:10px;margin-bottom:10px;display:block;",
						    layout:"column",
						    items:[
						     {
			            columnWidth:0.3,
			            layout:"form",
			            border:false,
			            items:[{
			 	           	xtype : 'displayfield',
							name : 'name',
							fieldLabel : '活动名称'	 	 			
		 	 			},{
		 	 				xtype : 'displayfield',
							name : 'theme',
							fieldLabel : '活动主题'	 	 				
		 	 			}, {
		 	 				xtype : 'displayfield',
		 	 				fieldLabel : '合同编号',
		 	 			//	labelAlign : 'right',
		 	 				name : 'contract_number',
		 	 			},{
		 	 				xtype : 'displayfield',
							name : 'category',
							fieldLabel : '活动类别'
		 	 			}, {
		 	 				xtype : 'displayfield',
							name : 'school_name',
							fieldLabel : '学校名称'
		 	 			},{
		 	 				xtype : 'displayfield',
		 	 				fieldLabel : '学校地址',
		 	 		//		labelAlign : 'right',
		 	 				name : 'address',
		 	 				columnWidth : 0.3,
		 	 				colspan:2
		 	 				
		 	 			}]
			          },{
				            columnWidth:0.02,
				            layout:"form",
				            border:false,
				            items:[ {
			 	 				xtype : 'displayfield',
			 	 				fieldLabel : ' ',
			 	 				hideLabel: true
			 	 			}]
				       },{
					            columnWidth:0.3,
					            layout:"form",
					            border:false,
					            items:[{
				 	 				xtype : 'displayfield',
				 	 				fieldLabel : '我方对接人',
				 	 				name : 'saler_name',			 	 				 	 				
				 	 			}, {
				 	 				xtype : 'displayfield',
									name : 'student_amount',
									fieldLabel : '学生人数',
									maxLength: 20,
							        maxLengthText: "最长为20个字符"

				 	 			},{
				 					xtype : 'displayfield',
				 					fieldLabel : '涵盖年级',
				 					name : 'stages',
				 				}, {
				 	 				xtype : 'displayfield',
									name : 'teacher_amount',
									fieldLabel : '随队老师人数',

				 	 			}, {
				 	 				xtype : 'displayfield',
									name : 'pre_start_date',
									fieldLabel : '预计开始时间',
				 	 			},{
				 	 				xtype : 'displayfield',
									name : 'ap_name',
									fieldLabel : '指定策划人'
				 	 			}]
					          },{
						            columnWidth:0.02,
						            layout:"form",
						            border:false,
						            items:[ {
					 	 				xtype : 'displayfield',
					 	 				fieldLabel : ' ',
					 	 				hideLabel: true
					 	 			}]
						       },{
						            columnWidth:0.3,
						            layout:"form",
						            border:false,
						            items:[ {
					 	 				xtype : 'displayfield',
										name : 'type',
										fieldLabel : '活动类型',
					 	 			},{
					 	 				xtype : 'displayfield',
										name : 'need_type',
										fieldLabel : '需求类型'
					 	 			},{
					 	 				xtype : 'displayfield',
										name : 'position',
										fieldLabel : '活动地点',
		 			                },{
		 			 	 				xtype : 'displayfield',
		 								name : 'use_car',
		 								fieldLabel : '是否用车', 			 	 				
		 			 	 			}, {
		 			 	 				xtype : 'displayfield',
		 								name : 'pre_end_date',
		 								format : 'Y-m-d',
		 								fieldLabel : '预计结束时间'
		 			 	 			}]
						          }]
						  },{
							    xtype:"fieldset",
							    title:"需求描述",
							    autoHeight:true,
							    collapsible:true,
							    collapsed:true,
							    border:true,
							    bodyStyle:"border:11px solid #B5B8C8;padding:10px;margin-bottom:10px;display:block;",
							    layout:"column",
							    items:[
	                               {
			                         xtype : 'displayfield',
			                         fieldLabel : '需求描述',
			                         hideLabel: true,
			                         name : 'need_describe',
			                         columnWidth : 1,
		                           }]
							 },{
								    xtype:"fieldset",
								    title:"更改说明",
								    autoHeight:true,
								    collapsible:true,
								    collapsed:true,
								    border:true,
								    bodyStyle:"border:11px solid #B5B8C8;padding:10px;margin-bottom:10px;display:block;",
								    layout:"column",
								    items:[
			                               {
					                         xtype : 'displayfield',
					                         fieldLabel : '更改说明',
					                         hideLabel: true,
					                         name : 'change_describe',
					                         columnWidth : 1,
					                         id:'change_describe'
				                           }]
								}]
				      }]
				  },
				  
				  
				  
				  
				  
				  
				  
				  {
				    xtype:"fieldset",
				    title:"策划人员提交策划方案",
				    autoHeight:true,
				    border:true,
				    collapsible:true,
				    collapsed:true,
				    bodyStyle:"border:11px solid #B5B8C8;padding:10px;margin-bottom:10px;display:block;",
				    layout:"column",
				    items:[{	
	 					     xtype : 'hidden',
	 					     name : 'chfa_f_name'
	 				      },{
	 					     xtype : 'hidden',
	 					     name : 'chfa_f_id',
	 				      },{
			                 columnWidth:0.4,
			                 layout:"form",
			                 border:false,
			                 items:[{
			                	    xtype : 'displayfield',
									name : 'chfa_f_nameLink',
									fieldLabel : '策划方案',
				 	 				labelAlign : 'right',	
				 		          }]
			              },{
				            columnWidth:0.4,
				            layout:"form",
				            border:false,
				            items:[{
			 	 				xtype : 'displayfield',
			 	 				fieldLabel : '确认签字',
			 	 				labelAlign : 'right',
			 	 				name : 'ap_name2',		 	 				
			 	 			}]
				       }]
				  },{
					    xtype:"fieldset",
					    title:"销售人员上传合同",
					    autoHeight:true,
					    collapsible:true,
					    collapsed:true,
					    border:true,
					    bodyStyle:"border:11px solid #B5B8C8;padding:10px;margin-bottom:10px;display:block;",
					    layout:"form",
				
					    items:[{
						    xtype:"fieldset",
						    title:"合同",
						    autoHeight:true,
						    collapsible:true,
						    collapsed:true,
						    border:true,
						    bodyStyle:"border:11px solid #B5B8C8;padding:10px;margin-bottom:10px;display:block;",
						    layout:"column",
						    columnWidth:1,
						    items:[{
			 					
			 					xtype : 'hidden',
			 					name : 'xs_f_name'
			 				}, {
			 					xtype : 'hidden',
			 					name : 'xs_f_id',
			 					
			 				},{
			                     columnWidth:0.4,
			                     layout:"form",
			                     border:false,
			                     items:[ {
			 	           	          xtype : 'displayfield',
							          name : 'xs_f_nameLink',
							          fieldLabel : '合同',	
							          hideLabel: true
		 	 			               }]
			                 },{
						            columnWidth:0.02,
						            layout:"form",
						            border:false,
						            items:[ {
					 	 				xtype : 'displayfield',
					 	 				fieldLabel : ' ',
					 	 				hideLabel: true
					 	 			}]
						     }]
						  }]
					  },
					  
					  
					  			  
	
					  
					  
					  
	
					  
					  
					  
					  {
						    xtype:"fieldset",
						    title:"执行主管提交活动流程",
						    collapsible:true,
						    collapsed:true,
						    autoHeight:true,
						    border:true,
						    bodyStyle:"border:11px solid #B5B8C8;padding:10px;margin-bottom:10px;display:block;",
						    layout:"column",
						    items:[{
			 					
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
						            columnWidth:0.3,
						            layout:"form",
						            border:false,
						            items:[{
					 	 	           	xtype : 'displayfield',
					 					name : 'chhd_f_nameLink',
					 					fieldLabel : '活动执行流程',	
					 	 			},{
					 	 	           	xtype : 'displayfield',
					 					name : 'chjw_f_nameLink',
					 					fieldLabel : '教委备案资料',
					 	 			}]
						        },{
						            columnWidth:0.02,
						            layout:"form",
						            border:false,
						            items:[ {
					 	 				xtype : 'displayfield',
					 	 				fieldLabel : ' ',
					 	 				hideLabel: true
					 	 			}]
						       },{
						            columnWidth:0.05,
						            layout:"form",
						            border:false,
						            items:[{
				 						xtype : 'button',
				 						action : 'upload',
				 						handler : function(button){
				 							
				 							var status = button.up('form').form.findField('status').getValue();
			 								if(status == 3)
			 								{	
			 								fileUpload(button,'chhd_f_id','chhd_f_name','chhd_f_nameLink');
			 								}
			 								else{
			 								Ext.Msg.alert('系统提示', '当前阶段不允许上传活动执行流程');
			 								}
				 						
				 						},
				 						hidden : (session.authority.indexOf('b260303') > -1) ? false : true,
				 					    
				 						text : '浏览'
				 					},{
				 						xtype : 'button',
				 						action : 'upload',
				 						handler : function(button){
				 							
				 						var status = button.up('form').form.findField('status').getValue();
				 						
				 						if(status==3){
				 						
				 						fileUpload(button,'chjw_f_id','chjw_f_name','chjw_f_nameLink');
				 						}
				 						else{
			 							Ext.Msg.alert('系统提示', '当前阶段不允许上传教委备案资料');
			 							}
				 						},
				 						hidden : (session.authority.indexOf('b260303') > -1) ? false : true,
				 						text : '浏览'
				 				   }]
						        },{
						            columnWidth:0.05,
						            layout:"form",
						            border:false,
						            items:[{
				 						xtype : 'button',
				 						handler : function(button){
				 							if(status==3){
				 							button.up('form').form.findField('chhd_f_id').setValue('');
				 							button.up('form').form.findField('chhd_f_name').setValue('');
				 							button.up('form').form.findField('chhd_f_nameLink').setValue('');
				 							}
				 							else{
				 						
				 							Ext.Msg.alert('系统提示','当前工单状态不能够进行文件删除');	
				 							}
				 							
				 							
				 							
				 						},
				 						hidden : (session.authority.indexOf('b260303') > -1) ? false : true,
				 						text : '删除'
				 					}, {
				 						xtype : 'button',
				 						handler : function(button){
				 							
				 							if(status==3){
				 							button.up('form').form.findField('chjw_f_id').setValue('');
				 							button.up('form').form.findField('chjw_f_name').setValue('');
				 							button.up('form').form.findField('chjw_f_nameLink').setValue('');
				 							}
				 							else{
				 								
				 							Ext.Msg.alert('系统提示','当前工单状态不能够进行文件删除');	
				 								
				 							}
				 						},
				 						hidden : (session.authority.indexOf('b260303') > -1) ? false : true,
				 						text : '删除'
				 					}]
						        },{
						            columnWidth:0.02,
						            layout:"form",
						            border:false,
						            items:[ {
					 	 				xtype : 'displayfield',
					 	 				fieldLabel : ' ',
					 	 				hideLabel: true
					 	 			}]
						       },{
						            columnWidth:0.3,
						            layout:"form",
						            border:false,
						            items:[{
					 					xtype : 'datefield',
					 					format : 'Y-m-d',
					 					name : 'confirm_start_date',
					 					fieldLabel : '确定开始时间',
					 					afterLabelTextTpl : required,
					 					emptyText : '必须填写',
					 					blankText : '此项为必填项',
					 			//		allowBlank : false,
					 			        maxLengthText: "最长为20个字符",
					 			        listeners: {
								        	select : function( field, value, eOpts){
								        		this.up('form').form.findField('confirm_end_date').setMinValue(value);
								        	}
								        }
					 				},{
					 					xtype : 'datefield',
					 					name : 'confirm_end_date',
					 					fieldLabel : '确定结束时间',
					 					format : 'Y-m-d',
					 					afterLabelTextTpl : required,
					 					emptyText : '必须填写',
					 					blankText : '此项为必填项',
					 			//		allowBlank : false,
					 			        maxLengthText: "最长为20个字符"
					 			      
					 				}]
						       },{
						            columnWidth:0.02,
						            layout:"form",
						            border:false,
						            items:[ {
					 	 				xtype : 'displayfield',
					 	 				fieldLabel : ' ',
					 	 				hideLabel: true
					 	 			}]
						       },{
						            columnWidth:0.2,
						            layout:"form",
						            border:false,
						            items:[{
					 	 	           	xtype : 'displayfield',
					 					name : 'ap_name3',
					 					fieldLabel : '确认函',
					 	 			},
					 	 			
					 	 			
					 	 			{
				                         xtype : 'button',
				                         text : '上传活动流程信息',
				                         align:'center',
				 	 	 				 action : 'submit2charger',
				 	 	 			     id:'submit2charger',
			                        }
					 	 			
					 	 			
					 	 			]
						       }]
						  },
						  
						  
											  
						  
						  {
							    xtype:"fieldset",
							    title:"执行主管指派执行人员",
							    autoHeight:true,
							    border:true,
							    collapsible:true,
							    collapsed:true,
							    bodyStyle:"border:11px solid #B5B8C8;padding:10px;margin-bottom:10px;display:block;",
							    layout:"column",
							    items:[{
						                 columnWidth:0.4,
						                 layout:"form",
						                 border:false,
						                 items:[{
							 	 				xtype : 'mycombo',
												name : 'executeId',
												fieldLabel : '指派执行人员',
												store : Ext.create('manage.store.activityexecute.Activityexecute',{
												autoLoad : {limit : 1000,start : 0}
											    }),
											    
											    
											    
											//	editable : false,
											    
												emptyText : '必须填写',
							 					blankText : '此项为必填项',
							 					
							 					
							 			//		allowBlank : false,
							 					
							 			        maxLengthText: "最长为20个字符"
								 	 		}]
						              },{
								            columnWidth:0.02,
								            layout:"form",
								            border:false,
								            items:[ {
							 	 				xtype : 'displayfield',
							 	 				fieldLabel : ' ',
							 	 				hideLabel: true
							 	 			}]
								     },{
							                 columnWidth:0.3,
							                 layout:"form",
							                 border:false,
							                 items:[{
							                         xtype : 'button',
							                         text : '派给执行人员',
							 	 	 				 action : 'submit2execute',
							 	 	 				 id :'submit2execute',
							 	 	 				 hidden : (session.authority.indexOf('b260303') > -1) ? false : true
						                        }]
							              }]
							  },{
								    xtype:"fieldset",
								    title:"执行人员执行活动",
								    autoHeight:true,
								    collapsible:true,
								    collapsed:true,
								    border:true,
								    bodyStyle:"border:11px solid #B5B8C8;padding:10px;margin-bottom:10px;display:block;",
								    layout:"column",
								    items:[{
					 					    xtype : 'hidden',
					 					    name : 'cdbg_f_name'
					 				       },{
					 					    xtype : 'hidden',
					 					     name : 'cdbg_f_id',				 					
					 				       },{							 					
							 					xtype : 'hidden',
							 					name : 'yjya_f_name'
							 			   },{
							 					xtype : 'hidden',
							 					name : 'yjya_f_id',							 					
							 			   },{							 					
							 					xtype : 'hidden',
							 					name : 'hdxz_f_name'
							 				},{
							 					xtype : 'hidden',
							 					name : 'hdxz_f_id',							 					
							 				},{							 					
							 					xtype : 'hidden',
							 					name : 'zxbz_f_name'
							 				},{
							 					xtype : 'hidden',
							 					name : 'zxbz_f_id',						 					
							 				},{							 					
							 					xtype : 'hidden',
							 					name : 'fkjg_f_name'
							 				},{
							 					xtype : 'hidden',
							 					name : 'fkjg_f_id',							 					
							 				},{
								            columnWidth:0.3,
								            layout:"form",
								            border:false,
								            items:[{
								 	           	xtype : 'displayfield',
												name : 'name2',
												fieldLabel : '活动名称',
								 	 		},{
								 	           	xtype : 'displayfield',
												name : 'saler_name2',
												fieldLabel : '销售负责人',
								 	 		},
								 	 		
								 	 		{
								 	           	xtype : 'displayfield',
												name : 'activitymanager',
												fieldLabel : '活动负责人',		
								 	 		},
								 	 		
								 	 		{
								 	           	xtype : 'displayfield',
												name : 'ae_name2',
												fieldLabel : '执行人员'		
								 	 		},{
								 	           	xtype : 'displayfield',
												name : 'final_start_date',
												fieldLabel : '最终开始时间',			
								 	 		}]
								       },{
								            columnWidth:0.3,
								            layout:"form",
								            border:false,
								            items:[{
								 	           	xtype : 'displayfield',
												name : 'person_number',
												fieldLabel : '活动人数',
								 	 		},{
								 	           	xtype : 'displayfield',
												name : 'final_execute_number',
												fieldLabel : '最终执行人数',
								 	 		},{
								 	           	xtype : 'displayfield',
												name : 'base_name',
												fieldLabel : '基地名称',
								 	 		},{
								 	           	xtype : 'displayfield',
												name : 'base_address',
												fieldLabel : '基地地址',	
								 	 		},{
								 	           	xtype : 'displayfield',
												name : 'final_end_date',
												fieldLabel : '最终结束时间',
								 	 		}]
								       },{
								            columnWidth:0.3,
								            layout:"form",
								            border:false,
								            items:[{
								 	           	xtype : 'displayfield',
												name : 'cdbg_f_nameLink',
												fieldLabel : '踩点报告',	
							 	 			},{
								 	           	xtype : 'displayfield',
												name : 'yjya_f_nameLink',
												fieldLabel : '应急预案'
							 	 			},{
								 	           	xtype : 'displayfield',
												name : 'hdxz_f_nameLink',
												fieldLabel : '活动须知',
							 	 			},{
								 	           	xtype : 'displayfield',
												name : 'zxbz_f_nameLink',
												fieldLabel : '执行步骤',							 	 			
							 	 			},{
								 	           	xtype : 'displayfield',
												name : 'fkjg_f_nameLink',
												fieldLabel : '反馈结果',	
							 	 			}]
								       }]
								  },{
				        xtype: 'hidden',
				        name: 'id'
				    },{
				        xtype: 'hidden',
				        name: 'type'
				    }]
		});
		me.callParent(arguments);
	},
	buttons : [{
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
				replyForm.findField(fname).setValue(f_name);
				replyForm.findField(fid).setValue(f_id);
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