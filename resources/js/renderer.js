function isacceptIconRender(v) {
	
	if (v == 0 || v == '0')
		return this.icon='resources/images/icons/ok.png' ;
	else if (v == -1 || v == '-1')
		return this.icon='resources/images/icons/no.png' ;
	else if (v > 0 || v> '0')
		return this.icon='resources/images/icons/ok.png' ;
	else
		return v;
};
function stepRecordStatus(v) {
	
	if (v == null || v == '')
		return '<font color="#FF0000">未完成</font>' ;
	else if (v == 1 || v == '1')
		return '<font color="blue">已完成</font>' ;
	else
		return v;
};
function preCoursesTerm(v) {
	
	if (v == 1 || v == '1')
		return '上半学年' ;
	else if (v == 2 || v == '2')
		return '下半学年' ;
	else
		return v;
};
function courseWarnStatus(v) {
	
	if (v == 0 || v == '0')
		return '<font color="green">未发送提醒</font>' ;
	else if (v == 1 || v == '1')
		return '<font color="blue">已发送提醒</font>' ;
	else if (v == 2 || v == '2')
		return '<font color="red">已排课</font>' ;
	else
		return v;
};
function dispatchStatus(v) {
	
	if (v == 0 || v == '0')
		return '<font color="black">待审批</font>' ;
	else if (v == 1 || v == '1')
		return '<font color="blue">审批通过</font>' ;
	else if (v == 2 || v == '2')
		return '<font color="#FF0000">审批未通过</font>' ;
	else
		return v;
};
function salerActivityStatusRender(v) {
	
	if (v == 0 || v == '0')
		return '<b><span style="color:red;">未提交</span></b>' ;
	else if (v == 1 || v == '1')
		return '<b><span style="color:blue;">策划上传方案</span></b>' ;
	else if (v == 2 || v == '2')
		return '<b><span style="color:blue;">销售上传合同</span></b>' ;
	else if (v == 3 || v == '3')
		return '<b><span style="color:blue;">提交执行主管</span></b>' ;
	else if (v == 4 || v == '4')
		return '<b><span style="color:blue;">执行主管上传执行流程</span></b>' ;
	else if (v == 5 || v == '5')
		return '<b><span style="color:blue;">执行主管指派执行</span></b>' ;
	else if (v == 6 || v == '6')
		return '<b><span style="color:blue;">执行中</span></b>' ;
	else if (v == 7 || v == '7')
		return '<b><span style="color:green;">活动完结</span></b>' ;
	else if (v == 8 || v == '8')
		return '<b><span style="color:red;">工单废除</span></b>' ;
	else if (v == 9 || v == '9')
		return '<b><span style="color:red;">工单终止</span></b>' ;
	else
		return v;
};
function signIconRender(v) {
	
	if (v == 1 || v == '1')
		return this.icon='resources/images/icons/no.png' ;
	else if (v == 2 || v == '2')
		return this.icon='resources/images/icons/ok.png' ;
	else if (v == 3 || v == '3' )
		return this.icon='resources/images/icons/remove.png' ;
	else
		return v;
};

function classStatusIconRender(v) {
	
	if (v == '代课')
		return this.icon='resources/images/icons/no.png' ;
	else if (v == '正常')
		return this.icon='resources/images/icons/ok.png' ;
	else
		return v;
};
function xiaoneiwaiRender(v) {
	
	if (v == 1 || v == '1')
		return '校内' ;
	else if (v == 2 || v == '2')
		return '校外' ;
	else
		return v;
};
function activitytypeRender(v) {
	
	if (v == 1 || v == '1')
		return '研学活动' ;
	else if (v == 2 || v == '2')
		return '综合实践活动' ;
	else if (v == 3 || v == '3')
		return '其他活动' ;
	else
		return v;
};
var classStatus = [ {
	id : '正常',
	name : '正常'
}, {
	id : '代课',
	name : '代课'
} ];

