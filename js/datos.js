var SERIES=[
 {id:'all',name:'Todos',sub:'Gama completa'},
 {id:'oc',name:'En nave ahora',sub:'John Deere de ocasión'},
 {id:'tel',name:'Telescópicas',sub:'Merlo · JCB'},
 {id:'3',name:'Serie 3',sub:'Compactos 25–46 CV'},
 {id:'4',name:'Serie 4',sub:'Compactos 49–75 CV'},
 {id:'5',name:'Serie 5',sub:'Utilitarios 50–125 CV'},
 {id:'5G',name:'Serie 5G',sub:'Viña y frutal'},
 {id:'6',name:'Serie 6',sub:'Polivalentes 90–250 CV'},
 {id:'7',name:'Serie 7',sub:'Alta potencia 270–350 CV'},
 {id:'8',name:'Serie 8',sub:'Gran cultivo 280–410 CV'},
 {id:'9',name:'Serie 9',sub:'Articulados 490–640 CV'}
];
// Datos de Maquinaria Navatractor (stock real 17-10-2026 + gama John Deere nueva + accesorios)
var T=[
 ['3025E','3',25,'3 cil. 1,1 L','Hidrostática 2 gamas','≈ 0,7 t','Fincas, jardinería, pequeñas explotaciones.','ok'],
 ['3038E','3',37,'3 cil. 1,5 L','Hidrostática 2 gamas','≈ 0,8 t','Huerta, ganadería pequeña, mantenimiento.','con'],
 ['3039R','3',37,'3 cil. 1,5 L','eHydro 3 gamas','≈ 1,0 t','Compacto con cabina para uso diario.','con'],
 ['3046R','3',45,'3 cil. 1,8 L','eHydro 3 gamas','≈ 1,1 t','Pala y aperos ligeros con más empuje.','ped'],
 ['4052M','4',49,'3 cil. 2,1 L','eHydro / PowrReverser','≈ 1,6 t','Ganadería, viveros, municipios.','con'],
 ['4066M','4',64,'3 cil. 2,1 L turbo','eHydro / PowrReverser','≈ 1,7 t','Trabajo con pala intensivo.','con'],
 ['4066R','4',64,'3 cil. 2,1 L turbo','eHydro 3 gamas','≈ 1,8 t','Compacto premium con cabina.','ok'],
 ['4075R','4',75,'3 cil. 2,1 L turbo','eHydro 3 gamas','≈ 1,9 t','El compacto más potente de la gama.','con'],
 ['5050E','5',50,'3 cil. 2,9 L','SyncShuttle 9/3','≈ 2,2 t','Tractor sencillo para tareas generales.','ok'],
 ['5067E','5',67,'3 cil. 2,9 L turbo','SyncShuttle / PowrReverser','≈ 2,6 t','Ganadería y explotación mixta.','ok'],
 ['5075E','5',75,'3 cil. 2,9 L turbo','PowrReverser 12/12','≈ 2,7 t','Polivalente económico más vendido.','ped'],
 ['5090M','5',90,'4 cil. 4,5 L','PowrQuad Plus / AutoQuad','≈ 4,0 t','Pala, transporte y aperos medianos.','con'],
 ['5100M','5',100,'4 cil. 4,5 L','PowrQuad Plus / AutoQuad','≈ 4,1 t','Ganadería con pala intensiva.','ok'],
 ['5115M','5',115,'4 cil. 4,5 L','AutoQuad Plus 24/24','≈ 4,3 t','Mixto: campo, forraje y transporte.','con'],
 ['5100R','5',100,'4 cil. 4,5 L','Command8 / AutoPowr','≈ 4,4 t','Utilitario premium y maniobrable.','con'],
 ['5125R','5',125,'4 cil. 4,5 L','Command8 / AutoPowr','≈ 4,6 t','El 5 más completo, listo para precisión.','ped'],
 ['5075GF','5G',75,'4 cil. 3,4 L','PowrReverser 24/12','≈ 2,5 t','Frutal y viña ancha.','con'],
 ['5090GV','5G',90,'4 cil. 3,4 L','PowrReverser 24/12','≈ 2,4 t','Viña estrecha, ancho mínimo.','con'],
 ['5105GN','5G',105,'4 cil. 3,4 L','PowrReverser 24/12','≈ 2,6 t','Frutal y viña con más potencia.','ped'],
 ['6090M','6',90,'4 cil. 4,5 L','PowrQuad Plus / AutoQuad','≈ 4,6 t','El 6 más ligero y ágil.','con'],
 ['6120M','6',120,'4 cil. 4,5 L','AutoQuad Plus / AutoPowr','≈ 5,0 t','Polivalente para ganadería y campo.','ok'],
 ['6155M','6',155,'6 cil. 6,8 L','AutoQuad Plus / AutoPowr','≈ 6,0 t','Potencia de 6 cilindros, chasis medio.','con'],
 ['6195M','6',195,'6 cil. 6,8 L','AutoPowr','≈ 7,0 t','El M más potente: transporte y forraje.','con'],
 ['6R 130','6',130,'4 cil. 4,5 L','DirectDrive / AutoPowr','≈ 5,6 t','Gama alta, cabina y guiado premium.','con'],
 ['6R 150','6',150,'6 cil. 6,8 L','DirectDrive / AutoPowr','≈ 6,9 t','Equilibrio potencia/peso para todo.','ped'],
 ['6R 185','6',185,'6 cil. 6,8 L','DirectDrive / AutoPowr','≈ 7,8 t','Labores pesadas y transporte rápido.','con'],
 ['6R 215','6',215,'6 cil. 6,8 L','AutoPowr','≈ 8,5 t','Gran explotación y contratistas.','con'],
 ['6R 250','6',250,'6 cil. 6,8 L','AutoPowr','≈ 9,0 t','El 6R más potente de la familia.','ped'],
 ['7R 270','7',270,'6 cil. 9,0 L','e23 PowerShift / AutoPowr','≈ 11 t','Grandes superficies, aperos pesados.','con'],
 ['7R 310','7',310,'6 cil. 9,0 L','e23 PowerShift / AutoPowr','≈ 11,5 t','Contratistas y gran cultivo.','con'],
 ['7R 350','7',350,'6 cil. 9,0 L','AutoPowr','≈ 12 t','Máxima potencia en chasis rígido 7.','ped'],
 ['8R 280','8',280,'6 cil. 9,0 L','e23 / AutoPowr','≈ 12,5 t','Tracción de grandes aperos.','con'],
 ['8R 340','8',340,'6 cil. 9,0 L','e23 / AutoPowr','≈ 13 t','Preparación de suelo a gran escala.','con'],
 ['8RX 410','8',410,'6 cil. 13,6 L','e23 PowerShift','≈ 17 t','Cuatro orugas: tracción y poca compactación.','ped'],
 ['9R 490','9',490,'6 cil. 13,6 L','e18 PowerShift','≈ 22 t','Articulado para máxima superficie diaria.','ped'],
 ['9R 590','9',590,'6 cil. 13,6 L','e18 PowerShift','≈ 23 t','Labores profundas y aperos gigantes.','ped'],
 ['9RX 640','9',640,'6 cil. 13,6 L','e18 PowerShift','≈ 26 t','El más potente: cuatro orugas.','ped']
].map(a=>({m:a[0],s:a[1],cv:a[2],mot:a[3],tr:a[4],peso:a[5],uso:a[6],st:a[7],img:a[8]}));
var STOCK=[
 ['6920 S','oc',1,150,0,'6 cil. 6,8 L','AutoPowr / AutoQuad','2003–2007','Tripuntal delantero','6920s',1],
 ['6250R','oc',1,250,0,'6 cil. 6,8 L','AutoPowr / e23','2017–2021','Tripuntal y TDF delanteros','6250r'],
 ['6215R','oc',1,215,252,'6 cil. 6,8 L','AutoPowr / DirectDrive','2015–2021','Tripuntal delantero','6215r-a'],
 ['6195R','oc',1,195,235,'6 cil. 6,8 L','AutoPowr','2014–2021','Tripuntal delantero','6195r'],
 ['6190R','oc',1,190,0,'6 cil. 6,8 L','AutoPowr / DirectDrive','2014–2021','Tripuntal delantero','6190r'],
 ['6175R','oc',2,175,215,'6 cil. 6,8 L','AutoPowr / DirectDrive','2014–2021','Tripuntal delantero','6175r'],
 ['6170R','oc',1,170,0,'6 cil. 6,8 L','AutoPowr / e23','2014–2021','','6170r'],
 ['6155R','oc',1,155,168,'6 cil. 6,8 L','AutoPowr / DirectDrive','2014–2021','Tripuntal delantero','6155r'], // en la lista registrada figura como 6150R; la pegatina (dos lados) dice 6155R
 ['6135R','oc',4,135,0,'4 cil. 4,5 L','AutoQuad Plus / DirectDrive','2014–2021','Contrapeso delantero','6135r'],
 ['6125M','oc',2,125,0,'4 cil. 4,5 L','PowrQuad Plus / AutoQuad Plus','2013–2018','Pala John Deere H340 (≈1,6 t a plena altura)','6125m-pala'],
 ['6115M','oc',2,115,0,'4 cil. 4,5 L','PowrQuad Plus / AutoQuad Plus','2013–2018','Pala John Deere H310','6115m-pala'],
 ['6110RC','oc',1,110,0,'4 cil. 4,5 L','PowrQuad Plus / AutoQuad','2013–2016','','6110rc'],
 ['7820','oc',2,185,0,'6 cil. 6,8 L','AutoPowr / PowrQuad Plus','2003–2007','','7820'],
 ['7530 Premium','oc',1,195,0,'6 cil. 6,8 L','AutoPowr','2006–2010','','7530'],
 ['6930','oc',2,155,0,'6 cil. 6,8 L','AutoPowr / AutoQuad','2006–2010','','6930'],
 ['6830 Premium','oc',1,150,0,'6 cil. 6,8 L','AutoPowr / PowrQuad Plus','2006–2011','Tripuntal delantero','6830'],
 ['6630','oc',3,130,0,'6 cil. 6,8 L','AutoQuad','2006–2011','','6630'],
 ['6430 Premium','oc',1,115,0,'4 cil. 4,5 L','PowrQuad Plus / AutoQuad','2006–2012','Tripuntal delantero','6430'],
 ['6330','oc',2,105,0,'4 cil. 4,5 L','PowrQuad / AutoQuad','2006–2012','Pala Quicke','6330-pala'],
 ['6820','oc',2,135,0,'6 cil. 6,8 L','PowrQuad Plus / AutoQuad','2003–2006','Tripuntal delantero','6820'],
 ['6220','oc',2,90,0,'4 cil. 4,5 L','PowrQuad Plus / AutoQuad Plus','2002–2006','','6220'],
 ['7720','oc',1,165,0,'6 cil. 6,8 L','AutoPowr / PowrQuad Plus','2003–2007','','ilus-7720'],
 ['6620','oc',1,125,0,'6 cil. 6,8 L','PowrQuad Plus / AutoQuad','2002–2006','','ilus-6620'],
 ['6520','oc',1,115,0,'Consultar','PowrQuad Plus / AutoQuad','2002–2006','','ilus-6520'],
 ['5720','oc',1,90,0,'4 cil. 4,5 L','PowrQuad / SyncShuttle','2003–2007','','ilus-5720'],
 ['3350','oc',1,100,0,'6 cil. 5,9 L','Synchron 16/8','1987–1994','Clásico','ilus-3350'],
 ['Merlo','tel',1,0,0,'','','','Horquillas','merlo'],
 ['JCB','tel',2,0,0,'','','','Cazo de gran volumen','jcb']
].map(a=>({m:a[0],s:a[1],uds:a[2],cv:a[3],cvmax:a[4],mot:a[5],tr:a[6],anos:a[7],extra:a[8],img:a[9]?'img/stock/'+a[9]+'.jpg':'',dest:!!a[10],st:'ok',used:true}));
var UDS=STOCK.filter(t=>t.s==='oc').reduce((n,t)=>n+t.uds,0);
var ACC={
 'Palas':[
  ['Pala El León 410E','Cargador frontal con enganche rápido','Serie 6 · 6M · 6030'],
  ['Pala El León','Cargador frontal a estrenar','Según modelo'],
  ['Pala Metal-Technik','Cargador frontal con brazos y soportes','Según modelo']
 ],
 'Cazos':[
  ['Cazos','Para tierra, grano y materiales ligeros','Para las palas']
 ],
 'Pantalla para alpacas':[
  ['Pantalla para alpacas','Para mover alpacas con la pala','Para las palas']
 ],
 'Atomizador':[
  ['Atomizador','Tratamientos en viña y frutal','Tractores con TDF']
 ]
};

