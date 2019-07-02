Ext.define('manage.view.courseteacher.HomeworkForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.homeworkform',
	requires : [ 'manage.view.ux.UEditor','manage.view.ux.CheckComboBox'],
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout: {
        columns: 2,
        type: 'table'
    },
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [ {
		        xtype: 'datefield',
		        format : 'Y-m-d',
		        value : new Date(),
		        fieldLabel: '日期',
		        name: 'date',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
		    },{
		        xtype: 'checkcombo',
		        store: Ext.create('manage.store.courseteacher.Class'),
		        displayField: 'name',
		        valueField: 'id',
		        queryMode: 'local',
		        fieldLabel: '班级',
		        name: 'c_ids',
		        editable: false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
		    },{
				xtype : 'ueditor',
				fieldLabel : '作业内容',
				colspan : 2,
				width : 900,
				height : 400,
				name : 'content',
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'hidden',
				name : 'id'
			},{
				xtype : 'hidden',
				name : 't_id',
				value : session.id
			} ]
		});
		me.callParent(arguments);
	},
	buttons : [ {
		text : '确定',
		action : 'submit'
	}, {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});