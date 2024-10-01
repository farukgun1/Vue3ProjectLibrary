Anasayfa için Fetch Api kullanarak Google Books Api ' dan çektiğim verileri filter ve map metodu kullanarak card yapılarına yerleştirdim. 
Anasayfa; 
<img width="1438" alt="Ekran Resmi 2024-10-01 18 54 53" src="https://github.com/user-attachments/assets/c6eece58-3b6c-4d01-bc31-ce5e3d41b97a"> 


Sayfamda bulunnan "Ayrıntıları Gör" butonunda router methodunu kullanarak tıkladığım kitabın id bilgisini aldım ve method ile gideceğimiz sayfayı tanımladım. Elimde tuttuğum ID'yi kullanarak, Fetch API ile BookDetail bileşenimde bu ID'ye karşılık gelen kitabı ekrana getirdim.
Ayrıntıları Gör;
<img width="463" alt="Ekran Resmi 2024-10-01 18 55 30" src="https://github.com/user-attachments/assets/a88f1fce-3c9b-46b0-b4c7-e96528208715">




Bu projede filtreleme işlemi için veriyi v-model ile aktarıyorum. NavbarApp bileşeni, arama değerini props ile alıyor ve emit ile geri bildiriyor. Böylece v-model altında props ve emit yapısını kullanarak, iki yönlü veri akışı sağlıyorum. Bu sayede BooksApp bileşeninde, arama kelimesine göre kitapları filtreliyorum ve sadece eşleşen kitapları gösteriyorum.
Filtreleme;
<img width="1440" alt="Ekran Resmi 2024-10-01 18 55 42" src="https://github.com/user-attachments/assets/323eb61c-8356-4ad1-8878-81c3f837d6f4">
<img width="1397" alt="Ekran Resmi 2024-10-01 18 55 55" src="https://github.com/user-attachments/assets/14a18a43-89b6-4245-b420-4194f2d8637b">
