Ext.define('manage.view.teacherAttendanceStatistics.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherAttendanceStatisticsform',
	requires : [ 'manage.view.ux.ComboBox' ],
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout : {
		columns : 1,
		type : 'table'
	},
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [{
				xtype : 'mycombo',
				fieldLabel : '请选择年份',
				labelAlign : 'right',
				emptyText : '请选择年份',
				name : 'year',
				width : 400,
				store:[["2018","2018"],["2019","2019"],["2020","2020"],["2021","2021"],["2022","2022"],["2023","2023"],["2024","2024"],["2025","2025"]],
				editable : false,
				afterLabelTextTpl: required,
			    blankText: '此项为必填项',
			    allowBlank: false
			},	        
			{
				xtype : 'mycombo',
				fieldLabel : '请选择月份',
				labelAlign : 'right',
				emptyText : '请选择月份',
				name : 'month',
				width : 400,
				store:[["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"]],
				editable : false,
				afterLabelTextTpl: required,
			    blankText: '此项为必填项',
			    allowBlank: false
			},{
				xtype : 'hidden',
				name : 'id'
			} ]
		});
		me.callParent(arguments);
	},
	buttons : [ {
		text : '确定',
		action : 'submit'
	}, {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});