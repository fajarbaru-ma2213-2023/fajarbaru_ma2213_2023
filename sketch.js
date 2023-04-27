// //cuaca
// let urlAPI ="https://api.openweathermap.org/data/2.5/weather?q=FAJARBARU&appid=1e7d6a61963583838b8ea02a9c6a6921&units=metric";
// let dataAPI;


//Data Diagram Pie
let dataPiejk;
let urljk = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRWJUbXloRnT55_H4hDvL__zVVXw2IFC-uEwdKzAMtRWSFI4i91HLorPaU-LXdnRrrXiwihs6SRFrK6/pub?gid=730671313&single=true&output=csv"

let dataPieAgama ;
let urlAgama = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRWJUbXloRnT55_H4hDvL__zVVXw2IFC-uEwdKzAMtRWSFI4i91HLorPaU-LXdnRrrXiwihs6SRFrK6/pub?gid=381863916&single=true&output=csv"

let dataPendidikan;
let urlpen = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRWJUbXloRnT55_H4hDvL__zVVXw2IFC-uEwdKzAMtRWSFI4i91HLorPaU-LXdnRrrXiwihs6SRFrK6/pub?gid=2061782625&single=true&output=csv"

let dataPekerjaan;
let urlpek = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRWJUbXloRnT55_H4hDvL__zVVXw2IFC-uEwdKzAMtRWSFI4i91HLorPaU-LXdnRrrXiwihs6SRFrK6/pub?gid=76240503&single=true&output=csv"


//insert gambar
let latar;
let bagan;
let itera;
let logodesa;
let peta;
let RobotoMonoSemiBold;
let RobotoMonoMedium;
let RobotoMonoExtraLight;
r = 15



function preload(){
  
  latar = loadImage('latar.jpeg');
  bagan = loadImage('bagan.jpg');
  itera = loadImage('itera.png');
  logodesa = loadImage('logodesa.jpg');
  Logo = loadImage('Logo.png');
  peta = loadImage('peta.jpeg');
  RobotoMonoSemiBold = loadFont('RobotoMono-SemiBold.ttf')
  RobotoMonoMedium = loadFont('RobotoMono-Medium.ttf')
  RobotoMonoExtraLight = loadFont('RobotoMono-ExtraLight.ttf')
  dataPiejk = loadTable(urljk, 'csv', 'header');
  dataPieAgama = loadTable(urlAgama, 'csv', 'header');
  dataPendidikan = loadTable(urlpen, 'csv', 'header');
  dataPekerjaan = loadTable(urlpek, 'csv', 'header');
}

function setup() {
  createCanvas(1600,3600);
  //noLoop(); // Run once and stop
  
}



