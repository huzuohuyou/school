Ext.define('manage.view.pupil.StudentForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.pupilstudentviewform',
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
            xtype: 'fieldcontainer',
            rowspan: 5,
            fieldLabel: '照片预览',
            items: [{
                xtype: 'box',
                id: 'browseImage',
                autoEl: {
                    width: 100,
                    height: 100,
                    tag: 'img',
                    // type : 'image',
                    src: Ext.BLANK_IMAGE_URL,
                    style: 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale);',
                    complete: 'off',
                    id: 'imageBrowse'
                }
            }]
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
            fieldLabel: '民族',
            width: 300,
            name: 'race'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '出生日期',
            width: 300,
            name: 'birthday'
        },
        {
            xtype: 'displayfield',
            colspan: 2,
            fieldLabel: '家庭地址',
            name: 'address',
            width: 300
        },
        {
            xtype: 'displayfield',
            fieldLabel: '父亲姓名',
            name: 'father_name',
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
            fieldLabel: '父亲工作单位',
            colspan: 2,
            name: 'father_company',
            width: 600
        },
        {
            xtype: 'displayfield',
            fieldLabel: '母亲姓名',
            name: 'mather_name',
            width: 300
        },
        {
            xtype: 'displayfield',
            fieldLabel: '母亲电话',
            name: 'mather_phone',
            width: 300
        },
        {
            xtype: 'displayfield',
            fieldLabel: '母亲工作单位',
            colspan: 2,
            name: 'mather_company',
            width: 600
        },
        {
            xtype: 'displayfield',
            width: 300,
            fieldLabel: '班级',
            name: 'c_name'
        }]
    }],
    buttons : [ {
		text : '刷新',
		action : 'refresh'
	} ]
});