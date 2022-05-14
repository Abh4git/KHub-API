const config = require("../config/auth.config");
const db = require("../models");
const Content = db.content;




exports.getAllContent = (req, res) => {
Content.find()
	//.populate("roles")
	.exec((err, content) => {
	if (err) {
		res.status(500).send({ message: err });
		return;
	}

	if (!content) {
		return res.status(404).send({ message: "Content Not found." });
	}

	
	res.status(200).send(content);
	});
};

exports.searchContent = (req, res) => {
	let titleval= req.params.title
	Content.find({title:titleval})
		//.populate("roles")
		.exec((err, content) => {
		if (err) {
			res.status(500).send({ message: err });
			return;
		}
	
		if (!profile) {
			return res.status(404).send({ message: "Content Not found." });
		}
	
		
		res.status(200).send(content);
		});
	};
	

