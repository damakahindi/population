const Location = require('../models/population');

const PopulationCtrl = {
  create(req, res) {
    if (!req.body.name) {
      return res.status(400).send({ error: 'Name required' });
    }

    if (!req.body.male) {
      return res.status(400).send({ error: 'Population is required' });
    }

    if (!req.body.female) {
      return res.status(400).send({ error: 'Population is required' });
    }

    const loc = new Location();
    loc.name = req.body.name;
    loc.male = req.body.male;
    loc.female = req.body.female;

    loc.save((error, location) => {
      if (error) {
        return res.status(500).send(error);
      }
      return res.status(201).send(location);
    });
  },
  all(req, res) {
    Location.find({ virtuals: true }, (error, location) => {
      if (error) {
        return res.status(500).send(error);
      }
      return res.status(200).send(location);
    });
  },
  get(req, res) {
    Location.findById(req.params.id, (error, location) => {
      if (error) {
        return res.status(500).send(error);
      }
      if (location) { return res.status(200).send(location); }
      return res.status(404).send(location);
    });
  },
  update(req, res) {
    Location.findById({ _id: req.params.id }, (error, location) => {
      if (error) {
        return res.status(500).send(error);
      }
      if (req.body.name) {
        location.name = req.body.name;
      }
      if (req.body.male) {
        location.male = req.body.male;
      }

      if (req.body.female) {
        location.male = req.body.female;
      }
      location.save((error) => {
        if (error) {
          return res.status(500).send(error);
        }
        return res.status(200).send(location);
      });
    });
  },
  delete(req, res) {
    Location.remove({ _id: req.params.id }, (error, location) => {
      if (error) {
        return res.status(500).send(error);
      }
      return res.status(200).send(location);
    });
  },
};

module.exports = PopulationCtrl;
