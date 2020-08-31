cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
      "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
      "pluginId": "cordova-plugin-facebook4",
      "clobbers": [
        "facebookConnectPlugin"
      ]
    },
    {
      "id": "userexperior-cordova-plugin.UserExperiorPlugin",
      "file": "plugins/userexperior-cordova-plugin/www/UserExperiorPlugin.js",
      "pluginId": "userexperior-cordova-plugin",
      "clobbers": [
        "UserExperior"
      ]
    },
    {
      "id": "cordova-uxcam.UXCam",
      "file": "plugins/cordova-uxcam/www/UXCam.js",
      "pluginId": "cordova-uxcam",
      "clobbers": [
        "UXCam"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-facebook4": "6.4.0",
    "userexperior-cordova-plugin": "1.2.16",
    "cordova-uxcam": "3.3.0"
  };
});