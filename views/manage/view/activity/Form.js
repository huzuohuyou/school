Ext.define('manage.view.activity.Form', {
	xtype:"form",
	title:"Form",
	alias : 'widget.testform',
	requires : [ 'manage.view.ux.ComboBox' ,'Ext.form.Panel'],
	autoScroll:true,
	items:[{
	    xtype:"fieldset",
	    title:"执行进度",
	    autoHeight:true,
	    layout:"column",
	    items:[{
	        height:70,
	        border:false,
	        items:[{
	            columnWidth:0.2,
	            layout:"form",
	            border:false,
	            items:[{
	                xtype:"textfield",
	                fieldLabel:"当前状态",
	                labelAlign:"center",
	                name:"t1"
	              },{
	                xtype:"textfield",
	                fieldLabel:"指派执行人时间",
	                name:"textvalue",
	                labelAlign:"right"
	              }]
	          }]
	      },{
	        height:70,
	        border:false,
	        items:[{
	            columnWidth:0.2,
	            layout:"form",
	            border:false,
	            style:"padding-left:10px",
	            items:[{
	                xtype:"textfield",
	                fieldLabel:"提交工单日期",
	                labelAlign:"right",
	                name:"t1",
	                alignment:"right"
	              },{
	                xtype:"textfield",
	                fieldLabel:"流程上传时间",
	                name:"textvalue",
	                labelAlign:"right"
	              }]
	          }]
	      },{
	        height:70,
	        border:false,
	        items:[{
	            columnWidth:0.2,
	            layout:"form",
	            border:false,
	            style:"padding-left:10px",
	            items:[{
	                xtype:"textfield",
	                fieldLabel:"策划完成时间",
	                labelAlign:"right",
	                name:"t1",
	                alignment:"right"
	              },{
	                xtype:"textfield",
	                fieldLabel:"开始执行时间",
	                name:"textvalue",
	                labelAlign:"right"
	              }]
	          }]
	      },{
	        height:70,
	        border:false,
	        items:[{
	            columnWidth:0.2,
	            layout:"form",
	            border:false,
	            style:"padding-left:10px",
	            items:[{
	                xtype:"textfield",
	                fieldLabel:"合同上传时间",
	                labelAlign:"right",
	                name:"t1",
	                alignment:"right"
	              },{
	                xtype:"textfield",
	                fieldLabel:"执行结束时间",
	                name:"textvalue",
	                labelAlign:"right"
	              }]
	          }]
	      }]
	  },{
	    xtype:"fieldset",
	    title:"销售人员新建工单",
	    autoHeight:true,
	    layout:"column",
	    items:[{
	        height:180,
	        border:false,
	        items:[{
	            columnWidth:0.6,
	            layout:"form",
	            border:false,
	            items:[{
	                xtype:"textfield",
	                fieldLabel:"活动名称",
	                labelAlign:"center",
	                name:"t1"
	              },{
	                xtype:"textfield",
	                fieldLabel:"活动主题",
	                name:"textvalue",
	                labelAlign:"right"
	              },{
	                xtype:"textfield",
	                fieldLabel:"合同编号",
	                labelAlign:"center",
	                name:"t1"
	              },{
	                xtype:"textfield",
	                fieldLabel:"活动类别",
	                name:"textvalue",
	                labelAlign:"right"
	              },{
	                xtype:"combo",
	                fieldLabel:"学校名称",
	                labelAlign:"center",
	                name:"t1",
	                width:145
	              },{
	                xtype:"textfield",
	                fieldLabel:"学校地址",
	                name:"textvalue",
	                labelAlign:"right"
	              }]
	          }]
	      },{
	        height:180,
	        border:false,
	        items:[{
	            columnWidth:0.6,
	            layout:"form",
	            border:false,
	            style:"padding-left:10px",
	            items:[{
	                xtype:"textfield",
	                fieldLabel:"我方对接人",
	                labelAlign:"right",
	                name:"t1",
	                alignment:"right"
	              },{
	                xtype:"numberfield",
	                fieldLabel:"学生人数",
	                name:"textvalue",
	                labelAlign:"right"
	              },{
	                xtype:"textfield",
	                fieldLabel:"涵盖年级",
	                labelAlign:"right",
	                name:"t1",
	                alignment:"right"
	              },{
	                xtype:"numberfield",
	                fieldLabel:"随队老师人数",
	                name:"textvalue",
	                labelAlign:"right"
	              },{
	                xtype:"datefield",
	                fieldLabel:"预计开始时间",
	                name:"textvalue",
	                labelAlign:"right",
	                width:145
	              },{
	                xtype:"datefield",
	                fieldLabel:"预计结束时间",
	                name:"textvalue",
	                labelAlign:"right",
	                width:145
	              }]
	          }]
	      },{
	        height:180,
	        border:false,
	        items:[{
	            columnWidth:0.6,
	            layout:"form",
	            border:false,
	            style:"padding-left:10px",
	            items:[{
	                xtype:"combo",
	                fieldLabel:"活动类型",
	                labelAlign:"right",
	                name:"t1",
	                alignment:"right",
	                width:145
	              },{
	                xtype:"combo",
	                fieldLabel:"需求类型",
	                name:"textvalue",
	                labelAlign:"right",
	                width:145
	              },{
	                xtype:"combo",
	                fieldLabel:"活动地点",
	                labelAlign:"right",
	                name:"t1",
	                alignment:"right",
	                width:145
	              },{
	                xtype:"combo",
	                fieldLabel:"是否用车",
	                name:"textvalue",
	                labelAlign:"right",
	                width:145
	              },{
	                xtype:"combo",
	                fieldLabel:"指定策划人",
	                name:"textvalue",
	                labelAlign:"right",
	                width:145
	              }]
	          }]
	      },{
	        height:70,
	        border:false,
	        items:[{
	            columnWidth:0.6,
	            layout:"form",
	            border:false,
	            items:[{
	                xtype:"textarea",
	                fieldLabel:"活动类型",
	                labelAlign:"right",
	                name:"t1",
	                alignment:"right",
	                width:520
	              }]
	          }]
	      },{
	        height:70,
	        border:false,
	        style:"padding-left:50px",
	        items:[{
	            columnWidth:0.8,
	            layout:"form",
	            border:true,
	            width:100,
	            items:[{
	                xtype:"button",
	                fieldLabel:"保存",
	                labelAlign:"center",
	                name:"save",
	                width:80
	              },{
	                xtype:"button",
	                fieldLabel:"提交",
	                style:"padding-top:10px",
	                labelAlign:"right",
	                name:"save",
	                alignment:"right",
	                width:80
	              }]
	          }]
	      }]
	  },{
	    xtype:"fieldset",
	    title:"策划人员提交策划方案",
	    autoHeight:true,
	    layout:"column",
	    items:[{
	        height:50,
	        border:false,
	        items:[{
	            columnWidth:0.2,
	            layout:"form",
	            border:false,
	            items:[{
	                xtype:"textfield",
	                fieldLabel:"策划方案",
	                labelAlign:"center",
	                name:"t1"
	              }]
	          }]
	      },{
	        height:50,
	        border:false,
	        items:[{
	            columnWidth:0.2,
	            layout:"form",
	            border:false,
	            style:"padding-left:10px",
	            items:[{
	                xtype:"button",
	                fieldLabel:"浏览",
	                labelAlign:"right",
	                name:"t1",
	                alignment:"right"
	              }]
	          }]
	      },{
	        height:50,
	        border:false,
	        items:[{
	            columnWidth:0.2,
	            layout:"form",
	            border:false,
	            style:"padding-left:10px",
	            items:[{
	                xtype:"button",
	                fieldLabel:"删除",
	                labelAlign:"right",
	                name:"t1",
	                alignment:"right"
	              }]
	          }]
	      },{
	        height:35,
	        border:false,
	        items:[{
	            columnWidth:0.5,
	            layout:"form",
	            border:false,
	            style:"padding-left:40px",
	            items:[{
	                xtype:"textfield",
	                fieldLabel:"确认签字",
	                labelAlign:"right",
	                name:"t1",
	                alignment:"right"
	              }]
	          }]
	      },{
	        height:50,
	        border:false,
	        items:[{
	            columnWidth:0.5,
	            layout:"form",
	            border:false,
	            style:"padding-left:30px",
	            items:[{
	                xtype:"button",
	                fieldLabel:"策划方案提交销售人员",
	                labelAlign:"right",
	                name:"t1",
	                alignment:"right"
	              }]
	          }]
	      }]
	  },{
	    xtype:"fieldset",
	    title:"Legend",
	    autoHeight:true
	  },{
	    xtype:"fieldset",
	    title:"Legend",
	    autoHeight:true
	  }]
	});