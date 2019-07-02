Ext.define('manage.view.student_charger.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.student_chargerviewform',
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [{
        xtype: 'fieldset',
        title: '查看学生',
        layout: {
            columns: 1,
            type: 'table'
        },
        items: [{
            xtype: 'displayfield',
            fieldLabel: '学生编号',
            width: 300,
            name: 'number'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '姓名',
            width: 300,
            name: 'name'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '性别',
            width: 300,
            name: 'sex'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '身份证号',
            width: 300,
            name: 'IDcard'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '所在学校',
            name: 'sc_name',
            width: 300
        },
        {
            xtype: 'displayfield',
            fieldLabel: '年级',
            colspan: 2,
            name: 'grad',
            width: 300
        },
        {
            xtype: 'displayfield',
            fieldLabel: '班级',
            name: 'class',
            width: 300
        },
        {
            xtype: 'displayfield',
            fieldLabel: '父亲电话',
            name: 'father_phone',
            width: 300
        },
        {
            xtype: 'displayfield',
            fieldLabel: '母亲电话',
            name: 'mother_phone',
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