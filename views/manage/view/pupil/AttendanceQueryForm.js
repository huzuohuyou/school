Ext.define('manage.view.pupil.AttendanceQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.pupilattendancequeryform',
	items : [ {
		xtype : 'datefield',
		format : 'Y-m-d',
		name : 'time',
		labelAlign : 'right',
		fieldLabel : '日期',
		value:new Date() 
	},{
		xtype : 'combobox',
		name : 'typetime',
		store:[["07:00:00","07:00:00 到校"],["11:00:00","11:00:00 离校"],["13:00:00","13:00:00 到校"],["16:00:00","16:00:00 离校"],["17:00:00","17:00:00 到校"],["20:00:00","20:00:00 离校"]],
		labelAlign : 'right',
		fieldLabel : '考勤时间'
	},{
		xtype : 'combobox',
		name : 'states',
		store:[["","全部"],["1","迟到"],["2","早退"],["-1","旷课"],["0","正常"]],
		labelAlign : 'right',
		fieldLabel : '状态',
	}]
});