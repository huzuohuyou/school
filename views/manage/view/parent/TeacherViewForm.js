Ext.define('manage.view.teacher.ViewForm', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.teacherviewform',
	layout : {
		columns : 2,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'displayfield',
				fieldLabel : '工号',
				width : 300,
				name : 'number'
			},{
				xtype : 'fieldcontainer',
				rowspan : 5,
				fieldLabel : '照片预览',
				items : [{
					xtype : 'box',
					id : 'browseImage',
					autoEl : {
						width : 100,
						height : 100,
						tag : 'img',
						// type : 'image',
						src : Ext.BLANK_IMAGE_URL,
						style : 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale);',
						complete : 'off',
						id : 'imageBrowse'
					}
				}]
			}, {
				xtype : 'displayfield',
				fieldLabel : '姓名',
				width : 300,
				name : 'name'
			}, {
				xtype: 'displayfield',
		        fieldLabel: '性别',
				width : 300,
		        name : 'sex'
			}, {
				xtype : 'displayfield',
				fieldLabel : '民族',
				width : 300,
				name : 'race'
			}, {
				xtype : 'displayfield',
				fieldLabel : '出生日期',
				width : 300,
				name : 'birthday'
			}, {
				xtype : 'displayfield',
				fieldLabel : '联系电话',
				width : 300,
				name : 'phone'
			}, {
				xtype : 'displayfield',
				fieldLabel : '政治面貌',
				name : 'party'
			}, {
				xtype : 'displayfield',
				fieldLabel : '所教科目',
				width : 300,
				name : 'course_name'
			}, {
				xtype: 'displayfield',
		        fieldLabel: '是否为班主任',
		        name : 'ischarge'
			}, {
				xtype : 'displayfield',
				colspan : 2,
				fieldLabel : '所教班级',
				name : 'c_names'
			}]
		});
		me.callParent(arguments);
	},
	buttons : [  {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});