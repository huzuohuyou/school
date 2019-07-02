Ext.define('manage.view.wx_movie.MovieReadingViewForm', {
	requires : ['manage.view.wx_movie.MovieReadingGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.moviereadingviewform',
	width: 900,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'},{xtype:'moviereadinggrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});