const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Логика ответов
app.post('/', (req, res) => {
    const msg = req.body.message ? req.body.message.toLowerCase() : "";
    let reply = "";

    if (msg.includes("грустно") || msg.includes("плохо") || msg.includes("плачу")) {
        reply = "Мне очень жаль, что ты так себя чувствуешь. Помни, что после дождя всегда бывает радуга. Я рядом.";
    } else if (msg.includes("устала") || msg.includes("бесит") || msg.includes("тяжело")) {
        reply = "Похоже, выдался непростой день. Ты имеешь право на отдых. Дыши, ты справляешься!";
    } else {
        reply = "Я тебя внимательно слушаю. Твои чувства важны для меня. Расскажи подробнее?";
    }

    res.json({ answer: reply });
});

// Вместо фиксированного 3000 используем переменную окружения
const port = process.env.PORT || 10000; 

server.listen(port, "0.0.0.0", () => {
    console.log(`Сервер запущен и слушает порт ${port}`);
});
