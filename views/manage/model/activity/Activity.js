Ext.define('manage.model.activity.Activity',{
	extend:'Ext.data.Model',
	fields:['id','name','activityNo','activityType','peopleNumber','activityPrice','stage','f_id',
		'introduction','studentsFile','workOrderId','contractFile','planUserId','actionUserId','checkUserId','createTime',
		'preStartTime','startTime','preEndTime','endTime','progressId','status','createUserId',
		'w_id','w_activityId','w_name','w_needType','w_taskType','w_taskUserId','w_taskUserName','w_studentNumber','school_id','school_name','w_schoolName','w_schoolAddress','w_activityDays','w_outOrNot',
		'w_stage','w_activityAddress','w_preStartTime','w_preEndTime','w_needIntroduction','w_acceptTime','w_editTime',
		'w_signUserId','w_executeTime','w_executeNumber','w_basicName','w_basicaddress','w_planIntroduction','w_schoolId','w_schoolName'
		]

});