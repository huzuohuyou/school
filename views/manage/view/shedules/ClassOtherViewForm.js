/**
 * 点击“其他信息”按钮，弹出的界面
 */
Ext.define('manage.view.shedules.ClassOtherViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.classotherviewform',
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [{
        xtype: 'fieldset',
        title: '其他信息',
        layout: {
            columns: 1,
            type: 'table'
        },
        items: [{
            xtype: 'displayfield',
            fieldLabel: '课程类别',
            width: 300,
            name: 'type',
            renderer :courseTypeRender,
        },
        {
            xtype: 'displayfield',
            fieldLabel: '课程级别',
            width: 300,
            name: 'grade',
            renderer : coursegradeRender,
        },
        {
            xtype: 'displayfield',
            fieldLabel: '开课日期',
            width: 300,
            name: 'start_date'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '结课日期',
            width: 300,
            name: 'end_date'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '开课周数',
            width: 300,
            name: 'weekamount'
        }, {
            xtype: 'displayfield',
            fieldLabel: '授课教师电话',
            width: 300,
            name: 'phone'
        }]
    }],
    buttons : [ {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});