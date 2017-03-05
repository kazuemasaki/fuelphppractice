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

    layout: 'fit',
    bodyPadding: 15,
    items: {
        title: 'New Email',
        layout: 'fit',
        frame: true,
        border: false,
        items: {
            xtype: 'form',
            layout:'absolute',
            url:'save-form.php',
            padding: '5 5 0 5',
            border: false,
            cls: 'absolute-form-panel-body',
            
            defaultType: 'textfield',
            items: [{
                x: 0,
                y: 5,
                xtype: 'label',
                text: 'From:'
            },{
                x: 55,
                y: 0,
                name: 'from',
                hideLabel: true,
                anchor:'100%'  // anchor width by %
            },{
                x: 0,
                y: 32,
                xtype: 'label',
                text: 'To:'
            },{
                x: 55,
                y: 27,
                width: 69,
                xtype: 'button',
                text: 'Contacts'
            },{
                x: 127,
                y: 27,
                name: 'to',
                hideLabel: true,
                anchor: '100%'  // anchor width by %
            },{
                x: 0,
                y: 59,
                xtype: 'label',
                text: 'Subject:'
            },{
                x: 55,
                y: 54,
                name: 'subject',
                hideLabel: true,
                anchor: '100%'  // anchor width by %
            },{
                x: 0,
                y: 81,
                hideLabel: true,
                xtype: 'textarea',
                name: 'msg',
                anchor: '100% 100%'  // anchor width and height
            }]
        },

        dockedItems: [
            {
                xtype: 'toolbar',
                border: false,
                cls: 'absolute-form-panel-body',
                items: [
                    {
                         text: 'Send',
                         iconCls: 'icon-send'
                    },'-',{
                         text: 'Save',
                         iconCls: 'icon-save'
                    },{
                         text: 'Check Spelling',
                         iconCls: 'icon-spell'
                    },'-',{
                         text: 'Print',
                         iconCls: 'icon-print'
                    },'->',{
                         text: 'Attach a File',
                         iconCls: 'icon-attach'
                    }
                ]
            }
        ]
    }

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