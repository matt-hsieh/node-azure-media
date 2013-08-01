var Very = require('verymodel');
var common = require('./common');
var Asset = require('./asset');
var AccessPolicy = require('./accesspolicy');
// http://msdn.microsoft.com/en-us/library/windowsazure/hh974308.aspx

module.exports = new Very.VeryModel({
    Id: {},
    Name: {type: Very.VeryType().len(4000)},
    ExpirationDateTime: {type: 'date'},
    Type: {type: Very.VeryType().isInt().isIn([0, 1, 2]), required: true},
    Path: {static: true},
    BaseUri: {static: true},
    ContentAccessComponent: {static: true},
    AccessPolicyId: {static: true},
    AssetId: {static: true},
    StartTime: {type: 'date'},
    AssetPolicy: {model: AccessPolicy, static: true},
    Asset: {model: Asset, static: true},
});