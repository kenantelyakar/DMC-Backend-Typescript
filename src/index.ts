import express, {Express, NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';
import {AssemblyServices} from "./srv/impl/component/AssemblyServices";
import {InductionComponent} from "./srv/dto/induction/component/InductionComponent";
import {ApiResponse} from "./srv/dto/ApiResponse";
import {db} from "./db";
import * as XLSX from 'xlsx';
import formidable from 'formidable';
import {NCBatchUpload} from "./srv/dto/batchUpload/NCBatchUpload";
import {NCUploadService} from "./srv/impl/batchUpload/NCUploadService";

dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.get('/getBomBySfc', (req: Request, res: Response, next :NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    let plant  = req.query.plant as string;
    let sfc    = req.query.sfc as string;
    AssemblyServices.getBOMInfoBySfc(plant,sfc).then((v: ApiResponse)=>{
        if(v.status !== 200 && v.status !== 201) {
            if (typeof v.status === "number") {
                res.status(v.status);
            }
            else res.status(500);
            res.json(v);
        }
        else
            res.json(v);
    }).catch(err => next(err));
});
app.get('/checkInductionComponentEntry', (req: Request, res: Response, next :NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    let sfcBo    = req.query.sfc as string;
    let operationBo    = req.query.operation as string;
    let resourceBo    = req.query.resource as string;
    AssemblyServices.checkInductionComponentEntry(sfcBo,operationBo,resourceBo).then((v: ApiResponse)=>{
        if(v.status !== 200 && v.status !== 201) {
            if (typeof v.status === "number") {
                res.status(v.status);
            }
            else res.status(500);
            res.json(v);
        }
        else
            res.json(v);
    }).catch(err => next(err));
});

app.post('/saveInductionComponents',(req: Request, res: Response, next: NextFunction) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    let params = JSON.parse(Object.keys(req.body)[0]).params;
    let component = params.componentsList as InductionComponent[];
    let plant = params.site as string;
    let user = params.insUser as string;
    let sfc = params.sfc as string;
    let shopOrder  = params.shopOrder as string;
    let operation = params.operation as string;
    let resource = params.resource as string;
    let material = params.resource as string;
    AssemblyServices.saveInductionComponents(sfc,shopOrder,operation,resource,material,component,plant,user).then((v:ApiResponse)=>{
        if(v.status !== 200 && v.status !== 201) {
            if (typeof v.status === "number") {
                res.status(v.status);
            }
            else res.status(500);
            res.json(v);
        }
        else
            res.json(v);
    }).catch(err=> next(err));
});
app.post('/createNCCodesBatch',(req: Request, res: Response, next: NextFunction) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    let params = JSON.parse(Object.keys(req.body)[0]).params;
    let component = params as NCBatchUpload[];
    NCUploadService.uploadBatch(component).then((v:ApiResponse)=>{
        if(v.status !== 200 && v.status !== 201) {
            if (typeof v.status === "number") {
                res.status(v.status);
            }
            else res.status(500);
            res.json(v);
        }
        else
            res.json(v);
    }).catch(err=> next(err));
});
app.post('/getExcelToJson',(req: Request, res: Response, next: NextFunction) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    const form = formidable({});
    form.parse(req, (err, fields, files) => {
            if (err) {
                next(err);
                return;
            }
            let excelBinary = files.myFileUpload;
            let wb: XLSX.WorkBook;
            if (excelBinary) {
                // @ts-ignore
                wb = XLSX.readFile(excelBinary.path);
                wb.SheetNames.forEach(function (sheetName) {
                    var oExcelRow = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]); // this is the required data in Object format
                    var sJSONData = JSON.stringify(oExcelRow); // this is the required data in String format
                    res.send(sJSONData);
                });
            }
        })
    });

app.get('/createTables',(req:Request, res:Response)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    db.sfcAssy.create();
    res.json({
        message:"success"
    });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at ${port}`);
});
