Package.describe({
    name: 'errorprotoype:ionicons-sass',
    summary: "Ionic's Ionicons library in SASS and bundled for Meteor.",
    version: '0.1.11',
    git: 'https://github.com/hashwin/ionicons-sass'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2');
    api.use("fourseven:scss@4.12.0", ["client"]);
    api.imply("fourseven:scss", ["client"]);

    api.addAssets([
        'fonts/ionicons.eot',
        'fonts/ionicons.svg',
        'fonts/ionicons.ttf',
        'fonts/ionicons.woff'
    ], 'client');

    api.addFiles([
        'stylesheets/_ionicons-animation.scss',
        'stylesheets/_ionicons-font.scss',
        'stylesheets/_ionicons-icons.scss',
        'stylesheets/_ionicons-variables.scss'
    ], 'client', {isImport: true});

    api.addFiles('_ionicons.scss', 'client');
});
