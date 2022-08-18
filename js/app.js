// alert(1);

// $(window).scroll(function () {
//   //zoom
//   var top = $(window).scrollTop(),
//     scale = top / 2000;
//   $(".inner").css({
//     transform: "scale(" + scale + "," + scale + ")",
//     "-webkit-transform": "scale(" + scale + "," + scale + ")",
//   });

//   var scroll = $(window).scrollTop();
//   // console.log(scroll);
//   var header = $("header");
//   return scroll > 20 ? header.addClass("stuck") : header.removeClass("stuck");
//   // }
// });

$(() => {
  $(window).on("load", function () {
    $(".preloader").fadeOut(10000);
    $(".preloader").remove();
  });
  new WOW().init();
  var mobile = $(".menu").addClass("mob");
  $(document).on("click", ".m-menu", () => {
    $(".menu").fadeIn("fast");
    // alert(1);
  });
  $(document).on("click", ".close-btn", () => {
    $(".menu").hide();
    // alert(1);
  });

  if ($(window).width() > 768) {
    // $(".m-menu").click(() => {
    // });
  }

  // const tilt = $(".js-tilt").tilt();
  // // tilt.on("change", callback); // parameters: event, transforms
  // // tilt.on("tilt.mouseLeave", callback); // parameters: event
  // // tilt.on("tilt.mouseEnter", callback); // parameters: event

  // $(".js-tilt").tilt({
  //   max: 30,
  //   speed: 600,
  //   scale: 1,
  //   transition: true,
  //   // easing: "cubic-bezie$(.03,.98,.52,.99)",
  //   perspective: 600,
  //   // glare: true,
  // });
});

//timeline js
// http://timeline.knightlab.com/docs/options.html
var additionalOptions = {
  start_at_end: true,
  default_bg_color: { r: 0, g: 0, b: 0 },
  timenav_height: 250
};

