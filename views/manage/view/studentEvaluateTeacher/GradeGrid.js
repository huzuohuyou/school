Ext.define('manage.view.studentEvaluateTeacher.GradeGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.gradegrid',
	initComponent : function() {
		var store = Ext.create('manage.store.studentEvaluateTeacher.EvaluateGrade');
		Ext.apply(this, {
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '1.仪表端庄，言传身教，具有爱心，师德高尚',
				dataIndex : 'e_yibiao',
				flex : 1
			},{
				text : '2.教风严谨，严于律己，尽心尽职，循循善诱',
				dataIndex : 'e_jiaofeng',
				flex : 1
			},
			{
				text : '3.备课认真，讲课熟练，教态自然，语言准确，条理清楚，层次分明，重点突出，娓娓动听',
				dataIndex : 'e_beike',
				flex : 1
			},
			{
				text : '4.重视启发，思维活跃，方法多样，手段直观，效果优良',
				dataIndex : 'e_qifa',
				flex : 1
			},
			{
				text : '5.板书工整，准确规范，布局合理，有助于笔记、记忆和复习',
				dataIndex : 'e_banshu',
				flex : 1
			},
			{
				text : '6.教学技能熟练、全面',
				dataIndex : 'e_jineng',
				flex : 1
			},
			{
				text : '7.师生关系民主、平等、和谐、合作；',
				dataIndex : 'e_guanxi',
				flex : 1
			},
			{
				text : '8.课堂学习气氛热烈活跃，学生学习积极性高',
				dataIndex : 'e_qifen',
				flex : 1
			},
			{
				text : '9.课堂管理严格，责任心强，纪律良好',
				dataIndex : 'e_guanli',
				flex : 1
			},
			{
				text : '10.教学辅导，一视同仁，顾及全体，照顾个别',
				dataIndex : 'e_fudao',
				flex : 1
			},
			{
				text : '11.辅导及时、耐心、细致',
				dataIndex : 'e_naixin',
				flex : 1
			},
			{
				text : '12.任务布置，任务量适中，难易适当',
				dataIndex : 'e_renwu',
				flex : 1
			},
			{
				text : '13.批改、讲评及时，评语、评讲认真',
				dataIndex : 'e_pigai',
				flex : 1
			},
			{
				text : '总分',
				dataIndex : 'e_total',
				flex : 1
			},
			{
				text : '我对老师的建议',
				dataIndex : 'e_jianyi',
				flex : 1
			},
			{
				text : '我期望中的老师',
				dataIndex : 'e_qiwang',
				flex : 1
			}
			]
		});
		this.callParent(arguments);
	}
});