# My Prescription

MyPrescription predstavlja web aplikaciju za naručivanje lekova koja je zasnovana na mikroservisnoj arhitekturi.

# Funkcionalnosti

* Neregistrovani korisnik
  * Omoćene su mu funkcionalnosti poput pregleda i pretraživanja lekova ( bez mogućnosti ocenjivanja, naručivanja ili komentarisanja ). Imaće uvid u katalog lekova koji postoje, njihove ocene i komentare. Takođe imaju mogućnost registracije kao i prijave na sistem.
* Pacijent ( registrovani korisnik )
  * Nakon što se prijavio ( prethodi uspešna registracija ), omogućena mu je pretraga i pregled svakog leka pojedinačno. Neke od lekova nije moguće dobiti bez preskripcije, pa samim tim pacijent ima mogućnost uploadovanja recepta. Ukoliko je farmaceut odobrio recept, korisnik ima mogućnost naručivanja leka u količinama koje su mu odobrene. Nakon 24h ( simulacija dostave leka do apoteke ), pacijentu je omogućeno preuzimanje leka. Tek nakon završavanja ovog koraka, on može ostaviti komentar i oceniti lek. Proces naručivanja lekova koji ne zahtevaju recept je identičan, osim što izuzima korak uplodavoanja recepta.
* Farmaceut
  * Farmaceut ima CRUD privilegije nad entitetima u sistemu. Nema mogućnost ocenjivanja lekova. Pri pregledu preskripcije ( slika koju šalje pacijent ), ima mogućnost da istu odbije ili odobri. Ukoliko se preskripcija odbije, navodi se razlog odbijanja koji korisnik nakon toga može da vidi. Ukoliko se prihvati, zadaje se datum važenja kao i količina lekova koje je moguće kupiti koristeći istu.
* Administrator
  * Administrator ima CRUD privilegije nad Farmaceutima kao i ostalih entiteta u sistemu. Takođe, ukoliko Ulogovani korisnik ili Farmaceut prijave određeni komentar, Administrator ima mogućnost banovanja korisnika na određeni period.

# Arhitektura sistema

Mikroservisi ( moguće male izmene u toku implementacije )
Naziv Servisa  | Opis | Tehnologije
------------- | ------------- | -------------
User Service  | Servis za autentifikaciju i autorizaciju pacijenata | GO, PostgreSQL 
Drug Service  | Servis za upravljanje lekovima | GO, PostgreSQL
Review Service  | Servis za upravljanje ocenjivanjem lekova | Rust, PostgreSQL
Comment Service  | Servis za upravljanje komentarima | GO, PostgreSQL
Order Service  | Servis za naručivanje lekova | GO, PostgreSQL

Ostale komponente
Naziv Servisa  | Opis | Tehnologije
------------- | ------------- | -------------
API gateway  | API gateway za mikroservise | nginx
Klijentska aplikacija  | Komunikacija sa API gateway | Angular 

# Dopune za Diplomski rad
 * Sistem će podržavati rad više od jedne apoteke
 * Farmaceuti će biti vezani samo za apoteku u kojoj rade. Shodno tome će biti implementirane i takve funkcionalnosti.
 * Biće uvedena nova uloga - Menadžer. Imaće mogućnost da naručuje lekove, prihvata nabavku ( automatsko ažuriranje stanja leka u sistemu ), kao i da rukovodi Farmaceutima u određenoj apoteci ( dodaje nove/otpušta posojeće).
