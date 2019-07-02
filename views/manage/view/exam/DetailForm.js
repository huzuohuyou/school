Ext.define('manage.view.exam.DetailForm', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree'],
	alias : 'widget.examdetailform',
	layout : {
		columns : 2,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'mycombo',
				store : Ext.create('manage.store.course.Course',{
					autoLoad : {limit : -1,start : 0}
				}),
				queryMode : 'local',
				colspan : 2,
				width : 600,
				fieldLabel : '考试科目',
				labelAlign : 'right',
				name : 'course',

				editable : false,
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'comboboxtree',
				store : Ext.create('manage.store.teacher.Class'),
				editable : false,
				multiCascade : false,
				multiSelect : true,
				colspan : 2,
				width : 600,
				fieldLabel : '参考班级',
				labelAlign : 'right',
				name : 'c_ids'
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
				name : 'e_id'
			}  ]
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