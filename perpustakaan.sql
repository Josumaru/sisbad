-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 26, 2023 at 09:56 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perpustakaan`
--

-- --------------------------------------------------------

--
-- Table structure for table `buku`
--

CREATE TABLE `buku` (
  `id_buku` int(11) NOT NULL,
  `judul` varchar(100) NOT NULL,
  `id_peminjaman` int(11) DEFAULT NULL,
  `id_pengembalian` int(11) DEFAULT NULL,
  `penulis` varchar(45) NOT NULL,
  `sinopsis` varchar(1000) NOT NULL,
  `tahun_terbit` int(11) NOT NULL,
  `penerbit` varchar(45) NOT NULL,
  `cover` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buku`
--

INSERT INTO `buku` (`id_buku`, `judul`, `id_peminjaman`, `id_pengembalian`, `penulis`, `sinopsis`, `tahun_terbit`, `penerbit`, `cover`) VALUES
(1001, 'Negeri 5 Menara', NULL, NULL, 'Ahmad Fuadi', 'Negeri 5 Menara adalah novel karya Ahmad Fuadi yang diterbitkan oleh Gramedia pada tahun 2009. Novel ini bercerita tentang kehidupan Alif Fikri, seorang santri asal Maninjau, Sumatra Barat yang bersekolah di Pondok Madani (PM) Ponorogo, Jawa Timur, bersama lima teman-teman santrinya yang disebut Sahibul Menara.', 2009, 'Elex Media Komputindo', 'https://ebooks.gramedia.com/ebook-covers/1682/image_highres/ID_GPU2013MTH02NLM.jpg'),
(1002, 'Rantau 1 Muara', NULL, NULL, 'Ahmad Fuadi', 'Rantau 1 Muara bercerita tentang konsistensi untuk terus berkayuh menuju tujuan, tentang pencarian belahan jiwa, dan menemukan tempat bermuara. Muara segala muara.', 2013, 'Gramedia', 'https://upload.wikimedia.org/wikipedia/id/thumb/8/83/Rantau_1_muara_(sampul).jpg/220px-Rantau_1_muara_(sampul).jpg'),
(1003, 'Ranah 3 Warna', NULL, NULL, 'Ahmad Fuadi', 'Novel ini merupakan kedua dari trilogi Negeri 5 Menara bercerita tentang Alif yang baru selesai menamatkan sekolah di Pondok Madani (PM) Ponorogo Jawa Timur dan perjalanannya mewujudkan mimpi menjadi Habibie di Teknologi Tinggi Bandung, lalu merantau untuk menggapai jendela dunia sampai ke Amerika.', 2011, 'Gramedia', 'https://upload.wikimedia.org/wikipedia/id/thumb/2/26/Sampul_buku_Ranah_3_Warna.jpg/220px-Sampul_buku_Ranah_3_Warna.jpg'),
(1004, 'Anak Rantau', NULL, NULL, 'Ahmad Fuadi', 'Hepi, perantau bujang yang menyalakan dendam di tepi danau. Martiaz, ayah yang pecah kongsi dengan anaknya di simpang jalan. Datuk, kakek yang ingin menebus dosa masa lalu di tengah surau. Pandeka Luko, pahlawan gila yang mengobati luka lama di rumah usang.  Apakah \"alam terkembang jadi guru\" menjadi amanat hidupnya? Mungkinkan maaf dan lupa menjadi penawar bagi segenap luka?', 2019, 'Gramedia', 'https://cdn.gramedia.com/uploads/items/9786026714534_Anak-Rantau-Edisi-Cover-Baru-2019.jpg'),
(2001, 'Doraemon 05', NULL, NULL, 'Fujiko F. Fujio', 'Doraemon adalah judul sebuah manga dan anime yang sangat populer yang dikarang Fujiko F. Fujio sejak 1 Juni 1969 dan berkisah tentang kehidupan seorang anak pemalas kelas 5 sekolah dasar yang bernama Nobita Nobi yang didatangi oleh sebuah robot kucing bernama Doraemon yang datang dari masa depan, yaitu datang dari abad ke-22.', 2011, 'Elex Media Komputindo', 'https://cdn.gramedia.com/uploads/items/9789792786910.jpg'),
(2002, 'Doraemon 06', NULL, NULL, 'Fujiko F. Fujio', 'Doraemon adalah robot penolong yang diciptakan pada abad ke-21 bersama keenam teman-temannya yang lain. Saat masih bersekolah di sekolah pelatihan robot, Doraemon berwarna kuning dan memiliki telinga, tidak seperti sekarang. Ia menjadi robot penolong di rumah kediaman keluarga Nobi pada abad ke-20.', 2018, 'Elex Media Komputindo', 'https://cdn.gramedia.com/uploads/items/9786020001067.jpg'),
(2003, 'Why? Internet Of Things', NULL, NULL, 'Yearim Dang', 'Jaringan (network) sensor-sensor yang jumlahnya miliaran, yakni yang lebih dikenal dengan Internet of Things saat ini sedang mengubah kehidupan manusia.', 2020, 'Elex Media Komputindo', 'https://cdn.gramedia.com/uploads/items/9786230012754_Why_Internet_cover_Page_1.jpg'),
(2004, 'Why? Game Science', NULL, NULL, 'Yearim Dang', 'Di dalam buku ini, terdapat Omji yang sangat menyukai game dan Komji yang lebih suka berkebun daripada bermain game. Omji akan menceritakan segala hal terkait game, mulai dari sejarah, perkembangan, dan kontribusinya dalam perkembangan teknologi pada Komji agar dia tertarik untuk bermain game.', 2022, 'Elex Media Komputindo', 'https://cdn.gramedia.com/uploads/items/722020396_cover_.jpg'),
(2005, 'Naruto Uzumaki (うずまきナルト, Uzumaki Naruto)', NULL, NULL, 'Masashi Kishimoto (岸本 斉史)', 'Once upon a time, the Nine-Tailed Demon Fox devastated the shinobi village of Konohagakure, and was only stopped when the villages leader, the Fourth Hokage, gave up his life to seal it within the body of an infant. Twelve years later, a young orphan boy named Naruto Uzumaki regularly pulls pranks and is constantly causing trouble around the village. The villagers dislike him for it, but having no parents or friends, Naruto craves even negative attention.', 2004, 'Shueisha', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/NarutoCoverTankobon1.jpg/220px-NarutoCoverTankobon1.jpg'),
(2006, 'The Worst Client (最悪の依頼人, Saiaku no Irainin)', NULL, NULL, 'Masashi Kishimoto (岸本 斉史)', 'Kakashi points out that Naruto, Sasuke, and Sakura have all failed to capture a bell because they were working by themselves. Had they worked together, they might have succeeded. Teamwork has been the point of the exercise, the prospective ninja meant to set aside the fact that one of them would be returning to the Academy in order to complete the mission. ', 2000, 'Shueisha', 'https://4.bp.blogspot.com/-ilXYcYc3tjc/T6t11_96duI/AAAAAAAAAQM/UAGVNjSDFMg/s320/Volume02Cover.jpg'),
(2007, 'For the Sake of Dreams…!! (夢の為に…!!, Yume no Tame ni…!!)', NULL, NULL, 'Masashi Kishimoto (岸本 斉史)', 'To improve their chakra control, and thus the effectiveness of their techniques, Kakashi teaches Team 7 how to climb trees. Naruto fails completely, Sasuke can only make it halfway up, and Sakura is able to make it to the top on her first try. After repeated failures, Naruto asks Sakura for tips. Meanwhile, Zabuza recovers from his fight with Kakashi. ', 2000, 'Shueisha', 'http://4.bp.blogspot.com/-kyBspcg5L48/T6uBE9NNeRI/AAAAAAAAAQg/SzKlcaDmtNg/s320/Volume03Cover.jpg'),
(2008, 'The Hero Bridge!! (英雄の橋!!, Eiyū no Hashi!!)', NULL, NULL, 'Masashi Kishimoto (岸本 斉史)', 'In his anger, Naruto unknowingly taps into the chakra reserves of the Nine-Tails. Kakashi senses this and, worried that the seal that keeps the fox sealed within Naruto has been broken, decides it is time to finish his battle with Zabuza. When he sees that Naruto mysterious chakra source also heals all the damage he has sustained, Haku tries to flee. In one quick motion, Naruto avoids one of Haku attacks and catches Haku. He then punches Haku in the face, sending him flying and shattering his ice prison. Naruto charges to deliver the finishing blow, and Haku turns to face his death, revealing that the mask he has been wearing in the entire battle has been broken.', 2000, 'Shueisha', 'http://4.bp.blogspot.com/-ix8UsYUDrn4/T6uBGaHuOeI/AAAAAAAAAQk/2gsKQ1YkZwk/s320/Volume04Cover.jpg'),
(2009, 'Oshi no Ko (【推しの子】) Volume 1', NULL, NULL, 'Aka Akasaka', 'Gynecologist Gorou Amamiya is tasked with helping deliver the children of Ai Hoshino, a Japanese idol whom he admires, without the knowledge of the general public. However, the night of Ai delivery, Gorou is murdered by an obsessive fan of Ai , and is reincarnated as Aquamarine Aqua Hoshino, Ai son, retaining his memories of his previous life. Aqua fraternal twin, Ruby Hoshino, is also a reincarnation, though she refuses to admit her original identity as one of Gorou patients who got him interested in Ai in the first place. Four years later, Ai is murdered by the same obsessive fan, who later commits suicide. ', 2020, 'Shueisha', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Oshi_no_Ko_Volume_1.jpg/220px-Oshi_no_Ko_Volume_1.jpg'),
(2010, 'Oshi no Ko (【推しの子】) Volume 2', NULL, NULL, 'Aka Akasaka', 'Gynecologist Gorou Amamiya is tasked with helping deliver the children of Ai Hoshino, a Japanese idol whom he admires, without the knowledge of the general public. However, the night of Ai delivery, Gorou is murdered by an obsessive fan of Ai , and is reincarnated as Aquamarine Aqua Hoshino, Ai son, retaining his memories of his previous life. Aqua fraternal twin, Ruby Hoshino, is also a reincarnation, though she refuses to admit her original identity as one of Gorou patients who got him interested in Ai in the first place. Four years later, Ai is murdered by the same obsessive fan, who later commits suicide. ', 2020, 'Shueisha', 'https://m.media-amazon.com/images/I/81qZ5D4PA3L._AC_UF1000,1000_QL80_.jpg'),
(2011, 'Oshi no Ko (【推しの子】) Volume 3', NULL, NULL, 'Aka Akasaka', 'Gynecologist Gorou Amamiya is tasked with helping deliver the children of Ai Hoshino, a Japanese idol whom he admires, without the knowledge of the general public. However, the night of Ai delivery, Gorou is murdered by an obsessive fan of Ai , and is reincarnated as Aquamarine Aqua Hoshino, Ai son, retaining his memories of his previous life. Aqua fraternal twin, Ruby Hoshino, is also a reincarnation, though she refuses to admit her original identity as one of Gorou patients who got him interested in Ai in the first place. Four years later, Ai is murdered by the same obsessive fan, who later commits suicide. ', 2020, 'Shueisha', 'https://m.media-amazon.com/images/I/81oVaxBLeEL._AC_UF1000,1000_QL80_.jpg'),
(2012, 'Oshi no Ko (【推しの子】) Volume 4', NULL, NULL, 'Aka Akasaka', 'Gynecologist Gorou Amamiya is tasked with helping deliver the children of Ai Hoshino, a Japanese idol whom he admires, without the knowledge of the general public. However, the night of Ai delivery, Gorou is murdered by an obsessive fan of Ai , and is reincarnated as Aquamarine Aqua Hoshino, Ai son, retaining his memories of his previous life. Aqua fraternal twin, Ruby Hoshino, is also a reincarnation, though she refuses to admit her original identity as one of Gorou patients who got him interested in Ai in the first place. Four years later, Ai is murdered by the same obsessive fan, who later commits suicide. ', 2020, 'Shueisha', 'https://id-test-11.slatic.net/p/ad021e67f03208a537f4dc1fd70bcfee.jpg'),
(2013, 'ROMANCE DAWN —冒険の夜明け— One Piece Volume 1', NULL, NULL, 'Eiichiro Oda', 'Tepat sebelum ajalnya, Sang Raja Bajak Laut Legendaris, Gold Roger, mengumumkan bahwa dia telah menyembunyikan harta karunnya di sebuah tempat di dunia ini... Kata-katanya tersebut telah membawa dunia menuju zaman kejayaan bajak laut! Dan kini, seorang pemuda bernama Luffy, telah memulai perjalanannya untuk menemukan harta karun tersebut, dan menjadi sang raja bajak laut!', 1997, 'Shueisha', 'https://static.wikia.nocookie.net/onepiece/images/0/0e/Volume_1.png'),
(2014, 'VERSUS!! バギー海賊団ーOne Piece Volume 2', NULL, NULL, 'Eiichiro Oda', 'Tepat sebelum ajalnya, Sang Raja Bajak Laut Legendaris, Gold Roger, mengumumkan bahwa dia telah menyembunyikan harta karunnya di sebuah tempat di dunia ini... Kata-katanya tersebut telah membawa dunia menuju zaman kejayaan bajak laut! Dan kini, seorang pemuda bernama Luffy, telah memulai perjalanannya untuk menemukan harta karun tersebut, dan menjadi sang raja bajak laut!', 1997, 'Shueisha', 'https://static.wikia.nocookie.net/onepiece/images/2/2f/Volume_2.png'),
(2015, 'Things That Cant Be Fakedー偽れぬもの— One Piece Volume 3', NULL, NULL, 'Eiichiro Oda', 'Tepat sebelum ajalnya, Sang Raja Bajak Laut Legendaris, Gold Roger, mengumumkan bahwa dia telah menyembunyikan harta karunnya di sebuah tempat di dunia ini... Kata-katanya tersebut telah membawa dunia menuju zaman kejayaan bajak laut! Dan kini, seorang pemuda bernama Luffy, telah memulai perjalanannya untuk menemukan harta karun tersebut, dan menjadi sang raja bajak laut!', 1997, 'Shueisha', 'https://static.wikia.nocookie.net/onepiece/images/7/75/Volume_3.png'),
(2016, 'Crescent Moon ー 三日月 — One Piece Volume 4', NULL, NULL, 'Eiichiro Oda', 'Tepat sebelum ajalnya, Sang Raja Bajak Laut Legendaris, Gold Roger, mengumumkan bahwa dia telah menyembunyikan harta karunnya di sebuah tempat di dunia ini... Kata-katanya tersebut telah membawa dunia menuju zaman kejayaan bajak laut! Dan kini, seorang pemuda bernama Luffy, telah memulai perjalanannya untuk menemukan harta karun tersebut, dan menjadi sang raja bajak laut!', 1997, 'Shueisha', 'https://static.wikia.nocookie.net/onepiece/images/3/31/Volume_4.png'),
(2017, 'Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e ー Light Novel Volume 1', NULL, NULL, 'Aka Akasaka', 'An unnamed person speaks to the reader of the novel, asking them to think about the state of society. They then talk about equality in society, concluding in the end that equality does not exist. They go on to refer to a famous passage which states that learning creates imbalances in equality, emphasizing that the teaching remains the same, albeit in a more complex situation, in the modern era. Finally, the unknown person then speaks to the reader again, asking if they have given thought to the future. They finish by referencing their own experience from when they were in high school.', 2015, 'MF Bunko J ー Media Factory', 'https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/c/c1/LN_Vol_01_cover.jpg'),
(2018, 'Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e ー Light Novel Volume 2', NULL, NULL, 'Aka Akasaka', 'An unnamed person speaks to the reader of the novel, asking them to think about the state of society. They then talk about equality in society, concluding in the end that equality does not exist. They go on to refer to a famous passage which states that learning creates imbalances in equality, emphasizing that the teaching remains the same, albeit in a more complex situation, in the modern era. Finally, the unknown person then speaks to the reader again, asking if they have given thought to the future. They finish by referencing their own experience from when they were in high school.', 2015, 'MF Bunko J ー Media Factory', 'https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/1/1c/LN_Vol_02_cover.jpg'),
(2019, 'Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e ー Light Novel Volume 3', NULL, NULL, 'Aka Akasaka', 'An unnamed person speaks to the reader of the novel, asking them to think about the state of society. They then talk about equality in society, concluding in the end that equality does not exist. They go on to refer to a famous passage which states that learning creates imbalances in equality, emphasizing that the teaching remains the same, albeit in a more complex situation, in the modern era. Finally, the unknown person then speaks to the reader again, asking if they have given thought to the future. They finish by referencing their own experience from when they were in high school.', 2015, 'MF Bunko J ー Media Factory', 'https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/f/f4/LN_Vol_03_cover.jpg'),
(2020, 'Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e ー Light Novel Volume 4', NULL, NULL, 'Aka Akasaka', 'An unnamed person speaks to the reader of the novel, asking them to think about the state of society. They then talk about equality in society, concluding in the end that equality does not exist. They go on to refer to a famous passage which states that learning creates imbalances in equality, emphasizing that the teaching remains the same, albeit in a more complex situation, in the modern era. Finally, the unknown person then speaks to the reader again, asking if they have given thought to the future. They finish by referencing their own experience from when they were in high school.', 2015, 'MF Bunko J ー Media Factory', 'https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/8/80/LN_Vol_04_cover.jpg'),
(2021, 'Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e ー Light Novel Volume 4.5', NULL, NULL, 'Aka Akasaka', 'An unnamed person speaks to the reader of the novel, asking them to think about the state of society. They then talk about equality in society, concluding in the end that equality does not exist. They go on to refer to a famous passage which states that learning creates imbalances in equality, emphasizing that the teaching remains the same, albeit in a more complex situation, in the modern era. Finally, the unknown person then speaks to the reader again, asking if they have given thought to the future. They finish by referencing their own experience from when they were in high school.', 2015, 'MF Bunko J ー Media Factory', 'https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/a/a1/LN_Vol_4.5_cover.jpg'),
(2022, 'Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e ー Light Novel Volume 5', NULL, NULL, 'Aka Akasaka', 'An unnamed person speaks to the reader of the novel, asking them to think about the state of society. They then talk about equality in society, concluding in the end that equality does not exist. They go on to refer to a famous passage which states that learning creates imbalances in equality, emphasizing that the teaching remains the same, albeit in a more complex situation, in the modern era. Finally, the unknown person then speaks to the reader again, asking if they have given thought to the future. They finish by referencing their own experience from when they were in high school.', 2015, 'MF Bunko J ー Media Factory', 'https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/e/e8/LN_Vol_05_cover.jpg'),
(2023, 'Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e ー Light Novel Volume 6', NULL, NULL, 'Aka Akasaka', 'An unnamed person speaks to the reader of the novel, asking them to think about the state of society. They then talk about equality in society, concluding in the end that equality does not exist. They go on to refer to a famous passage which states that learning creates imbalances in equality, emphasizing that the teaching remains the same, albeit in a more complex situation, in the modern era. Finally, the unknown person then speaks to the reader again, asking if they have given thought to the future. They finish by referencing their own experience from when they were in high school.', 2015, 'MF Bunko J ー Media Factory', 'https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/1/1f/LN_Vol_06_cover.jpg'),
(3001, 'Man s Search for Meaning', NULL, NULL, 'Viktor E. Frankl', 'Buku ini adalah cerita pribadi Viktor E. Frankl sebagai seorang tahanan dalam kamp konsentrasi Nazi selama Perang Dunia II. Frankl menjelaskan pengalaman tragisnya di kamp tersebut', 1946, 'Beacon Press', 'https://cdn.gramedia.com/uploads/items/9786023854165_MANS-SEARCH-F.jpg'),
(3002, 'The 7 Habits of Highly Effective People', NULL, NULL, 'Stephen R. Covey', 'Buku ini menguraikan tujuh kebiasaan yang dimiliki oleh orang-orang yang berhasil dalam berbagai aspek kehidupan mereka. ', 1989, 'Free Press', 'https://upload.wikimedia.org/wikipedia/en/a/a2/The_7_Habits_of_Highly_Effective_People.jpg'),
(3003, 'Mindset: The New Psychology of Success', NULL, NULL, 'Carol S. Dweck', 'Dengan menggunakan penelitian psikologis dan contoh-contoh kehidupan nyata, Dweck mengilustrasikan bagaimana memperbaiki mindset kita untuk mencapai keberhasilan yang lebih besar.', 2006, 'Ballantine Books', 'https://m.media-amazon.com/images/I/81I68HH7a2L._AC_UF1000,1000_QL80_.jpg'),
(3004, 'Atomic Habits: An Easy ', NULL, NULL, 'James Clear', 'Buku ini mengungkapkan pentingnya kebiasaan kecil dan bagaimana mereka dapat memiliki dampak besar pada kehidupan kita. ', 2018, 'Avery', 'https://cdnwpseller.gramedia.net/wp-content/uploads/2021/11/25135505/atomic-habits-1.jpg'),
(3005, 'The Power of Now: A Guide to Spiritual Enlightenment', NULL, NULL, 'Eckhart Tolle', 'Buku ini mengajak pembaca untuk mengalami kehidupan dalam momen sekarang dan meninggalkan kekhawatiran masa lalu dan kecemasan masa depan', 1997, 'New World Library', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659028124i/6708.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id_account` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(25) NOT NULL,
  `role` varchar(10) DEFAULT 'member'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id_account`, `nama`, `email`, `password`, `role`) VALUES
(1, 'admin', 'admin@ums.ac.id', 'admin', 'admin'),
(2, 'Name', 'nama@ums.ac.id', 'nama', 'member'),
(3, 'Gilang SN', 'gsn@yahoo.com', 'samaaja', 'member'),
(4, 'saya', 'saya@ums.ac.id', 'saya', 'member'),
(5, 'farhan', 'farhan@ums.ac.id', 'farhan', 'member'),
(7, 'joko', 'joko@ums.ac.id', 'joko', 'member'),
(12, 'Testing', 'test@anu.com', 'anu', 'member'),
(13, 'Naruto', 'naruto@ums.ac.id', 'naruto', 'member'),
(22, 'Hello', 'hello@anu.com', 'anu', 'member'),
(26, 'Super', 'super@super.com', 'super', 'member');

-- --------------------------------------------------------

--
-- Table structure for table `peminjaman`
--

CREATE TABLE `peminjaman` (
  `id_peminjaman` int(11) NOT NULL,
  `tanggal_peminjaman` datetime NOT NULL DEFAULT current_timestamp(),
  `tanggal_pengembalian` datetime NOT NULL DEFAULT current_timestamp(),
  `denda` int(11) DEFAULT NULL,
  `id_buku` int(11) DEFAULT NULL,
  `id_member` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `peminjaman`
--

INSERT INTO `peminjaman` (`id_peminjaman`, `tanggal_peminjaman`, `tanggal_pengembalian`, `denda`, `id_buku`, `id_member`) VALUES
(269, '2023-06-26 10:16:48', '2023-05-29 00:00:00', NULL, 3004, 26),
(270, '2023-06-26 10:16:56', '2023-05-29 00:00:00', NULL, 2004, 26),
(272, '2023-06-26 10:33:18', '2023-05-29 00:00:00', NULL, 1004, 7);

-- --------------------------------------------------------

--
-- Table structure for table `pengembalian`
--

CREATE TABLE `pengembalian` (
  `id_pengembalian` int(11) NOT NULL,
  `tanggal_pengembalian` datetime NOT NULL DEFAULT current_timestamp(),
  `denda` int(11) DEFAULT NULL,
  `id_buku` int(11) DEFAULT NULL,
  `id_member` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pengembalian`
--

INSERT INTO `pengembalian` (`id_pengembalian`, `tanggal_pengembalian`, `denda`, `id_buku`, `id_member`) VALUES
(1, '2023-06-23 03:22:50', NULL, 2003, 2),
(2, '2023-06-23 08:19:40', NULL, 2004, 2),
(3, '2023-06-23 17:23:55', NULL, 1002, 2),
(4, '2023-06-23 17:24:06', NULL, 1001, 2),
(5, '2023-06-23 17:24:07', NULL, 1003, 2),
(6, '2023-06-23 17:24:07', NULL, 1004, 2),
(7, '2023-06-23 17:24:08', NULL, 2008, 2),
(8, '2023-06-23 17:24:08', NULL, 2003, 2),
(9, '2023-06-23 17:24:09', NULL, 2007, 2),
(10, '2023-06-23 17:25:16', NULL, 2003, 2),
(11, '2023-06-23 17:25:18', NULL, 2001, 2),
(12, '2023-06-23 18:20:46', NULL, 1001, 2),
(13, '2023-06-23 19:14:58', NULL, 2004, 13),
(14, '2023-06-23 19:32:28', NULL, 1001, 13),
(15, '2023-06-23 19:32:29', NULL, 1002, 13),
(16, '2023-06-23 19:32:30', NULL, 2005, 13),
(17, '2023-06-23 19:34:31', NULL, 2005, 13),
(18, '2023-06-23 19:34:32', NULL, 2006, 13),
(19, '2023-06-23 19:34:35', NULL, 2007, 13),
(20, '2023-06-23 19:36:47', NULL, 1001, 13),
(21, '2023-06-23 19:36:48', NULL, 1002, 13),
(22, '2023-06-23 19:36:48', NULL, 1003, 13),
(23, '2023-06-23 19:38:03', NULL, 2003, 13),
(24, '2023-06-23 19:38:05', NULL, 1001, 13),
(25, '2023-06-23 19:38:05', NULL, 2005, 13),
(26, '2023-06-23 19:38:06', NULL, 2006, 13),
(27, '2023-06-23 19:38:08', NULL, 2007, 13),
(28, '2023-06-23 19:39:27', NULL, 1001, 13),
(29, '2023-06-23 19:39:28', NULL, 2006, 13),
(30, '2023-06-23 19:41:51', NULL, 2001, 13),
(31, '2023-06-23 19:41:53', NULL, 2005, 13),
(32, '2023-06-23 19:43:56', NULL, 1001, 13),
(33, '2023-06-23 19:43:58', NULL, 2006, 13),
(34, '2023-06-23 19:44:20', NULL, 1003, 13),
(35, '2023-06-23 19:44:22', NULL, 2001, 13),
(36, '2023-06-23 19:47:51', NULL, 1003, 13),
(37, '2023-06-23 19:47:53', NULL, 2007, 13),
(38, '2023-06-23 19:49:10', NULL, 1004, 13),
(39, '2023-06-23 19:49:41', NULL, 2008, 13),
(40, '2023-06-23 20:03:01', NULL, 1001, 13),
(41, '2023-06-23 20:03:04', NULL, 2007, 13),
(42, '2023-06-23 20:03:06', NULL, 2008, 13),
(43, '2023-06-23 20:04:05', NULL, 2006, 13),
(44, '2023-06-23 20:04:08', NULL, 2007, 13),
(45, '2023-06-23 20:05:33', NULL, 2004, 13),
(46, '2023-06-23 20:50:12', NULL, 1001, 2),
(47, '2023-06-23 20:50:15', NULL, 1004, 2),
(48, '2023-06-23 20:50:18', NULL, 2001, 2),
(49, '2023-06-23 20:50:20', NULL, 2002, 2),
(50, '2023-06-23 20:50:22', NULL, 2006, 2),
(51, '2023-06-23 20:57:47', NULL, 1001, 2),
(52, '2023-06-23 20:58:57', NULL, 1001, 2),
(53, '2023-06-23 20:58:59', NULL, 1002, 2),
(54, '2023-06-23 20:59:01', NULL, 1004, 2),
(55, '2023-06-23 20:59:01', NULL, 2001, 2),
(56, '2023-06-23 20:59:02', NULL, 2006, 2),
(57, '2023-06-24 09:26:20', NULL, 2006, 22),
(58, '2023-06-24 09:26:22', NULL, 2007, 22),
(59, '2023-06-24 10:12:23', NULL, 2002, 2),
(60, '2023-06-24 10:23:37', NULL, 2011, 4),
(61, '2023-06-24 13:47:03', NULL, 2007, 5),
(62, '2023-06-25 22:27:58', NULL, 2011, 5),
(63, '2023-06-26 10:17:05', NULL, 2001, 26),
(64, '2023-06-26 10:17:06', NULL, 2014, 26),
(65, '2023-06-26 10:33:42', NULL, 1003, 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`id_buku`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id_account`),
  ADD UNIQUE KEY `id_account` (`id_account`);

--
-- Indexes for table `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD PRIMARY KEY (`id_peminjaman`);

--
-- Indexes for table `pengembalian`
--
ALTER TABLE `pengembalian`
  ADD PRIMARY KEY (`id_pengembalian`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `peminjaman`
--
ALTER TABLE `peminjaman`
  MODIFY `id_peminjaman` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=273;

--
-- AUTO_INCREMENT for table `pengembalian`
--
ALTER TABLE `pengembalian`
  MODIFY `id_pengembalian` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
