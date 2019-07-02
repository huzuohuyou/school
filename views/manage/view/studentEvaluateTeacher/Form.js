Ext.define('manage.view.studentEvaluateTeacher.Form', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree',
			'manage.view.ux.PicField' ],
	alias : 'widget.studentEvaluateTeacherform',
	width:700,
	height:500,
	autoScroll : true,
	layout : {
		columns : 1,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [{
				xtype: 'radio',
		        fieldLabel: '1.仪表端庄，言传身教，具有爱心，师德高尚',
		        labelWidth:500,
		        name:'e_yibiao',
		        inputValue:'10',
		        boxLabel: '优',
				labelAlign : 'top',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype: 'radio',
		        name:'e_yibiao',
		        inputValue:'6',
		        boxLabel: '良'
			}, 
			{
				xtype: 'radio',
		        name:'e_yibiao',
		        inputValue:'4',
		        boxLabel: '中'
			},
			{
				xtype: 'radio',
		        name:'e_yibiao',
		        inputValue:'3',
		        boxLabel: '合格'
			},
			{
				xtype: 'radio',
		        name:'e_yibiao',
		        inputValue:'2',
		        boxLabel: '差'
			}, {
				xtype: 'radio',
		        fieldLabel: '2.教风严谨，严于律己，尽心尽职，循循善诱',
		        labelWidth:500,
		        name:'e_jiaofeng',
		        inputValue:'10',
		        boxLabel: '优',
				labelAlign : 'top',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype: 'radio',
		        name:'e_jiaofeng',
		        inputValue:'6',
		        boxLabel: '良'
			}, 
			{
				xtype: 'radio',
		        name:'e_jiaofeng',
		        inputValue:'4',
		        boxLabel: '中'
			},
			{
				xtype: 'radio',
		        name:'e_jiaofeng',
		        inputValue:'3',
		        boxLabel: '合格'
			},
			{
				xtype: 'radio',
		        name:'e_jiaofeng',
		        inputValue:'2',
		        boxLabel: '差'
			},  {
				xtype: 'radio',
		        fieldLabel: '3.备课认真，讲课熟练，教态自然，语言准确，条理清楚，层次分明，重点突出，娓娓动听；',
		        labelWidth:500,
		        name:'e_beike',
		        inputValue:'10',
		        boxLabel: '优',
				labelAlign : 'top',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype: 'radio',
		        name:'e_beike',
		        inputValue:'6',
		        boxLabel: '良'
			}, 
			{
				xtype: 'radio',
		        name:'e_beike',
		        inputValue:'4',
		        boxLabel: '中'
			},
			{
				xtype: 'radio',
		        name:'e_beike',
		        inputValue:'3',
		        boxLabel: '合格'
			},
			{
				xtype: 'radio',
		        name:'e_beike',
		        inputValue:'2',
		        boxLabel: '差'
			}, {
				xtype: 'radio',
		        fieldLabel: '4.重视启发，思维活跃，方法多样，手段直观，效果优良；',
		        labelWidth:500,
		        name:'e_qifa',
		        inputValue:'10',
		        boxLabel: '优',
				labelAlign : 'top',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype: 'radio',
		        name:'e_qifa',
		        inputValue:'6',
		        boxLabel: '良'
			}, 
			{
				xtype: 'radio',
		        name:'e_qifa',
		        inputValue:'4',
		        boxLabel: '中'
			},
			{
				xtype: 'radio',
		        name:'e_qifa',
		        inputValue:'3',
		        boxLabel: '合格'
			},
			{
				xtype: 'radio',
		        name:'e_qifa',
		        inputValue:'2',
		        boxLabel: '差'
			}, {
				xtype: 'radio',
		        fieldLabel: '5.板书工整，准确规范，布局合理，有助于笔记、记忆和复习：',
		        labelWidth:500,
		        name:'e_banshu',
		        inputValue:'10',
		        boxLabel: '优',
				labelAlign : 'top',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype: 'radio',
		        name:'e_banshu',
		        inputValue:'6',
		        boxLabel: '良'
			}, 
			{
				xtype: 'radio',
		        name:'e_banshu',
		        inputValue:'4',
		        boxLabel: '中'
			},
			{
				xtype: 'radio',
		        name:'e_banshu',
		        inputValue:'3',
		        boxLabel: '合格'
			},
			{
				xtype: 'radio',
		        name:'e_banshu',
		        inputValue:'2',
		        boxLabel: '差'
			},{
				xtype: 'radio',
		        fieldLabel: '6.教学技能熟练、全面。',
		        labelWidth:500,
		        name:'e_jineng',
		        inputValue:'10',
		        boxLabel: '优',
				labelAlign : 'top',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype: 'radio',
		        name:'e_jineng',
		        inputValue:'6',
		        boxLabel: '良'
			}, 
			{
				xtype: 'radio',
		        name:'e_jineng',
		        inputValue:'4',
		        boxLabel: '中'
			},
			{
				xtype: 'radio',
		        name:'e_jineng',
		        inputValue:'3',
		        boxLabel: '合格'
			},
			{
				xtype: 'radio',
		        name:'e_jineng',
		        inputValue:'2',
		        boxLabel: '差'
			},{
				xtype: 'radio',
		        fieldLabel: '7.师生关系民主、平等、和谐、合作；	',
		        labelWidth:500,
		        name:'e_guanxi',
		        inputValue:'10',
		        boxLabel: '优',
				labelAlign : 'top',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype: 'radio',
		        name:'e_guanxi',
		        inputValue:'6',
		        boxLabel: '良'
			}, 
			{
				xtype: 'radio',
		        name:'e_guanxi',
		        inputValue:'4',
		        boxLabel: '中'
			},
			{
				xtype: 'radio',
		        name:'e_guanxi',
		        inputValue:'3',
		        boxLabel: '合格'
			},
			{
				xtype: 'radio',
		        name:'e_guanxi',
		        inputValue:'2',
		        boxLabel: '差'
			},{
				xtype: 'radio',
		        fieldLabel: '8.课堂学习气氛热烈活跃，学生学习积极性高；',
		        labelWidth:500,
		        name:'e_qifen',
		        inputValue:'10',
		        boxLabel: '优',
				labelAlign : 'top',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype: 'radio',
		        name:'e_qifen',
		        inputValue:'6',
		        boxLabel: '良'
			}, 
			{
				xtype: 'radio',
		        name:'e_qifen',
		        inputValue:'4',
		        boxLabel: '中'
			},
			{
				xtype: 'radio',
		        name:'e_qifen',
		        inputValue:'3',
		        boxLabel: '合格'
			},
			{
				xtype: 'radio',
		        name:'e_qifen',
		        inputValue:'2',
		        boxLabel: '差'
			},{
				xtype: 'radio',
		        fieldLabel: '9.课堂管理严格，责任心强，纪律良好；',
		        labelWidth:500,
		        name:'e_guanli',
		        inputValue:'10',
		        boxLabel: '优',
				labelAlign : 'top',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype: 'radio',
		        name:'e_guanli',
		        inputValue:'6',
		        boxLabel: '良'
			}, 
			{
				xtype: 'radio',
		        name:'e_guanli',
		        inputValue:'4',
		        boxLabel: '中'
			},
			{
				xtype: 'radio',
		        name:'e_guanli',
		        inputValue:'3',
		        boxLabel: '合格'
			},
			{
				xtype: 'radio',
		        name:'e_guanli',
		        inputValue:'2',
		        boxLabel: '差'
			},{
				xtype: 'radio',
		        fieldLabel: '10.教学辅导，一视同仁，顾及全体，照顾个别；',
		        labelWidth:500,
		        name:'e_fudao',
		        inputValue:'10',
		        boxLabel: '优',
				labelAlign : 'top',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype: 'radio',
		        name:'e_fudao',
		        inputValue:'6',
		        boxLabel: '良'
			}, 
			{
				xtype: 'radio',
		        name:'e_fudao',
		        inputValue:'4',
		        boxLabel: '中'
			},
			{
				xtype: 'radio',
		        name:'e_fudao',
		        inputValue:'3',
		        boxLabel: '合格'
			},
			{
				xtype: 'radio',
		        name:'e_fudao',
		        inputValue:'2',
		        boxLabel: '差'
			},{
				xtype: 'radio',
		        fieldLabel: '11.辅导及时、耐心、细致；',
		        labelWidth:500,
		        name:'e_naixin',
		        inputValue:'10',
		        boxLabel: '优',
				labelAlign : 'top',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype: 'radio',
		        name:'e_naixin',
		        inputValue:'6',
		        boxLabel: '良'
			}, 
			{
				xtype: 'radio',
		        name:'e_naixin',
		        inputValue:'4',
		        boxLabel: '中'
			},
			{
				xtype: 'radio',
		        name:'e_naixin',
		        inputValue:'3',
		        boxLabel: '合格'
			},
			{
				xtype: 'radio',
		        name:'e_naixin',
		        inputValue:'2',
		        boxLabel: '差'
			},{
				xtype: 'radio',
		        fieldLabel: '12.任务布置，任务量适中，难易适当；',
		        labelWidth:500,
		        name:'e_renwu',
		        inputValue:'10',
		        boxLabel: '优',
				labelAlign : 'top',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype: 'radio',
		        name:'e_renwu',
		        inputValue:'6',
		        boxLabel: '良'
			}, 
			{
				xtype: 'radio',
		        name:'e_renwu',
		        inputValue:'4',
		        boxLabel: '中'
			},
			{
				xtype: 'radio',
		        name:'e_renwu',
		        inputValue:'3',
		        boxLabel: '合格'
			},
			{
				xtype: 'radio',
		        name:'e_renwu',
		        inputValue:'2',
		        boxLabel: '差'
			},{
				xtype: 'radio',
		        fieldLabel: '13.批改、讲评及时，评语、评讲认真。',
		        labelWidth:500,
		        name:'e_pigai',
		        inputValue:'10',
		        boxLabel: '优',
				labelAlign : 'top',
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},{
				xtype: 'radio',
		        name:'e_pigai',
		        inputValue:'6',
		        boxLabel: '良'
			}, 
			{
				xtype: 'radio',
		        name:'e_pigai',
		        inputValue:'4',
		        boxLabel: '中'
			},
			{
				xtype: 'radio',
		        name:'e_pigai',
		        inputValue:'3',
		        boxLabel: '合格'
			},
			{
				xtype: 'radio',
		        name:'e_pigai',
		        inputValue:'2',
		        boxLabel: '差'
			},{
				xtype : 'textarea',
				fieldLabel : '你对老师的建议',
				labelAlign : 'top',
				name : 'e_jianyi',
				width : 500,
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			}, {
				xtype : 'textarea',
				fieldLabel : '你期望中的老师',
				labelAlign : 'top',
				name : 'e_qiwang',
				width : 500,
				editable : false,
		        afterLabelTextTpl: required,
		        blankText: '此项为必填项',
		        allowBlank: false,
			},
			{
				xtype : 'hidden',
				name : 'id'
			},{
				xtype : 'hidden',
				name : 't_id'
			},
			{
				xtype : 'hidden',
				name : 'ssd_id'
			},
			{
				xtype : 'hidden',
				name : 'c_id'
			}
			]
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