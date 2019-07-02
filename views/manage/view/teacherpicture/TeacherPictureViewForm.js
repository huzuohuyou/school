Ext.define('manage.view.teacherpicture.TeacherPictureViewForm', {
	requires : ['manage.view.teacherpicture.PictureGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherpictureviewform',
	width: 900,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'ssd_id'},{xtype:'picturegrid'},{xtype : 'hidden',name : 'id'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});