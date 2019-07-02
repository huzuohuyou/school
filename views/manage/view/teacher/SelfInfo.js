Ext.define('manage.view.teacher.SelfInfo', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.teacherselfinfo',
    region : 'center',
    layout: {
        type: 'border',
        width: 500,
        height: 700,
    },
    items: [{
        xtype: 'panel',
        region: 'west',
        title: '个人信息',
        collapsible: true,
        split: true,  
        layout: {
            columns: 1,
            type: 'table'
        },
        items : [ {
			xtype: 'displayfield',
            fieldLabel: '教师编号',
            labelStyle:'text-align:center;background-color: #DFE9F6;border-color: #DFE9F6;',
            width: 400,
            name: 'number'
			
		},{
			xtype : 'displayfield',
			fieldLabel : '姓名',
			labelStyle:'text-align:center;background-color: #DFE9F6;border-color: #DFE9F6;',
			width: 400,
			name : 'name'

		}, {
			xtype: 'displayfield',
            fieldLabel: '性别',
            labelStyle:'text-align:center;background-color: #DFE9F6;border-color: #DFE9F6;',
            width: 400,
            name: 'sex'
//	        afterLabelTextTpl: required,
//	        blankText: '此项为必填项',
//	        allowBlank: false
		},{
			xtype : 'displayfield',
			fieldLabel : '联系电话',
			labelStyle:'text-align:center;background-color: #DFE9F6;border-color: #DFE9F6;',
			name : 'phone',
	         width: 400
//	        afterLabelTextTpl: required,
//	        blankText: '此项为必填项',
//	        allowBlank: false
		},{
			xtype : 'displayfield',
			fieldLabel : '邮箱',
			labelStyle:'text-align:center;background-color: #DFE9F6;border-color: #DFE9F6;',
			name : 'emailbox',
			width : 400
		},{
			xtype : 'displayfield',
			fieldLabel : '身份证号',
			labelStyle:'text-align:center;background-color: #DFE9F6;border-color: #DFE9F6;',
			name : 'IDcard',
			width : 400
		},
		{
			xtype : 'displayfield',
			fieldLabel : '开户行',
			labelStyle:'text-align:center;background-color: #DFE9F6;border-color: #DFE9F6;',
			name : 'banksite',
			width : 400
		},
		{
			xtype : 'displayfield',
			fieldLabel : '银行卡号',
			labelStyle:'text-align:center;background-color: #DFE9F6;border-color: #DFE9F6;',
			name : 'bankcard',
			width : 400
		},
		{
			xtype : 'displayfield',
			fieldLabel : '微信号',
			labelStyle:'text-align:center;background-color: #DFE9F6;border-color: #DFE9F6;',
			name : 'weixin',
			width : 400
		}, {
			xtype : 'displayfield',
			fieldLabel : '地址',
			labelStyle:'text-align:center;background-color: #DFE9F6;border-color: #DFE9F6;',
			width : 300,
			name : 'address'
		}, {
			xtype: 'displayfield',
	        fieldLabel: '上课时间',
	        labelStyle:'text-align:center;background-color: #DFE9F6;border-color: #DFE9F6;',
			width : 400,
	        name : 'worktime'
		}, {
			xtype: 'displayfield',
	        fieldLabel: '所属机构',
	        labelStyle:'text-align:center;background-color: #DFE9F6;border-color: #DFE9F6;',
			width : 400,
	        name : 'agency'
		},,{
			xtype : 'hidden',
			name : 'id'
		} ]
    },
    {
        xtype: 'panel',
        region: 'center',
        title: '教学信息',
        layout: {
            columns: 1,
            type: 'table'
        },
        items : [  {
			xtype : 'displayfield',
			fieldLabel : '所教科目',
			labelStyle:'text-align:center;background-color: #DFE9F6;border-color: #DFE9F6;',
			width : 400,
			name : 'courses_name'
		},{
			xtype : 'displayfield',
			fieldLabel : '可授课学校',
			labelStyle:'text-align:center;background-color: #DFE9F6;border-color: #DFE9F6;',
			width : 400,
			name : 'schools_name'
		},{
			xtype : 'hidden',
			name : 'id'
		} ]
    }],
    
    buttons : [ {
		text : '修改',
		action : 'update'
	},{
		id : 'btnteacher',
		text : '刷新',
		action : 'refresh'
	} ]
});