// Galerías del álbum «Tractores manuel» (18-10-2026). Sin fotos con matrícula ni personales.
var GAL={"6155R": ["img/g/6155r-1.jpg", "img/g/6155r-2.jpg", "img/g/6155r-3.jpg", "img/g/6155r-4.jpg", "img/g/6155r-5.jpg", "img/g/6155r-6.jpg", "img/g/6155r-7.jpg", "img/g/6155r-8.jpg"], "6110RC": ["img/g/6110rc-1.jpg", "img/g/6110rc-2.jpg", "img/g/6110rc-3.jpg", "img/g/6110rc-4.jpg", "img/g/6110rc-5.jpg", "img/g/6110rc-6.jpg"], "6430 Premium": ["img/g/6430-1.jpg", "img/g/6430-2.jpg", "img/g/6430-3.jpg", "img/g/6430-4.jpg", "img/g/6430-5.jpg", "img/g/6430-6.jpg", "img/g/6430-7.jpg"], "7530 Premium": ["img/g/7530-1.jpg", "img/g/7530-2.jpg", "img/g/7530-3.jpg", "img/g/7530-4.jpg", "img/g/7530-5.jpg", "img/g/7530-6.jpg", "img/g/7530-7.jpg", "img/g/7530-8.jpg"], "6520": ["img/g/6520-1.jpg", "img/g/6520-2.jpg", "img/g/6520-3.jpg", "img/g/6520-4.jpg", "img/g/6520-5.jpg", "img/g/6520-6.jpg"], "JCB": ["img/g/jcb-1.jpg", "img/g/jcb-2.jpg", "img/g/jcb-3.jpg", "img/g/jcb-4.jpg", "img/g/jcb-5.jpg"], "Merlo": ["img/g/merlo-1.jpg", "img/g/merlo-2.jpg", "img/g/merlo-3.jpg"]};
STOCK.forEach(t=>{t.fotos=GAL[t.m]||(t.img?[t.img]:[]);if(GAL[t.m])t.img=GAL[t.m][0]});
var GAL2={"5100r": ["img/g/5100r-1.jpg", "img/g/5100r-2.jpg", "img/g/5100r-3.jpg", "img/g/5100r-4.jpg", "img/g/5100r-5.jpg", "img/g/5100r-6.jpg", "img/g/5100r-7.jpg"], "5125r": ["img/g/5125r-1.jpg", "img/g/5125r-2.jpg", "img/g/5125r-3.jpg", "img/g/5125r-4.jpg"], "5820": ["img/g/5820-1.jpg", "img/g/5820-2.jpg", "img/g/5820-3.jpg", "img/g/5820-4.jpg"], "6110r": ["img/g/6110r-1.jpg", "img/g/6110r-2.jpg", "img/g/6110r-3.jpg", "img/g/6110r-4.jpg", "img/g/6110r-5.jpg", "img/g/6110r-6.jpg", "img/g/6110r-7.jpg"], "6320": ["img/g/6320-1.jpg"], "2450m": ["img/g/2450m-1.jpg", "img/g/2450m-2.jpg", "img/g/2450m-3.jpg"], "td5050": ["img/g/td5050-1.jpg", "img/g/td5050-2.jpg", "img/g/td5050-3.jpg"], "mf4260": ["img/g/mf4260-1.jpg", "img/g/mf4260-2.jpg", "img/g/mf4260-3.jpg", "img/g/mf4260-4.jpg"], "griselda": ["img/g/griselda-1.jpg", "img/g/griselda-2.jpg", "img/g/griselda-3.jpg"]};

