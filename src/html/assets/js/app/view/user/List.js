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
    title: 'Card Layout (Wizard)',
    layout:'card',
    activeItem: 0,
    bodyStyle: 'padding:15px',
    defaults: {border:false},
    bbar: ['->', {
        id: 'card-prev',
        text: '&laquo; Previous',
        handler: Ext.Function.bind(cardNav, this, [-1]),
        disabled: true
    },{
        id: 'card-next',
        text: 'Next &raquo;',
        handler: Ext.Function.bind(cardNav, this, [1])
    }],
    items: [{
        id: 'card-0',
        html: '<h1>Welcome to the Demo Wizard!</h1><p>Step 1 of 3</p><p>Please click the "Next" button to continue...</p>'
    },{
        id: 'card-1',
        html: '<p>Step 2 of 3</p><p>Almost there.  Please click the "Next" button to continue...</p>'
    },{
        id: 'card-2',
        html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
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