Ext.define('manage.view.jiaowu.Form', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.jiaowuform',
    requires: ['manage.view.ux.ComboBox'],
    initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items: [{
		        xtype: 'textfield',
		        fieldLabel: '用户名	',
		        name: 'loginname',
		        afterLabelTextTpl: required,
		        emptyText: '必须填写用户名',
		        vtype: 'checkname',
		        vtypeText: "该用户名已经存在！",
		        regex: new RegExp('^[a-zA-z][a-zA-Z0-9_]{4,15}$'),
		        regexText: '用户名由 5-16位的字母下划线和数字组成。不能以数字或下划线开头。',
		        blankText: '此项为必填项',
		        allowBlank: false
		    },
		    {
		        xtype: 'textfield',
		        fieldLabel: '姓名',
		        name: 'name',
		        regex: new RegExp('^[\u4e00-\u9fa5]{2,20}$'),
		        regexText: '必须由2-20汉字组成',
		        maxLength: 50,
		        maxLengthText: "最长为50个字符",
		        afterLabelTextTpl: required,
		        emptyText: '必须填写姓名',
		        blankText: '此项为必填项',
		        allowBlank: false
		    },
		    {
				xtype : 'textfield',
				fieldLabel : '手机号',
				regex : /^1(3|4|5|6|7|8|9)[0-9]{9}$/ ,
				regexText : '输入正确的电话号码',
				name : 'telephone',
				vtype: 'checkphone',
		        vtypeText: "该手机号已经存在！",
				maxLength : 11,
				maxLengthText : '最多输入11个字符',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			},
		    {
		        xtype: 'hidden',
		        name: 'id'
		    }, {
		        xtype: 'hidden',
		        name: 'role_id'
		    }]
		});
		me.callParent(arguments);
	},
    buttons: [{
        text: '确定',
        action: 'submit'
    },
    {
        text: '关闭',
        handler: function() {
            this.up('window').close();
        }
    }]
});