Ext.define('manage.view.pupil.ScoreQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.pupilscorequeryform',
	items : [ {
		xtype : 'textfield',
		name : 'c_name',
		labelAlign : 'right',
		fieldLabel : '科目'
	},{
		xtype : 'hidden',
		name : 'e_id'
	}]
});