// Añadidos el 19-10-2026 (fotos del álbum y del Drive; Dani: «mejor meterlos»). Fichas orientativas.
STOCK.push(...[
 ['6110R','oc',1,110,0,'4 cil. 4,5 L','PowrQuad Plus / AutoQuad Plus','2015–2021','','',0,'6110r'],
 ['6320','oc',1,100,0,'4 cil. 4,5 L','PowrQuad Plus / AutoQuad','2002–2007','','',0,'6320'],
 ['5125R','oc',1,125,0,'4 cil. 4,5 L','Command8 / AutoPowr','2014–2020','','',0,'5125r'],
 ['5100R','oc',1,100,0,'4 cil. 4,5 L','PowrQuad Plus / AutoQuad','2008–2013','','',0,'5100r'],
 ['2450M','oc',1,65,0,'4 cil. 3,9 L','Synchron 16/8','1987–1994','Clásico','',0,'2450m'],
 ['New Holland TD5050','oc',1,100,0,'4 cil. 4,5 L','12×12 inversor','2006–2012','','',0,'td5050','New Holland'],
 ['Massey Ferguson 4260','oc',1,80,0,'4 cil. 4,0 L','Inversor mecánico','1997–2003','Pala','',0,'mf4260','Massey Ferguson'],
 ['Remolque Griselda','oc',1,0,0,'','','','Basculante de dos ejes','',0,'griselda','Griselda']
].map(a=>({m:a[0],s:a[1],uds:a[2],cv:a[3],cvmax:a[4],mot:a[5],tr:a[6],anos:a[7],extra:a[8],img:GAL2[a[11]][0],fotos:GAL2[a[11]],dest:false,st:'ok',used:true,marca:a[12]||''})));
STOCK.forEach(t=>{if(t.s==='tel'){t.desc='Manipuladora telescópica de ocasión · granja, paja y carga'}});
STOCK.forEach(t=>{if(t.m==='6220'){t.fotos=(t.fotos||[t.img]).concat(GAL2['5820']);t.extra='Una unidad con pala'}});
STOCK.forEach(t=>{if(t.m==='6620'){t.img='img/g/6620-1.jpg';t.fotos=['img/g/6620-1.jpg']}if(t.m==='6220'){t.fotos=t.fotos.concat(['img/g/6220x-1.jpg'])}});
STOCK.forEach(t=>{if(t.m==='5720'){t.img='img/g/5720-1.jpg';t.fotos=['img/g/5720-1.jpg'];t.extra='Pala MX U306'}});
var NAVE_FOTOS=["img/g/nave-1.jpg", "img/g/nave-2.jpg"];
// Horas y precio confirmados por Javier (24-10-2026)
STOCK.forEach(t=>{if(t.m==='5100R'){t.horas=3000;t.precio=38000}if(t.m==='6215R'){t.horas=5700;t.precio=75000}});

