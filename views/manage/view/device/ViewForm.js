Ext.define('manage.view.device.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.deviceviewform',
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [{
        xtype: 'fieldset',
        title: '设备信息',
        layout: {
            columns: 2,
            type: 'table'
        },
        items: [{
            xtype: 'displayfield',
            fieldLabel: '地点名称',
            width: 300,
            name: 'location'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '读卡器列表',
            width: 300,
            name: 'readers'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '进天线列表',
            width: 300,
            name: 'ins'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '出天线列表',
            width: 300,
            name: 'outs'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '类型',
            width: 300,
            name: 'type'
        }]
    }],
    buttons : [ {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});