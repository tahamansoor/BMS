import express from "express";
import product from "./product";
import user from "./user";
import swaggerDocs from "./swagger";
import stock from "./stock";
import sale from "./sale";
const app = express();

app.use(express.json());

app.use("/product", product);
app.use("/user", user);
app.use("/stock", stock);
app.use("/sale", sale);

app.listen(3000, () => {
	console.log("app started");
});
swaggerDocs(app, 3000);
