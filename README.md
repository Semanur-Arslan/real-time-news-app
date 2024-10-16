# Haber Takip Uygulaması

Bu proje, kullanıcıların çeşitli kaynaklardaki ve konulardaki haberleri görüntülemesini sağlayan bir Next.js 14 uygulamasıdır. Kullanıcılar, takip etmek istedikleri haber kaynaklarını seçebilir ve kişiselleştirilmiş bir haber deneyimi yaşayabilirler

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
- 📊 Chart.js: Verileri görselleştirmek için güçlü bir kütüphane.
- 📈 React-Chartjs-2: Chart.js'i React ile entegre etmek için.
- 📅 Date-fns: Tarih işlemlerini basit ve etkili bir şekilde yönetmek için.
- 🔍 React-Icons: Farklı ikon setlerini kolayca kullanabilmek için.
- 🔔 React-Toastify: Kullanıcı bildirimlerini göstermek için pratik bir çözüm.

## Mimari Kararlar

1. **Framework Seçimi: Next.js 14**
Next.js, React tabanlı bir framework olarak, uygulamanın performansını ve kullanıcı deneyimini artırmak amacıyla seçilmiştir. Versiyon 14 ile birlikte sunulan yenilikler, özellikle geliştirme sürecini hızlandıran ve performansı artıran özellikler içermektedir. Sunucu tarafı render (SSR) ve statik site üretimi (SSG) gibi özellikler, SEO uyumu ve hızlı sayfa yükleme süreleri sağlar.
#### Sunucu Taraflı Yükleme
Uygulama açılırken, sunucu taraflı yükleme tercih edilmiştir. Bu yaklaşım sayesinde, anasayfa verileri sunucu tarafından çekilerek SEO açısından optimize edilmiş bir sayfa ile uygulamanın başlatılması sağlanmıştır. Böylece kullanıcı, hızlı bir tam sayfa görüntüsü ile karşılaşmakta ve uygulamanın ilk izlenimi olumlu bir şekilde şekillenmektedir. Daha sonrasında, veriler client tarafında gerçekleştirilen HTTP istekleri ile güncel tutulmaktadır.
#### Gerçek Zamanlı Veri Sunumu
Uygulamanın veri sunumunun gerçek zamanlıa yakın olması için client tarafındaki HTTP istekleri belirli aralıklarla çekilecek şekilde yapılandırılmıştır. Kullanıcıların en güncel haberleri hızlı bir şekilde alabilmesi için özel bir hook geliştirilmiştir.Oluşturulan hook ile, belirli bir kategori ve kaynak için makaleleri dinamik olarak çekmek amacıyla tasarlanmıştır. Avantajları şunlardır:

--State tanımlamaları ile, fetch edilen makaleleri ve yeni makalelerle ilgili bildirimleri yönetir. Bu sayede kullanıcılar, güncel içeriklere hızlıca erişim sağlar.

-Referans Kullanımı ile, makale güncellemelerinin izlenmesini sağlar ve referansların güncellenmesi esnasında bileşenin yeniden render edilmesini gerektirmeden verimliliği artırır.

-Asenkron Veri Çekme: getArticles fonksiyonu, belirlenen parametrelere göre makaleleri asenkron bir şekilde çeker. Bu fonksiyon, makalelerin yayınlandığı tarihleri kontrol ederek, yeni makaleler için bildirimler oluşturur.

2. **Kullanıcı Tercihleri Yönetimi**
Kullanıcı tercihlerini kayıtlı tutmak için çerezler kullanılmaktadır. Bu yapı, sunucu tarafında API rotaları oluşturularak gerçekleştirilmiştir.kullanıcı tercihlerinin çerezlere kaydedilmesi ve okunması işlemleri sağlanmıştır. Bu yöntem, kullanıcı deneyimini geliştirmek ve kullanıcıların tercihlerini kalıcı hale getirmek için etkilidir.

3. **Bileşen Tabanlı Mimari**
Proje, bileşen tabanlı bir mimari ile geliştirilmiştir. Her bileşen, belirli bir işlevi yerine getirerek uygulamanın modüler ve sürdürülebilir olmasını sağlar. Bu yapı, kodun okunabilirliğini artırırken aynı zamanda bileşenlerin yeniden kullanılabilirliğini de sağlar.

3. **Stil ve Tasarım**
CSS Modülleri kullanılarak her bileşen için özel stiller oluşturulmuştur. Bu yaklaşım, stillerin modüler olmasını ve bileşenler arasında stil karmaşasını önler. Ayrıca, responsive tasarım prensipleri gözetilerek tüm cihazlarda uyumlu bir kullanıcı deneyimi sağlanmıştır.

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

