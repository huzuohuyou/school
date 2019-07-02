Ext.define('manage.view.studentEvaluateResult.EvaluateViewForm', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.evaluateresultviewform',
    region : 'center',
    autoScroll : true,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
	items : [{
		        xtype: 'fieldset',
		        title: '各项得分情况',
		        layout: {
		            columns: 1,
		            type: 'table'
		      }, 
		   
		  items:[{
				xtype : 'displayfield',
				fieldLabel: '评价内容',
				labelWidth:550,
				labelAlign : 'center',
				width : 700,
				value:'得分'
			},{
				xtype : 'displayfield',
				fieldLabel: '1.仪表端庄，言传身教，具有爱心，师德高尚',
				labelWidth:550,
				width : 700,
				name:'e_yibiao'
			}, {
				xtype : 'displayfield',
				fieldLabel: '2.教风严谨，严于律己，尽心尽职，循循善诱',
				labelWidth:550,
				width : 700,
				name:'e_jiaofeng'
			}, {
				xtype: 'displayfield',
				fieldLabel: '3.备课认真，讲课熟练，教态自然，语言准确，条理清楚，层次分明，重点突出，娓娓动听',
				labelWidth:550,
				width : 700,
				name:'e_beike',
			}, {
				xtype : 'displayfield',
				fieldLabel: '5.板书工整，准确规范，布局合理，有助于笔记、记忆和复习',
				labelWidth:550,
				width : 700,
				name:'e_banshu',
			},
			{
				xtype : 'displayfield',
				fieldLabel: '6.教学技能熟练、全面',
				labelWidth:550,
				width : 700,
				name:'e_jineng',
			},{
				xtype : 'displayfield',
				fieldLabel: '7.师生关系民主、平等、和谐、合作',
				labelWidth:550,
				width : 700,
				name:'e_guanxi'
			}, {
				xtype : 'displayfield',
				fieldLabel: '8.课堂学习气氛热烈活跃，学生学习积极性高',
				labelWidth:550,
				width : 700,
				name:'e_qifen'
			}, {
				xtype : 'displayfield',
			    fieldLabel: '9.课堂管理严格，责任心强，纪律良好',
			    labelWidth:550,
				width : 700,
				 name:'e_guanli',
			}, {
				xtype: 'displayfield',
				fieldLabel: '10.教学辅导，一视同仁，顾及全体，照顾个别',
				labelWidth:550,
				width : 700,
				 name:'e_fudao',
			}, {
				xtype : 'displayfield',
				fieldLabel: '11.辅导及时、耐心、细致',
				labelWidth:550,
				width : 700,
				name:'e_naixin',
			},
			{
				xtype : 'displayfield',
				fieldLabel: '12.任务布置，任务量适中，难易适当',
				labelWidth:550,
				width : 700,
				name:'e_renwu'
			},
			{
				xtype : 'displayfield',
				fieldLabel: '13.批改、讲评及时，评语、评讲认真',
				labelWidth:550,
				width : 700,
				name:'e_pigai',
			},
			{
				xtype : 'displayfield',
				fieldLabel: '总分',
				labelWidth:550,
				width : 700,
				name:'e_total',
			},
			
			{
				xtype : 'displayfield',
				fieldLabel : '你对老师的建议',
				labelWidth:200,
				labelAlign : 'top',
				width : 700,
				name : 'e_jianyi',
			},
			{
				xtype : 'displayfield',
				fieldLabel : '你期望中的老师',
				labelWidth:200,
				labelAlign : 'top',
				width : 700,
				name : 'e_qiwang'
			}
			]}],
	    buttons : [  {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});