function activitystateRender(v){
	if(v==1 || v=='1')
		return '未进行';
	else if(v==2 || v == '2')
		return '已进行';
	else if(v==3 || v == '3')
		return '已删除';
	else 
		return v;
};
function coursegradeRender(v){
	if(v==1 || v=='1')
		return 'A';
	else if(v==2 || v == '2')
		return 'B';
	else 
		return v;
};
function dispatchTypeRender(v){
	if(v==0 || v=='0')
		return '自己找人代课';
	else if(v==1 || v == '1')
		return '公司找人代课';
	else 
		return v;
};
function weekRender(v){
	if(v==1 || v=='1')
		return '周一';
	else if(v==2 || v == '2')
		return '周二';
	else if(v==3 || v == '3')
		return '周三';
	else if(v==4 || v == '4')
		return '周四';
	else if(v==5 || v == '5')
		return '周五';
	else if(v==6 || v == '6')
		return '周六';
	else if(v==7 || v == '7')
		return '周日';
	else 
		return v;
};
function termRender(v){
	if(v==1 || v=='1')
		return '上学期';
	else if(v==2 || v == '2')
		return '下学期';
	else 
		return v;
};
function teacherrateRender(v){
	if(v==1 || v=='1')
		return 'A';
	else if(v==2 || v == '2')
		return 'B';
	else if(v==3 || v == '3')
		return 'C';
	else if(v==4 || v == '4')
		return 'D';
	else 
		return v;
};
function schooltypeRender(v){
	if(v==1 || v=='1')
		return '小学';
	else if(v==2 || v == '2')
		return '初中';
	else if(v==3 || v == '3')
		return '小学/初中';
	else if(v==4 || v == '4')
		return '高中';
	else if(v==5 || v == '5')
		return '小/初/高';
	else 
		return v;
};
function stageRender(v){
	if(v==1 || v=='1')
		return '一年级';
	else if(v==2 || v == '2')
		return '二年级';
	else if(v==3 || v == '3')
		return '三年级';
	else if(v==4 || v == '4')
		return '四年级';
	else if(v==5 || v == '5')
		return '五年级';
	else if(v==6 || v == '6')
		return '六年级';
	else if(v==7 || v == '7')
		return '七年级';
	else if(v==8 || v == '8')
		return '八年级';
	else if(v==9 || v == '9')
		return '九年级';
	else 
		return v;
};
function schoolAreaRender(v){
	if(v==1 || v=='1')
		return '海淀区';
	else if(v==2 || v == '2')
		return '朝阳区';
	else if(v==3 || v == '3')
		return '东城区';
	else if(v==4 || v == '4')
		return '西城区';
	else if(v==5 || v == '5')
		return '崇文区';
	else if(v==6 || v == '6')
		return '玄武区';
	else if(v==7 || v == '7')
		return '丰台区';
	else if(v==8 || v=='8')
		return '通州区';
	else if(v==9 || v == '9')
		return '石景山区';
	else if(v==10 || v == '10')
		return '门头沟区';
	else if(v==11 || v == '11')
		return '房山区';
	else if(v==12 || v == '12')
		return '顺义区';
	else if(v==13 || v == '13')
		return '昌平区';
	else if(v==14 || v == '14')
		return '怀柔区';
	else if(v==15 || v=='15')
		return '大兴区';
	else if(v==16 || v=='16')
		return '平谷区';
	else 
		return v;
};
function courseTypeRender(v){
	if(v==1 || v=='1')
		return '艺术类';
	else if(v==2 || v == '2')
		return '科技类';
	else if(v==3 || v == '3')
		return '体育类';
	else if(v==4 || v == '4')
		return '语言类';
	else if(v==5 || v == '5')
		return '传统类';
	else if(v==6 || v == '6')
		return '安全类';
	else 
		return v;
};
function teacherstatusRender(v){
	if(v== 0 || v=='0')
		return this.icon='resources/images/icons/no.png' ;
	else if(v==1 || v == '1')
		return this.icon='resources/images/icons/ok.png' ;
	else
		return v;
};
function teacherstatesRender(v){
	if(v== 0 || v=='0')
		return '<span style="color:black;">未录用</span>';
	else if(v > 0 || v > '0')
		return '<span style="color:blue;">已录用</span>';
	else
		return v;
};
function teacherEvaluateRender(v){
	if(v==0 || v == '0')
		return '<span style="color:black;">未评价</span>';
	else if(v==1 || v=='1')
		return '<span style="color:blue;">已评价</span>';
	else
		return v;
};
var studentstateData = [
  {
	  id:'0',
	  name:'未签到'
  },
  {
      id:'1',
      name:'已到'
  },
  {
      id:'2',
      name:'未到'
  }
                  
                   	 ];

