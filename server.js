const express = require('express');
const cors = require('cors');
const app = express();

// Разрешаем сайту общаться с сервером
app.use(cors());
app.use(express.json());

// Логика ответов (поддержка)
app.post('/', (req, res) => {
    const msg = req.body.message ? req.body.message.toLowerCase() : "";
    let reply = "";

    if (msg.includes("грустно") || msg.includes("плохо") || msg.includes("плачу")) {
        reply = "Мне очень жаль, что ты так себя чувствуешь. Помни, что после дождя всегда бывает радуга. Я рядом, хочешь выговориться?";
    } else if (msg.includes("устала") || msg.includes("бесит") || msg.includes("тяжело")) {
        reply = "Похоже, выдался непростой день. Ты имеешь полное право на отдых. Сделай глубокий вдох, ты справляешься гораздо лучше, чем кажется.";
    } else if (msg.includes("привет") || msg.includes("здравствуй")) {
        reply = "Привет! Я Chat Relief. Я здесь, чтобы выслушать тебя и поддержать. Как ты себя чувствуешь?";
    } else {
        reply = "Я тебя внимательно слушаю. Твои чувства важны. Расскажи подробнее, что у тебя на душе?";
    }

    res.json({ answer: reply });
});

// Настройка порта специально для Render
// ВАЖНО: используем app.listen, а не server.listen
const PORT = process.env.PORT || 10000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Сервер Chat Relief запущен на порту ${PORT}`);
});
