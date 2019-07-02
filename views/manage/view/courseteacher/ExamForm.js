Ext.define('manage.view.courseteacher.ExamForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherexamform',
	requires : [ 'manage.view.ux.CheckComboBox','manage.view.ux.ComboBox'],
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
				xtype : 'textfield', // this is so we
				fieldLabel : '考试名称',
				labelAlign : 'right',
				name : 'name',
				colspan : 2,
				width : 600,
				menuDisabled : true,
				dataIndex : 'name'
			},{
				xtype : 'combobox',
				store : Ext.create('manage.store.courseteacher.Course',{
					autoLoad : {limit : -1,start : 0}
				}),
				displayField: 'name',
			    valueField: 'id',
				queryMode : 'local',
				//colspan : 2,
				width : 300,
				fieldLabel : '考试科目',
				labelAlign : 'right',
				name : 'course',
				editable : false,
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			},{
		        xtype: 'checkcombo',
		        store: Ext.create('manage.store.courseteacher.Class'),
		        displayField: 'name',
		        valueField: 'id',
		        queryMode: 'local',
		        fieldLabel: '班级',
		        width : 300,
		        labelAlign : 'right',
		        id : 'c_ids',
		        name : 'c_ids',
		        editable: false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
		    }, {
				xtype : 'datefield',
				format :  'Y-m-d H:i:s',
				fieldLabel : '考试时间',
				labelAlign : 'right',
				name : 'start_time',
				width : 300,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
		        listeners: {
		        	select : function( field, value, eOpts){
		        		this.up('form').form.findField('end_time').setMinValue(value);
		        	}
		        }
			}, {
				xtype : 'datefield',
				format : 'Y-m-d H:i:s',
				fieldLabel : '至',
				width : 300,
				labelAlign : 'right',
				name : 'end_time',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, {
				xtype : 'datefield',
				format : 'Y-m-d',
				fieldLabel : '上分截至日期',
				width : 300,
				labelAlign : 'right',
				name : 'edit_date',
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false
			}, {
				xtype : 'hidden',
				name : 'id'
			}, {
				xtype : 'hidden',
				name : 'ed_id'
			}, {
				xtype : 'hidden',
				name : 'type',
				value : 1
			}]
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