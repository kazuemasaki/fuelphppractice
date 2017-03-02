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

    layout: {
        type: 'table',
        columns: 4
    },
    defaults: {
        bodyStyle:'padding:15px 20px',
        border: true
    },
    items: [
        {
            title: 'Lots of Spanning',
            html: '<p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p>',
            rowspan: 3
        },{
            title: 'Basic Table Cell',
            html: '<p>Basic panel in a table cell.</p>',
            cellId: 'basic-cell',
            cellCls: 'custom-cls'
        },{
            html: '<p>Plain panel</p>'
        },{
            title: 'Another Cell',
            html: '<p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p>',
            width: 300,
            rowspan: 2
        },{
            html: 'Plain cell spanning two columns',
            colspan: 2
        },{
            title: 'More Column Spanning',
            html: '<p>Spanning three columns.</p>',
            colspan: 3
        },{
            title: 'Spanning All Columns',
            html: '<p>Spanning all columns.</p>',
            colspan: 4
        }
    ]
             
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