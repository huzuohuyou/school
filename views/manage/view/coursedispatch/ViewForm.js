Ext.define('manage.view.coursedispatch.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.coursedispatchviewform',
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [{
        xtype: 'fieldset',
        title: '查看串课申请',
        layout: {
            columns: 1,
            type: 'table'
        },
        items: [{
            xtype: 'displayfield',
            fieldLabel: '班级名称',
            width: 300,
            name: 's_name'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '串课类型',
            width: 300,
            name: 'type',
            renderer : dispatchTypeRender,
        },
        {
            xtype: 'displayfield',
            fieldLabel: '代课教师',
            width: 300,
            name: 'tt_name'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '串课日期',
            width: 300,
            name: 'time'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '申请日期',
            name: 'writetime',
            width: 300
        },
        {
            xtype: 'displayfield',
            fieldLabel: '串课原因',
            name: 'reason',
            width: 300
        }
      
       ]
    }],
    buttons : [ {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	}  ]
});