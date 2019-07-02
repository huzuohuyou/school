Ext.define('manage.view.activityplan.SelfInfo', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.activityplanselfinfo',
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
            columns: 1,
            type: 'table'
        },
        items : [ {
			xtype: 'displayfield',
            fieldLabel: '员工编号',
            width: 400,
            name: 'number'
			
		},{
			xtype : 'displayfield',
			fieldLabel : '姓名',
			width: 400,
			name : 'name'

		}, {
			xtype: 'displayfield',
            fieldLabel: '性别',
            width: 400,
            name: 'sex'
//	        afterLabelTextTpl: required,
//	        blankText: '此项为必填项',
//	        allowBlank: false
		},{
			xtype : 'displayfield',
			fieldLabel : '联系电话',
			name : 'phone',
	         width: 400
//	        afterLabelTextTpl: required,
//	        blankText: '此项为必填项',
//	        allowBlank: false
		},{
			xtype : 'displayfield',
			fieldLabel : '邮箱',
			name : 'email',
			width : 400
		},
		{
			xtype : 'displayfield',
			fieldLabel : '微信号',
			name : 'weixin',
			width : 400
		}, {
			xtype : 'displayfield',
			fieldLabel : '地址',
			width : 300,
			name : 'address'
		},{
			xtype : 'hidden',
			name : 'id'
		} ]
    }],
    buttons : [ {
		text : '修改',
		action : 'update'
	},{
		id : 'btnactivityplan',
		text : '刷新',
		action : 'refresh'
	} ]
});