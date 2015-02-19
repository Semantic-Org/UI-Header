var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-header',
  summary : 'Semantic UI - Header (official): Single component release of header',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Header.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