function draw() {
  background('white');
  noStroke()
  
//Background
  image(latar,0,0,1600,900);
  fill(51,66,87,200);
  rect(0,0,1600,900);
  
// Logo
  image(logodesa,30,80,200,200);
  
//Organigram
  //rect(100,1502,800,500)
  image(bagan,10,1400,1000,625)
  
// Peta Desa
  // fill('yellow')
  // rect(1000,1380,500,500)
  fill('black')
  textFont(RobotoMonoMedium)
  textSize (20)
  text ("Peta Desa",1200,1410)
  
  image(peta,1040,1440,500,400)
  
//Tentang Fajar Baru
  fill('white')
  rect(100,952,800,500);
  textSize(20)
  textFont(RobotoMonoMedium)
  fill('black')
  text("Tentang Fajar Baru",410,980)
  
  textSize(18)
  textFont(RobotoMonoExtraLight)
  text("Pada mulanya Desa Fajar Baru adalah bagian dari Desa Karang Anyar, yang pada tahun 1959 disebut dengan susukan Fajar Baru.",110,1020)
  text("Selanjutnya tahun 1960 memisahkan diri dari Desa Karang Anyar dengan Kades A. Sastro Rejo.",110,1040+r)
  text("Tahun 1965 setelah gestapu kembali menggabungkan diri dengan Desa Karang Anyar yang waktu itu dipimpin Kades Hadi Sumarto,",110,1060+2*r)
  text("tahun 1968 Kades A.Hakim s.d tahun 1984.",110,1080+3*r)
  text("Pada tahun tersebut diadakan pemekaran desa dengan sebutan Desa Fajar Baru Kecamatan Jati Agung",110,1110+4*r)
  text("Kabupaten Lampung Selatan dan pada 20 Oktober 1986 ditetapkan menjadi Desa Persiapan. Desa Fajar Baru",110,1130+5*r)
  text("Kecamatan Jati Agung definitif menjadi Desa Fajar Baru tahun 1991.",110,1150+6*r)
  text("Desa Fajar Baru mempunyai luas wilayah seluas 7.566 hektare.",110,1170+7*r)
  
  
  
//Dashboard Text
  fill('white');
  textFont(RobotoMonoSemiBold);
  textSize(30);
  text("Dashboard",30,60);
  text("Desa Fajar Baru",30,320);




  

//Data Umur
  fill('white')
  rect(100,2051,800,400)
  fill('black')
  
  textFont(RobotoMonoMedium)
  textSize(30)
  text("Data Statistik Desa Fajar Baru",250,2000)
  textSize(18)
  text("Data Usia",450,2080)
  
  textFont(RobotoMonoExtraLight)
  rect(180,2100,1,300)
  rect(180,2400,600,1)
  fill('#94D2BD')
  rect(215,2120,75,280)
  fill('#E9D8A6')
  rect(340,2160,75,240)
  fill('#EE9B00')
  rect(465,2300,75,100)
  
  
  //jumlah data
  textSize(16)
    fill ('black');
    text(0,170,2400);
    text(500,150,2350);
    text(1000,140,2300);
    text(1500,140,2250);
    text(2000,140,2200);
    text(2500,140,2150);
    text(3000,140,2100);
  
  text('Lansia', 215,2420);
  text('>17 Tahun', 340,2420);
  text('<17 Tahun', 465,2420);
  
  
  anglesjk = dataPiejk.getColumn('Sudut')
  pieChartjk(200, anglesjk);
  
  anglesagama = dataPieAgama.getColumn('x')
  pieChartagama(200, anglesagama);
  
  anglespen = dataPendidikan.getColumn('x')
  pieChartpen(200, anglespen);
  
  anglespek = dataPekerjaan.getColumn('Y')
  pieChartpek(200, anglespek);
}

function pieChartjk(diameterjk, dataPeijk) {
  let lastAnglejk = 0;
  var piecolorjk = ['#364F6B ','#FC5185 '];
  for (var i = 0; i < dataPeijk.length; i++) {
    fill(piecolorjk[i]);
    arc(
      275,
      2670,
      diameterjk,
      diameterjk,
      lastAnglejk,
      lastAnglejk + radians(anglesjk[i])
    );
    lastAnglejk += radians(anglesjk[i]);
  }
  //Data Jenis Kelamin
  fill('white')
  //rect(100,2503,350,400)
  fill('black')
  //text
  textSize(18)
  textFont(RobotoMonoMedium)
  text("Data Jenis Kelamin",180,2538)
  textFont(RobotoMonoExtraLight)
  text("Laki-Laki         = 3408",140,2828)
  text("Perempuan         = 3011",140,2858)
  
  //penanda warna
  fill(piecolorjk[0]) ;
  circle(300,2823,18);
  fill(piecolorjk[1]) ;
  circle(300,2853,18);
}

function pieChartagama(diameter, dataPeiAgama) {
  let lastAngle = 0;
  var piecoloragama = ['#005F73 ','#0A9396 ','#94D2BD ','#E9D8A6 '];
  for (var i = 0; i < dataPeiAgama.length; i++) {
    fill(piecoloragama[i])
    arc(
      720,
      2670,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(anglesagama[i])
    );
    lastAngle += radians(anglesagama[i]);
  }
  
  fill('white')
  //rect(545,2503,350,400)
  
  fill('black')
  textFont(RobotoMonoMedium)
  text("Data Agama",660,2538)
  
  textFont(RobotoMonoExtraLight)
  text("Islam        = 6272",615,2800)
  text("Kristen      = 93",615,2820)
  
  
  
  fill(piecoloragama[0]) ;
  circle(730,2795,16);
  fill(piecoloragama[1]);
  circle(730,2815,16);
  
  
}

