# Kurs Yönetim Uygulaması

Bu uygulama, kullanıcıların kurslarını kolayca yönetebilmeleri için geliştirilmiştir. Aşağıdaki özellikleri içerir:

## Özellikler

- **Kurs Ekleme**: Yeni kurslar ekleyebilirsiniz. Kurs bilgileri, başlık, açıklama ve başlangıç tarihi içerir.
- **Kurs Silme**: İstemediğiniz kursları listeden kaldırabilirsiniz.
- **Kurs Düzenleme**: Mevcut kurs bilgilerini güncelleyebilirsiniz.
- **Kursları Sıralama**: Kursları başlangıç tarihlerine göre sıralayabilirsiniz.
- **Yaklaşan Kurslar**: Sadece bir hafta içinde başlayacak olan kursları ayrı bir ekranda görüntüleyebilirsiniz.

## Ekranlar

1. **Ana Ekran**:  
   - Tüm kursların listesi.
   - Kursları ekleme, düzenleme ve silme seçenekleri.
   - Kursları başlangıç tarihlerine göre sıralama seçeneği.

2. **Yaklaşan Kurslar Ekranı**:  
   - Önümüzdeki bir hafta içinde başlayacak kursların listesi.

## Kullanım

1. Uygulamayı başlatın.
2. **Kurs ekle** butonunu kullanarak yeni kurslar ekleyin.
3. Mevcut kurslar üzerinde düzenleme veya silme işlemleri yapın.
4. Kursları tarihlerine göre sıralamak için sıralama seçeneğini kullanın.
5. **Yaklaşan Kurslar** ekranında bir hafta içinde başlayacak kursları görüntüleyin.

## Teknolojiler

- **React Native**: Uygulama geliştirme.
- **State Management**: Uygulama durumunun yönetimi için `useState` veya bir durum yönetim kütüphanesi (örn. Redux).
- **Tarih İşlemleri**: Tarih hesaplamaları için JavaScript'in yerleşik tarih fonksiyonları veya bir kütüphane (örn. `date-fns`).

## Kurulum

1. Bu projeyi klonlayın:
   ```bash
   git clone https://github.com/serpiltanko/my_courses.git
