const catImageUploadController = async (req, res) => {
    // userID would come from verified and decoded JWT
    // const userID = req.userID;

    //extract request data
    // const {imgBase64, fileName} = req.body;

    try {
        //typically start session to enable transactions

        //call to image AI service
        const aiResult = await new Promise((resolve) => setTimeout(() => resolve({cat: "Scottish Fold"}), 60000),);

        console.log("aiResult", aiResult)

        //typically commit transaction here

        //return successful response
        return res.status(200).json({success: true, result: aiResult});

    } catch (err) {
        console.log("ERROR: catImageUploadController", err)
        return res.status(500).json({success: false, message: "Server Error"});
    } finally {
        //typically end session
    }

};

module.exports = {catImageUploadController};
