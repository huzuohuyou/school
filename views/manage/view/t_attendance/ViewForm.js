Ext.define('manage.view.t_attendance.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.t_attendanceviewform',
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [{
        xtype: 'fieldset',
        title: '查看考勤信息',
        layout: {
            columns: 2,
            type: 'table'
        },
        items: [{
            xtype: 'displayfield',
            fieldLabel: '工号',
            width: 300,
            name: 't_number'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '考勤时间',
            width: 300,
            name: 'typetime'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '记录时间',
            width: 300,
            name: 'time'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '状态',
            renderer : attendancestateRender,
            width: 300,
            name: 'states'
        },]
    }],
    buttons : [ {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	}  ]
});