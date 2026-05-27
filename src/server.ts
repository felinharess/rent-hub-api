import creatApp from './app';

async function start() {
    const app = await creatApp();
    const port = process.env.PORT

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    })
}

start();