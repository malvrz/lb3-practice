'use strict';

module.exports = function(Tweet) {
    Tweet.patchTweets = async function(req, id, content){
        const filter = {
            _id: id,
            personId: req.accessToken.userId
        }
        return await Tweet.updateAll(filter, {content})
    }
    Tweet.remoteMethod(
        'patchTweets', {
            http: {
                path: '/:id',
                verb: 'patch'
            },
            accepts: [
                {arg: 'req', type: 'object', http: {source: 'req'}},
                {arg: 'id', type: 'string', required: true},
                {arg: 'content', type: 'string', required: true}
            ],
            returns: {args: 'data', type: 'Tweet', root: true}
        }
    )

    Tweet.disableRemoteMethodByName('prototype.patchAttributes')
    Tweet.disableRemoteMethodByName('replaceById')
    Tweet.disableRemoteMethodByName('patchOrCreate')
    Tweet.disableRemoteMethodByName('replaceOrCreate')
    Tweet.disableRemoteMethodByName('create')
    Tweet.disableRemoteMethodByName('exists')
    Tweet.disableRemoteMethodByName('count')
    Tweet.disableRemoteMethodByName('findOne')
    Tweet.disableRemoteMethodByName('updateAll')
    Tweet.disableRemoteMethodByName('upsertWithWhere')
    Tweet.disableRemoteMethodByName('createChangeStream')

    Tweet.disableRemoteMethodByName('prototype.__findById__person')
    Tweet.disableRemoteMethodByName('prototype.__get__person')
    
};
