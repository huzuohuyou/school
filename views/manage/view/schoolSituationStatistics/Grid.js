Ext.define('manage.view.schoolSituationStatistics.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.schoolSituationStatisticsgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.schoolSituationStatistics.SchoolSituationStatistics');
		Ext.apply(this, {
			store : store,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b240301') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'query',
				xtype : 'button',
				action : 'schoolSituationStatisticsexcel',
				text : '导出excel'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [
			{
				text : '学校名称',
				dataIndex : 'school_name',
				align:'center',
				flex : 2
			},
			{
				text : '开课周次',
				dataIndex : 'weeks',
				flex : 1
			},
			{
				text : '开设班级数量',
				dataIndex : 'classCount',
				flex : 1
			},
			{
				text : '涉及年级',
				dataIndex : 'stages',
				flex : 1,
			},
			{
				text : '开设课程种数',
				dataIndex : 'courseCount',
				flex : 1
			},
			{
				text : '参与课程人数',
				dataIndex : 'studentCount',
				flex : 1
			},
			{
				text : '学校地址',
				dataIndex : 'address',
				flex : 1
			},
			{
				text : '开课日期',
				dataIndex : 'start_date_first',
				flex : 1
			},
			{

				text : '结课日期',
				dataIndex : 'end_date_last',
				flex : 1
			},
			{

				text : '开课周数', 
				dataIndex : 'weekamount',
				flex : 1
			},
			{
				text : '学校联系人',
				dataIndex : 'linkman',
				flex : 1
			},
			{
				text : '联系人电话',
				dataIndex : 'telephone',
				flex : 1
			}
			]
			
		});
		this.callParent(arguments);
	}
});