// ===== Stock definitivo de Manuel y Javito (27-10-2026): unidades, horas, precios, extras y vendidos =====
// Cada unidad: [horas, precio, 'extras', vendida]. Precio 0 = «Consultar». Las fotos no se tocan (llegan por unidad).
var UNI={
 '6250R':[[7200,117000,'Tripuntal, suspensión delantera, suspensión trasera, equipo de aire, 50 km/h, cambio CommandPRO, ISOBUS, monitor grande, 4 neumáticos nuevos']],
 '6215R':[[5700,75000,'Tripuntal, suspensión delantera, suspensión en cabina, equipo de aire, 50 km/h, cambio AutoPowr, monitor grande, ISOBUS'],[5800,73000,'Tripuntal delantero, suspensión delantera, suspensión en cabina, 2 neumáticos traseros nuevos, cambio AutoPowr, equipo de aire, 50 km/h, ISOBUS']],
 '6210R':[[5900,65000,'Suspensión delantera, suspensión en cabina, equipo de aire, 50 km/h']],
 '6195R':[[7500,74000,'Tripuntal, suspensión delantera, suspensión en cabina, ISOBUS, equipo de aire, 50 km/h, cambio PowrQuad, 4 neumáticos nuevos'],[7600,73000,'Tripuntal delantero con TDF, suspensión delantera, suspensión en cabina, equipo de aire, 50 km/h, cambio PowrQuad']],
 '6190R':[[8000,65000,'Tripuntal, suspensión delantera, suspensión trasera, 50 km/h, equipo de aire, cambio AutoPowr, 2 neumáticos delanteros nuevos']],
 '6175R':[[7200,74000,'Tripuntal delantero, suspensión delantera, suspensión en cabina, 50 km/h, equipo de aire, cambio PowrQuad']],
 '6170R':[[7700,64000,'Suspensión delantera, suspensión en cabina, 50 km/h, equipo de aire, cambio PowrQuad']],
 '6155R':[[5200,75000,'Tripuntal delantero con TDF, suspensión delantera, suspensión trasera, 50 km/h, equipo de aire, cambio CommandPRO, monitor grande'],[5500,75000,'Tripuntal con TDF, suspensión delantera, suspensión trasera, equipo de aire, ISOBUS, 50 km/h, cambio CommandPRO, monitor grande'],[6100,73000,'Tripuntal delantero con TDF, suspensión delantera, suspensión en cabina, equipo de aire, 50 km/h, cambio AutoPowr'],[7400,70000,'Tripuntal delantero, suspensión delantera, suspensión en cabina, equipo de aire, 50 km/h, ISOBUS, cambio PowrQuad']],
 '6135R':[[7000,56000,'Suspensión delantera, suspensión trasera, creeper, cambio PowrQuad'],[7000,56000,'Suspensión delantera, 2 neumáticos delanteros nuevos']],
 '6110R':[[0,0,'',1]],
 '7820':[[8900,60000,'Suspensión delantera, cambio PowrQuad, 4 neumáticos nuevos']],
 '7530 Premium':[[7400,55000,'Suspensión delantera, suspensión trasera, 50 km/h, equipo de aire, cambio PowrQuad, 4 neumáticos nuevos'],[7700,55000,'Suspensión delantera, suspensión en cabina, cambio PowrQuad'],[7400,55000,'Suspensión delantera, suspensión en cabina, 4 neumáticos nuevos, 50 km/h, equipo de aire']],
 '6920 S':[[8700,41000,'Tripuntal delantero con TDF, suspensión delantera, suspensión en cabina, equipo de aire, 50 km/h']],
 '6930 Premium':[[8100,45000,'Suspensión delantera, suspensión en cabina, equipo de aire, 50 km/h']],
 '6830 Premium':[[8100,45000,'Suspensión delantera, suspensión trasera, 50 km/h, equipo de aire, 4 neumáticos nuevos']],
 '6630 Premium':[[7700,43000,'Suspensión delantera, equipo de aire, 50 km/h, 2 neumáticos delanteros nuevos']],
 '6430 Premium':[[7400,43000,'Tripuntal delantero con TDF, suspensión delantera, suspensión en cabina, cambio AutoPowr, 2 neumáticos delanteros nuevos']],
 '6330 Premium':[[7500,43000,'Pala Quicke, 4 neumáticos nuevos']],
 '6820':[[8000,41000,'Tripuntal delantero con TDF, suspensión delantera, suspensión en cabina']],
 '6220 Premium':[[8000,36000,''],[8000,38000,'Pala MX'],[8000,36000,'']],
 '6220 SE':[[5200,29000,'']],
 '6230 Premium':[[7500,43000,'Suspensión delantera, suspensión en cabina, pala MX, cambio AutoPowr']],
 '6620':[[8000,41000,'Tripuntal delantero con TDF, suspensión delantera, suspensión en cabina, 4 neumáticos nuevos'],[8000,41000,'Tripuntal delantero con TDF, suspensión delantera'],[8000,37500,'Suspensión delantera']],
 '6520':[[0,0,'',1],[8000,34500,'']],
 '6320':[[0,0,'',1]],
 '6150M':[[1600,56000,'Tripuntal delantero, suspensión delantera, 2 neumáticos delanteros nuevos']],
 '6125M':[[6100,56000,'Suspensión delantera, 2 neumáticos delanteros nuevos, pala John Deere']],
 '6115M':[[6000,56000,'Suspensión delantera, 2 neumáticos delanteros nuevos, pala John Deere'],[7000,53000,'Sin pala']],
 '6110RC':[[6000,54000,'Suspensión delantera, suspensión en cabina']],
 '5720':[[7100,38000,'Pala MX'],[7600,39000,'Pala John Deere, 4 neumáticos nuevos']],
 '5125R':[[9000,41000,'Suspensión delantera, creeper, anclajes de pala John Deere']],
 '5100R':[[3000,38000,''],[3000,39000,'Pala John Deere']],
 '3350':[[0,0,'']],
 '2450M':[[0,12000,'']],
 'New Holland TD5050':[[0,0,'']],
 'Massey Ferguson 4260':[[0,0,'']],
 'Renault Ares 640 RZ':[[0,30000,'Pala Tenias Evolution TE30 nueva']],
 'Merlo':[[0,26000,'']],
 'JCB':[[0,36000,''],[0,36000,''],[0,36000,'']]
};
// Nombres nuevos (se conserva la URL de siempre) y CV corregidos
var RENOMBRA={'6930':'6930 Premium','6630':'6630 Premium','6330':'6330 Premium','6220':'6220 Premium'};
var CVOK={'3350':110,'2450M':80,'Massey Ferguson 4260':110,'5720':80,'6920 S':160,'6930 Premium':160,'6630 Premium':140,'6430 Premium':130,'6330 Premium':120,'6820':140,'6220 Premium':100,'6620':130,'6520':120,'6320':110,'7530 Premium':180};
STOCK=STOCK.filter(t=>t.m!=='7720'&&t.m!=='Remolque Griselda');
STOCK.forEach(t=>{if(RENOMBRA[t.m]){t.slug=t.m;t.m=RENOMBRA[t.m]}});
STOCK.push(...[
 ['6210R',210],['6150M',150],['6220 SE',100],['6230 Premium',110],['Renault Ares 640 RZ',130,'Renault']
].map(a=>({m:a[0],s:'oc',cv:a[1],cvmax:0,mot:'',tr:'',anos:'',extra:'',img:'',fotos:[],dest:false,st:'ok',used:true,marca:a[2]||'',nuevo:true})));
STOCK.forEach(t=>{
  if(CVOK[t.m])t.cv=CVOK[t.m];
  t.u=(UNI[t.m]||[]).map(a=>({horas:a[0],precio:a[1],extras:a[2]?a[2].split(/,\s*/):[],vendido:!!a[3],fotos:[]}));
  const disp=t.u.filter(x=>!x.vendido);
  t.uds=disp.length; t.vendido=t.u.length>0&&!disp.length;
  const bar=disp.filter(x=>x.precio).sort((a,b)=>a.precio-b.precio)[0];
  t.precio=bar?bar.precio:0; t.horas=bar?bar.horas:0;
  t.extra=t.u.map(x=>x.extras.join(', ')).filter(Boolean).join(' · ');
  if(t.vendido)t.dest=false;
});
var UDS=STOCK.filter(t=>t.s==='oc').reduce((n,t)=>n+t.uds,0);
// Palas y aperos: [nombre, descripción, compatibilidad, precio, extras]
ACC={
 'Palas':[
  ['Pala León 410E','Cargador frontal con enganche rápido','Serie 6 · 6M · 6030',9500,'Botella reforzada'],
  ['Pala León 385E','Cargador frontal a estrenar','Según modelo',9500,'Botella reforzada'],
  ['Pala Metal-Technik','Cargador frontal con brazos y soportes','Según modelo',9000,'Tercera función, monomando en cruz']
 ],
 'Cazos':[['Cazos','Para tierra, grano y materiales ligeros','Para las palas',1200,'']],
 'Pantalla para alpacas':[['Pantalla para alpacas','Para mover alpacas con la pala','Para las palas',1200,'']],
 'Atomizador':[['Atomizador','Tratamientos en viña y frutal','Tractores con TDF',9000,'']],
 'Remolques':[['Remolque Griselda','Remolque basculante','Tractores con hidráulico',12000,'Eje tándem, ejes direccionables, compuerta hidráulica']]
};
STOCK.forEach(t=>{t.conPala=t.u.some(x=>!x.vendido&&x.extras.some(e=>/^pala /i.test(e)))});