var sample_json = {
  "events": [
    {
      "media": {
        "url": "https://news.detik.com/x/detail/investigasi/20220808/Irjen-Sambo-di-Pusaran-Pembunuhan-Brigadir-J/images/ferdi-sambo--ha7hw.png",
        "caption": "Irjen Sambo dalam perjalanan",
        "credit": "detikX"
      },
      "start_date": {
        "month": "7",
        "day": "2",
        "year": "2022",
        "hour": "13",
        "minute": "00",
        "second": "00",
        "millisecond": 0,
        // "format": "dd mmm yy,hh.MM"
        "format": "dd mmm yy, HH:MM"
      },
      "text": {
        "headline": "Sabtu, 2 Juli 2022",
        "text": "Keluarga besar Ferdy Sambo dan istrinya Putri Candrawathi berangkat ke Magelang, Jawa Tengah, untuk menengok kedua anaknya yang bersekolah di SMA Taruna Nusantara, Magelang. Rombongan ajudan diajak serta, termasuk Yosua, Richard Eliezer Pudihang Lumiu alias Bharada E, Bripka Ricky Rizal, Briptu Daden, serta asisten rumah tangga bernama Kuat Ma’ruf dan S. Mereka menginap di rumah Ferdy Sambo di Cempaka Residence, Mertoyudan, Magelang."
      },
      "group": "Magelang"
    },
    {
      // https://news.detik.com/x/detail/investigasi/20220815/Permufakatan-Jahat-Sambo-di-Duren-Tiga/images/freddy-sambo-kg1tu7.png
      "media": {
        "url": "https://news.detik.com/x/detail/investigasi/20220815/Permufakatan-Jahat-Sambo-di-Duren-Tiga/images/freddy-sambo-kg1tu7.png",
        "caption": "Irjen Sambo dalam perjalanan",
        "credit": "detikX"
      },
      "start_date": {
        "month": "7",
        "day": "4",
        "year": "2022",
        "hour": "18",
        "minute": "00",
        "second": "00",
        "millisecond": 0,
        "format": "dd mmm yy, HH:MM"
      },
      "text": {
        "headline": "Senin, 4 Juli 2022",
        "text": "Kuat Ma’ruf mengklaim memergoki Yosua duduk berdekatan dengan Putri di Sofa. Kuat menegur Yosua karena menuding apa yang dilakukan Yosua itu tidak sopan."
      },
      "group": "Magelang"
    },
    {
      "start_date": {
        "year": "2022",
        "month": "7",
        "day": "6",
        "hour": "09",
        "minute": "00",
        "second": "00",
        "millisecond": 0,
        "format": "dd mmm yy, HH:MM"

      },
      "text": {
        "headline": "Rabu, 6 Juli 2022",
        "text": "Sambo dan Putri merayakan hari jadi pernikahan. Dikabarkan, sempat terjadi cekcok antara Putri dan Sambo seusai perayaan hari jadi ini. Pertengkaran inilah yang diduga membuat Sambo memilih pulang lebih dulu ke Jakarta keesokan paginya. Sambo pulang ke Jakarta menggunakan pesawat didampingi ajudannya, Briptu Daden."
      },
      "group": "Magelang"
    },
    {
      "start_date": {
        "month": "7",
        "day": "7",
        "year": "2022",
        "hour": "13",
        "minute": "00",
        "second": "00",
        "millisecond": 0,
        "format": "dd mmm yy, HH:MM"
      },
      "text": {
        "headline": "Kamis, 7 Juli 2022",
        "text": "<p>Kuat mengklaim kembali memergoki Yosua sedang berdekatan dengan Putri. Kali ini peristiwa itu terjadi di kamar. Waktu itu, Putri sedang sakit. Kuat diduga melaporkan peristiwa itu kepada Sambo. Itulah peristiwa yang disebut ‘merendahkan harkat dan martabat keluarga’, sehingga membuat Sambo marah.</p><p>Kuat dan Yosua pun disebut sempat terlibat adu mulut. Putri sampai menelepon Richard untuk minta bantuan melerai keduanya. Richard, yang sedang mengantar anak Sambo dan Putri sekolah ke Taruna Nusantara, langsung pulang ke Cempaka Residence sesuai perintah. Sambo juga disebut menelepon Ricky untuk menyita pistol HS-9 dan senjata laras panjang milik Yosua.</p>"
      },
      "group": "Magelang"
    },
    {
      "start_date": {
        "month": "7",
        "day": "8",
        "year": "2022",
        "hour": "08",
        "minute": "00",
        "second": "00",
        "millisecond": 0,
        "format": "dd mmm yy, HH:MM"
      },
      "text": {
        "headline": "Jumat, 8 Juli 2022",
        "text": "Rombongan Putri Candrawathi pulang ke Jakarta. Putri pulang menumpang mobil Lexus berwarna hitam bersama Richard, S, dan Kuat. Yosua menumpang mobil APV hitam bersama Ricky. Iring-iringan rombongan ini dikawal oleh satu mobil patroli. Di tengah perjalanan, Yosua sempat disebut mengirim pesan kepada Putri supaya mau membujuk Ricky mengembalikan senjatanya."
      },
      "group": "Magelang"
    },

    {
      "start_date": {
        "month": "7",
        "day": "8",
        "year": "2022",
        "hour": "15",
        "minute": "18",
        "second": "00",
        "millisecond": 0,
        "format": "dd mmm yy, HH:MM"
      },
      "text": {
        "headline": "Jumat, 8 Juli 2022",
        "text": "<p>Sambo dan rombongan Putri tiba di rumah pribadi Irjen Ferdy Sambo di Jalan Saguling III, Duren Tiga, Jakarta Selatan. Sambo tiba lebih dulu sekitar pukul 15.29 WIB. Menyusul 11 menit kemudian Putri dan rombongan. Di rumah pribadi ini, Sambo menanyakan tentang kejadian di Magelang kepada Putri. Obrolan Putri dengan Sambo ini disebut Komnas HAM sangat mempengaruhi konstruksi peristiwa pembunuhan Yosua. Sejak saat itulah, diduga rencana pembunuhan Yosua mulai dirancang.</p><p>Masih di Saguling III, Sambo disebut sempat memanggil Ricky untuk mengeksekusi Yosua. Namun Ricky menolak. Akhirnya Sambo memerintahkan Richard menembak Yosua. Richard mengklaim takut menolaknya.<p>"
      },
      "group": "Rencana Pembunuhan"
    },
    {
      "start_date": {
        "month": "7",
        "day": "8",
        "year": "2022",
        "hour": "17",
        "minute": "00",
        "second": "00",
        "millisecond": 0,
        "format": "dd mmm yy, HH:MM"
      },
      "text": {
        "headline": "Jumat, 8 Juli 2022",
        "text": "<p>Rombongan dari Magelang akhirnya pulang ke rumah dinas Ferdy Sambo di Kompleks Polri, Duren Tiga. Putri tiba lebih dulu sekitar pukul 17.09 WIB. Bersama Putri ada Kuat, Yosua, Richard, dan Ricky. Selang beberapa menit kemudian, Ferdy juga tiba di rumah dinas. Kuat, Ricky, dan Richard diminta Sambo berkumpul dalam suatu ruangan. Putri kabarnya langsung masuk ke kamarnya. Yosua saat itu masih berada di pekarangan rumah.</p><p>Sambo meminta Ricky mengajak Yosua ke ruangan. Saat Yosua masuk ruangan, sudah ada Kuat, Sambo, dan Richard. Sambo sudah memegang senjata HS-9 milik Yosua dengan sarung tangan hitam. Sambo pun langsung menyuruh Yosua berlutut sambil melipatkan kedua tangannya di belakang kepala. Saat itulah eksekusi Brigadir J dilakukan. Sambo memerintahkan Richard menembak Yosua. “Dor, dor, dor!” Yosua tertelungkup bersimbah darah.<p>Dalam perkembangan terakhir, Kapolri Jenderal Listyo Sigit Prabowo menyebut Sambo melepaskan tembakan terakhir ke kepala belakang Yosua. Dia kemudian menembakkan pistol HS-9 milik Yosua itu ke berbagai arah untuk membuat kacau konstruksi peristiwa. Jelaga dari HS-9 itu dioleskan ke tangan Yosua. Sambo sempat melaporkan kepada Listyo bahwa seolah telah terjadi peristiwa baku tembak antarajudannya yang dipicu oleh pelecehan seksual yang dilakukan Yosua terhadap istrinya. Sambo bilang Yosua tewas dalam kejadian baku tembak itu.</p>"
      },
      "group": "Rencana Pembunuhan"
    },
    {
      "start_date": {
        "month": "8",
        "day": "6",
        "year": "2022",
        "hour": "10",
        "minute": "00",
        "second": "00",
        "millisecond": 0,
        "format": "dd mmm yy, HH:MM"
      },
      "text": {
        "headline": "Sabtu, 6 Agustus 2022",
        "text": "<p>Richard menulis pengakuannya dalam empat lembar kertas. Catatan Richard itulah yang akhirnya menjadi patokan penyidik timsus yang dibentuk Listyo Sigit untuk menjerat aktor-aktor lain pembunuh Yosua.</p><p>Sebelumnya, skenario palsu versi Sambo kepada Listyo dan sejumlah jenderal polisi lainnya membuat penyidikan kasus pembunuhan Yosua ini menjadi gelap. Setelah nyaris sebulan dilakukan penyidikan, akhirnya titik terang pun ditemukan. Richard Eliezer, yang sudah dinyatakan sebagai tersangka, memberi pengakuan atas peristiwa yang terjadi di Duren Tiga.</p><p>Dalam kesaksiannya kepada penyidik, Richard menyebut dia diperintah oleh Sambo untuk membunuh Yosua. Polisi pun akhirnya menahan Sambo di Mako Brimob, Depok, Jawa Barat, pada hari yang sama.</p>"
      },
      "group": "Aktor Pembunuhan Berencana"
    },
    {
      "start_date": {
        "month": "8",
        "day": "9",
        "year": "2022",
        "hour": "16",
        "minute": "00",
        "second": "00",
        "millisecond": 0,
        "format": "dd mmm yy, HH:MM"
      },
      "text": {
        "headline": "Selasa, 9 Agustus 2022",
        "text": "<p>Ferdy Sambo, Kuat Ma’ruf, dan Ricky Rizal ditetapkan sebagai tersangka pembunuhan berencana. Ketiganya disangkakan Pasal 340 subsider Pasal 338 juncto Pasal 55 dan Pasal 56 KUHP dengan ancaman maksimal hukuman mati.</p>"
      },
      "group": "Aktor Pembunuhan Berencana"
    },
    {
      "start_date": {
        "month": "8",
        "day": "11",
        "year": "2022",
        "hour": "19",
        "minute": "00",
        "second": "00",
        "millisecond": 0,
        "format": "dd mmm yy, HH:MM"
      },
      "text": {
        "headline": "Kamis, 11 Agustus 2022",
        "text": '<p>Atas terungkapnya kasus pembunuhan Brigadir J ini, Sambo pun mengirimkan surat permohonan maafnya kepada Kapolri beserta semua sejawatnya yang ikut terlibat dalam upaya <i>obstruction of justice</i>. Surat itu dibacakan oleh pengacara keluarga Sambo, Arman Hanis, di depan awak media.</p><p>"Izinkan saya sebagai manusia yang tidak lepas dari kekhilafan secara tulus meminta maaf dan memohon maaf sebesar-besarnya, khususnya kepada rekan sejawat Polri beserta keluarga serta masyarakat luas yang terdampak akibat perbuatan saya yang memberikan informasi tidak benar serta memicu polemik dalam pusaran kasus Duren Tiga yang menimpa saya dan keluarga," sepotong isi surat Sambo yang dibacakan Arman Hanis.</p>'
      },
      "group": "Aktor Pembunuhan Berencana"
    },
    {
      "start_date": {
        "month": "8",
        "day": "12",
        "year": "2022",
        "hour": "19",
        "minute": "00",
        "second": "00",
        "millisecond": 0,
        "format": "dd mmm yy, HH:MM"
      },
      "text": {
        "headline": "Jumat, 12 Agustus 2022",
        "text": "<p>Polisi mencabut dua laporan keluarga Sambo terkait upaya pembunuhan terhadap Bharada E dan kasus pelecehan seksual terhadap Putri. Dua laporan ini diduga sengaja dibuat Sambo untuk mengaburkan peristiwa sebenarnya yang terjadi di Duren Tiga. Direktur Tindak Pidana Umum Bareskrim Polri Brigjen Andi Rian Djajadi mengungkapkan tidak ditemukan unsur pidana dalam pelaporan tersebut.</p>"
      },
      "group": "Aktor Pembunuhan Berencana"
    }
  ]
};


