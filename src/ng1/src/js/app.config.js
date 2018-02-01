  'use strict';
  angular.module('FileManagerApp').provider('fileManagerConfig', function() {

    var values = {
      appName: 'angular-filemanager v1.5',
      defaultLang: 'en',
      multiLang: true,

      listUrl: 'http://127.0.0.1:4100',
      uploadUrl: 'http://127.0.0.1:4100',
      renameUrl: 'http://127.0.0.1:4100',
      copyUrl: 'http://127.0.0.1:4100',
      moveUrl: 'http://127.0.0.1:4100',
      removeUrl: 'http://127.0.0.1:4100',
      editUrl: 'http://127.0.0.1:4100',
      getContentUrl: 'http://127.0.0.1:4100',
      createFolderUrl: 'http://127.0.0.1:4100',
      downloadFileUrl: 'http://127.0.0.1:4100',
      downloadMultipleUrl: 'http://127.0.0.1:4100',
      compressUrl: 'http://127.0.0.1:4100',
      extractUrl: 'http://127.0.0.1:4100',
      permissionsUrl: 'http://127.0.0.1:4100',
      basePath: '/',

      searchForm: true,
      sidebar: true,
      breadcrumb: true,
      allowedActions: {
        upload: true,
        rename: true,
        move: true,
        copy: true,
        edit: true,
        changePermissions: true,
        compress: true,
        compressChooseName: true,
        extract: true,
        download: true,
        downloadMultiple: true,
        preview: true,
        remove: true,
        createFolder: true,
        pickFiles: false,
        pickFolders: false
      },

      multipleDownloadFileName: 'angular-filemanager.zip',
      filterFileExtensions: [],
      showExtensionIcons: true,
      showSizeForDirectories: false,
      useBinarySizePrefixes: false,
      downloadFilesByAjax: true,
      previewImagesInModal: true,
      enablePermissionsRecursive: true,
      compressAsync: false,
      extractAsync: false,
      pickCallback: null,

      isEditableFilePattern: /\.(txt|diff?|patch|svg|asc|cnf|cfg|conf|html?|.html|cfm|cgi|aspx?|ini|pl|py|md|css|cs|js|jsp|log|htaccess|htpasswd|gitignore|gitattributes|env|json|atom|eml|rss|markdown|sql|xml|xslt?|sh|rb|as|bat|cmd|cob|for|ftn|frm|frx|inc|lisp|scm|coffee|php[3-6]?|java|c|cbl|go|h|scala|vb|tmpl|lock|go|yml|yaml|tsv|lst)$/i,
      isImageFilePattern: /\.(jpe?g|gif|bmp|png|svg|tiff?)$/i,
      isExtractableFilePattern: /\.(gz|tar|rar|g?zip)$/i,
      tplPath: 'ng1/src/templates'
    };

    return {
      $get: function() {
        return values;
      },
      set: function(constants) {
        angular.extend(values, constants);
      }
    };

  });
