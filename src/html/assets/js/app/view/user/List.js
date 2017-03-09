var panel = Ext.create('Ext.panel.Panel', {
    renderTo: Ext.getBody(),
    title: 'Test',
    html: 'Test Panel',
    hideMode: 'visibility' // use the CSS visibility property to show and hide this component
});

panel.hide(); // hide the component

panel.show(); // show the component