
# Haber Takip Uygulaması

Bu proje, kullanıcıların çeşitli kaynaklardaki ve konulardaki haberleri görüntülemesini sağlayan bir Next.js 14 uygulamasıdır. Kullanıcılar, takip etmek istedikleri haber kaynaklarını seçebilir ve kişiselleştirilmiş bir haber deneyimi yaşayabilirler


https://github.com/user-attachments/assets/7a9a93cf-b43e-4461-b3eb-c74c205598a2




https://github.com/user-attachments/assets/7677b222-cd5f-42d0-b54c-a57817f6d95f


## Özellikler

#### Haber Kaynakları Seçimi
Tercih yapılmadığında en son yayınlanan haberler ve kateorilere göre haberleri görüntüleyebilmektedir. Tercihler sekmesinde her kategoriye ait haber kaynaklarını görüntüleyebilir ve seçim yapabilir. Seçim yaptığı kaynaklara ait haberleri görüntüleyebilir ve son gelen haberler için bildirim alabilir.

#### Bildirimler
Seçilen haber kaynaklarına yeni bir haber eklendiğinde kullanıcıya bildirim gönderilir.

#### Yayınlanma Satleri Grafiği
Seçilen haber kaynaklarının gün içerisinde hangi saatlerde saatlerde ne kadar haber yayınladığını grafik üzerinden görüntüleyebilir.

#### Tema Seçimi
Uygulama, kullanıcıya light ve dark mod seçenekleri sunar.

## Kullanılan Teknolojiler

- 📦 Axios: HTTP isteklerini kolayca yönetmek için.
- 📊 Chart.js: Verileri görselleştirmek için kütüphane.
- 📈 React-Chartjs-2: Chart.js'i React ile entegre etmek için.
- 📅 Date-fns: Tarih işlemlerini basit ve etkili bir şekilde yönetmek için.
- 🔍 React-Icons: Farklı ikon setlerini kolayca kullanabilmek için.
- 🔔 React-Toastify: Kullanıcı bildirimlerini göstermek için pratik bir çözüm.

## Mimari Kararlar

### Framework Seçimi: Next.js 14
Next.js Versiyon 14 ile birlikte sunulan yenilikler, özellikle geliştirme sürecini hızlandıran ve performansı artıran özellikler içermektedir. Sunucu tarafı render (SSR) ve statik site üretimi (SSG) gibi özellikler, SEO uyumu ve hızlı sayfa yükleme süreleri sağlar.
#### Sunucu Taraflı Yükleme
Uygulama açılırken, sunucu taraflı yükleme tercih edilmiştir. Bu yaklaşım sayesinde, anasayfa verileri sunucu tarafından çekilerek SEO açısından optimize edilmiş bir sayfa ile uygulamanın başlatılması sağlanmıştır. Böylece kullanıcı, hızlı bir tam sayfa görüntüsü ile karşılaşmakta ve uygulamanın ilk izlenimi olumlu bir şekilde şekillenmektedir. Daha sonrasında, veriler client tarafında gerçekleştirilen HTTP istekleri ile güncel tutulmaktadır.
#### Gerçek Zamanlı Veri Sunumu
Uygulamanın veri sunumunun gerçek zamanlıya yakın olması için client tarafındaki HTTP istekleri belirli aralıklarla çekilecek şekilde yapılandırılmıştır. Kullanıcıların en güncel haberleri hızlı bir şekilde alabilmesi için özel bir hook geliştirilmiştir.Oluşturulan hook ile, belirli bir kategori ve kaynak için makaleleri dinamik olarak çekmek amacıyla tasarlanmıştır. Avantajları şunlardır:

-State tanımlamaları ile, fetch edilen makaleleri ve yeni makalelerle ilgili bildirimleri yönetir. Bu sayede kullanıcılar, güncel içeriklere hızlıca erişim sağlar.

-Referans Kullanımı ile, makale güncellemelerinin izlenmesini sağlar ve referansların güncellenmesi esnasında bileşenin yeniden render edilmesini gerektirmeden verimliliği artırır.

-Asenkron Veri Çekme: getArticles fonksiyonu, belirlenen parametrelere göre makaleleri asenkron bir şekilde çeker. Bu fonksiyon, makalelerin yayınlandığı tarihleri kontrol ederek, yeni makaleler için bildirimler oluşturur.

