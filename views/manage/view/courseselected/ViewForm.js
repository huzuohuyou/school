Ext.define('manage.view.courseselected.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.courseselectedviewform',
    items: [{
        xtype: 'displayfield',
        fieldLabel: '课程介绍	',
        autoScroll : true,
        width:900,
        height :300,
        name: 'introduction'
    }],
    buttons: [
    {
        text: '关闭',
        handler: function() {
            this.up('window').close();
        }
    }]
});