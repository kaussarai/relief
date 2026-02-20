const http = require('http');

const server = http.createServer((req, res) => {
    // Настройки, чтобы сайт мог достучаться до сервера
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            const data = JSON.parse(body);
            const msg = data.message.toLowerCase();
            let reply = "";

            // Логика "Эмпатии"
            if (msg.includes("грустно") || msg.includes("плохо") || msg.includes("плачу")) {
                reply = "Мне очень жаль, что ты так себя чувствуешь. Помни, что после дождя всегда бывает радуга. Я рядом, хочешь выговориться?";
            } else if (msg.includes("устала") || msg.includes("бесит") || msg.includes("тяжело")) {
                reply = "Похоже, выдался непростой день. Ты имеешь полное право на отдых. Сделай глубокий вдох, ты справляешься гораздо лучше, чем тебе кажется.";
            } else if (msg.includes("рада") || msg.includes("счастлив") || msg.includes("круто")) {
                reply = " Как здорово! Твоя радость передается даже мне через экран. Расскажи подробнее, что случилось хорошего?";
            } else {
                reply = "Я тебя внимательно слушаю. Твои чувства важны. Расскажи больше, что у тебя на душе?";
            }

            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            res.end(JSON.stringify({ answer: reply }));
        });
    }
});

const port = process.env.PORT || 3000;
server.listen(port, "0.0.0.0", () => {
    console.log(`Сервер запущен на порту ${port}`);
});