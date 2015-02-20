
Package.describe({
  name    : 'semantic:ui-header',
  summary : 'Semantic UI - Header: Single component release',
  version : '1.9.3',
  git     : 'git://github.com/Semantic-Org/UI-Header.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'header.css'
  ], 'client');
});