function studentstateRender(v){
	if(v==0 || v=='0')
		return '未签到';
	else if(v==1 || v == '1')
		return '已到';
	else if(v==2 || v == '2')
		return '未到';
	else 
		return v;
	
};
function isacceptIconRender(v){
	if(v==0 || v=='0')
		return this.icon='resources/images/icons/no.png' ;
	else if(v==1 || v == '1')
		return this.icon='resources/images/icons/ok.png' ;
	else 
		return v;
	
};
var teacherstateData = [
                        {
                      	  id:'0',
                      	  name:'未到'
                        },
                        {
                      	  id:'1',
                      	  name:'已到'
                        },
                        {
                          id:'2',
                          name:'代课'
                         },
                         {
                         	  id:'3',
                         	  name:'迟到'
                         }
                 
                  	 ];

function teacherstateRender(v){
	if(v==0 || v=='0')
		return '未签到';
	else if(v==1 || v == '1')
		return '出勤';
	else if(v==2 || v == '2')
		return '缺勤';
	else if(v==3|| v=='3')
		return '迟到';
	else if(v==4|| v=='4')
		return '早退';
	else
		return v;
	
};
function classStatesRender(v){
	if(v==0 || v=='0')
		return '<span style="color:red;">未选</span>';
	else if(v==1 || v=='1')
		return '<span style="color:blue;">已选</span>';
	else
		return v;
};

var activitystateData = [
                         {
                       	  id:'1',
                       	  name:'未进行'
                         },
                         {
                       	  id:'2',
                       	  name:'已进行'
                         },
                         {
                       	  id:'3',
                       	  name:'已删除'
                         }
                   	 ];

function roomTypeRender(v) {
	if (v == 2 || v == '2')
		return '办公室';
	else if (v == 1 || v == '1')
		return '教室';
	else
		return v;
};function sexRender(v) {
	if (v == 0 || v == '0')
		return '男';
	else if (v == 1 || v == '1')
		return '女';
	else
		return v;
};
function isnoRender(v) {
	if (v == 0 || v == '1')
		return '是';
	else if (v == 1 || v == '0')
		return '否';
	else
		return v;
};
function locationRender(v) {
	if (v == -1 || v == '-1')
		return '出';
	else if (v == 1 || v == '1')
		return '进';
	else
		return v;
};
function attendancestateRender(v) {
	if (v == -1 || v == '-1')
		return '旷课';
	else if (v == 0 || v == '0')
		return '正常';
	else if (v == 1 || v == '1')
		return '迟到';
	else if (v == 2 || v == '2')
		return '早退';
	else
		return v;
};
function onlineRender(v) {
	if (v == -1 || v == '-1')
		return '离校';
	else if (v == 1 || v == '1')
		return '在校';
	else 
		return '未到';
	
};
function RMBMoney(v) {
	v = (Math.round((v - 0) * 100)) / 100;
	v = (v == Math.floor(v)) ? v + ".00" : ((v * 10 == Math.floor(v * 10)) ? v
			+ "0" : v);
	v = String(v);
	var ps = v.split('.');
	var whole = ps[0];
	var sub = ps[1] ? '.' + ps[1] : '.00';
	var r = /(\d+)(\d{3})/;
	while (r.test(whole)) {
		whole = whole.replace(r, '$1' + ',' + '$2');
	}
	v = whole + sub;
	if (v.charAt(0) == '-') {
		return '-￥' + v.substr(1);
	}
	return "￥" + v;
};
function YesOrNoRender(v) {
	if (v == 0 || v == '0')
		return '<span style="color:red;">否</span>';
	else if (v == 1 || v == '1')
		return '<span style="color:blue;">是</span>';
	else
		return v;
};
Date.prototype.Format = function(fmt) { // author: meizz
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, // 小时
		"H+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
					: (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
};
if (!Array.indexOf) {
	Array.prototype.indexOf = function(obj) {
		for ( var i = 0; i < this.length; i++) {
			if (this[i] == obj) {
				return i;
			}
		}
		return -1;
	};
}
String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};
var roomTypeData = [ {
	id : '1',
	name : '教室'
}, {
	id : '2',
	name : '办公室'
} ];
var readData = [ {
	id : '未读',
	name : '未读'
}, {
	id : '已读',
	name : '已读'
} ];
var themeData = [ {
	id : '',
	name : '默认'
}, {
	id : '-classic',
	name : '经典'
}, {
	id : '-gray',
	name : '灰色'
}, {
	id : '-access',
	name : 'access'
} ];
var missionStatusData = [ {
	id : '已分配',
	name : '已分配'
}, {
	id : '进行中',
	name : '进行中'
}, {
	id : '已完成',
	name : '已完成'
} ];
