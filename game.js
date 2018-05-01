
var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'game.data';
    var REMOTE_PACKAGE_BASE = 'game.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
                              Module['locateFile'](REMOTE_PACKAGE_BASE) :
                              ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);
  
    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

    function assert(check, msg) {
      if (!check) throw msg + new Error().stack;
    }
Module['FS_createPath']('/', '.git', true, true);
Module['FS_createPath']('/.git', 'hooks', true, true);
Module['FS_createPath']('/.git', 'info', true, true);
Module['FS_createPath']('/.git', 'logs', true, true);
Module['FS_createPath']('/.git/logs', 'refs', true, true);
Module['FS_createPath']('/.git/logs/refs', 'heads', true, true);
Module['FS_createPath']('/.git/logs/refs', 'remotes', true, true);
Module['FS_createPath']('/.git/logs/refs/remotes', 'origin', true, true);
Module['FS_createPath']('/.git', 'objects', true, true);
Module['FS_createPath']('/.git/objects', '01', true, true);
Module['FS_createPath']('/.git/objects', '03', true, true);
Module['FS_createPath']('/.git/objects', '05', true, true);
Module['FS_createPath']('/.git/objects', '06', true, true);
Module['FS_createPath']('/.git/objects', '07', true, true);
Module['FS_createPath']('/.git/objects', '0d', true, true);
Module['FS_createPath']('/.git/objects', '0e', true, true);
Module['FS_createPath']('/.git/objects', '0f', true, true);
Module['FS_createPath']('/.git/objects', '10', true, true);
Module['FS_createPath']('/.git/objects', '14', true, true);
Module['FS_createPath']('/.git/objects', '2e', true, true);
Module['FS_createPath']('/.git/objects', '2f', true, true);
Module['FS_createPath']('/.git/objects', '30', true, true);
Module['FS_createPath']('/.git/objects', '33', true, true);
Module['FS_createPath']('/.git/objects', '35', true, true);
Module['FS_createPath']('/.git/objects', '36', true, true);
Module['FS_createPath']('/.git/objects', '37', true, true);
Module['FS_createPath']('/.git/objects', '3e', true, true);
Module['FS_createPath']('/.git/objects', '3f', true, true);
Module['FS_createPath']('/.git/objects', '43', true, true);
Module['FS_createPath']('/.git/objects', '44', true, true);
Module['FS_createPath']('/.git/objects', '47', true, true);
Module['FS_createPath']('/.git/objects', '4d', true, true);
Module['FS_createPath']('/.git/objects', '51', true, true);
Module['FS_createPath']('/.git/objects', '55', true, true);
Module['FS_createPath']('/.git/objects', '57', true, true);
Module['FS_createPath']('/.git/objects', '5d', true, true);
Module['FS_createPath']('/.git/objects', '62', true, true);
Module['FS_createPath']('/.git/objects', '64', true, true);
Module['FS_createPath']('/.git/objects', '69', true, true);
Module['FS_createPath']('/.git/objects', '6a', true, true);
Module['FS_createPath']('/.git/objects', '71', true, true);
Module['FS_createPath']('/.git/objects', '79', true, true);
Module['FS_createPath']('/.git/objects', '7b', true, true);
Module['FS_createPath']('/.git/objects', '7d', true, true);
Module['FS_createPath']('/.git/objects', '80', true, true);
Module['FS_createPath']('/.git/objects', '81', true, true);
Module['FS_createPath']('/.git/objects', '85', true, true);
Module['FS_createPath']('/.git/objects', '86', true, true);
Module['FS_createPath']('/.git/objects', '88', true, true);
Module['FS_createPath']('/.git/objects', '90', true, true);
Module['FS_createPath']('/.git/objects', '96', true, true);
Module['FS_createPath']('/.git/objects', '97', true, true);
Module['FS_createPath']('/.git/objects', '99', true, true);
Module['FS_createPath']('/.git/objects', '9f', true, true);
Module['FS_createPath']('/.git/objects', 'a2', true, true);
Module['FS_createPath']('/.git/objects', 'a4', true, true);
Module['FS_createPath']('/.git/objects', 'a6', true, true);
Module['FS_createPath']('/.git/objects', 'ab', true, true);
Module['FS_createPath']('/.git/objects', 'b1', true, true);
Module['FS_createPath']('/.git/objects', 'b5', true, true);
Module['FS_createPath']('/.git/objects', 'b7', true, true);
Module['FS_createPath']('/.git/objects', 'c1', true, true);
Module['FS_createPath']('/.git/objects', 'c2', true, true);
Module['FS_createPath']('/.git/objects', 'c3', true, true);
Module['FS_createPath']('/.git/objects', 'c7', true, true);
Module['FS_createPath']('/.git/objects', 'cd', true, true);
Module['FS_createPath']('/.git/objects', 'd2', true, true);
Module['FS_createPath']('/.git/objects', 'd6', true, true);
Module['FS_createPath']('/.git/objects', 'd7', true, true);
Module['FS_createPath']('/.git/objects', 'df', true, true);
Module['FS_createPath']('/.git/objects', 'e2', true, true);
Module['FS_createPath']('/.git/objects', 'e3', true, true);
Module['FS_createPath']('/.git/objects', 'e9', true, true);
Module['FS_createPath']('/.git/objects', 'eb', true, true);
Module['FS_createPath']('/.git/objects', 'ee', true, true);
Module['FS_createPath']('/.git/objects', 'f3', true, true);
Module['FS_createPath']('/.git/objects', 'fa', true, true);
Module['FS_createPath']('/.git/objects', 'fe', true, true);
Module['FS_createPath']('/.git', 'refs', true, true);
Module['FS_createPath']('/.git/refs', 'heads', true, true);
Module['FS_createPath']('/.git/refs', 'remotes', true, true);
Module['FS_createPath']('/.git/refs/remotes', 'origin', true, true);
Module['FS_createPath']('/', 'fonts', true, true);
Module['FS_createPath']('/', 'graphics', true, true);
Module['FS_createPath']('/', 'lib', true, true);
Module['FS_createPath']('/', 'sounds', true, true);
Module['FS_createPath']('/', 'src', true, true);
Module['FS_createPath']('/src', 'states', true, true);
Module['FS_createPath']('/src/states', 'game', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;

        Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        Module['removeRunDependency']('fp ' + that.name);

        this.requests[this.name] = null;
      },
    };

        var files = metadata.files;
        for (i = 0; i < files.length; ++i) {
          new DataRequest(files[i].start, files[i].end, files[i].crunched, files[i].audio).open('GET', files[i].filename);
        }

  
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though
        // (we may be allocating before malloc is ready, during startup).
        if (Module['SPLIT_MEMORY']) Module.printErr('warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting');
        var ptr = Module['getMemory'](byteArray.length);
        Module['HEAPU8'].set(byteArray, ptr);
        DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
  
          var files = metadata.files;
          for (i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }
              Module['removeRunDependency']('datafile_game.data');

    };
    Module['addRunDependency']('datafile_game.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

 }
 loadPackage({"files": [{"audio": 0, "start": 0, "crunched": 0, "end": 6148, "filename": "/.DS_Store"}, {"audio": 0, "start": 6148, "crunched": 0, "end": 9988, "filename": "/main.lua"}, {"audio": 0, "start": 9988, "crunched": 0, "end": 9998, "filename": "/.git/COMMIT_EDITMSG"}, {"audio": 0, "start": 9998, "crunched": 0, "end": 10290, "filename": "/.git/config"}, {"audio": 0, "start": 10290, "crunched": 0, "end": 10363, "filename": "/.git/description"}, {"audio": 0, "start": 10363, "crunched": 0, "end": 10386, "filename": "/.git/HEAD"}, {"audio": 0, "start": 10386, "crunched": 0, "end": 12375, "filename": "/.git/index"}, {"audio": 0, "start": 12375, "crunched": 0, "end": 12853, "filename": "/.git/hooks/applypatch-msg.sample"}, {"audio": 0, "start": 12853, "crunched": 0, "end": 13749, "filename": "/.git/hooks/commit-msg.sample"}, {"audio": 0, "start": 13749, "crunched": 0, "end": 13938, "filename": "/.git/hooks/post-update.sample"}, {"audio": 0, "start": 13938, "crunched": 0, "end": 14362, "filename": "/.git/hooks/pre-applypatch.sample"}, {"audio": 0, "start": 14362, "crunched": 0, "end": 16004, "filename": "/.git/hooks/pre-commit.sample"}, {"audio": 0, "start": 16004, "crunched": 0, "end": 17352, "filename": "/.git/hooks/pre-push.sample"}, {"audio": 0, "start": 17352, "crunched": 0, "end": 22303, "filename": "/.git/hooks/pre-rebase.sample"}, {"audio": 0, "start": 22303, "crunched": 0, "end": 22847, "filename": "/.git/hooks/pre-receive.sample"}, {"audio": 0, "start": 22847, "crunched": 0, "end": 24086, "filename": "/.git/hooks/prepare-commit-msg.sample"}, {"audio": 0, "start": 24086, "crunched": 0, "end": 27696, "filename": "/.git/hooks/update.sample"}, {"audio": 0, "start": 27696, "crunched": 0, "end": 27936, "filename": "/.git/info/exclude"}, {"audio": 0, "start": 27936, "crunched": 0, "end": 28931, "filename": "/.git/logs/HEAD"}, {"audio": 0, "start": 28931, "crunched": 0, "end": 29926, "filename": "/.git/logs/refs/heads/master"}, {"audio": 0, "start": 29926, "crunched": 0, "end": 30838, "filename": "/.git/logs/refs/remotes/origin/master"}, {"audio": 0, "start": 30838, "crunched": 0, "end": 58376, "filename": "/.git/objects/01/837d362dd5609b35ce872fbb1ddd4cd3951c8d"}, {"audio": 0, "start": 58376, "crunched": 0, "end": 58423, "filename": "/.git/objects/03/8f2881a13daac87edc5f8627f36a4af256282e"}, {"audio": 0, "start": 58423, "crunched": 0, "end": 58575, "filename": "/.git/objects/05/e4e0025747cf431430dd1e972be65f06689b09"}, {"audio": 0, "start": 58575, "crunched": 0, "end": 58979, "filename": "/.git/objects/06/02da968aba75445e11827d6eb93d2dd7fb79fd"}, {"audio": 0, "start": 58979, "crunched": 0, "end": 61382, "filename": "/.git/objects/07/be65c074582f35d071a9f0885aa3e29ff8f30e"}, {"audio": 0, "start": 61382, "crunched": 0, "end": 61505, "filename": "/.git/objects/0d/109999751896ccdef415d3b3b4be9665321431"}, {"audio": 0, "start": 61505, "crunched": 0, "end": 64174, "filename": "/.git/objects/0e/0709ae5db1c9732349eaa9798c71ba5ffa016a"}, {"audio": 0, "start": 64174, "crunched": 0, "end": 64694, "filename": "/.git/objects/0f/10519e4d9d8e3076d35c2b2b058a88012ac184"}, {"audio": 0, "start": 64694, "crunched": 0, "end": 79285, "filename": "/.git/objects/10/581b01c42fed8ddcd68bdd95c71b30277f7073"}, {"audio": 0, "start": 79285, "crunched": 0, "end": 82166, "filename": "/.git/objects/14/562324168a3353d80c46d64217444705765f6f"}, {"audio": 0, "start": 82166, "crunched": 0, "end": 82355, "filename": "/.git/objects/2e/b9dd7c396766916822418f40f495ad46cfd344"}, {"audio": 0, "start": 82355, "crunched": 0, "end": 82508, "filename": "/.git/objects/2e/ff9a2fd20c05499cd506b567c4c0130d58b087"}, {"audio": 0, "start": 82508, "crunched": 0, "end": 82795, "filename": "/.git/objects/2f/03c127e79b685719ebe934ab0af7b16eebd56c"}, {"audio": 0, "start": 82795, "crunched": 0, "end": 82995, "filename": "/.git/objects/30/0319fe662cab44ec1003077010161fbbdb4d3b"}, {"audio": 0, "start": 82995, "crunched": 0, "end": 98671, "filename": "/.git/objects/33/33ac524b09d062dbb23970f8ac5b6d904d1285"}, {"audio": 0, "start": 98671, "crunched": 0, "end": 100090, "filename": "/.git/objects/35/0007c374f250267e6adfdcae8fb87b87ce6e84"}, {"audio": 0, "start": 100090, "crunched": 0, "end": 100696, "filename": "/.git/objects/36/d4f54c530af4de1f42361e7ece405f7ae56259"}, {"audio": 0, "start": 100696, "crunched": 0, "end": 100982, "filename": "/.git/objects/37/b502f3f74a917808d14d7a9f10aafe85c4d799"}, {"audio": 0, "start": 100982, "crunched": 0, "end": 101182, "filename": "/.git/objects/3e/a972ad759898b0373231a10b92b340a80b5d22"}, {"audio": 0, "start": 101182, "crunched": 0, "end": 101839, "filename": "/.git/objects/3f/3b9a48ac495f263cb30f53fe2855c0ba0116d5"}, {"audio": 0, "start": 101839, "crunched": 0, "end": 145228, "filename": "/.git/objects/3f/d771d2c0506a4a41f3b6a582a016a04b2578d9"}, {"audio": 0, "start": 145228, "crunched": 0, "end": 145513, "filename": "/.git/objects/43/2fc5f56c77973152dd7cf1e81230c738a84272"}, {"audio": 0, "start": 145513, "crunched": 0, "end": 146224, "filename": "/.git/objects/44/ba7579f73efcbd35238812a673ffd5cd83e886"}, {"audio": 0, "start": 146224, "crunched": 0, "end": 146377, "filename": "/.git/objects/47/93f3c3db51259a9c37377be69eeaf5ee40363f"}, {"audio": 0, "start": 146377, "crunched": 0, "end": 146691, "filename": "/.git/objects/4d/47f16e89cd1d343398cf441d09f28d75adcf8f"}, {"audio": 0, "start": 146691, "crunched": 0, "end": 146744, "filename": "/.git/objects/51/6db37b77781bc9182dbcba7a16c83fe444a2bf"}, {"audio": 0, "start": 146744, "crunched": 0, "end": 148069, "filename": "/.git/objects/55/106eb10a89bb371868d3a1bd94595122e21f2c"}, {"audio": 0, "start": 148069, "crunched": 0, "end": 148151, "filename": "/.git/objects/57/1c8f5c9e3a4fd26c16787cd9ea92fe42540c1f"}, {"audio": 0, "start": 148151, "crunched": 0, "end": 148436, "filename": "/.git/objects/5d/0f1b29e32eb148be787ad1e47b115eccf40e01"}, {"audio": 0, "start": 148436, "crunched": 0, "end": 148570, "filename": "/.git/objects/62/46c6764ce66b05993a5dc0fbf3873b16591c58"}, {"audio": 0, "start": 148570, "crunched": 0, "end": 150138, "filename": "/.git/objects/64/dcddf5a10ac078296b71b4399d4f10711ed962"}, {"audio": 0, "start": 150138, "crunched": 0, "end": 150500, "filename": "/.git/objects/69/0b157376e90ad623794d8e389578fa61a07211"}, {"audio": 0, "start": 150500, "crunched": 0, "end": 150786, "filename": "/.git/objects/6a/e4c271255f1dff13e8106360d741b3ef3663f5"}, {"audio": 0, "start": 150786, "crunched": 0, "end": 158662, "filename": "/.git/objects/71/2dec91cef2c9b9c46a666ca26a66a74b123d7b"}, {"audio": 0, "start": 158662, "crunched": 0, "end": 158862, "filename": "/.git/objects/79/f9079b8f211c4e4c29001032b76afe4452c8bc"}, {"audio": 0, "start": 158862, "crunched": 0, "end": 159501, "filename": "/.git/objects/7b/2252d97219c728012b90f53eaccaafc9c2819a"}, {"audio": 0, "start": 159501, "crunched": 0, "end": 160271, "filename": "/.git/objects/7b/bf54670138ca694630edd438c862b43f748797"}, {"audio": 0, "start": 160271, "crunched": 0, "end": 161802, "filename": "/.git/objects/7d/62707247c31d189414c16f13cd2441c80cd1d8"}, {"audio": 0, "start": 161802, "crunched": 0, "end": 162002, "filename": "/.git/objects/7d/710e2b29f6de5cb68f799f45e945b713278594"}, {"audio": 0, "start": 162002, "crunched": 0, "end": 162167, "filename": "/.git/objects/80/665a3c63b1afed723b2aa850d14b6ed32188b2"}, {"audio": 0, "start": 162167, "crunched": 0, "end": 162914, "filename": "/.git/objects/81/08f805ceb10598f519911ee3b4023d1f114473"}, {"audio": 0, "start": 162914, "crunched": 0, "end": 163061, "filename": "/.git/objects/85/3bc679a8ce1f0f390d2f18707c9df375bbcc6d"}, {"audio": 0, "start": 163061, "crunched": 0, "end": 163346, "filename": "/.git/objects/86/7f9c6eb9f34819157ef91a4fe13d71f69cb963"}, {"audio": 0, "start": 163346, "crunched": 0, "end": 163498, "filename": "/.git/objects/88/6df25db64802d4703de6fe8cdc780f80e06fa6"}, {"audio": 0, "start": 163498, "crunched": 0, "end": 164258, "filename": "/.git/objects/90/6c638ee5a0bcf1b66ebeccb69f581b91aefd46"}, {"audio": 0, "start": 164258, "crunched": 0, "end": 164458, "filename": "/.git/objects/96/f26dabf408c00c2f4fbe2525ae1ed7381e7ed0"}, {"audio": 0, "start": 164458, "crunched": 0, "end": 164843, "filename": "/.git/objects/97/5528aa1687b407aa450fd76af22553983d735e"}, {"audio": 0, "start": 164843, "crunched": 0, "end": 165007, "filename": "/.git/objects/99/e588eab7ed9707331abbdfaba0b9d087c3bd67"}, {"audio": 0, "start": 165007, "crunched": 0, "end": 165751, "filename": "/.git/objects/9f/4299306f2c3de9f4344fee7d81dd44954b30da"}, {"audio": 0, "start": 165751, "crunched": 0, "end": 165807, "filename": "/.git/objects/a2/d844eae9b5ae62c1108b1e55002f2ac084928d"}, {"audio": 0, "start": 165807, "crunched": 0, "end": 165959, "filename": "/.git/objects/a4/e735358de22dcee90c434bade77a98e26ddd20"}, {"audio": 0, "start": 165959, "crunched": 0, "end": 168740, "filename": "/.git/objects/a6/686f43de2d89290249c1a4008b6908538de79e"}, {"audio": 0, "start": 168740, "crunched": 0, "end": 168787, "filename": "/.git/objects/ab/735b072c3dc8f818abf1a2318d26564d829324"}, {"audio": 0, "start": 168787, "crunched": 0, "end": 168833, "filename": "/.git/objects/b1/547be54d9beee71d653e78873cd0836cf06be1"}, {"audio": 0, "start": 168833, "crunched": 0, "end": 169196, "filename": "/.git/objects/b5/8c6587bad9232cb7be389253afd0537ac133fa"}, {"audio": 0, "start": 169196, "crunched": 0, "end": 169242, "filename": "/.git/objects/b5/b8845050bc55372a13741bb8ce4a4b517b8616"}, {"audio": 0, "start": 169242, "crunched": 0, "end": 169289, "filename": "/.git/objects/b7/f9f12a979c53622488a23a6871b061d7251eef"}, {"audio": 0, "start": 169289, "crunched": 0, "end": 169342, "filename": "/.git/objects/c1/5fbf7ced62b4066fd946c86e3d0d9823a88d8c"}, {"audio": 0, "start": 169342, "crunched": 0, "end": 170948, "filename": "/.git/objects/c1/e1c142cf212b77569f331b3ab552113316fb8f"}, {"audio": 0, "start": 170948, "crunched": 0, "end": 172401, "filename": "/.git/objects/c2/5be387d9eb4c0acb466b3e147e27d3d78efb41"}, {"audio": 0, "start": 172401, "crunched": 0, "end": 172926, "filename": "/.git/objects/c3/0713966d9aa5ab1e04ada7bfe5051b958ae82d"}, {"audio": 0, "start": 172926, "crunched": 0, "end": 172972, "filename": "/.git/objects/c7/996ef3480fc73efb47d56e36d82294005e7c7f"}, {"audio": 0, "start": 172972, "crunched": 0, "end": 173095, "filename": "/.git/objects/cd/32302f48401906fcc2afe969efed96a815b994"}, {"audio": 0, "start": 173095, "crunched": 0, "end": 173754, "filename": "/.git/objects/d2/394014e52ff04ed1286ec219034f22b39aec0a"}, {"audio": 0, "start": 173754, "crunched": 0, "end": 174041, "filename": "/.git/objects/d6/8123b65fdca263b5a7c05eddce1dab93d7fca6"}, {"audio": 0, "start": 174041, "crunched": 0, "end": 174678, "filename": "/.git/objects/d7/890a08fb700db3deeabf40752562e9b2f81bba"}, {"audio": 0, "start": 174678, "crunched": 0, "end": 174843, "filename": "/.git/objects/df/5f698178ae44dcbd1f20a0b860e908aef0e7e4"}, {"audio": 0, "start": 174843, "crunched": 0, "end": 175158, "filename": "/.git/objects/e2/67d2d05d1a191bfc8e32c3cad45412a00ac51b"}, {"audio": 0, "start": 175158, "crunched": 0, "end": 175329, "filename": "/.git/objects/e3/64dddf9cc873d28314dffb723f40d0aa513635"}, {"audio": 0, "start": 175329, "crunched": 0, "end": 176687, "filename": "/.git/objects/e9/a71044b8e83d05eacf23301618a6a6aa7c0205"}, {"audio": 0, "start": 176687, "crunched": 0, "end": 176810, "filename": "/.git/objects/eb/5f2a4a27cd1bfa81433c85e45def360a810c0d"}, {"audio": 0, "start": 176810, "crunched": 0, "end": 177188, "filename": "/.git/objects/ee/e05b3824ce5e70b956e32ea96b59c5f4b20da0"}, {"audio": 0, "start": 177188, "crunched": 0, "end": 177718, "filename": "/.git/objects/f3/fbe4d5ec511e797e9e7376315feb2706fa408f"}, {"audio": 0, "start": 177718, "crunched": 0, "end": 178100, "filename": "/.git/objects/fa/6358dcef47b8e2143d94dda9f2b62dd68087c3"}, {"audio": 0, "start": 178100, "crunched": 0, "end": 186397, "filename": "/.git/objects/fe/4328b6accff5ea1c2554ef0148814ff3203ca4"}, {"audio": 0, "start": 186397, "crunched": 0, "end": 186597, "filename": "/.git/objects/fe/6776aba5b810035dd9b7be83220ec795fd03ed"}, {"audio": 0, "start": 186597, "crunched": 0, "end": 186638, "filename": "/.git/refs/heads/master"}, {"audio": 0, "start": 186638, "crunched": 0, "end": 186679, "filename": "/.git/refs/remotes/origin/master"}, {"audio": 0, "start": 186679, "crunched": 0, "end": 206171, "filename": "/fonts/font.ttf"}, {"audio": 0, "start": 206171, "crunched": 0, "end": 233752, "filename": "/graphics/sprites.png"}, {"audio": 0, "start": 233752, "crunched": 0, "end": 239900, "filename": "/lib/.DS_Store"}, {"audio": 0, "start": 239900, "crunched": 0, "end": 242966, "filename": "/lib/class.lua"}, {"audio": 0, "start": 242966, "crunched": 0, "end": 250195, "filename": "/lib/push.lua"}, {"audio": 1, "start": 250195, "crunched": 0, "end": 282519, "filename": "/sounds/alien_shot.wav"}, {"audio": 1, "start": 282519, "crunched": 0, "end": 392195, "filename": "/sounds/death.wav"}, {"audio": 1, "start": 392195, "crunched": 0, "end": 431577, "filename": "/sounds/explosion.wav"}, {"audio": 1, "start": 431577, "crunched": 0, "end": 467775, "filename": "/sounds/fire.wav"}, {"audio": 0, "start": 467775, "crunched": 0, "end": 469374, "filename": "/src/Alien.lua"}, {"audio": 0, "start": 469374, "crunched": 0, "end": 470000, "filename": "/src/constants.lua"}, {"audio": 0, "start": 470000, "crunched": 0, "end": 470344, "filename": "/src/Dependencies.lua"}, {"audio": 0, "start": 470344, "crunched": 0, "end": 471964, "filename": "/src/Player.lua"}, {"audio": 0, "start": 471964, "crunched": 0, "end": 473196, "filename": "/src/Projectile.lua"}, {"audio": 0, "start": 473196, "crunched": 0, "end": 474950, "filename": "/src/StateMachine.lua"}, {"audio": 0, "start": 474950, "crunched": 0, "end": 476313, "filename": "/src/Util.lua"}, {"audio": 0, "start": 476313, "crunched": 0, "end": 476998, "filename": "/src/states/game/BaseState.lua"}, {"audio": 0, "start": 476998, "crunched": 0, "end": 485754, "filename": "/src/states/game/PlayState.lua"}, {"audio": 0, "start": 485754, "crunched": 0, "end": 487214, "filename": "/src/states/game/ScoreState.lua"}, {"audio": 0, "start": 487214, "crunched": 0, "end": 488379, "filename": "/src/states/game/TitleScreenState.lua"}], "remote_package_size": 488379, "package_uuid": "b19dfe95-5c22-408c-9ee3-731cc20df4f3"});

})();
