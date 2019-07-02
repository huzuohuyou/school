Ext.define('manage.view.pupil.ScoreViewForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.pupilscoreviewform',
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout: {
        columns: 1,
        type: 'table'
    },
	border : false,
	items : [ {
		xtype : 'displayfield',
		name : 'total',
		fieldLabel : '总分'
	},{
		xtype : 'displayfield',
		name : 'totalrank',
		fieldLabel : '排名'
	},{
		xtype : 'displayfield',
		name : 'junfen',
		fieldLabel : '均分'
	},{
		xtype : 'panel',
		autoScroll : true,
		header : false,
		border : false,
		height :400,
		width : 900,
		name : 'content'
	}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ,{
		text : '刷新',
		action : 'refresh'
	} ]
});