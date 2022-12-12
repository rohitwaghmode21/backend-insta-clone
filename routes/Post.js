const router = require("express").Router();
const formidable = require("formidable");

const multer = require('multer');
const { storage } = require("../cloudinary")
const upload = multer({ storage })

const PostData = require("../models/Post")
const error = ""

router.post("/", upload.single('file'), async (req, res) => {
  //console.log(req.file,req.body);
  const { name, description, location, date } = req.body;
  //console.log(path)
  // const data= await PostData.create(req.body);
  try {
    const { path, filename } = req.file;
    const user = await PostData.create({
      name,
      description,
      location,
      date,
      likes: 0,
      image: { url: path, filename: filename },
    });
    res.json({ ok: "send " })
  } catch (e) {
    res.json({ error: e.message })
  }

});

router.get("/", async (req, res) => {
  try{
    const data = await PostData.find();
     res.json(data)
  }catch(e)
  {
    res.json({name:"error in loading data"})
  }
  
})



module.exports = router