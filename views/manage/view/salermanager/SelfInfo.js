Ext.define('manage.view.salermanager.SelfInfo', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.salermanagerselfinfo',
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

		},{
			xtype : 'displayfield',
			fieldLabel : '联系电话',
			name : 'telephone',
	         width: 400
		},{
			xtype : 'hidden',
			name : 'id'
		} ]
    }],
    buttons : [ {
		text : '修改',
		action : 'update'
	},{
		id : 'btnsalermanager',
		text : '刷新',
		action : 'refresh'
	} ]
});