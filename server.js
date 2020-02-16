const koa = require("koa");
const koaRouter = require("koa-router");

const app = new koa();
const router = new koaRouter();

const version = "1";

router.get("/", async (ctx) => {
  ctx.body = "Hello World";
});

router.get("/version", async (ctx) => {
  ctx.body = "CD Version " + version;
});

app.use(router.routes());
app.listen(3000, "0.0.0.0");
