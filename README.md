Bu React uygulaması, basit matematik işlemleri yaparak bir oyunu simüle eder. Oyunda rastgele iki sayı ve bir işlem operatörü seçilir. Kullanıcı, bu işlemin sonucunu tahmin eder ve tahmini doğruysa doğru puanı artar, yanlışsa yanlış puanı artar. Ayrıca oyunu sıfırlama seçeneği de vardır.

## Özellikler

- Rastgele iki sayı ve bir işlem operatörü (toplama veya çıkarma) ile matematik sorusu oluşturur.
- Kullanıcıdan bu matematiksel işlemin sonucunu girmesini ister.
- Girilen cevap doğruysa kullanıcıya başarılı bir bildirim gösterir ve doğru cevap sayısını artırır.
- Girilen cevap yanlışsa kullanıcıya hata bildirimi gösterir ve yanlış cevap sayısını artırır.
- Kullanıcı oyunu sıfırlayabilir ve puanları görebilir.

## Kurulum ve Çalıştırma

1. Bu projeyi yerel ortamınıza klonlayın veya indirin:

    ```bash
    git clone <repository-url>
    ```

2. Proje dizinine gidin:

    ```bash
    cd <project-directory>
    ```

3. Gerekli paketleri yükleyin:

    ```bash
    npm install
    ```

4. Uygulamayı başlatın:

    ```bash
    npm start
    ```

5. Web tarayıcınızda `http://localhost:3000` adresini ziyaret ederek uygulamanızı görüntüleyebilirsiniz.

## Kullanım

- **Soru Gösterimi:** Sayfada rastgele seçilmiş iki sayı ve işlem operatörü gösterilir.
- **Sonuç Girme:** Sonucu tahmin etmek için verilen input alanına tahmininizi yazın ve "Kontrol Et" butonuna tıklayın.
- **Oyun Yeniden Başlatma:** "Oyunu Sıfırla" butonuna tıklayarak oyunu sıfırlayabilir ve puanları görebilirsiniz.

## Yapımcı

Bu proje [React](https://reactjs.org/) kütüphanesi kullanılarak geliştirilmiştir ve [react-hot-toast](https://react-hot-toast.com/) bildirim kütüphanesini kullanır.
