Ext.define('manage.view.addSchool.TestForm', {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.testform',
	requires : [ 'manage.view.ux.ComboBox','manage.view.ux.UEditor' ],
//	bodyPadding : 10,
	header : false,
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
	height:600,
	
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items:[{
			    xtype:"fieldset",
			    title:"执行进度",
			    autoHeight:true,
			    collapsible:true,
			    border:true,
			    bodyStyle:"border:11px solid #B5B8C8;padding:10px;margin-bottom:10px;display:block;",
			    layout:"column",
			    items:[{
		            columnWidth:0.25,
		            layout:"form",
		            border:false,
		            items:[{
		                xtype:"textfield",
		                fieldLabel:"当前状态",
		                name:"t1"
		              },{
		                xtype:"textfield",
		                fieldLabel:"指派执行人时间",
		                name:"textvalue",
		              }]
		          },{
		              columnWidth:0.25,
		              layout:"form",
		              border:false,
		              style:"padding-left:10px",
		              items:[{
		                  xtype:"textfield",
		                  fieldLabel:"提交工单日期",
		                  name:"t1",
		                  alignment:"right"
		                },{
		                  xtype:"textfield",
		                  fieldLabel:"流程上传时间",
		                  name:"textvalue",
		                
		                }]
		            },{
		                columnWidth:0.25,
		                layout:"form",
		                border:false,
		                style:"padding-left:10px",
		                items:[{
		                    xtype:"textfield",
		                    fieldLabel:"策划完成时间",
		                    name:"t1",
		                  },{
		                    xtype:"textfield",
		                    fieldLabel:"开始执行时间",
		                    name:"textvalue",
		                    
		                  }]
		              },{
		                  columnWidth:0.25,
		                  layout:"form",
		                  border:false,
		                  style:"padding-left:10px",
		                  items:[{
		                      xtype:"textfield",
		                      fieldLabel:"流程上传时间",
		                      name:"t1",
		                    },{
		                      xtype:"textfield",
		                      fieldLabel:"终止/暂停时间",
		                      name:"textvalue",
		                    }]
		                }]
			  },{
			    xtype:"fieldset",
			    title:"销售人员新建工单",
			    autoHeight:true,
			    collapsible:true,
			    layout:"column",
			    items:[{
			        columnWidth:0.25,
			        layout:"form",
			        height:160,
			        border:false,
			        items:[{
		                xtype:"textfield",
		                fieldLabel:"活动名称",
		                name:"t1"
		              },{
		                xtype:"textfield",
		                fieldLabel:"活动主题",
		                name:"textvalue",
		              },{
			             xtype:"textfield",
			             fieldLabel:"合同编号",
			             name:"t1"
			          },{
			             xtype:"textfield",
			             fieldLabel:"活动类别",
			             name:"textvalue",
			          },{
				         xtype:"textfield",
				         fieldLabel:"学校名称",
				         name:"t1"
				      },{
				         xtype:"textfield",
				         fieldLabel:"学校地址",
				         name:"textvalue",
				       }]
			      },{
			         columnWidth:0.25,
			         layout:"form",
			         border:false,
			         style:"padding-left:10px",
			         items:[{
			             xtype:"textfield",
			             fieldLabel:"我方对接人",
			             name:"t1",
			             alignment:"right"
			          },{
			             xtype:"numberfield",
			             fieldLabel:"学生人数",
			             name:"textvalue",
			          },{
			             xtype:"textfield",
			             fieldLabel:"涵盖年级",
			             name:"t1",
			          },{
			             xtype:"numberfield",
			             fieldLabel:"随队老师人数",
			             name:"textvalue",
			          },{
			             xtype:"datefield",
			             fieldLabel:"预计开始时间",
			             name:"textvalue",
			             width:145
			          },{
			             xtype:"datefield",
			             fieldLabel:"预计结束时间",
			             name:"textvalue",
			             width:145
			              }]
			      },{
			         columnWidth:0.25,
			         layout:"form",
			         border:false,
			         style:"padding-left:10px",
			         items:[{
			             xtype:"combo",
			             fieldLabel:"活动类型",
			             name:"t1",
			             width:145
			          },{
			             xtype:"combo",
			             fieldLabel:"需求类型",
			             name:"textvalue",
			             width:145
			          },{
			             xtype:"combo",
			             fieldLabel:"活动地点", 
			             name:"t1",
			             width:145
			          },{
			             xtype:"combo",
			             fieldLabel:"是否用车",
			             name:"textvalue",
			             width:145
			          },{
			             xtype:"combo",
			             fieldLabel:"指定策划人",
			             name:"textvalue",
			             width:145
			              }]
			          },{
			              height:80,
			              border:false,
			              columnWidth:0.9,
			              layout:"form",
			              border:false,
			              xtype:"textarea",
			              fieldLabel:"活动类型",
			              name:"t1",
			              width:400
			            },
			            {
			              columnWidth:0.2,
			              xtype:"button",
			              fieldLabel:"保存",
			              text:"保存",
			              name:"save",
			              style:"margin-left:60px;margin-top:10px",
			            }, {
			              columnWidth:0.2,
			              xtype:"button",
			              fieldLabel:"保存",
			              text:"提交",
			              name:"save",
			              style:"margin-left:60px;margin-top:10px",
			            }
			              ]
			  },{
			    xtype:"fieldset",
			    title:"策划人员提交策划方案",
			    collapsible:true,
			    autoHeight:true,
			    layout:"column",
			    items:[{
			        columnWidth:0.4,
			        layout:"form",
			        border:false,
			        items:[{
		                xtype:"textfield",
		                fieldLabel:"策划方案",
		                name:"t1"
		              }]
			      },{
				        columnWidth:0.05,
				        layout:"form",
				        border:false,
				        items:[{
			                xtype:"button",
			                fieldLabel:"浏览",
			                text:'浏览',
			                name:"t1"
			        }]
				  },{
				        columnWidth:0.05,
				        layout:"form",
				        border:false,
				        items:[{
			                xtype:"button",
			                fieldLabel:"浏览",
			                text:'删除',
			                name:"t1"
			        }]
				  },{
			            columnWidth:0.3,
			            layout:"form",
			            border:false,
			          //  style:"padding-left:40px",
			            items:[{
			                xtype:"textfield",
			                fieldLabel:"确认签字",
			                labelAlign:"right",
			                name:"t1",
			                alignment:"right"
			              }]
			          }]
			  }]
		});
		me.callParent(arguments);
	},
	buttons : [ {
		text : '确定',
		action : 'submit'
	}, {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});