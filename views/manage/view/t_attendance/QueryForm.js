Ext.define('manage.view.t_attendance.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.t_attendancequeryform',
	requires : [ 'manage.view.ux.ComboBox'],
	items : [ {
		xtype : 'textfield',
		name : 't_number',
		labelAlign : 'right',
		fieldLabel : '工号'
	},{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '姓名'
	},{
		xtype : 'datefield',
		format : 'Y-m-d',
		name : 'time',
		labelAlign : 'right',
		value : new Date(),
		fieldLabel : '日期'
		
	},{
		xtype : 'combobox',//combobox
		name : 'typetime',
		store:[["07:00:00","07:00:00 到校"],["11:00:00","11:00:00 离校"],["13:00:00","13:00:00 到校"],["16:00:00","16:00:00 离校"],["17:00:00","17:00:00 到校"],["20:00:00","20:00:00 离校"]],
              //Ext.create('manage.store.attendance.AttendanceTime'),//		
		displayField: 'name',
        valueField: 'id', 
        queryMode: 'local',
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