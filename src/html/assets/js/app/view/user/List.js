Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: ['name', 'age', 'gender'],

    validations: [
        {type: 'presence', name: 'name'},
        {type: 'length',   name: 'name', min: 5},
        {type: 'format',   name: 'age', matcher: /\d+/},
        {type: 'inclusion', name: 'gender', list: ['male', 'female']},
        {type: 'exclusion', name: 'name', list: ['admin']}
    ]

});

var newUser = Ext.create('User', {
    name: 'admin',
    age: 'twenty-nine',
    gender: 'not a valid gender'
});

// run some validation on the new user we just created
var errors = newUser.validate();

console.log('Is User valid?', errors.isValid()); //returns 'false' as there were validation errors
console.log('All Errors:', errors.items); //returns the array of all errors found on this model instance

console.log('Age Errors:', errors.getByField('age')); //returns the errors for the age field