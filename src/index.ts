import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
/*ROUTE IMPORTS */
import dashboardRoutes from "./routes/dashboardRoutes"
import productRoutes from "./routes/productRoutes"
import userRoutes from "./routes/userRoutes"
import expenseRoutes from "./routes/expenseRoutes"
/*CONFIGURATION */
dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
app.use(cors());

/* ROUTES */
app.use("/dashboard",dashboardRoutes)
app.use("/products",productRoutes)
app.use("/users",userRoutes)
app.use("/expenses",expenseRoutes)
/*SERVER */

const port = process.env.PORT || 3001;

app.listen(port, () => {   
    console.log(`Server running on port ${port}`);
});

