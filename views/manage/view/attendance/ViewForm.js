Ext.define('manage.view.attendance.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.attendanceviewform',
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
            fieldLabel: '学号',
            width: 300,
            name: 's_number'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '班级',
            width: 300,
            name: 'class'
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