import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
const app = express();



app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tomadepedidos",
});
app.post("/insertorden",(req,res)=>{
    const id_cliente=req.body.id_cliente
    db.query("INSERT INTO orden(id_orden,estado_orden,total_orden,id_cliente) VALUES(?,?,?,?)", [id_cliente,"pendiente",0,id_cliente], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("dato regitrado con exito");
      }
    })
}
)

app.post("/insertproduct", (req, res) => {
    const id_orden=req.body.id_orden
    const cart=req.body.cart
    const values=cart.map(producto=>[id_orden,producto.id,producto.quantity])
    console.log(cart)
    db.query("INSERT INTO ordenproducto(id_orden,id_produc,cantidad) VALUES ?", [values], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("producto agregado a la orden");
      }
    });
   
  
});

app.post("/carrito",(req,res)=>{
  const id_orden=req.body.id_orden
  db.query("select  p.id_produc as id, p.nombre_produc as title ,p.precio_produc as price,p.Imagen as thumbnail,o.cantidad as quantity from ordenproducto o,producto p where id_orden=? and o.id_produc =p.id_produc ",[id_orden],(err,result)=>{
  if(err){
    console.log(err)
  }else{
    res.send(result)
  }
  })
})
app.post("/insertclient",(req,res)=>{
    const nombre_cliente=req.body.nombre_cliente
    const lugar=req.body.lugar
   db.query("INSERT INTO cliente(nombre_cliente,lugar) VALUES(?,?)", [nombre_cliente,lugar], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("dato regitrado con exito");
      }
    });
})


app.post("/checkadmin", (req, res) => {
  const id_adminis = req.body.id_adminis;
  const password_adminis = req.body.password_adminis;
  db.query("SELECT * FROM adminis WHERE id_adminis = ? AND password_adminis = ?", [id_adminis, password_adminis], (err, result) => {
    if (err) {
      console.log(err);
      res.send({ success: false });
    } else {
      if (result.length > 0) {
        res.send({ success: true });
      } else {
        res.send({ success: false });
      }
    }
  });
});

app.post("/getClientData",(req,res)=>{
  const id_cliente=req.body.id_cliente
  db.query('SELECT nombre_cliente,lugar FROM cliente WHERE id_cliente= ?',[id_cliente],(err,result)=>{
    if(err){
      console.log(err)
    }else{
    res.send(result)
    }
  }
  )
})

app.post("/getIdClient",(req,res)=>{
  const nombre_cliente=req.body.nombre_cliente
  const lugar=req.body.lugar
  db.query('SELECT id_cliente FROM cliente WHERE nombre_cliente = ? AND lugar= ?',[nombre_cliente,lugar],(err,result)=>{
    res.send(result)}
  )
})
app.listen(3001, () => {
  console.log("corriendo en el puerto 3001");
});
