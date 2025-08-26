import express from "express";

const app = express();
app.use(express.json());

// LINE の Webhook 受け取りエンドポイント
app.post("/webhook", (req, res) => {
  console.log("LINE Event:", req.body);

  // LINE には200 OKを返す必要あり
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

// api/webhook.js  ← Vercel では "api" フォルダがエンドポイントになる
export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("LINE Event:", req.body);

    // LINE サーバーに200を返す
    res.status(200).send("OK");
  } else {
    res.status(405).send("Method Not Allowed");
  }
}


  
});
