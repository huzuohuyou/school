Ext.define('manage.view.activitytype.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.activitytypequeryform',
	items : [{
		xtype : 'mycombo',
		name : 'p_id',
		store:[["研学活动","研学活动"],["综合实践","综合实践"],["其他活动","其他活动"]],
		labelAlign : 'right',
		fieldLabel : '一级类别'
	}]
});