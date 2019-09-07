//required because user module is explicitly defining a name for module
//otherwise RequireJS will automatically look for file based on module
require.config({
    paths: {
        'person': 'user'
    }
});

require(['person', 'jquery'], function(u, $){
    console.log('AMD example: name is ', u.name);
    console.log($("#jbutton").text());
});

