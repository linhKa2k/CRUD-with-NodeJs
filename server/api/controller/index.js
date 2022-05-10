const StudentModel = require("../model/index");
exports.getData = async (req, res) => {
  try {
    let data = await StudentModel.find({});
    res.send({ data });
  } catch (error) {
    res.send(error);
  }
};
exports.addDada = async (req, res) => {
  try {
    let name = req.body.name;
    let data = await StudentModel.create({ name: name });
    res.send({ data });
  } catch (error) {
    res.send(error);
  }
};
exports.deletaData = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await StudentModel.findByIdAndDelete(id);
    res.send({ data });
  } catch (error) {
    res.send(error);
  }
};
exports.udateData = async (req, res) => {
  try {
    let id = req.params.id;
    let name = req.body.name;
    let data = await StudentModel.findByIdAndUpdate(id, { name: name });
    res.send({ data });
  } catch (error) {
    res.send(error);
  }
};

exports.searchData = async (req, res) => {
  try {
    let text = req.query.name;
    let data = await StudentModel.find({
      name: { $regex: text, $options: "i" },
    });
    res.send({ data });
  } catch (error) {
    res.send(error);
  }
};

exports.paginationData = async (req, res) => {
  try {
    const actiPage = parseInt(req.query.actiPage);
    const limit = parseInt(req.query.limit);
    const posts = await StudentModel.countDocuments();
    const skip = (actiPage - 1) * limit;
    console.log(actiPage, limit, posts, skip);
    const totalPage = Math.ceil(posts / limit);
    let data = await StudentModel.find().skip(skip).limit(limit);
    res.send({
      actiPage,
      totalPage,
      data,
    });
  } catch (error) {
    res.send(error);
  }
};

exports.searchPaginationData = async(req, res)=>{
    try {
        const actiPage= parseInt(req.query.actiPage)
        const limit=parseInt(req.query.limit)
        let textSearch = req.query.name

        let totalSearch = await StudentModel.countDocuments({name:{$regex:textSearch,$options:'i'}});

        const skip = (actiPage - 1) * limit;
        console.log(actiPage,limit,totalSearch,skip)
        const totalPage = Math.ceil(totalSearch / limit);
        let data= await StudentModel.find({name:{$regex:textSearch,$options:'i'}}).skip(skip).limit(limit)
        res.send({
            actiPage,
            totalPage,
            data,
            textSearch
        });
    } catch (error) {
        res.send(error)
    }
}
