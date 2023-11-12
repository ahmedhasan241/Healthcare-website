const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  autoplay: {
    enabled: true,
    delay: 5000,
  },

  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    370: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    670: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

const dropdown = document.querySelector(".drop-down");

const list = document.querySelector(".list");

const selectedImg = document.querySelector(".selectedImg");

dropdown.addEventListener("click", () => {
  list.classList.toggle("show");
});

list.addEventListener("click", (e) => {
  const img = e.target.querySelector("img");
  selectedImg.src = img.src;
});

const dropdownMobile = document.querySelector(".drop-down-mobile");

const listMobile = document.querySelector(".list-mobile");

const selectedImgMobile = document.querySelector(".selectedImg-mobile");

dropdownMobile.addEventListener("click", () => {
  listMobile.classList.toggle("show");
});

listMobile.addEventListener("click", (e) => {
  const img = e.target.querySelector("img");
  selectedImgMobile.src = img.src;
});

const card = document.querySelector(".video-contain");
const video = card.querySelector(".video-slide");

card.addEventListener("mouseenter", () => {
  video.play();
});

card.addEventListener("mouseleave", () => {
  video.pause();
});

function openNav(buttonText) {
  document.getElementById("mySide-nav").classList.add("show-nav");
  const canvas = document.getElementById("myCanvas");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  // Change innerHTML based on the clicked button
  if (buttonText === "Button 1") {
    canvas.innerHTML =
      "<span><h2>Dr. Firas Hamdan</h2><p>Specialist Face & Neck Cosmetic Surgery</p></span><h4>About Dr. Highness</h4><p>Dr. Highness, began his medical journey at the American University of Beirut where he completed a Bachelor Degree (B.Sc.) in Biology as well as earned his Medical Degree (M.D.) in 1991. After graduation, Dr. Hamdan completed two years of internship and residency in General Surgery at Washington Hospital Center, a George Town University Center.</p><p>During that time he gained extensive experience in Trauma, Burn, and critically ill and Heart patients, as part of Med S.T.A.R. and Washington Heart where the Fellows of George Washington University, Walter Reed Medical Center, and Bethesda Naval Medical Center train.</p><p>He completed his residency in <b>otolaryngology-head and neck surgery</b> , including a full year dedicated to <b>facial plastic surgery</b>at the University of Tennessee- Health Science Center, and the Elvis Presley Traumas Center. Subsequently, he gained acceptance from colleagues and professors where they encouraged him due to his passion and commitment to continue and broaden his speciality to include body plastic surgery therefore he completed a fellowship in <b>Full Body Cosmetic and Plastic Surgery</b> at the University of Florida finishing up four more year dedicated to the art of cosmetic surgery, while serving as courtesy clinical assistant professor.</p><p>In 1997, Dr. Hamdan started his private practice serving Florida’s Capital city, Tallahassee, and the north Florida market before moving to the Middle East in November 2006 to share his expertise with the increasing demand for quality physicians in the field of Cosmetic Surgery. At the present time, Firas Hamdan, M.D., with offices in Beirut, Dubai, Kuwait ,Riyadh and Florida, is a plastic surgeon dedicated in giving the best natural results possible you need.<p>Dr. Hamdan continues to share his knowledge and expertise through his teaching positions in the region. Affiliations include:</p></p><p>American Academy of Cosmetic Surgery.</p><p>American Academy of Facial Plastic and Reconstructive Surgery.</p><p>American College of Surgeons.</p><p>American Medical Association.</p><p>American Academy of Otolaryngology-Head & Neck Surgery.</p><br/><p>Since his move back to Lebanon, Dr.Firas Hamdan, continued advancing his skills on the national, Regional and International levels. His most updated affiliations are:</p> <br/><strong>• Member, LSPRAS (Lebanese Society of Plastic Reconstructive and Aesthetic Surgery), 2006</strong><strong>• Member, Lebanese Order of Physicians, LOP, 2000</strong><strong>• Member of ESAPAS (European Association of Societies of Aesthetic Plastic Surgery), 2010</strong><strong>• Member of ISAPS, (International Society of Aesthetic Plastic Surgery, 2010</strong><strong>• Associate, LVRIA (Laser Vaginal Rejuvenation Institute of America), 2009</strong><strong>• Vaser Hi-Def , ABS Institute of America , 2011</strong><strong>• Vaser 4D Sculpt and Vaser Smooth, ABS Institute of America 2012 Board Certifications:</strong><strong>• International Division Of American Board of Cosmetic Surgery, July 2014 Board certified General Cosmetic Surgeon</strong><strong>• World Board of Cosmetic Surgery, July 2011 Board certified General Cosmetic Surgeon</strong><strong>• American Board of Otolaryngology, April 1998 Board certified in Otolaryngology, including Facial Plastic Surgery Leadership and Clinical Positions:</strong><strong>• Founding Member, Board of Governors, ID of ABCS, 2014-Present Vice President: 2014 -Present International Division of American Board of Cosmetic Surgery, July 2014</strong><strong>• Board of Trustees; Member, AACS: January 2013 American Academy of Cosmetic Surgery Chicago, USA</strong><strong>• Executive Committee, Member, LSPRAS: March 2013 Lebanese Society of Plastic Reconstructive and Aesthetic Surgery. Beirut, Lebanon</strong> <strong>• Chief Plastic Surgery, February 2011- 2013 Medica Dermatology and Plastic Surgery Riyadh, KSA</strong><strong>• Founding Member, Board of Governors, 2010-Present Treasurer: 2014 -Present World Academy of Cosmetic Surgery Bern, Switzerland</strong><strong>• Chief Surgical Director, 2008 -2010 American Academy of Cosmetic Surgery Hospital Dubai Health Care City, Dubai, UAE</strong><strong>• President & CEO: 2006-Present Cosmetic Surgery Clinic Advanced Body Sculpture, Wellness and Beauty Center</strong><br/><strong>• Member, Lebanese Order of Physicians, LOP, 2000</strong><strong>• Member of ESAPAS (European Association of Societies of Aesthetic Plastic Surgery), 2010</strong><strong>• Member of ISAPS, (International Society of Aesthetic Plastic Surgery, 2010</strong><strong>• Associate, LVRIA (Laser Vaginal Rejuvenation Institute of America), 2009</strong><strong>• Vaser Hi-Def , ABS Institute of America , 2011</strong><strong>• Vaser 4D Sculpt and Vaser Smooth, ABS Institute of America 2012 Board Certifications:</strong><strong>• International Division Of American Board of Cosmetic Surgery, July 2014 Board certified General Cosmetic Surgeon</strong><strong>• World Board of Cosmetic Surgery, July 2011 Board certified General Cosmetic Surgeon</strong><strong>• American Board of Otolaryngology, April 1998 Board certified in Otolaryngology, including Facial Plastic Surgery Leadership and Clinical Positions:</strong><strong>• Founding Member, Board of Governors, ID of ABCS, 2014-Present Vice President: 2014 -Present International Division of American Board of Cosmetic Surgery, July 2014</strong><strong>• Board of Trustees; Member, AACS: January 2013 American Academy of Cosmetic Surgery Chicago, USA</strong><strong>• Executive Committee, Member, LSPRAS: March 2013 Lebanese Society of Plastic Reconstructive and Aesthetic Surgery. Beirut, Lebanon</strong><strong>• Chief Plastic Surgery, February 2011- 2013 Medica Dermatology and Plastic Surgery Riyadh, KSA</strong><strong>• Founding Member, Board of Governors, 2010-Present Treasurer: 2014 -Present World Academy of Cosmetic Surgery Bern, Switzerland</strong><strong>• Chief Surgical Director, 2008 -2010 American Academy of Cosmetic Surgery Hospital Dubai Health Care City, Dubai, UAE</strong><strong>• President & CEO: 2006-Present Cosmetic Surgery Clinic Advanced Body Sculpture, Wellness and Beauty Centre</strong>";
  } else if (buttonText === "Button 2") {
    canvas.innerHTML =
      "<span><h2>Dr. Nathalie Domloj</h2><p>Dermatologist</p></span><p>Dr. Nathalie Domloj, Lebanese, with over 15 years of experience in the Aesthetic Dermatology field, fellow of the American Academy of Anti-Aging and Aesthetic Medicine- USA (2013), renowned certified Advanced Trainer for face and body Threads, and for face and body Fillers, winner of Best Skin Therapist, South Africa (2017).</p><br><p>Dr. Domloj has completed extensive post-graduate training; becoming a Fellow of the AAAM-USA, and has received a Diploma in Specialized Laser Therapy and Skin Care form the AcadÃ©mie Esthetique.She has special experience in all different ranges of Aesthetic treatments including procedures like Botox, Fillers for face and body, Non-surgical face and body lifting and contouring, Lifting of face and body with threads, all types of Laser procedures ,all types of facial treatments , CO2 and Erbium Lasers, Q-switched Lasers, Ultrasound Face& Body lasers, Plasmage, RF, Platelet-Rich Plasma treatments, Youth Injections, Vaginal Tightening, all kinds of Mesotherapy and skin treatments, cryo/electrocauthery, post-delivery treatments for women and pre-bridal preparation.</p><p>She worked in Dubai before joining Yugen Clinic in June 2022.Dr. Nathalie Domloj’s specialty is in Advanced Anti-Aging and Aesthetic treatments and currently works as a full-time Doctor.</p>";
  } else if (buttonText === "Button 3") {
    canvas.innerHTML =
      "<span><h2>Dr. Roy Moutran</h2><p>Dermatologist</p></span><p>After a brief stay at the Ospedale Pediatrico Bambino Gesù, Rome, where he served as a part of the Pediatric Dermatology Department, Dr. Moutran moved to France in 2010 to fill the same position in Saint Louis Hospital, Paris. In 2011 he returned to Lebanon and acted as Chief Resident of Dermatology at hospital Hôtel-Dieu de France</p><br><p>After acquiring his degree in 2006 as a Doctor of Medicine, Dr. Roy Moutran continued his education and received Degrees of Specialty in Internal Medicine in 2009 and in Dermatology in 2011 from the Saint Joseph University in Beirut. He subsequently traveled to France where he succeeded in getting a Diploma in Pediatric Dermatology from Université de Montpellier in 2013.</p><br><p>Throughout the years, Dr. Roy Moutran has produced remarkable work in the medical field. He presented many oral communications and posters and more than 40 publications which discuss various topics and studies in Dermatology and internal medicine.</p>";
  } else if (buttonText === "Button 4") {
    canvas.innerHTML =
      "<span><h2>Dr. Niveen Hussein</h2><p>Consultant of Obstetrics and Gynecology</p></span><p>Welcome to Dr. Niven Hussien's dedicated space for Cosmetic Gynecology. Dr. Hussien specializes in enhancing both the aesthetics and functionality of the female genitalia, offering a range of procedures to boost self-esteem, comfort, and sexual well-being. Explore our services and discover the transformative possibilities of Cosmetic Gynecology.</p><br><p>Cosmetic gynecology encompasses a variety of treatments and procedures aimed at enhancing the appearance and function of the female genitalia. Some common treatments in this field include:</p><br><p>1. Labiaplasty: The surgical reduction or reshaping of the labia minora to improve aesthetics and reduce discomfort.</p><br><p>2. Vaginoplasty: A procedure to tighten the vaginal muscles and tissues, often addressing issues like vaginal laxity.</p><br><p>3. Clitoral Hood Reduction: Surgical alteration of the clitoral hood to enhance sensitivity and aesthetics.</p><br><p>4. G-Spot Amplification: A procedure to potentially enhance sexual pleasure by injecting hyaluronic acid into the G-spot area.</p><br><p>6. Perineoplasty: Repair and rejuvenation of the perineal area.</p><br><p>8. Vaginal Fillers: The use of dermal fillers to enhance and rejuvenate the vaginal area.</p><br><p>9. O-Shot: A non-surgical procedure that uses platelet-rich plasma (PRP) to enhance sexual function and pleasure.</p><br><p>10. G-Shot: A procedure that involves injecting hyaluronic acid into the G-spot to potentially enhance sexual sensation.</p><br><p>These procedures are typically tailored to the specific needs and goals of the patient. It's important to consult with a qualified cosmetic gynecologist like Dr. Niven Hussien to discuss the most appropriate options for individual concerns.</p>";
  } else if (buttonText === "Button 5") {
    canvas.innerHTML =
      " <span><h2>Dr. William Watfa</h2><p>Plastic & Reconstructive Surgeon</p></span><p>Following his graduation with an MD, Dr. Watfa pursued his passionate specialty in Plastic and Reconstructive Surgery. In addition to his affiliation with the  Lebanese Order of Physicians and the Lebanese Society of Plastic, Reconstructive, & Aesthetic Surgery, Dr. Watfa is a member of the General Medical Council with the rights to practice in the United Kingdom where he initiated his training in the field. He is also a Fellow of the European Board of Plastic, Reconstructive and Aesthetic Surgery (EBOPRAS), and a holder of the Swiss Senology Diploma.</p><br><p>He started postgraduate training in plastic surgery in the division of Plastic and Reconstructive Surgery at St George University Medical Center, Beirut and completed his training at the renowned Centre Hospitalier Universitaire Vaudois (CHUV)- in Lausanne, Switzerland, where he was appointed “Chef de Clinique”. During his 3 years of practice at Lausanne University Hospital, he underwent a fellowship in Microsurgery and breast reconstruction. He also benefited from a high load practice in burns and transgender surgery.</p><br><p>Dr. Watfa’s fellowship training at the prestigious Centre Hospitalier Universtaire Vaudois (CHUV) in Lausanne, Switzerland, was enriched by the work pursued with the legendary Professor Wassim Raffoul in his capacity as Chairman of the Department of Plastic and Reconstructive Surgery, and a leader in hand surgery and the treatment of burns.</p><br><p>Dr. Watfa has also added to his experience in aesthetic surgery during his Aesthetic Surgery Fellowship training at the renowned LaClinic-Montreux in Switzerland headed by the famous Dr. Michel Pfulg who is rated among the world’s five top aesthetic surgeons.</p><br><p>Soon after his last assignment as Chef de Clinique in Plastic and Hand Surgery at CHUV in Lausanne, Dr. Watfa became determined to re-connect with his mother institution at St. George’s Hospital Faculty of Medicine in Beirut. The decision was inspired by his desire to contribute to the state of the art in plastic and reconstructive surgery in Lebanon and the Middle East. As an accredited Specialist in Aesthetic and Reconstructive Surgery, and cognizant of the distinctive challenges that surround the profession, Dr. Watfa’s practice will employ the latest breakthroughs and care about the surgical perfections.</p>";
  } else if (buttonText === "Button 6") {
    canvas.innerHTML =
      "<span><h2>Talal Alandejani</h2><div><p>MD, FRCSC.</p><p>Consultant Otolaryngology</p></div></span><p>Dr Talal is Canadian Board of Otolaryngology – Head and Neck Surgery certified. He is also a Fellow of the Royal College of Surgeons of Canada, Specialized in Facial plastic and Cosmetic Surgery Endoscopic Nose and Sinus Surgery</p><p>Most of his practice deals with complicated Rhinoplasty cases “Nose jobs”, especially patients who had previous unsuccessful surgery and those with breathing or other functional problems from their nose.Dr Talal focuses on fixing the functional anomalies of the nose first and secondly comes the cosmetic touches for a final resul</p>";
  } else if (buttonText === "Button 7") {
    canvas.innerHTML =
      "<span><h2>Dr. Miami</h2><p>Plastic Surgeon</p></span><p>Michael Salzhauer is an American celebrity doctor who practices plastic surgery. He is active on social media as Dr. Miami, has been on reality TV, has recorded a song, and written a children's book. He runs a plastic surgery practice in Bay Harbor Islands, Florida.</p>";
  } else if (buttonText === "Button 8") {
    canvas.innerHTML =
      "<span><h2>Dr. Paulo Michels</h2><p>Specialist Plastic Surgeon</p></span><p>Dr. Paulo Michels is one of the UAE’s leading plastic and aesthetic surgeons in Dubai and Abu Dhabi. His expertise lies in surgical and non-surgical body contouring and cosmetic breast procedures. Dr. Paulo’s enviable reputation among his patients in Dubai and Abu Dhabi comes from an undying commitment to deliver the highest standards for care and provide patients with safe and natural results. Dr Paulo practices from in Abu Dhabi and Dubai as well.</p>";
  }
}

function closeNav() {
  document.getElementById("mySide-nav").classList.remove("show-nav");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

function toggleMenu() {
  var menu = document.getElementById("menu");
  var burgerMenu = document.getElementById("burger-menu");
  var body = document.body;

  if (menu.style.right === "-300px") {
    menu.style.right = "0";
    burgerMenu.classList.add("open");
    body.style.overflow = "hidden";
  } else {
    menu.style.right = "-300px";

    burgerMenu.classList.remove("open");
    body.style.overflow = "auto";
  }
}

function showAesthetic() {
  var x = document.getElementById("dropdown-aesthetic");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function showMedia() {
  var x = document.getElementById("dropdown-media");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showAesthetic() {
  var x = document.getElementById("dropdown-aesthetic");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showContact() {
  var x = document.getElementById("dropdown-contact");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
