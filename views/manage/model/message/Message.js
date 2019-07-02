Ext.define('manage.model.message.Message',{
	extend:'Ext.data.Model',
	fields:[{name:'id',type:'string'},'p_id','p_name','title','content','sender','receiver','sender_name','receiver_name','level','type','mission_status','read_status','send_del','receive_del','send_time','level_name']
});