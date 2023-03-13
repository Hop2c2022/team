const Post = require('../database/model/url');
const { CreateUrl, UrlDelete, GetUrlById } = require('../query/urlQuery');

exports.urlGetController = async (req, res) => {
    const result = await Post.find();
    res.status(201).send({ data: result });
};

exports.urlPostController = async (req, res) => {
    try {
        await CreateUrl(req);
        res.status(201).send(' Successfully created new url ');
    } catch (err) {
        res.status(404).send(err.message);
    }
};

exports.urlDeleteController = async (req, res) => {
    try {
        await UrlDelete(req);
        res.status(201).send(' Successfully deleted  url ');
    } catch (err) {
        res.send(err.message);
    }
};

exports.urlGetControllerById = async (req, res) => {
    try {
        const result = await GetUrlById(req);
        res.status(201).send(result);
    } catch (err) {
        res.send(err.message);
    }
};
