Ext.define('manage.view.student.StudentForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.pupilstudentform',
    region : 'center',
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [{
        xtype: 'fieldset',
        title: '个人信息',
        layout: {
            columns: 2,
            type: 'table'
        },
        items: [{
            xtype: 'displayfield',
            fieldLabel: '学号',
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
            fieldLabel: '联系电话',
            name: 'telephone',
            width: 300
        },
        {
            xtype: 'displayfield',
            fieldLabel: '所在学校',
            name: 's_name',
            width: 300
        },
        {
            xtype: 'displayfield',
            width: 300,
            fieldLabel: '年级',
            name: 'grad'
        },
        {
            xtype: 'displayfield',
            width: 300,
            fieldLabel: '班级',
            name: 'class'
        }]
    }],
    buttons : [ {
		text : '修改',
		action : 'update'
	},{
		text : '刷新',
		id : 'btnstudent',
		action : 'refresh'
	} ]
});