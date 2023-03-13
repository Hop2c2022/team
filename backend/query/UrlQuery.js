const mongoose = require('mongoose');
const Url = require('../database/model/url');
exports.CreateUrl = async (req, res) => {
    const { short_url, original_url } = req.body;
    const result = await new Url({
        original_url: original_url,
        short_url: short_url,
    }).save();
    console.log(result);
    return result;
};

exports.UrlDelete = async (req, res) => {
    const { Url_id } = req.params;
    const objId = new mongoose.Types.ObjectId(Url_id);
    const result = await Url.findById({ _id: objId });
    const resulto = await Url.findByIdAndRemove(result);
    return resulto;
};

exports.GetUrlById = async (req, res) => {
    const { Url_id } = req.params;
    const objId = new mongoose.Types.ObjectId(Url_id);
    const result = await Url.findById({ _id: objId });
    return result;
};