### Kullanıcı Tercihleri Yönetimi
Kullanıcı tercihlerini kayıtlı tutmak için çerezler kullanılmaktadır. Bu yapı, sunucu tarafında API rotaları oluşturularak gerçekleştirilmiştir.kullanıcı tercihlerinin çerezlere kaydedilmesi ve okunması işlemleri sağlanmıştır. Bu yöntem, kullanıcı deneyimini geliştirmek ve kullanıcıların tercihlerini kalıcı hale getirmek için etkilidir.

### Hata Yönetimi
Uygulama, sunucu tarafı hatalarını yönetmek için error.js dosyası ile hataların yakalanıp belirli bir formatta gösterilmesini sağlamaktadır. Client tarafında ise, özellikle veri çekme işlemlerinde karşılaşılabilecek hatalar için kullanıcıya bildirim sağlamak amacıyla React-Toastify kütüphanesi kullanılmaktadır. Bu sayede kullanıcılar, hatalardan anında haberdar olmaktadır.

<img width="1440" alt="server-error" src="https://github.com/user-attachments/assets/49d13eed-3ac0-44f4-bb7a-f2e885acdca4">
<img width="1440" alt="client-error" src="https://github.com/user-attachments/assets/2cdc7842-1ce0-4597-8bdd-10b810eddb9c">

### Bileşen Tabanlı Mimari 
Proje, bileşen tabanlı bir mimari ile geliştirilmiştir. Her bileşen, belirli bir işlevi yerine getirerek uygulamanın modüler ve sürdürülebilir olmasını sağlar. Bu yapı, kodun okunabilirliğini artırırken aynı zamanda bileşenlerin yeniden kullanılabilirliğini de sağlar.

### Stil ve Tasarım
CSS Modülleri kullanılarak her bileşen için özel stiller oluşturulmuştur. Bu yaklaşım, stillerin modüler olmasını ve bileşenler arasında stil karmaşasını önler. Ayrıca, responsive tasarım prensipleri gözetilerek tüm cihazlarda uyumlu bir kullanıcı deneyimi sağlanmıştır.

## Bilinen Kısıtlamalar
-API Sınırlamaları: News API'nin belirli bir API çağrı limiti vardır (24 saat için 100 istek). Kullanıcılar, bu limiti aşarsa, uygulama doğru veri sağlayamayabilir ve hata mesajları ile karşılaşabilirler.

-Gerçek Zamanlı Veri Güncellemesi: Client tarafındaki veri güncellemeleri, belirli aralıklarla yapılmaktadır. Bu durum, haberlerin anlık olarak güncellenmediği anlamına gelir ve kullanıcıların birkaç dakikalık gecikmelerle yeni haberleri alabileceği anlamına gelir.

--Kapsamlı İçerik: Uygulama, yalnızca News API'den sağlanan içeriklerle sınırlıdır. Kullanıcılar, haber başlıklarına tıkladıklarında haber kaynağındaki ilgili habere yönlendirilir.

## Projeyi Başlatmak İçin Adımlar

1. **Projeyi Klonlayın**
   - Depoyu yerel makinenize klonlayın.
     ```bash
     git clone https://github.com/Semanur-Arslan/PlaneSpace.git
     ```
2. **Modülleri Yükleyin**
   - Gerekli modülleri yüklemek için aşağıdaki komutu çalıştırın:
     ```bash
     npm install
     ```
3. **.env.local Dosyasını Güncelleyin**
   - env.local.example dosyasının ismini env.local olarak değiştirin ve News API adresinden aldığınız API anahtarını ekleyin. API anahtarını almak için [bu linke](https://newsapi.org/) gidin.

     ```bash
     NEXT_PUBLIC_NEWS_API_KEY=<your-api-key>
     ```

4. **Projeyi Başlatın**
   - Uygulamayı başlatmak için aşağıdaki komutu çalıştırın:
     ```bash
     npm run dev
     ```
### Görseller
<p float="left">
  <img width="300" src="https://github.com/user-attachments/assets/1eb70f74-c68e-4236-b9ed-b9aac0cfee44" />
  <img width="300" src="https://github.com/user-attachments/assets/ae9f1355-34c0-424a-85e9-aa26c628e946" />
  <img width="300" src="https://github.com/user-attachments/assets/146f4123-2f67-47f5-aa78-4f61fe53c04c" />
</p>

<img width="200" alt="mobil1" src="https://github.com/user-attachments/assets/50c2628b-9b5e-441a-8fcb-ed07e92c689c">
<img width="200" alt="mobil2" src="https://github.com/user-attachments/assets/d94d570f-0af0-47d1-8d73-6f12adbc5939">
<img width="200" alt="mobil3" src="https://github.com/user-attachments/assets/103ad9e1-1e0d-4a6d-a33b-19e2cae4e369">

