Ext.define('manage.view.role.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.roleviewform',
    items: [{
        xtype: 'displayfield',
        fieldLabel: '角色名称	',
        name: 'name'
    },
    {
        xtype: 'displayfield',
        fieldLabel: '权限类型',
        name: 'type'
    },
    {
        xtype: 'displayfield',
        fieldLabel: '权限名称',
        name: 'authority_name'
    }],
    buttons: [
    {
        text: '关闭',
        handler: function() {
            this.up('window').close();
        }
    }]
});