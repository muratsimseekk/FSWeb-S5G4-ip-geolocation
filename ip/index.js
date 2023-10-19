//axios import buraya gelecek
import axios from "axios";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipgeoapi/31.145.249.45",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/213.14.182.47
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

function bilgiler(obj) {
  const div = document.createElement("div");
  div.classList("card");

  const img = document.createElement("img");
  img.src = obj["ülkebayrağı"];
  div.append(img);

  const divCard = document.createElement("div");
  divCard.classList("card-info");
  div.append(divCard);

  const h3 = document.createElement("h3");
  h3.classList("ip");
  h3.textContent = obj["sorgu"];
  divCard.append(h3);

  const pUlke = document.createElement("p");
  pUlke.classList("ulke");
  pUlke.textContent = obj["ülkeKodu"];
  divCard.append(pUlke);

  const pEnBoy = document.createElement("p");
  pEnBoy.textContent = `Enlem: ${obj["enlem"]} Boylam:${obj["boylam"]}`;
  divCard.append(pEnBoy);

  const pSehir = document.createElement("p");
  pSehir.textContent = obj["şehir"];
  divCard.append(pSehir);

  const pSaat = document.createElement("p");
  pSaat.textContent = obj["saatdilimi"];
  divCard.append(pSaat);

  const pPara = document.createElement("p");
  pPara.textContent = obj["parabirimi"];
  divCard.append(pPara);

  const pIsp = document.createElement("p");
  pIsp.textContent = obj["isp"];
  divCard.append(pIsp);

  return div;
}

const div = axios
  .get("https://apis.ergineer.com/ipgeoapi/213.14.182.47")
  .then((response) => {
    document.querySelector(".cards").append(bilgiler(response.data));
  })
  .catch((err)=>{
	console.log("error : " + err);
  });