// http://timeline.knightlab.com/docs/json-format.html
var timeline_json = {
  "title": {
    "media": {
      "url": "//www.flickr.com/photos/tm_10001/2310475988/",
      "caption": "Whitney Houston performing on her My Love is Your Love Tour in Hamburg.",
      "credit": "flickr/<a href='http://www.flickr.com/photos/tm_10001/'>tm_10001</a>"
    },
    "text": {
      "headline": "Whitney Houston<br/> 1963 - 2012",
      "text": "<p>Houston's voice caught the imagination of the world propelling her to superstardom at an early age becoming one of the most awarded performers of our time. This is a look into the amazing heights she achieved and her personal struggles with substance abuse and a tumultuous marriage.</p>"
    }
  },
  "events": [
    {
      "media": {
        "url": "{{ static_url }}/img/examples/houston/family.jpg",
        "caption": "Houston's mother and Gospel singer, Cissy Houston (left) and cousin Dionne Warwick.",
        "credit": "Cissy Houston photo:<a href='http://www.flickr.com/photos/11447043@N00/418180903/'>Tom Marcello</a><br/><a href='http://commons.wikimedia.org/wiki/File%3ADionne_Warwick_television_special_1969.JPG'>Dionne Warwick: CBS Television via Wikimedia Commons</a>"
      },
      "start_date": {
        "month": "8",
        "day": "9",
        "year": "1963"
      },
      "text": {
        "headline": "A Musical Heritage",
        "text": "<p>Born in New Jersey on August 9th, 1963, Houston grew up surrounded by the music business. Her mother is gospel singer Cissy Houston and her cousins are Dee Dee and Dionne Warwick.</p>"
      }
    },
    {
      "media": {
        "url": "https://youtu.be/fSrO91XO1Ck",
        "caption": "",
        "credit": "<a href=\"http://unidiscmusic.com\">Unidisc Music</a>"
      },
      "start_date": {
        "year": "1978"
      },
      "text": {
        "headline": "First Recording",
        "text": "At the age of 15 Houston was featured on Michael Zager's song, Life's a Party."
      }
    },
    {
      "media": {
        "url": "https://youtu.be/_gvJCCZzmro",
        "caption": "A young poised Whitney Houston in an interview with EbonyJet.",
        "credit": "EbonyJet"
      },
      "start_date": {
        "year": "1978"
      },
      "text": {
        "headline": "The Early Years",
        "text": "As a teen Houston's credits include background vocals for Jermaine Jackson, Lou Rawls and the Neville Brothers. She also sang on Chaka Khan's, 'I'm Every Woman,' a song which she later remade for the <i>Bodyguard</i> soundtrack which is the biggest selling soundtrack of all time. It sold over 42 million copies worldwide."
      }
    },
    {
      "media": {
        "url": "https://youtu.be/H7_sqdkaAfo",
        "caption": "I'm Every Women as performed by Whitney Houston.",
        "credit": "Arista Records"
      },
      "start_date": {
        "year": "1978"
      },
      "text": {
        "headline": "Early Album Credits",
        "text": "As a teen Houston's credits include background vocals for Jermaine Jackson, Lou Rawls and the Neville Brothers. She also sang on Chaka Khan's, 'I'm Every Woman,' a song which she later remade for the <i>Bodyguard</i> soundtrack which is the biggest selling soundtrack of all time. It sold over 42 million copies worldwide."
      }
    },
    {
      "media": {
        "url": "https://youtu.be/A4jGzNm2yPI",
        "caption": "Whitney Houston and Clive Davis discussing her discovery and her eponymous first album.",
        "credit": "Sony Music Entertainment"
      },
      "start_date": {
        "year": "1983"
      },
      "text": {
        "headline": "Signed",
        "text": "Houston is signed to Arista Records after exec Clive Davis sees her performing on stage with her mother in New York."
      }
    },
    {
      "media": {
        "url": "https://youtu.be/m3-hY-hlhBg",
        "caption": "The 'How Will I Know' video showcases the youthful energy that boosted Houston to stardom.",
        "credit": "Arista Records Inc."
      },
      "start_date": {
        "year": "1985"
      },
      "text": {
        "headline": "Debut",
        "text": "Whitney Houston's self titled first release sold over 12 million copies in the U.S. and included the hit singles 'How Will I Know,' 'You Give Good Love,' 'Saving All My Love For You' and 'Greatest Love of All.'"
      }
    },
    {
      "media": {
        "url": "https://youtu.be/v0XuiMX1XHg",
        "caption": "Dionne Warwick gleefully announces cousin, Whitney Houston, the winner of the Best Female Pop Vocal Performance for the song Saving All My Love.",
        "credit": "<a href='http://grammy.org'>The Recording Academy</a>"
      },
      "start_date": {
        "year": "1986"
      },
      "text": {
        "headline": "'The Grammys'",
        "text": "In 1986 Houston won her first Grammy for the song Saving All My Love. In total she has won six Grammys, the last of which she won in 1999 for It's Not Right But It's Okay."
      }
    },
    {
      "media": {
        "url": "https://youtu.be/eH3giaIzONA",
        "caption": "I Wanna Dance With Somebody",
        "credit": "Arista Records Inc."
      },
      "start_date": {
        "year": "1987"
      },
      "text": {
        "headline": "'Whitney'",
        "text": "Multiplatinum second album sells more than 20 million copies worldwide. With 'Whitney', Houston became the first female artist to produce four number 1 singles on one album including \"I Wanna Dance With Somebody,' 'Didn't We Almost Have It All,' 'So Emotional' and 'Where Do Broken Hearts Go.'"
      }
    },
    {
      "media": {
        "url": "https://youtu.be/96aAx0kxVSA",
        "caption": "\"One Moment In Time\" - Theme song to the 1988 Seoul Olympics",
        "credit": "Arista Records Inc."
      },
      "start_date": {
        "year": "1988"
      },
      "text": {
        "headline": "\"One Moment In Time\"",
        "text": "The artist's fame continues to skyrocket as she records the theme song for the Seoul Olympics, 'One Moment In Time.'"
      }
    },
    {
      "media": {
        "url": "",
        "caption": "",
        "credit": ""
      },
      "start_date": {
        "year": "1989"
      },
      "text": {
        "headline": "Bobby Brown",
        "text": "Houston and Brown first meet at the Soul Train Music Awards. In an interview with Rolling Stone Magazine, Houston admitted that it was not love at first sight. She turned down Brown's first marriage proposal but eventually fell in love with him."
      }
    },
    {
      "media": {
        "url": "https://youtu.be/5Fa09teeaqs",
        "caption": "CNN looks back at Houston's iconic performance of the national anthem at Superbowl XXV.",
        "credit": "CNN"
      },
      "start_date": {
        "year": "1991"
      },
      "text": {
        "headline": "Super Bowl",
        "text": "Houston's national anthem performance captures the hearts and minds of Americans ralllying behind soldiers in the Persian Guf War."
      }
    },
    {
      "media": {
        "url": "https://youtu.be/h9rCobRl-ng",
        "caption": "\"Run To You\" from the 1992 \"Bodyguard\" soundtrack..",
        "credit": "Arista Records"
      },
      "start_date": {
        "year": "1992"
      },
      "text": {
        "headline": "\"The Bodyguard\"",
        "text": "Houston starred opposite Kevin Costner in the box office hit, The Bodyguard. The soundtrack to the movie sold over 44 million copies worldwide  garnering 3 Grammy's for the artist."
      }
    },
    {
      "media": {
        "url": "https://youtu.be/5cDLZqe735k",
        "caption": "Bobby Brown performing \"My Prerogrative,\" from his \"Don't be Cruel\" solo album. Bobby Brown first became famous with the R&B group, New Edition.",
        "credit": ""
      },
      "start_date": {
        "year": "1992"
      },
      "text": {
        "headline": "Married Life",
        "text": "<p>After three years of courtship, Houston marries New Edition singer Bobby Brown. Their only child Bobbi Kristina Brown was born in 1993.</p><p>In 2003 Brown was charged with domestic violence after police responded to a domestic violence call. Houston and Brown were featured in the reality show, \"Being bobby Brown,\" and divorced in 2007.</p>"
      }
    },
    {
      "media": {
        "url": "//upload.wikimedia.org/wikipedia/commons/d/dd/ABC_-_Good_Morning_America_-_Diane_Sawyer.jpg",
        "caption": "Diane Sawyer ",
        "credit": "flickr/<a href='http://www.flickr.com/photos/23843757@N00/194521206/'>Amanda Benham</a>"
      },
      "start_date": {
        "year": "2002"
      },
      "text": {
        "headline": "Crack is Whack",
        "text": "<p>Houston first publicly admitted to drug use in an interview with Diane Sawyer. The singer coined the term \"Crack is Whack,\" saying that she only used more expensive drugs.</p>"
      }
    },
    {
      "media": {
        "url": "https://youtu.be/KLk6mt8FMR0",
        "caption": "Addiction expert, Dr. Drew, talks about Whitney's death and her struggle with addiction.",
        "credit": "CNN"
      },
      "start_date": {
        "year": "2004"
      },
      "text": {
        "headline": "Rehab",
        "text": "<p>Houston entered rehab several times beginning in 2004. She declared herself drug free in an interview with Oprah Winfrey in 2009 but returned to rehab in 2011.</p>"
      }
    },
    {
      "media": {
        "url": "",
        "caption": "",
        "credit": ""
      },
      "start_date": {
        "year": "2005"
      },
      "text": {
        "headline": "Being Bobby Brown",
        "text": "<p>Being Bobby Brown was a reality show starring Brown and wife Whitney Houston. Houston refused to sign for a second season. A clip of her telling Brown to \"Kiss my ass,\" became a running gag on The Soup.</p>"
      }
    },
    {
      "media": {
        "url": "",
        "caption": "",
        "credit": ""
      },
      "start_date": {
        "year": "2010"
      },
      "text": {
        "headline": "A Rocky Comeback",
        "text": "<p>Houston's comeback tour is cut short due to a diminished voice damaged by years of smoking. She was reportedly devastated at her inability to perform like her old self.</p>"
      }
    },
    {
      "media": {
        "url": "//twitter.com/Blavity/status/851872780949889024",
        "caption": "Houston, performing on Good Morning America in 2009.",
        "credit": "<a href='http://commons.wikimedia.org/wiki/File%3AFlickr_Whitney_Houston_performing_on_GMA_2009_4.jpg'>Asterio Tecson</a> via Wikimedia"
      },
      "start_date": {
        "month": "2",
        "day": "11",
        "year": "2012"
      },
      "text": {
        "headline": "Whitney Houston<br/> 1963-2012",
        "text": "<p>Houston, 48, was discovered dead at the Beverly Hilton Hotel on  on Feb. 11, 2012. She is survived by her daughter, Bobbi Kristina Brown, and mother, Cissy Houston.</p>"
      }
    }
  ]
};
// end contoh

// two arguments: the id of the Timeline container (no '#')
// and the JSON object or an instance of TL.TimelineConfig created from
// a suitable JSON object
window.timeline = new TL.Timeline('timeline-embed'
  //, timeline_json
  , sample_json
);