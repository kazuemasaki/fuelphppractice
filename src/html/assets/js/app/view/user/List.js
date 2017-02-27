    var cardNav = function(incr){
        var l = Ext.getCmp('card-wizard-panel').getLayout();
        var i = l.activeItem.id.split('card-')[1];
        var next = parseInt(i, 10) + incr;
        l.setActiveItem(next);
        Ext.getCmp('card-prev').setDisabled(next===0);
        Ext.getCmp('card-next').setDisabled(next===2);
    };
Ext.define('AM.view.user.List' ,{
    // extend: 'Ext.grid.Panel',
    extend: 'Ext.panel.Panel',
    alias: 'widget.userlist',

    renderTo: Ext.getBody(),
    width: 400,
    height: 200,

    layout:'column',
    items: [{
        title: 'Width = 25%',
        columnWidth: .25,
        html: 'Content'
    },{
        title: 'Width = 75%',
        columnWidth: .75,
        html: 'Content'
    },{
        title: 'Width = 250px',
        width: 250,
        html: 'Content'
    }]
             
    // title: 'All Users',

    // store: 'Users',
    // initComponent: function() {
    //     this.columns = [
    //         {header: 'Name',  dataIndex: 'name',  flex: 1},
    //         {header: 'Email', dataIndex: 'email', flex: 1}
    //     ];

    //     this.callParent(arguments);
    // }
});

Ext.create('Ext.panel.Panel', {
    // renderTo: Ext.getBody(),
    // width: 400,
    // height: 300,
    // title: 'Container Panel',
    // items: [
    //     {
    //         xtype: 'panel',
    //         title: 'Child Panel 1',
    //         height: 100,
    //         width: '75%'
    //     },
    //     {
    //         xtype: 'panel',
    //         title: 'Child Panel 2',
    //         height: 100,
    //         width: '75%'
    //     }
    // ]
});