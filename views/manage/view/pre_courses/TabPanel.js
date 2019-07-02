Ext.define('manage.view.pre_courses.TabPanel', {
	extend : 'Ext.tab.Panel',
	requires : ['manage.view.pre_courses.CoursesGrid'],
	alias : 'widget.pre_coursestabpanel',
	id: 'pre_coursestabpael',
	initComponent : function() {
		Ext.apply(this, {
			region : 'center',
			defaults : {
				autoScroll : true,
				bodyPadding : 10
			},
			activeTab : 0,
			border : false,
			// plain: true,
			items : [ {
				id : '1',
				title : '周一',
				items : [{xtype:'detail_coursesgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			},{
				id : '2',
				title : '周二',
				items : [{xtype:'detail_coursesgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			}, {
				id : '3',
				title : '周三',
				items : [{xtype:'detail_coursesgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			},{
				id : '4',
				title : '周四',
				items : [{xtype:'detail_coursesgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			}, {
				id : '5',
				title : '周五',
				items : [{xtype:'detail_coursesgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			},{
				id : '6',
				title : '周六',
				items : [{xtype:'detail_coursesgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			}, {
				id : '7',
				title : '周日',
				items : [{xtype:'detail_coursesgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			}
			],
			listeners:{'tabchange':function(){
				var grid = this.getActiveTab().items.items[0];
				var  pre_courses_id = this.up('form').form.findField('pre_courses_id').getValue();
				var params = {
		                week:this.getActiveTab().id,
		                pre_courses_id: pre_courses_id
		                };
	            var store = grid.getStore();
	            store.on("beforeload",
	            function() {
	                store.proxy.extraParams = params;
	            });
	         
	            store.load();
				
				}
			}
		});
		this.callParent(arguments);
	}
});
