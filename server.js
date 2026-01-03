import express from 'express';
import bcrypt from 'bcryptjs';

const app = express();

app.use(express.json());


//Method: Post
//Api: http://localhost:5000/registration

app.post('/registraion', async (req, res) => {

    const { UserName, UserEmail, UserPass } = req.body;

    const salt = await bcrypt.genSalt(10);

    let Hashpass = await bcrypt.hash(UserPass, salt);

    let ViewData = {
        UserName,
        UserEmail,
        UserPass: Hashpass
    }

    return res.send(ViewData);
})



app.listen(5000, () => {
    console.log("Server is running successfully on port 5000");
})