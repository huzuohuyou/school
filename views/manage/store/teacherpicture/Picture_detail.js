Ext.define('manage.store.teacherpicture.Picture_detail', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacherpicture.Picture_detail',
	autoLoad : session.authority.indexOf('b160201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryteacherPictureList&funcId=f160201&teacher_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});