Ext.define('manage.view.chargerSignStatistics.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.chargerSignStatisticsqueryform',
	items : [{
		xtype : 'mycombo',
		store : Ext.create('manage.store.schools.Schools',{
			autoLoad : {limit : 1000,start : 0}
		}),
		queryMode : 'local',
		fieldLabel : '学校名称',
		displayfield:'name',
		width:400,
		labelAlign : 'right',
		name : 's_id',
		editable : true,
	},]
});