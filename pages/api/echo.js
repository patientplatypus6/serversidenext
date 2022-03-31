export default function handler(req, res) {
    let echoid = req.body.id;
    let text = "hello " + echoid; 
    res.status(200).json({text: text})
}
