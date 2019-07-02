Ext.define('manage.view.courseteacher.ScoreQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.teacherscorequeryform',
	items : [ {
		xtype : 'textfield',
		name : 's_number',
		labelAlign : 'right',
		fieldLabel : '学号'
	},{
		xtype : 'textfield',
		name : 's_name',
		labelAlign : 'right',
		fieldLabel : '姓名'
	},{
		xtype : 'hidden',//hidden
		id : 'ed_id',
		name : 'ed_id'
	}],
	setMyValue : function(value){
		Ext.getCmp('ed_id').setValue(value); 

	}
});