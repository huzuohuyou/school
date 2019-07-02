Ext.define('manage.view.shedules.TabPanel', {
	extend : 'Ext.tab.Panel',
	requires : ['manage.view.shedules.ShedulesGrid','manage.view.shedules.ShedulesStatisticsGrid'],
	alias : 'widget.shedulestabpanel',
	id: 'shedulestabpael',
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
				title : '星期一',
				items : [{xtype:'detail_shedulesgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			},{
				id : '2',
				title : '星期二',
				items : [{xtype:'detail_shedulesgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			}, {
				id : '3',
				title : '星期三',
				items : [{xtype:'detail_shedulesgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			},{
				id : '4',
				title : '星期四',
				items : [{xtype:'detail_shedulesgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			}, {
				id : '5',
				title : '星期五',
				items : [{xtype:'detail_shedulesgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			},{
				id : '6',
				title : '星期六',
				items : [{xtype:'detail_shedulesgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			}, {
				id : '7',
				title : '星期日',
				items : [{xtype:'detail_shedulesgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			},
			{
				id : '8',
				title : '班级列表',
				items : [{xtype:'detail_shedulesstatisticsgrid'}],
				//autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			}],
			listeners:{'tabchange':function(){
				var grid = this.getActiveTab().items.items[0];
		
				var school_id = this.up('form').form.findField('school_id').getValue();
				var s_id = this.up('form').form.findField('s_id').getValue();
				var term = this.up('form').form.findField('term').getValue();
				var year = this.up('form').form.findField('year').getValue();
				var params = {
		                week:this.getActiveTab().id,   //获取星期参数
		                school_id:school_id,
		                term:term,
		                year:year
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
