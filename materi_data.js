const MATERI_DATA = [
    {
        title: Materi 1: Tantangan Industri Arsitektur, Teknik, dan Konstruksi (AEC),
        text: Selama berpuluh-puluh tahun, industri AEC dikenal memiliki tingkat adopsi teknologi yang lambat dan sangat terfragmentasi. Setiap disiplin ilmu (arsitek, struktur, MEP) cenderung bekerja sendiri-sendiri (dalam "silo") menggunakan dokumen fisik atau gambar 2D. Hal ini rentan menyebabkan miskomunikasi di lapangan, yang berujung pada masalah klasik konstruksi: pembengkakan biaya ( *cost overrun* ), keterlambatan jadwal, dan pemborosan material.,
        question: Masalah klasik apa yang sering muncul di industri konstruksi akibat sistem kerja yang terfragmentasi dan masih mengandalkan gambar 2D?,
        options: ["A. Siklus pengerjaan proyek yang terlalu cepat","B. Efisiensi penggunaan material yang berlebihan","C. Pembengkakan biaya ( *cost overrun* ) dan keterlambatan jadwal","D. Terlalu banyaknya integrasi data antar disiplin ilmu"],
        correct: 2
    },
    {
        title: Materi 2: Pengertian Fundamental BIM,
        text: Banyak yang salah paham bahwa BIM hanyalah *software* 3D. Menurut *National BIM Standard-United States* (NBIMS-US), BIM adalah representasi digital dari karakteristik fisik dan fungsional suatu fasilitas. Model ini berfungsi sebagai sumber informasi yang dapat dibagikan dan menjadi dasar pengambilan keputusan yang andal sejak fase konsep awal, desain, konstruksi, hingga pembongkaran.,
        question: Berdasarkan standar NBIMS-US, BIM paling tepat dideskripsikan sebagai...,
        options: ["A. Sekadar perangkat lunak ( *software* ) untuk membuat render 3D yang indah","B. Representasi digital dari karakteristik fisik dan fungsional suatu fasilitas sebagai sumber informasi","C. Mesin otomatis untuk mencetak gambar kerja 2D secara masal","D. Format file standar yang hanya digunakan oleh arsitek"],
        correct: 1
    },
    {
        title: Materi 3: Tiga Elemen Kunci BIM (Building, Information, Modeling),
        text: BIM terdiri dari tiga elemen kunci. *Building* merujuk pada objek fisik yang dirancang (gedung, jembatan, dll). *Information* adalah jantung dari BIM, di mana setiap elemen memiliki "kecerdasan" atau metadata (misal: spesifikasi material, harga, dimensi). Sedangkan *Modeling* merujuk pada proses kerja kolaboratif secara dinamis, bukan sekadar memproduksi gambar statis.,
        question: Manakah dari tiga elemen BIM yang sering disebut sebagai "jantung" dari metode BIM karena menyimpan metadata seperti dimensi, material, dan pabrikan?,
        options: ["A. Building","B. Information","C. Modeling","D. Management"],
        correct: 1
    },
    {
        title: Materi 4: Perbedaan Paradigma CAD vs BIM,
        text: Transisi dari CAD ke BIM adalah perubahan dari *drafting* (menggambar garis) ke *modeling* (membangun secara virtual). Dalam CAD tradisional, memindahkan dinding di denah mengharuskan kita memperbarui gambar potongan secara manual. Dalam BIM, model bersifat  *parametrik* . Memindahkan dinding di satu tampilan akan otomatis dan instan memperbarui semua tampilan lainnya, termasuk laporan volume material.,
        question: Apa keunggulan utama sistem pemodelan parametrik pada BIM dibandingkan sistem CAD tradisional?,
        options: ["A. File yang dihasilkan ukurannya jauh lebih kecil","B. Perubahan pada satu tampilan akan otomatis memperbarui tampilan lain secara instan","C. Hanya membutuhkan spesifikasi komputer yang rendah","D. Tidak memerlukan kemampuan membaca gambar teknik"],
        correct: 1
    },
    {
        title: Materi 5: Konsep Embrio BIM (Era 1970-an),
        text: Konsep awal BIM sudah dicetuskan jauh sebelum komputer modern ada. Pada pertengahan 1970-an, Profesor Charles (Chuck) Eastman dari Georgia Tech mengembangkan sistem bernama *Building Description System* (BDS). Ia mengusulkan agar desainer berinteraksi dengan "elemen yang dapat dihitung secara komputasi" alih-alih menggambar garis, yang mana ide ini menjadi pondasi BIM modern.,
        question: Siapakah tokoh yang sering dianggap sebagai pelopor konsep awal BIM dengan mengembangkan *Building Description System* (BDS) pada tahun 1970-an?,
        options: ["A. Jerry Laiserin","B. Charles (Chuck) Eastman","C. Steve Jobs","D. Frank Lloyd Wright"],
        correct: 1
    },
    {
        title: Materi 6: Lahirnya Perangkat Lunak Objek (Era 1980-an),
        text: Pada pertengahan 1980-an, perangkat lunak komersial pertama yang menerapkan konsep BIM mulai bermunculan. Di Eropa, Graphisoft merilis *Radar CH* (1984) yang kemudian berevolusi menjadi ArchiCAD. Di saat yang sama, konsep desain mekanikal parametrik dipelopori oleh Pro/ENGINEER. Ini menandai dimulainya era transisi dari menggambar 2D ke memodelkan objek 3D secara komersial.,
        question: Perangkat lunak apa yang dirilis pada tahun 1984 oleh Graphisoft dan sering diakui sebagai salah satu *software* komersial pertama yang menerapkan konsep awal BIM?,
        options: ["A. AutoCAD","B. Revit","C. SketchUp","D. Radar CH (ArchiCAD)"],
        correct: 3
    },
    {
        title: Materi 7: Masalah Interoperabilitas dan buildingSMART,
        text: Pada era 1990-an, banyak vendor membuat *software* 3D, namun muncul masalah besar: file dari *software* A tidak bisa dibuka di *software* B tanpa kehilangan data. Untuk mengatasi ini, dibentuklah *International Alliance for Interoperability* (IAI) yang kini dikenal sebagai  **buildingSMART** . Tujuannya adalah menciptakan standar format pertukaran data yang terbuka untuk seluruh industri.,
        question: Organisasi apa yang dibentuk untuk mengatasi masalah interoperabilitas dan mempromosikan standar format data terbuka di industri AEC?,
        options: ["A. National Institute of Standards and Technology (NIST)","B. buildingSMART (sebelumnya IAI)","C. American Institute of Architects (AIA)","D. International Organization for Standardization (ISO)"],
        correct: 1
    },
    {
        title: Materi 8: Standar Format IFC (Industry Foundation Classes),
        text: Hasil utama dari organisasi buildingSMART adalah format file  **IFC** . IFC adalah format standar terbuka (open-source) internasional yang digunakan untuk berbagi model BIM lintas  *software* . Dengan IFC, seorang arsitek yang menggunakan ArchiCAD dapat mengirimkan modelnya kepada insinyur struktur yang menggunakan Tekla tanpa kehilangan informasi "kecerdasan" dasar pada objek bangunan tersebut.,
        question: Format file standar terbuka (open-source) yang dikembangkan untuk memungkinkan pertukaran model BIM antar berbagai merek *software* yang berbeda adalah...,
        options: ["A. .DWG","B. .RVT","C. .IFC","D. .PDF"],
        correct: 2
    },
    {
        title: Materi 9: Dimensi BIM - BIM 3D (Visualisasi & Deteksi Benturan),
        text: Dimensi BIM tidak berhenti di 3D. Namun, BIM 3D sendiri sangat penting. Selain untuk visualisasi fotorealistik yang membantu klien awam memahami desain, BIM 3D digunakan untuk *Clash Detection* (Deteksi Benturan). Komputer secara otomatis mendeteksi jika ada tabrakan antar elemen fisik sebelum dibangun, misalnya pipa AC yang menabrak balok beton struktural.,
        question: Fungsi utama dari implementasi BIM 3D pada fase pra-konstruksi yang dapat mencegah pembongkaran paksa di lapangan akibat tabrakan pipa dan struktur adalah...,
        options: ["A. Quantity Take-Off (QTO)","B. Clash Detection (Deteksi Benturan)","C. Penjadwalan Proyek","D. Analisis Energi"],
        correct: 1
    },
    {
        title: Materi 10: Dimensi BIM - BIM 4D (Integrasi Penjadwalan / Waktu),
        text: BIM 4D menambahkan elemen "Waktu" ( *Time* ). Model 3D dihubungkan dengan jadwal proyek (seperti kurva S atau  *Gantt Chart* ). Dengan BIM 4D, manajer proyek dapat melakukan simulasi urutan konstruksi secara visual. Hal ini memungkinkan pemantauan visual progres proyek minggu demi minggu dan pengaturan tata letak logistik (seperti posisi *crane* dan penumpukan material).,
        question: Dimensi BIM ke-4 (BIM 4D) mengintegrasikan model bangunan 3D dengan aspek apa?,
        options: ["A. Estimasi Biaya RAB","B. Jadwal dan Waktu Pelaksanaan Konstruksi","C. Analisis Beban Angin","D. Manajemen Operasional Gedung"],
        correct: 1
    },
    {
        title: Materi 11: Dimensi BIM - BIM 5D (Estimasi Biaya),
        text: BIM 5D menambahkan elemen "Biaya" ( *Cost* ). Karena setiap elemen dalam model BIM menyimpan informasi volume, dimensi, dan material, proses perhitungan volume material atau *Quantity Take-Off* (QTO) dapat dilakukan secara otomatis. Jika desain berubah, volume material dan Rencana Anggaran Biaya (RAB) akan diperbarui secara dinamis dan  *real-time* .,
        question: Seorang *Quantity Surveyor* (QS) menggunakan model BIM untuk mengekstrak volume material beton dan baja secara otomatis guna menghitung RAB. Ini adalah penerapan dari...,
        options: ["A. BIM 3D","B. BIM 4D","C. BIM 5D","D. BIM 6D"],
        correct: 2
    },
    {
        title: Materi 12: Dimensi BIM - BIM 6D (Keberlanjutan / Sustainability),
        text: BIM 6D berfokus pada analisis *Sustainability* (Keberlanjutan) dan performa bangunan. Pada tahap ini, model digunakan untuk mensimulasikan pencahayaan matahari, konsumsi energi, arah angin, serta jejak karbon dari material yang digunakan. Tujuannya adalah menciptakan bangunan yang efisien energi dan memenuhi standar *Green Building* sebelum konstruksi dimulai.,
        question: Apabila seorang arsitek ingin menyimulasikan radiasi matahari tahunan untuk menentukan jenis kaca yang paling hemat energi pada fasad bangunan, dimensi BIM mana yang sedang diterapkan?,
        options: ["A. BIM 4D","B. BIM 5D","C. BIM 6D","D. BIM 7D"],
        correct: 2
    },
    {
        title: Materi 13: Dimensi BIM - BIM 7D (Manajemen Fasilitas / Facility Management),
        text: Dimensi terakhir, BIM 7D, digunakan setelah bangunan selesai dikerjakan (Fase Operasional). Pemilik gedung menerima model *As-Built* digital yang berfungsi sebagai *Digital Twin* (kembaran digital). Jika ada pompa air yang rusak, teknisi gedung cukup mengklik elemen pompa di model untuk melihat vendor, masa garansi, dan jadwal perawatannya tanpa harus mencari dokumen fisik.,
        question: BIM 7D sangat berguna bagi pemilik bangunan atau *Building Manager* setelah proyek selesai dikonstruksi karena dimensi ini berkaitan dengan...,
        options: ["A. Pembuatan tender dan pelelangan","B. Manajemen Fasilitas ( *Facility Management* ) dan Pemeliharaan","C. Analisis daya dukung tanah","D. Pencetakan 3D bangunan"],
        correct: 1
    },
    {
        title: Materi 14: Nilai Tambah (Kelebihan) Penggunaan BIM,
        text: Salah satu nilai tambah atau kelebihan paling krusial dari penerapan BIM adalah reduksi biaya akibat *Rework* (kerja ulang di lapangan). Memperbaiki desain yang bentrok di dalam model komputer jauh lebih murah dibandingkan membongkar dinding beton yang sudah terlanjur dicor di lapangan. Selain itu, BIM menciptakan *Single Source of Truth* yang menjamin transparansi data.,
        question: Keuntungan finansial terbesar dari penerapan koordinasi BIM di fase desain dan pra-konstruksi adalah...,
        options: ["A. Menghilangkan kebutuhan untuk menyewa kontraktor","B. Menghindari biaya kerja ulang ( *rework* ) yang mahal di lapangan akibat tabrakan elemen","C. Mendapatkan subsidi pajak dari pemerintah","D. Menghilangkan fungsi arsitek sepenuhnya"],
        correct: 1
    },
    {
        title: Materi 15: Tantangan Finansial dalam Adopsi BIM (CapEx),
        text: Meskipun manfaatnya besar, adopsi BIM terhambat oleh besarnya Belanja Modal awal (*Capital Expenditure* / CapEx). Lisensi perangkat lunak BIM sangat mahal dan biasanya menggunakan sistem berlangganan. Selain itu, BIM membutuhkan investasi perangkat keras ( *Hardware* ) berupa komputer *Workstation* dengan spesifikasi tinggi (Prosesor multi-core, RAM sangat besar, dan GPU mahal).,
        question: Hambatan implementasi BIM dari sisi teknis dan finansial yang paling sering dikeluhkan oleh perusahaan skala kecil adalah...,
        options: ["A. Mahalnya biaya lisensi *software* dan kebutuhan komputer spesifikasi tinggi","B. Tidak adanya koneksi internet di lapangan","C. Material konstruksi yang terlalu mahal","D. Penolakan dari pihak perbankan"],
        correct: 0
    },
    {
        title: Materi 16: Tantangan Kurva Pembelajaran dan SDM BIM,
        text: Selain tantangan perangkat, industri menghadapi tantangan Sumber Daya Manusia (SDM). Mengubah kebiasaan seorang *drafter* 2D menjadi *BIM Modeler* atau *BIM Coordinator* membutuhkan pelatihan yang intensif dan berbulan-bulan (Kurva Pembelajaran yang curam). Tenaga ahli tersertifikasi BIM masih langka, sehingga perusahaan harus berinvestasi besar pada  *training* .,
        question: Istilah yang tepat untuk menggambarkan kesulitan dan lamanya waktu yang dibutuhkan oleh karyawan konvensional untuk menguasai alur kerja BIM adalah...,
        options: ["A. Clash detection","B. Kurva pembelajaran ( *Learning curve* ) yang curam","C. Interoperabilitas","D. Rework"],
        correct: 1
    },
    {
        title: Materi 17: Tantangan Psikologis dan Budaya Kerja (IPD),
        text: BIM menuntut kolaborasi dan keterbukaan data sejak hari pertama (konsep *Integrated Project Delivery* - IPD). Ini menabrak budaya konvensional industri AEC, di mana desainer seringkali menyembunyikan progres kerjanya dari disiplin lain sampai desain tersebut benar-benar selesai demi menghindari kritik. Mengubah pola pikir individual menjadi kolaboratif terbuka adalah tantangan tersulit.,
        question: Apa tantangan non-teknis terbesar dalam penerapan BIM terkait kebiasaan pekerja di industri AEC?,
        options: ["A. Kesulitan mengetik di keyboard","B. Kesulitan membedakan warna pada monitor","C. Mengubah budaya kerja \"silo\" dan rahasia menjadi budaya kerja kolaboratif dan transparan","D. Ketidakmampuan membaca bahasa asing"],
        correct: 2
    },
    {
        title: Materi 18: Isu Legal dan Kepemilikan Model (Hak Kekayaan Intelektual),
        text: Ketika banyak disiplin ilmu bekerja di satu model BIM terpusat (kolaboratif), muncul wilayah abu-abu secara hukum. Siapa yang memiliki Hak Kekayaan Intelektual ( *Intellectual Property* ) atas model tersebut? Jika arsitek salah memasukkan metadata material, dan kontraktor membeli barang yang salah berdasarkan data tersebut, kontrak konvensional kesulitan menentukan siapa yang menanggung kerugian.,
        question: Salah satu masalah legal dan kontraktual yang sering muncul dalam penerapan model BIM kolaboratif terpusat adalah...,
        options: ["A. Pembagian jadwal piket di lapangan","B. Penentuan siapa pemegang Hak Kekayaan Intelektual dan pihak yang menanggung risiko kesalahan data","C. Harga sewa alat berat","D. Masa berlaku Izin Mendirikan Bangunan (IMB)"],
        correct: 1
    },
    {
        title: Materi 19: Taksonomi Software BIM - BIM Authoring Tools,
        text: Dalam ekosistem BIM, perangkat lunak dibagi sesuai fungsinya. *BIM Authoring Tools* adalah perangkat lunak tempat pembuatan atau pemodelan awal geometri 3D dan pengisian data parametriknya. Aplikasi ini digunakan untuk menciptakan model dari nol. Contoh yang paling dominan di dunia adalah Autodesk Revit, Graphisoft ArchiCAD, dan Tekla Structures.,
        question: Kategori perangkat lunak yang digunakan oleh arsitek atau insinyur untuk membuat, menggambar, dan merancang model 3D bangunan dari nol disebut...,
        options: ["A. BIM Review Tools","B. BIM Analysis Tools","C. BIM Authoring Tools","D. Common Data Environment"],
        correct: 2
    },
    {
        title: Materi 20: Keunggulan Autodesk Revit (Authoring Tool),
        text: Autodesk Revit saat ini mendominasi pasar *Authoring Tool* BIM. Keunggulan utamanya adalah ia memiliki tiga modul sekaligus dalam satu platform:  *Architecture, Structure* , dan  *MEP* . Hal ini memudahkan sebuah perusahaan konsultan multidisiplin untuk bekerja di dalam satu ekosistem perangkat lunak yang sama tanpa harus repot melakukan konversi file.,
        question: Alasan utama mengapa Autodesk Revit sangat populer sebagai *software* BIM di perusahaan konsultan multidisiplin adalah...,
        options: ["A. Aplikasinya gratis dan open-source","B. Memiliki modul terintegrasi untuk Arsitektur, Struktur, dan MEP dalam satu platform","C. Tidak memerlukan spesifikasi komputer tinggi","D. Hanya digunakan khusus untuk pemodelan baja ringan"],
        correct: 1
    },
    {
        title: Materi 21: Keunggulan Tekla Structures (Authoring Tool),
        text: Sementara Revit unggul dalam kelengkapan disiplin, Tekla Structures (dari Trimble) adalah standar emas global untuk *detailing* struktur spesifik, khususnya struktur baja ( *steel detailing* ) dan beton pracetak. Tekla mampu memodelkan hingga ke tingkat detail mur, baut, dan las dengan akurasi sangat tinggi (LOD tinggi) yang siap dihubungkan langsung ke mesin pabrikasi otomatis.,
        question: Perangkat lunak BIM *Authoring* yang secara luas diakui sebagai standar industri terbaik (gold standard) di seluruh dunia untuk *detailing* struktur baja dan fabrikasi adalah...,
        options: ["A. ArchiCAD","B. SketchUp","C. Tekla Structures","D. Lumion"],
        correct: 2
    },
    {
        title: Materi 22: Taksonomi Software BIM - BIM Coordination Tools,
        text: Setelah model dibuat di *Authoring tools* oleh berbagai konsultan yang berbeda, file-file tersebut harus digabungkan. Di sinilah *BIM Coordination Tools* bekerja. Perangkat lunak ini tidak digunakan untuk menggambar, melainkan untuk menggabungkan model 3D, memutarnya dengan ringan, dan menjalankan  *Clash Detection* . Contoh paling populer adalah Autodesk Navisworks dan Solibri.,
        question: Perangkat lunak seperti Autodesk Navisworks difokuskan untuk tugas apa dalam alur kerja BIM?,
        options: ["A. Mendesain bentuk fasad bangunan dari nol","B. Menggabungkan banyak model dari berbagai disiplin untuk melakukan koordinasi dan deteksi benturan ( *clash detection* )","C. Melakukan perhitungan rencana anggaran biaya manual","D. Mendesain brosur pemasaran properti"],
        correct: 1
    },
    {
        title: Materi 23: BIM Analysis Tools (Simulasi Rekayasa),
        text: Model 3D yang sudah dibuat dapat diekspor ke *BIM Analysis Tools* untuk dilakukan komputasi dan uji teknis. Terdapat *software* untuk analisis kekuatan struktur (seperti SAP2000, ETABS, atau Robot Structural Analysis) dan ada juga *software* untuk analisis lingkungan/energi (seperti Sefaira atau IESVE) untuk menghitung radiasi matahari, pencahayaan alami, dan beban pendingin ruangan.,
        question: Jika seorang *Mechanical Engineer* (ME) ingin mensimulasikan efisiensi energi, beban pendingin udara, dan pencahayaan alami menggunakan model BIM, perangkat lunak yang paling relevan masuk ke dalam kategori...,
        options: ["A. BIM Authoring Tools","B. BIM Analysis Tools (Energi & Lingkungan)","C. Common Data Environment","D. BIM 4D Scheduling"],
        correct: 1
    },
    {
        title: Materi 24: Common Data Environment (CDE),
        text: *Common Data Environment* (CDE) adalah brankas digital dan platform kolaborasi berbasis *cloud* (internet). CDE menjadi satu-satunya sumber kebenaran ( *Single Source of Truth* ) di proyek. Seluruh file model BIM, gambar 2D, dokumen kontrak, dan komunikasi proyek ( *Approval* , RFI) disimpan di CDE dengan hak akses yang diatur secara ketat.,
        question: Apa fungsi utama dari *Common Data Environment* (CDE) dalam manajemen proyek BIM?,
        options: ["A. Sebagai *software* untuk menggambar denah rumah 2D","B. Sebagai platform penyimpan data terpusat berbasis *cloud* yang menyimpan seluruh dokumen teknis dan model secara aman","C. Sebagai aplikasi untuk merender video presentasi","D. Sebagai perangkat keras server fisik di lapangan"],
        correct: 1
    },
    {
        title: Materi 25: Contoh Platform CDE di Industri,
        text: Untuk memfasilitasi kerja terpusat, berbagai perusahaan teknologi merilis platform CDE unggulan mereka. Autodesk memiliki *Autodesk Construction Cloud* (ACC / dulunya BIM 360). Trimble menawarkan *Trimble Connect* yang terintegrasi sangat baik dengan Tekla. Bentley memiliki *ProjectWise* yang tangguh untuk infrastruktur masif berskala negara, dan ada juga *Dalux* yang populer karena mudah diakses via *smartphone* di lapangan.,
        question: Berikut ini yang BUKAN merupakan contoh dari platform perangkat lunak *Common Data Environment* (CDE) komersial adalah...,
        options: ["A. Autodesk Construction Cloud (ACC)","B. Trimble Connect","C. Bentley ProjectWise","D. Microsoft Word"],
        correct: 3
    },
];
