exports.deleteOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      //!
      res.status(404).send("No document found with that id");
      return;
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

exports.addOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (err) {
    res.status(400);
    next(err);
  }
};

exports.updateOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body);

    if (!doc) {
      //!
      res.status(404).send("No document found with that id");
      return;
    }

    res.status(200).json({
      status: "success",
      data: doc,
    });
  } catch (error) {
    next(error);
  }
};

exports.getOnePopulate = (Model, populate) => async (req, res, next) => {
  try {
    let doc = await Model.findById(req.params.id).populate(populate).lean(); //populate theo ten thuoc tinh k phai ten bang
    if (doc) {
      res.status(200).json({
        doc,
      });
    } else {
      res.status(400).json({
        status: "Can find any doc with that id!",
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "Server can handle this request right now!",
    });
    next(error);
  }
};

exports.getOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findById(req.params.id).lean();

    if (!doc) {
      //!
      res.status(404).send("No document found with that id");
      return;
    }

    res.status(200).json({
      status: "success",
      data: doc,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllPopulate = (Model, populate) => async (req, res, next) => {
  try {
    let docs = await Model.find({}).populate(populate).lean();
    if (docs) {
      res.status(200).json({
        docs,
      });
    } else {
      res.status(400).json({
        status: "Can not find!",
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "Server can handle this request right now!",
    });
    next(error);
  }
};

exports.getAll = (Model) => async (req, res, next) => {
  try {
    const docs = await Model.find();

    if (!docs) {
      //!
      res.status(404).send("No document found");
      return;
    }

    res.status(200).json({
      status: "success",
      data: docs,
    });
  } catch (error) {
    next(error);
  }
};