function pieChartpen(diameter, dataPendidikan) {
  let lastAngle = 0;
  var piecolorpen = ['#001219','#005F73 ','#0A9396 ','#94D2BD ','#E9D8A6 ', '#EE9B00','#CA6702','#BB3E03']
  for (var i = 0; i < dataPendidikan.length; i++) {
    fill(piecolorpen[i])
    arc(
      275,3120,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(anglespen[i])
    );
    lastAngle += radians(anglespen[i]);
  }
  // Data Pendidikan
  fill('white')
  //rect(100,2953,350,450)
  textSize(18)
  textFont(RobotoMonoMedium)
  fill('black')
  text("Data Pendidikan",195,2989)
  
  textSize(12)
  textFont(RobotoMonoExtraLight)
  text("Tdk/Blm Sekolah      = 591",170,3250)
  text("Blm Tamat SD         = 240",170,3270)
  text("SD/Sederajat         = 660",170,3290)
  text("SLTP/Sederajat       = 387",170,3310)
  text("SLTA/Sederajat       = 417",170,3330)
  text("DIPLOMA              = 24",170,3350)
  text("STRATA I             = 39",170,3370)
  text("STRATA II            = 4",170,3390)
  
  fill(piecolorpen[0]) ;
  circle(300,3245,10);
  fill(piecolorpen[1]) ;
  circle(300,3265,10);
   fill(piecolorpen[2]) ;
  circle(300,3285,10);
   fill(piecolorpen[3]) ;
  circle(300,3305,10);
   fill(piecolorpen[4]) ;
  circle(300,3325,10);
   fill(piecolorpen[5]) ;
  circle(300,3345,10);
   fill(piecolorpen[6]) ;
  circle(300,3365,10);
   fill(piecolorpen[7]) ;
  circle(300,3385,10);
}
function pieChartpek(diameterpek, dataPekerjaan) {
  let lastAnglepek = 0;
  var piecolorpek = ['#001219','#005F73 ','#0A9396 ','#94D2BD ','#E9D8A6 ', '#EE9B00','#CA6702','#BB3E03','#AE2012','#9B2226']
  for (var i = 0; i < dataPekerjaan.length; i++) {
    fill(piecolorpek[i])
    arc(
      720,3120,
      diameterpek,
      diameterpek,
      lastAnglepek,
      lastAnglepek + radians(anglespek[i])
    );
    lastAnglepek += radians(anglespek[i]);
  }
  //Data Pekerjaan
  fill('white')
  //rect(545,2953,350,450)
  textSize(18)
  textFont(RobotoMonoMedium)
  fill('black')
  text("Data Pekerjaan",660,2989)
  
  textSize(12)
  textFont(RobotoMonoExtraLight)
  text("Wiraswasta                   = 172",600,3250)
  text("Mengurus Rumah Tngga         = 532",600,3270)
  text("Tidak Bekerja                = 790",600,3290)
  text("Petani                       = 545",600,3310)
  text("Pedagang                     = 11",600,3330)
  text("Sopir                        = 1",600,3350)
  text("Pelajar                      = 218",600,3370)
  text("Karyawan Swasta              = 54",600,3390)
  text("Pegawai Negeri Sipil         = 21",600,3410)
  text("Lainnya                      = 120",600,3430)
  //penanda warna
  fill(piecolorpek[0]) ;
  ellipse(780,3245,10,10);
  fill(piecolorpek[1]) ;
  ellipse(780,3265,10,10);
   fill(piecolorpek[2]) ;
  ellipse(780,3285,10,10);
   fill(piecolorpek[3]) ;
  ellipse(780,3305,10,10);
   fill(piecolorpek[4]) ;
  ellipse(780,3325,10,10);
   fill(piecolorpek[5]) ;
  ellipse(780,3345,10,10);
   fill(piecolorpek[5]) ;
  ellipse(780,3365,10,10);
   fill(piecolorpek[6]) ;
  ellipse(780,3385,10,10);
     fill([piecolorpek[7]]) ;
  ellipse(780,3405,10,10);
     fill(piecolorpek[9]) ;
  ellipse(780,3425,10,10);
}